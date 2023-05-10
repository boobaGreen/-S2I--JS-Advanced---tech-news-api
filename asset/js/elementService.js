export function createPageElement() {
  const actualPageContainer = document.createElement("div");
  actualPageContainer.classList.add("actual-page");
  return actualPageContainer;
}

export function createOneNewsEl(
  newsTitle,
  newsLink,
  newsHumanTime,
  newsAuthor,
  PageEl
) {
  // DIV FOR 1 NEWS CREATE
  const oneNewsElement = document.createElement("div");
  oneNewsElement.classList.add("one-news-div");
  // DIV CONTAINER FOR DETAILS
  const detailTopBoxElement = document.createElement("div");
  detailTopBoxElement.classList.add("detail-div-top");

  // TIME SECTION
  const timeEl = document.createElement("p");
  timeEl.classList.add("news-time");
  timeEl.innerHTML = newsHumanTime;
  detailTopBoxElement.appendChild(timeEl);
  //APPEND FIRST BLOCK

  // AUTHOR
  const newsAuthEl = document.createElement("p");
  newsAuthEl.classList.add("news-author");
  newsAuthEl.innerHTML = "By : " + newsAuthor;
  detailTopBoxElement.appendChild(newsAuthEl);

  // SECTION FOR 1 NEWS TITLE-CREATE
  const oneNewsTitleContainer = document.createElement("div");
  oneNewsTitleContainer.classList.add("one-news-title-container"); // vedere se serve questa classe altrimenti toglierla

  const newsTitleEl = document.createElement("h1");
  newsTitleEl.classList.add("news-title"); // vedere se serve questa classe altrimenti toglierla
  newsTitleEl.innerHTML = newsTitle;

  oneNewsTitleContainer.appendChild(newsTitleEl);

  /////////////////////////////////////////////////////////////////////

  ////////////////////////////////////////////////////////////////////
  // SECTION FOR LINK

  const divLink = document.createElement("div");
  divLink.classList.add("div-link");
  const newsLinkEl = document.createElement("a");
  newsLinkEl.id = "url-value";
  newsLinkEl.href = newsLink;
  newsLinkEl.target = "blank";
  if (!newsLink) {
    const pNewsForNotLinked = document.createElement("p");
    pNewsForNotLinked.innerHTML = "No Link available";
    divLink.appendChild(pNewsForNotLinked);
  } else {
    newsLinkEl.innerHTML = "Source : LINK";
    divLink.appendChild(newsLinkEl);
  }

  // SECTION FOR AUTHOR

  /////////////////////////////////////////

  ////////////////////////////////
  oneNewsElement.appendChild(detailTopBoxElement);
  oneNewsElement.appendChild(oneNewsTitleContainer);
  oneNewsElement.appendChild(divLink);

  PageEl.appendChild(oneNewsElement);
}
