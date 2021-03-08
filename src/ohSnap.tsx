import { createHash } from "crypto";
import React from "react";

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

export const apiStuff = (): any => {
  //for ( offset = 0; offset > 1500; offset + 100) {
  //for (let index = 0; index < 2; index++) {
  pulling();
  //changeOffset(offset);
  //}
  //renderHeroes(charArray);
  // console.dir(renderHeroes(charArray));
  // return renderHeroes(charArray);
  //console.log(charArray);
  // const listItems = charArray.map((hero) => <li>{hero}</li>);
  // console.log(<ul>{listItems}</ul>);
  // return <ul>{listItems}</ul>;
  // const listItems = charArray.map((hero) => (
  //   <li key={hero.toString()}>{hero}</li>
  const hero = Object.keys(charArray);

  console.log({ hero });
  <div>
    listItems=
    {Object.keys(charArray).map((key) => (
      <li>{charArray[key]}</li>
    ))}
  </div>;
  return <ul>listItems</ul>;
};

function pulling() {
  let offset = 0;
  //offset = changeOffset(offset);
  fetch(theWholeUrl + offset).then((response) => {
    response.json().then(function (data) {
      const name = data.data.results.map((result: any) => {
        return {
          name: result.name,
          //          name: result.name.toString(),
        };
      });
      for (let index = 0; index <= 5; index++) {
        charArray[index + offset] = name[index];
      }
    });
  });

  //console.log(charArray);
  return charArray;
}
// function map<T, R>(arr: T[], iteratee: (item: T) => R): R[] {
//   const newArr = [];
//   for (let index = 0; index < arr.length; index++) {
//     let result = iteratee(arr[index]);
//     newArr.push(result);
//   }

//   return newArr;
// }
