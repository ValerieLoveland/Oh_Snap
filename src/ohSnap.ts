import { createHash } from "crypto";

const publicKey = "c59a9bcdefed7f5497e2c760f34d3e51";
const privateKey = "c26af5028b0ae7c8652944035c8da41712f8e0b3";

var ts = new Date().getTime();
var charArray = [""];

const contents = ts + privateKey + publicKey;

var hash = createHash("md5").update(contents).digest("hex");

let theWholeUrl =
  "http://gateway.marvel.com/v1/public/characters?ts=" +
  ts +
  "&apikey=c59a9bcdefed7f5497e2c760f34d3e51&hash=" +
  hash +
  "&limit=100&offset=";

export const apiStuff = () => {
  //for ( offset = 0; offset > 1500; offset + 100) {
  //for (let index = 0; index < 2; index++) {
  pulling();
  //changeOffset(offset);
  //}
  console.dir(charArray);
};

function pulling() {
  let offset = 0;
  //offset = changeOffset(offset);
  fetch(theWholeUrl + offset).then((response) => {
    response.json().then(function (data) {
      //console.log(offset);
      //offset = offset + 100;
      for (let index = 0; index <= 6; index++) {
        charArray[index + offset] = data.data.results[index].name;
        //console.log(charArray);
      }
    });
  });
}

// function changeOffset(offset:number): number {
//   offset=offset+100

//   return offset;
// }
