import { throttle } from "lodash-es";
import dgram from "node:dgram";
import { EventEmitter } from "events";
import { COMMANDS, HOST, PORT } from "./consts/index";

const parseState = (state: string) =>
  state.split(";").map((el) => el.split(":"));

const drone = dgram.createSocket("udp4");
const droneState = dgram.createSocket("udp4");
drone.bind(PORT.commands);
droneState.bind(PORT.state);

const initiateDrone = () => {
  drone.send(
    COMMANDS.initSDKmode,
    0,
    COMMANDS.initSDKmode.length,
    PORT.commands,
    HOST,
    (err) => {
      if (!err) return;

      console.error(err);
    }
  );
};

initiateDrone();

droneState.on(
  "message",
  throttle((state) => {
    const parsedState = parseState(state.toString()).slice(0, -1);

    console.log(parsedState);
  }, 100)
);
