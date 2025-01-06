import { throttle } from "lodash-es";
import dgram from "node:dgram";
// import { EventEmitter } from "events";
import { COMMANDS, HOST, PORT } from "./consts/index";
import { TControlCommand } from "./types/index";

const parseState = (state: string) =>
  state.split(";").map((el) => el.split(":"));

const drone = dgram.createSocket("udp4");
const droneState = dgram.createSocket("udp4");
drone.bind(PORT.commands);
droneState.bind(PORT.state);

const errorHandler = (err: NodeJS.ErrnoException) => {
  if (!err) return;

  console.error("ERROR:", err);
};

const commands: TControlCommand[] = [
  "command",
  "takeoff",
  "right",
  "left",
  "forward",
  "back",
  "land",
];

const flyDrone = async () => {
  for (const command of commands) {
    drone.send(
      COMMANDS[command].droneSDKName,
      0,
      COMMANDS[command].droneSDKName.length,
      PORT.commands,
      HOST,
      errorHandler
    );

    console.log(
      "*** COMMAND --> ",
      COMMANDS[command].droneSDKName,
      COMMANDS[command].delay,
      " ***"
    );

    await new Promise((resolve) =>
      setTimeout(resolve, COMMANDS[command].delay)
    );
  }
};

flyDrone();

droneState.on(
  "message",
  throttle((state) => {
    const parsedState = parseState(state.toString()).slice(0, -1);

    // console.log(parsedState);
  }, 100)
);
