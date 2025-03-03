import { Device } from "@interfaces";

export const mockDeviceList: Device[] = [
    {
        id: "asdf-558b-4573-b7b2-test",
        name: "Device 1",
        type: "Display",
        battery: 15
    },
    {
        id: "500bd236-558b-asdf-b7b2-4cc9891d30b5",
        name: "Device 2",
        type: "Display",
        battery: 36
    }, {
        id: "test-558b-4573-b7b2-4cc9891d30b5",
        name: "Device 3",
        type: "Display",
        battery: 85
    }
]

export const mockDevice: Device = {
    id: "asdf-558b-4573-b7b2-test",
    name: "Device 1",
    type: "Display",
    battery: 15
}

export const mockDeviceShortList: Device[] = [{
    id: "asdf-558b-4573-b7b2-test",
    name: "Device 1",
},
{
    id: "500bd236-558b-asdf-b7b2-4cc9891d30b5",
    name: "Device 2",
}, {
    id: "test-558b-4573-b7b2-4cc9891d30b5",
    name: "Device 3",

}]
