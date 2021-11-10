import { useState } from "react";
import classes from "./base64.module.css";

import { Buffer } from "buffer";

export default function Base64() {
  const [plainText, setPlainText] = useState("");
  const [encodedText, setEncodedText] = useState("");

  return (
    <>
      <h1>Base64 Encoding and Decoding</h1>
      <textarea 
        value={plainText}
        className="nes-textarea"
        placeholder="plain text"
        onChange={(e) => setPlainText(e.target.value)}
      ></textarea>
      <div className={classes.console}>
        <div className={classes.encodeblock}>
          <button
            type="button"
            className="nes-btn is-primary"
            onClick={() => encode(plainText)}
          >
            Encode
          </button>
          <h1>↓</h1>
        </div>
        <div className={classes.decodeblock}>
          <h1>↑</h1>
          <button
            type="button"
            className="nes-btn is-primary"
            onClick={() => decode(encodedText)}
          >
            Decode
          </button>
        </div>
      </div>
      <textarea
        value={encodedText}
        className="nes-textarea"
        placeholder="encoded text"
        onChange={(e) => setEncodedText(e.target.value)}
      ></textarea>
    </>
  );

  function encode(plainText: string) {
    setEncodedText(Buffer.from(plainText).toString("base64"));
  }

  function decode(encodedText: string) {
    setPlainText(Buffer.from(encodedText, "base64").toString());
  }
}
