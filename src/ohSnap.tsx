import { createHash } from "crypto";
import React from "react";

const publicKey = "c59a9bcdefed7f5497e2c760f34d3e51";
const privateKey = "c26af5028b0ae7c8652944035c8da41712f8e0b3";

const ts = new Date().getTime();

const contents = ts + privateKey + publicKey;

const hash = createHash("md5").update(contents).digest("hex");

let theWholeUrl =
  "http://gateway.marvel.com/v1/public/characters?ts=" +
  ts +
  "&apikey=c59a9bcdefed7f5497e2c760f34d3e51&hash=" +
  hash +
  "&limit=100&offset=";

export const fetchCharacters = (): Promise<string[]> =>
  new Promise((resolve, reject) => {
    fetch(theWholeUrl + 0)
      .then((response) => {
        let charArray = [""];

        response.json().then(function (data) {
          const charArray = data.data.results.map((result: any) => {
            return result.name;
          });

          resolve(charArray);
        });
      })
      .catch((e) => reject(e));
  });
