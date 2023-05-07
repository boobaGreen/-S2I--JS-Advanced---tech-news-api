// GENERAL IMPORT PROJECT //

import axios, { isCancel, AxiosError } from "axios"; // import axios
import "../scss/main.scss"; // import scss for webpack

// SERVICE EXTERNAL SECTION //

import { API_500_IDO_OBJ, API_ONE_DET_OBJ } from "./costant"; // IMPORT MY COSTANT FOR API REQUEST
import { createUrl, convertTime } from "./myService";
const _ = require("lodash");

// INTERNAL COSTANT //

let actual_index = 0; // Index of last news detail download from API . Start at 0.

let news_per_page = 10; // Number of News per Page - Number of news visible at startup - Number "new" article when push LOAD MORE button-

let obj500 = {}; // Obj where i put the first API request where i have a Obj with an array inside with the id of 500 last news. The first in array ARRAY[0] is the latest new in TIME line and the ARRAY[500] was the old in TIME line.

// AXIOS MODE REQUEST //

function getApi500News() {
  return axios.get(API_500_IDO_OBJ); // RETURN a PROMISE -- Obj>Array[500] ID NEWS
}
function getApiOneDet(index) {
  return axios.get(createUrl(index, API_ONE_DET_OBJ)); // RETURN a PROMISE -- OBJ Detail One News ".data...."
}

// MAIN SECTION //

async function main_section() {
  obj500 = await getApi500News();

  console.log(obj500);
  let array500 = obj500.data; // prendo dell'oggetto solo i dati che mi interessano quindi l'array

  for (let i = 0; i < 500; i++) {
    let test_one = getApiOneDet(array500[i]);
    console.log(test_one);
  }
}
// START PROGRAM //

main_section();

// TEST SECTION //

/* test loadash -- passed --
const ver = _.VERSION;
console.log(ver); */

/* test IMPORT COSTANT -- passed --
console.log(API_500_IDO_OBJ);
console.log(API_ONE_DET_OBJ); */

/* test MY-SERVICE -- passed --
console.log(convertTime(1683417764));
console.log(createUrl(255566, API_ONE_DET_OBJ)); */
