import * as fs from "fs";
import starknet_wasm from "starknet-wasm";

const run = async () => {
  const fuck = starknet_wasm as any;
  const you = await fuck;

  const ozAccount = fs.readFileSync("./OZAccount.json").toString();

  for (let i = 0; i < 5; i++) {
    console.log(`Run #${i}`);

    const startTime = new Date().getTime();
    const classHash = you.compute_class_hash_rs(ozAccount);
    const endTime = new Date().getTime();

    console.log(classHash);
    console.log(`${endTime - startTime}ms`);
  }
};

run();
