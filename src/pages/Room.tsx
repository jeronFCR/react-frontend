import { lazy, Suspense, useEffect, useReducer, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { toast } from "sonner";

import { useDevice, useRoom, useBookRoom, useReleaseRoom } from "@services";
import { Device } from "@interfaces";
import { roomReducer, initialState } from "@reducers/roomReducer";

import { Card, Loading } from "@components/ui";
import RoomDetail from "@components/room/RoomDetail";

const DeviceDetail = lazy(() => import("@components/devices/DeviceDetail"));

export default function Room() {
  const { roomId } = useParams();
  const navigate = useNavigate();
  const { data: room, isLoading: isLoadingRoom, refetch } = useRoom(roomId);

  const [selectedDeviceId, setSelectedDeviceId] = useState<string>("");
  const { data: device, isLoading: isLoadingDevice } =
    useDevice(selectedDeviceId);

  const [, dispatch] = useReducer(roomReducer, initialState);

  const bookRoomMutation = useBookRoom(roomId);
  const releaseRoomMutation = useReleaseRoom(roomId);

  useEffect(() => {
    if (!room && !isLoadingRoom) navigate("/not-found");
  }, [room, isLoadingRoom, navigate]);

  const handleRoomAction = (actionType: "BOOK" | "RELEASE") => {
    const mutation =
      actionType === "BOOK" ? bookRoomMutation : releaseRoomMutation;

    mutation.mutate(undefined, {
      onSuccess: (data) => {
        dispatch({
          type:
            actionType === "BOOK"
              ? "BOOK_ROOM_SUCCESS"
              : "RELEASE_ROOM_SUCCESS",
          payload: data.message,
        });
        toast.success(data.message);
      },
      onError: (error) => {
        dispatch({ type: "ERROR", payload: error.message });
        toast.error(error.message);
      },
      onSettled: refetch,
    });
  };

  return (
    <motion.div
      className="relative flex gap-4"
      animate={{ x: selectedDeviceId ? -200 : 0 }}
      transition={{ type: "spring", stiffness: 200, duration: 10000 }}
    >
      <RoomDetail
        room={room}
        loading={isLoadingRoom}
        selectDevice={(device: Device) => setSelectedDeviceId(device.id)}
        handleRoomAction={handleRoomAction}
      />

      {selectedDeviceId && (
        <Suspense
          fallback={
            <Card className="size-40 flex items-center">
              <Loading />
            </Card>
          }
        >
          {device && !isLoadingDevice ? (
            <DeviceDetail
              device={device}
              backFn={() => setSelectedDeviceId("")}
            />
          ) : (
            <Card className="size-40 flex items-center">
              <Loading />
            </Card>
          )}
        </Suspense>
      )}
    </motion.div>
  );
}
