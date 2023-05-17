// GENERAL IMPORT PROJECT //

import axios, { isCancel, AxiosError } from "axios"; // import axios
import "../scss/main.scss"; // import scss for webpack

// SERVICE EXTERNAL SECTION //

import { API_500_IDO_OBJ, API_ONE_DET_OBJ } from "./costant"; // IMPORT MY COSTANT FOR API REQUEST
// IMPORT OTHERS JS FILE PROJECT
import { createUrl, convertTime } from "./myService";
import { createPageElement, createOneNewsEl } from "./elementService";
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

async function createPage(array_id_news) {
  const pageElement = createPageElement();

  for (let i = actual_index; i < actual_index + news_per_page; i++) {
    let newsX = await getApiOneDet(array_id_news[i]); // chiamata alla seconda API per i dettagli di ogni news
    let titleActual = _.get(newsX, "data.title");
    let linkActual = _.get(newsX, "data.url");
    let epochTimeActual = _.get(newsX, "data.time"); // epoch time to convert in Human format
    let authorActual = _.get(newsX, "data.by");

    let longhumanTimeActual = convertTime(epochTimeActual); // richiamo mia funzione esterna per convertire epoch time in human time 12/05/2023 11:46
    let last5 = longhumanTimeActual.slice(-5);
    console.log(last5); // 11:46
    let humanTimeActual = last5;
    //
    createOneNewsEl(
      titleActual,
      linkActual,
      humanTimeActual,
      authorActual,
      pageElement
    );
  }
  const mainElement = document.getElementById("main");
  mainElement.appendChild(pageElement);
  document.getElementById("btn").innerHTML = "MORE";
  document.getElementById("btn").style.backgroundColor =
    "rgba(170, 255, 0, 0.661)";
  document.getElementById("btn").style.color = "rgba(170, 255, 0, 0.661)";
}

// MAIN SECTION //

async function main_section() {
  obj500 = await getApi500News();

  //console.log(obj500);
  let array500 = obj500.data; // prendo dell'oggetto solo i dati che mi interessano quindi l'array

  //console.log(array500);

  createPage(array500);

  /////////////////////////////////////////////////////////
  //refresh when click header

  document.getElementById("header").addEventListener("click", cl_Div);

  function cl_Div() {
    location.reload();
  }

  //////////////////////////////////////////////////////////
  //refresh when click header end
  document.getElementById("btn").addEventListener("click", function (event) {
    // funzione quando clicco il bottone load-more
    document.getElementById("btn").innerHTML = "LOADING";
    document.getElementById("btn").style.backgroundColor = "red";
    document.getElementById("btn").style.color = "orange";

    createPage(array500); // chiamo la funzione principale passandogli l'array gia' costruito in precedenza con la lista degli id delle news
  });
}
// START PROGRAM //

window.addEventListener("DOMContentLoaded", () => {
  //setGenPageLayout();
  document.getElementById("btn").style.backgroundColor = "red";
  document.getElementById("btn").style.color = "orange";
  main_section();
});

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
