import React from "react";
import { ChevronLeft } from "lucide-react";
import { useTranslation } from "react-i18next";

import { Device } from "@interfaces";

import { AnimatedCard, DataDisplay } from "@components/ui";
import BatteryDisplay from "./BatteryDisplay";

interface DetailProps {
  device: Device;
  backFn: () => void;
}

const DeviceDetail: React.FC<DetailProps> = ({ device, backFn }) => {
  const [t] = useTranslation();

  return (
    <AnimatedCard
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ type: "spring", stiffness: 100 }}
      className="size-40"
    >
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold flex justify-center items-center gap-2">
          <ChevronLeft
            className="cursor-pointer"
            data-testid="device-detail-back-button"
            onClick={backFn}
          />
          <span data-testid="device-detail-name">{device.name}</span>
        </h2>

        <BatteryDisplay
          data-testid="device-detail-batery-icon"
          battery={device.battery || 0}
        />
      </div>

      <div className="mt-2 flex">
        <DataDisplay
          data-testid="device-detail-type"
          label={t("device.detail.type-label")}
        >
          {device.type}
        </DataDisplay>
        <DataDisplay
          data-testid="device-detail-battery-number"
          label={t("device.detail.battery-label")}
          className="flex-none gap-2"
        >
          <BatteryDisplay battery={device.battery || 0} showNumber />
        </DataDisplay>
      </div>
    </AnimatedCard>
  );
};

export default DeviceDetail;
