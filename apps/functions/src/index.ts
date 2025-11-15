import { setGlobalOptions } from "firebase-functions/v2";
import { onRequest } from "firebase-functions/v2/https";

setGlobalOptions({ region: "europe-central2" });

export const hello = onRequest((req, res) => {
  console.log("📜 hello called");
  res.send("Hello from emulator!");
});
