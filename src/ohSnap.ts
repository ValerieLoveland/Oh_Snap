import { createHash } from "crypto";

const publicKey = "c59a9bcdefed7f5497e2c760f34d3e51";
const privateKey = "c26af5028b0ae7c8652944035c8da41712f8e0b3";

var ts = new Date().getTime();
var charArray = [""];

const contents = ts + privateKey + publicKey;

var hash = createHash("md5").update(contents).digest("hex");

export const apiStuff = () => {
  //for ( offset = 0; offset > 1500; offset + 100) {
  let offset = 0;
  let theWholeUrl =
    "http://gateway.marvel.com/v1/public/characters?ts=" +
    ts +
    "&apikey=c59a9bcdefed7f5497e2c760f34d3e51&hash=" +
    hash +
    "&limit=100&offset=" +
    offset;
  fetch(theWholeUrl).then((response) => {
    response.json().then(function (data) {
      //console.log(data.data);
      //console.log(data.data.results[index].name);
      for (let index = 0; index <= 100; index++) {
        //offset = 100;
        charArray[index] = data.data.results[index].name;
        //console.log(charArray[index + offset]);
      }
    });
  });
  //console.log(offset);
  //console.dir(charArray);
  /////////////////////this is the next one 100-199
  offset = 100;
  theWholeUrl =
    "http://gateway.marvel.com/v1/public/characters?ts=" +
    ts +
    "&apikey=c59a9bcdefed7f5497e2c760f34d3e51&hash=" +
    hash +
    "&limit=100&offset=" +
    offset;
  fetch(theWholeUrl).then((response) => {
    response.json().then(function (data) {
      //console.log(data.data);
      //console.log(data.data.results[index].name);
      for (let index = 0; index <= 100; index++) {
        //offset = 100;
        charArray[index + 100] = data.data.results[index].name;
        //console.log(charArray[index + offset]);
      }
    });
  });
  //console.log(offset);
  //console.dir(charArray);

  /////////////////////this is the next one 200-299
  offset = 200;
  theWholeUrl =
    "http://gateway.marvel.com/v1/public/characters?ts=" +
    ts +
    "&apikey=c59a9bcdefed7f5497e2c760f34d3e51&hash=" +
    hash +
    "&limit=100&offset=" +
    offset;
  fetch(theWholeUrl).then((response) => {
    response.json().then(function (data) {
      //console.log(data.data);
      //console.log(data.data.results[index].name);
      for (let index = 0; index <= 100; index++) {
        //offset = 100;
        charArray[index + offset] = data.data.results[index].name;
        //console.log(charArray[index + offset]);
      }
    });
  });
  console.log(offset);
  console.dir(charArray);
};

//  console.log(charArray[index]);
//return charArray;
//};
