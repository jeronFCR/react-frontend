import { setupServer } from "msw/node";
import { http, HttpResponse } from "msw";

export const baseServerRoom = setupServer(
  http.get(`${import.meta.env.VITE_API_URL}/rooms`, () => {
    return HttpResponse.json([{ id: "1", name: "Room 1" }]);
  }),
  http.get(`${import.meta.env.VITE_API_URL}/rooms/:id`, ({ params }) => {
    const { id } = params;

    if (id === "101") return HttpResponse.json({}, { status: 404 });

    return HttpResponse.json({ id, name: `Room ${id}` });
  }),
  http.post(`${import.meta.env.VITE_API_URL}/rooms/:id/book`, ({ params }) => {
    const { id } = params;

    if (id === "22") return HttpResponse.json({}, { status: 400 });

    return HttpResponse.json({}, { status: 200 });
  }),
  http.post(
    `${import.meta.env.VITE_API_URL}/rooms/:id/release`,
    ({ params }) => {
      const { id } = params;

      if (id === "22") return HttpResponse.json({}, { status: 400 });

      return HttpResponse.json({}, { status: 200 });
    }
  )
);

export const baseServerDevice = setupServer(
  http.get(`${import.meta.env.VITE_API_URL}/devices/:id`, ({ params }) => {
    const { id } = params;
    return HttpResponse.json({ id, name: `Device ${id}` });
  })
);
