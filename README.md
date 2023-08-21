# Hacker-News

## 🔗 Project Link :

[GITHUB-REPO](https://github.com/boobaGreen/tech-news-api)

[HACKER-NEWS-SITE](https://boobagreen.github.io/-S2I--JS-Advanced---tech-news-api/)

---

## Context :

Project realized for the [Start2Impact](https://www.start2impact.it/) "Javascript Advanced" course , by Claudio

---

## Requests :

At startup, the application will have to display the list of the latest news available by displaying the title, the link and the date of the news. He will then have to contact the API (as per the documentation) of the external Hacker News service to retrieve the list of latest news IDs. For each ID, the application will have to contact another API of the Hacker News service to obtain the information to be displayed such as the title, link and date of the news.

See here for example where 27933223 represents the ID present in the previous call to the service.

Note: the first API to get the list of the latest news (newstories), returns about 500 elements (see documentation). In order not to have performance problems, after having retrieved the list of the latest news, the application will have to show only the details (title, link and date) of the first 10 news. Through a button (Load more), the application will allow the user to go and view the information of the next 10 news.

Example:
At startup, the application calls https://hacker-news.firebaseio.com/v0/newstories.json, this returns a list of 500 ids:
27971502,
27971498,
27971497,
27971488,
….
Take only the first 10 ids, and for each of them go and retrieve the detail of the news and view it on the page:
https://hacker-news.firebaseio.com/v0/item/27971502.json
https://hacker-news.firebaseio.com/v0/item/27971498.json
….
If the user clicks on the "Load more" button, the application will have to take the next 10 ids from the list and make the API call for the detail.

---

## Screenshot :

![It shows the one page screenshot of the App. title at the top . Center with the core news section , where you can see the title of each news, the hour , the author and if available a lin kto the original source link.](https://i.postimg.cc/0yxt74CH/scr.png)

---

## Idea & Technical path :

I first tried to make everything work with a version with no particular graphical identity.
I first made small projects to manage LODASH and AXIOS independently, I wanted to understand how to manage libraries correctly, both with CDNs and installing them with NPM. I later implemented them in the general program. The list with the 500 news IDs is loaded when the page is loaded and kept in memory, it is reloaded and completely updated only when the page is refreshed from the browser or by pressing on the site title "HACKER-NEWS".
at this point I began to understand how to manage WEBPACK5 and I did several days of study on the subject because I had underestimated it, it is very interesting but its logic in the first instance left me with many doubts and perplexities, which is why I dedicated it to dedicated in-depth study days.
Up to this point I hadn't yet started managing API keys externally but simply using constants within the main JS code. I therefore decided to add the management of an ".env" file where to save the keys for the API calls which in this exercise case can be seen explained in the "README / Requests" section for educational purposes only, but are passed to the program via an .env file, which is also added as an exclude in ".gitignore"; in the BUILDING WEBPACK5 phase it manages the .env situation thanks to the "dotenv-webpack".
I managed to manage everything on GithubPage implemented a "deploy" branch where only the "DIST" folder is passed.

---

## General Management :

in this project the thing that took me the most effort was the correct and orderly management of the files, the management of the .env file and the management of webpack with the installation and correct management of the necessary plugins including the correct implementation in the webpack.config.js file with the various options needed to complete correctly and understand their meaning.

here are some images to summarize the management just mentioned:

![package.json](https://i.postimg.cc/kGSmRHyg/packagefoto.png)</br>

---

## Design and graphic :

once the project was made functional I wanted to give it a more appropriate graphic aspect.
The idea is to do something suitable for technology enthusiasts and I came up with the idea of ​​a retro style terminal, the application will be a single page obviously and I chose to make the header and footer sticky leaving it scrollable the central part with the news.
HP is inspired by several open source projects, then customizing them all with graphics that are consistent with each other and the project:

---

### Social :

[LogoSocialPart1](https://codepen.io/Stockin/pen/bzdNOq)

[LogoSocialPart2](https://freefrontend.com/css-social-media-icons/)

### Button :

[ButtonPart1](https://codepen.io/kocsten/pen/rggjXp)

[ButtonPart2](https://dev.to/webdeasy/top-20-css-buttons-animations-f41)

### Animation Title :

[AnimationTitle1](https://freefrontend.com/css-typing-text/)

[AnimationTitle2](https://codepen.io/brandonmcconnell/pen/bZqGdw)

the "MORE" button to load another 10 news items is green in idle status, while the data from the API is being downloaded, the button takes on orange shades and the writing becomes "LOADING".

---

## Previous Versions :

The design of the project has gone through many intermediate stages, one of the latest stages of progress is for example this: [Provisional version](https://boobagreen.github.io/tech-news-old/)
Screenshots OLD VERSION : ![It shows the one page screenshot of the App. title at the top . Center with the core news section , where you can see the title of each news, the hour , the author and if available a lin kto the original source link.](https://i.postimg.cc/YCqsJVmL/apioldfoto.png)</br>
i redoing the project a couple of times with the excuse of the design helped me to better understand and fix all the management of npm, webpack5,.env and the necessary external libraries.

---

## Various :

### Custom Sidebar :

for the creation of the side scroll bar customized in shape and color I noticed that there are some differences between the chromium base browser and firefox, so I had to manage it in 2 different ways and the result is also slightly different: while in chrome the result is as seen in the main screenshot, in firefox it looks like this:

![It shows the one page screenshot of the App in firefo browser , the side bar aspect is different from chromium base browser](https://i.postimg.cc/fRrB1bN1/firefoxscr.png)

### Link on tile news :

since it was made explicit by the requests for the exercise, I left a separate link (the green arrow) in each block of each piece of news, but I also made the title of each piece of news clickable to send back to the source of the news because it seemed very natural for any user.

---

## Build with :

<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="30" height="30"/>&nbsp;&nbsp;&nbsp; HTML5 </br>

<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="30" height="30"/>&nbsp;&nbsp;&nbsp; CSS </br>

<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="30" height="30"/>&nbsp;&nbsp;&nbsp; JAVASCRIPT </br>

<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg" alt="sass" width="30" height="30"/>&nbsp;&nbsp;&nbsp; SASS </br>

<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-original.svg" alt="webpack" width="30" height="30" />&nbsp;&nbsp;&nbsp; WEBPACK </br>

<img src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="git" width="30" height="30"/>&nbsp;&nbsp;&nbsp; GIT </br>

External libraries used for the project are:

- AXIOS
- LODASH
- DOTENV

---

## 🔗 Social Links :

Claudio Dall'Ara : [Portfolio](https://boobagreen.github.io/portfolio/), [Linkedin](https://www.linkedin.com/in/claudio-dall-ara-244816175/), [Github](https://github.com/boobaGreen).

---
