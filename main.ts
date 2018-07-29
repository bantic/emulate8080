import fs from "fs";
import Disassembler from "./disassembler";

async function main() {
  console.log("main is running");
  let rom: Buffer = await fs.readFileSync("./invaders.rom", { encoding: null });
  let da = new Disassembler();
  let res = await da.disassemble(rom);
  debugger;
}

main();
