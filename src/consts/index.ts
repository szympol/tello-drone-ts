import type { ICommands } from "../types/index";

export const COMMANDS: ICommands = {
  command: {
    droneSDKName: "command",
    type: "control",
    delay: 500,
  },
  takeoff: {
    droneSDKName: "takeoff",
    type: "control",
    delay: 5000,
  },
  land: {
    droneSDKName: "land",
    type: "control",
    delay: 5000,
  },
  streamon: {
    droneSDKName: "streamon",
    type: "control",
    delay: 0,
  },
  streamoff: {
    droneSDKName: "streamoff",
    type: "control",
    delay: 0,
  },
  emergency: {
    droneSDKName: "emergency",
    type: "control",
    delay: 0,
  },
  stop: {
    droneSDKName: "stop",
    type: "control",
    delay: 0,
  },
  up: {
    droneSDKName: "up",
    type: "control",
    delay: 7000,
    validation: {
      min: 20,
      max: 500,
    },
  },
  down: {
    droneSDKName: "down",
    type: "control",
    delay: 7000,
    validation: {
      min: 20,
      max: 500,
    },
  },
  left: {
    droneSDKName: "left",
    type: "control",
    delay: 5000,
    validation: {
      min: 20,
      max: 500,
    },
  },
  right: {
    droneSDKName: "right",
    type: "control",
    delay: 5000,
    validation: {
      min: 20,
      max: 500,
    },
  },
  forward: {
    droneSDKName: "forward",
    type: "control",
    delay: 5000,
    validation: {
      min: 20,
      max: 500,
    },
  },
  back: {
    droneSDKName: "back",
    type: "control",
    delay: 5000,
    validation: {
      min: 20,
      max: 500,
    },
  },
  cw: {
    droneSDKName: "cw",
    type: "control",
    delay: 5000,
    validation: {
      min: 1,
      max: 360,
    },
  },
  ccw: {
    droneSDKName: "ccw",
    type: "control",
    delay: 5000,
    validation: {
      min: 1,
      max: 360,
    },
  },
  flip: {
    droneSDKName: "flip",
    type: "control",
    delay: 3000,
    validation: {
      acceptedValue: ["l", "r", "f", "b"],
    },
  },
  ["speed?"]: {
    droneSDKName: "speed?",
    type: "read",
    delay: 500,
  },
  ["battery?"]: {
    droneSDKName: "battery?",
    type: "read",
    delay: 500,
  },
  ["time?"]: {
    droneSDKName: "time?",
    type: "read",
    delay: 500,
  },
  ["wifi?"]: {
    droneSDKName: "wifi?",
    type: "read",
    delay: 500,
  },
  ["sdk?"]: {
    droneSDKName: "sdk?",
    type: "read",
    delay: 500,
  },
  ["sn?"]: {
    droneSDKName: "sn?",
    type: "read",
    delay: 500,
  },
} as const;

export const PORT = {
  commands: 8889,
  state: 8890,
  stream: 11111,
} as const;

export const HOST = "192.168.10.1";
