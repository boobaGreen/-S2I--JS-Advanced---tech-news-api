import axios from "axios";
import "../scss/main.scss";

import { createUrl, convertTime } from "./myService";
import { createPageElement, createOneNewsEl } from "./elementService";
const _ = require("lodash");

let actual_index = 0;
let news_per_page = 10;
let obj500 = {};

function getApi500News() {
  return axios
    .get("https://hacker-news.firebaseio.com/v0/newstories.json")
    .then((response) => {
      console.log("Response:", response);
      return response.data;
    })
    .catch((error) => {
      console.error("Error:", error);
      throw error;
    });
}

function getApiOneDet(index) {
  return axios.get(
    createUrl(index, "https://hacker-news.firebaseio.com/v0/item/")
  );
}

async function createPage(array_id_news) {
  try {
    if (!array_id_news) {
      throw new Error("array_id_news is undefined");
    }

    const pageElement = createPageElement();

    for (let i = actual_index; i < actual_index + news_per_page; i++) {
      if (i >= array_id_news.length) {
        break;
      }

      let newsX = await getApiOneDet(array_id_news[i]);

      let titleActual = _.get(newsX, "data.title");
      let linkActual = _.get(newsX, "data.url");
      let epochTimeActual = _.get(newsX, "data.time");
      let authorActual = _.get(newsX, "data.by");

      let longhumanTimeActual = convertTime(epochTimeActual);
      let last5 = longhumanTimeActual.slice(-5);
      let humanTimeActual = last5;

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
  } catch (error) {
    console.error("Error in createPage:", error);
  }
}

async function mainSection() {
  try {
    obj500 = await getApi500News();
    console.log("obj500:", obj500);

    if (obj500) {
      createPage(obj500);
    } else {
      console.error("Error: Unable to retrieve data from obj500");
    }

    document.getElementById("header").addEventListener("click", reloadPage);

    function reloadPage() {
      location.reload();
    }

    document.getElementById("btn").addEventListener("click", function (event) {
      document.getElementById("btn").innerHTML = "LOADING";
      document.getElementById("btn").style.backgroundColor = "red";
      document.getElementById("btn").style.color = "orange";

      createPage(obj500);
    });
  } catch (error) {
    console.error("Error:", error);
  }
}

window.addEventListener("DOMContentLoaded", () => {
  document.getElementById("btn").style.backgroundColor = "red";
  document.getElementById("btn").style.color = "orange";
  mainSection();
});
