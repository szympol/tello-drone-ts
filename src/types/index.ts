export type TControlCommand =
  | "command"
  | "takeoff"
  | "land"
  | "streamon"
  | "streamoff"
  | "emergency"
  | "stop"
  | "up"
  | "down"
  | "left"
  | "right"
  | "forward"
  | "back"
  | "cw"
  | "ccw"
  | "flip";

export type TReadCommand =
  | "speed?"
  | "battery?"
  | "time?"
  | "wifi?"
  | "sdk?"
  | "sn?";

export type TCommandType = "control" | "read";

interface ICommandConfig {
  type: TCommandType;
  delay: number;
  droneSDKName: TControlCommand | TReadCommand;
  validation?: {
    min?: number;
    max?: number;
    acceptedValue?: string[];
  };
}

export interface ICommands
  extends Record<TControlCommand | TReadCommand, ICommandConfig> {}
