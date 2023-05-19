// GENERAL IMPORT PROJECT //

import axios, { isCancel, AxiosError } from "axios"; // import axios
import "../scss/main.scss"; // import scss for webpack

// SERVICE EXTERNAL SECTION //

import { createUrl, convertTime } from "./myService";
import { createPageElement, createOneNewsEl } from "./elementService";
const _ = require("lodash");

// API KEY IMPORT FROM .ENV FOR ES6
const API_500_IDO_OBJ = process.env.API_500_IDO_OBJ;
const API_ONE_DET_OBJ = process.env.API_ONE_DET_OBJ;

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
    let newsX = await getApiOneDet(array_id_news[i]); // call to the second API for the details of each news

    let titleActual = _.get(newsX, "data.title");
    let linkActual = _.get(newsX, "data.url");
    let epochTimeActual = _.get(newsX, "data.time"); // epoch time to convert in Human format
    let authorActual = _.get(newsX, "data.by");

    let longhumanTimeActual = convertTime(epochTimeActual); // I call my external function to convert epoch time to human time
    let last5 = longhumanTimeActual.slice(-5);

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

async function mainSection() {
  obj500 = await getApi500News();

  //console.log(obj500);
  let array500 = obj500.data; // I take from the object only the data that interest me so the array

  createPage(array500);

  //refresh when click header

  document.getElementById("header").addEventListener("click", reloadPage);

  function reloadPage() {
    location.reload();
  }

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
  mainSection();
});
