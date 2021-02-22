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

export const apiStuff = (): string[] => {
  //for ( offset = 0; offset > 1500; offset + 100) {
  //for (let index = 0; index < 2; index++) {
  pulling();
  //changeOffset(offset);
  //}
  console.dir(charArray);
  return charArray;
};

function pulling() {
  let offset = 0;
  //offset = changeOffset(offset);
  fetch(theWholeUrl + offset).then((response) => {
    response.json().then(function (data) {
      //console.log(offset);
      //offset = offset + 100;
      for (let index = 0; index <= 5; index++) {
        charArray[index + offset] = data.data.results[index];
        //console.log(charArray);
      }
    });
  });
  return charArray;
}

// function heroList(charArray[]):string[] {
//   return charArray.map((herodudes) => <li>{herodudes}</li>);
// }

// const listItems = charArray.map((herodudes) => (

//     <li key={herodudes}>
//       <{herodudes} />
//     </li>
//     return <ul>{heroList}</ul>;

// ));
