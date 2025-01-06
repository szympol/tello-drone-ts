export const commandDelays = {
  command: 500,
  takeoff: 5000,
  land: 5000,
  up: 7000,
  down: 7000,
  left: 5000,
  go: 7000,
  right: 5000,
  forward: 5000,
  back: 5000,
  cw: 5000,
  ccw: 5000,
  flip: 3000,
  speed: 3000,
  "battery?": 500,
  "speed?": 500,
  "time?": 500,
} as const;

export const COMMANDS = {
  initSDKmode: "command",
} as const;

export const PORT = {
  commands: 8889,
  state: 8890,
  stream: 11111,
} as const;

export const HOST = "192.168.10.1";
