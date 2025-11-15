"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hello = void 0;
const v2_1 = require("firebase-functions/v2");
const https_1 = require("firebase-functions/v2/https");
(0, v2_1.setGlobalOptions)({ region: "europe-central2" });
exports.hello = (0, https_1.onRequest)((req, res) => {
    console.log("📜 hello called");
    res.send("Hello from emulator!");
});
