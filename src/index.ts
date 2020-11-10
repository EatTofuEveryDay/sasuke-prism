import { Application } from "./lib/app";

import { DiceCmd } from "./commands/dice";
import { LevelCmd } from "./commands/level";
import { IPCmd } from "./commands/ip";

import { ActivityBehavior } from "./behavior/activity";
import { UwUBanBehavior } from "./behavior/banuwu";
import { DronestrikeCmd } from "./commands/dronestrike";
import { PrefixCmd } from "./commands/prefix";
import { SudoCmd } from "./commands/sudo";
import { x86Cmd } from "./commands/x86";
import { VersionBehavior } from "./behavior/version";

async function main() {
  const app = new Application();
  await app.load();

  app.registerCommand(new DiceCmd());
  app.registerCommand(new LevelCmd());
  app.registerCommand(new IPCmd());
  app.registerCommand(new DronestrikeCmd());
  app.registerCommand(new PrefixCmd());
  app.registerCommand(new SudoCmd());
  app.registerCommand(new x86Cmd());

  app.addBehavior(new ActivityBehavior());
  app.addBehavior(new UwUBanBehavior());
  app.addBehavior(new VersionBehavior());

  await app.execute();
}

main();