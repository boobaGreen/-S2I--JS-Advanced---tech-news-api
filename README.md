-------------------------------HACKER-NEWS---------------------------------------------------

🔗 Project Link : [HACKER-NEWS](https://boobagreen.github.io/tech-news-api/)

---

Context : Project realized for the [Start2Impact](https://www.start2impact.it/) "Javascript Advanced" course.

---

Requests : At startup, the application will have to display the list of the latest news available by displaying the title, the link and the date of the news. He will then have to contact the API (as per the documentation) of the external Hacker News service to retrieve the list of latest news IDs. For each ID, the application will have to contact another API of the Hacker News service to obtain the information to be displayed such as the title, link and date of the news.

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

Screenshots : ![It shows the one page screenshot of the App. title at the top . Center with the core news section , where you can see the title of each news, the hour , the author and if available a lin kto the original source link.](/assets/img/scr.png)

---

Idea & Technical path:
I first tried to make everything work with a version with no particular graphical identity.
I first made small projects to manage LODASH and AXIOS independently, I wanted to understand how to manage libraries correctly, both with CDNs and installing them with NPM. I later implemented them in the general program. The list with the 500 news IDs is loaded when the page is loaded and kept in memory, it is reloaded and completely updated only when the page is refreshed from the browser or by pressing on the site title "HACKER-NEWS".
at this point I began to understand how to manage WEBPACK5 and I did several days of study on the subject because I had underestimated it, it is very interesting but its logic in the first instance left me with many doubts and perplexities, which is why I dedicated it to dedicated in-depth study days.
Up to this point I hadn't yet started managing API keys externally but simply using constants within the main JS code. I therefore decided to add the management of an ".env" file where to save the keys for the API calls which in this exercise case can be seen explained in the "README / Requests" section for educational purposes only, but are passed to the program via an .env file, which is also added as an exclude in ".gitignore"; in the BUILDING WEBPACK5 phase it manages the .env situation thanks to the "dotenv-webpack".
I managed to manage everything on GithubPage implemented a deploy branch from where only the DIST folder is passed.

---

🔗 Social Links

Claudio Dall'Ara : [Portfolio](https://boobagreen.github.io/portfolio/).

Claudio Dall'Ara : [Linkedin](https://www.linkedin.com/in/claudio-dall-ara-244816175/).

---

This site was built using [GitHub Pages](https://pages.github.com/).

Idea:

I noticed that the counter is a classic basic exercise in Javascript courses, you can find dozens of examples everywhere, I wanted to do something original and thinking about a counter .... the thing that immediately jumped into my mind was counting sheep, like I did as a child when I wanted to fall asleep

Technical path:

In this case I also had to deepen the concept of Canvas which I still wanted to study and even if it is a very vast and powerful topic if studied in depth in every aspect, now I think I'm starting to understand something.

The starry sky is not an image but it is procedurally generated in javascript with the "draw_sky" file , this makes each use of the counter a somewhat unique experience and I really like this aspect of the project.

The sheep is a canvas, and the ground together with the obstacle is another canvas.

I also wanted to add some sounds, which initially as you can see from the provisional version were different, then with the input of the Star2Impact community I transformed it in a more sympathetic way.
When the sheep moves forward there is a sound reminiscent of a jump, for reset a sheep bleat, and for backward movement a sound reminiscent of old tape winding (rew)

The choice of font was important and sought after because it was part of the design in a decisive way. I am very happy with what I found, I think it fits very well with the project as a whole.
in this regard I had a technical difficulty on the use of particular fonts with Github Page. The path for the fonts in the index.scss file must be one to work correctly locally on Visual studio code (indexvs.txt) and the other to work correctly on Github Page (indexgit.txt) hence the index.scss file currently it is the copy of indexgit.txt but if you want to work locally displaying the font correctly you need to replace the content of index.scss with that of indexvs.txt and vice versa.
I couldn't find a more comfortable mode, I think it's a small limitation of Githib Page but I still wanted to use this tool for publishing because in other respects it is very comfortable for me.

The design of the buttons and the lighting of the base plate are totally original and made after various less fortunate attempts, but in this process as in the others of the project I am happy to have created something original and totally autonomously, following a precise idea but also letting myself be guided by inspiration and attempts, let's say I followed a standard that I had in mind but I didn't hold back in experimenting with some variations on the theme, a bit like in jazz Music.

The design of the project has gone through many intermediate stages, one of the latest stages of progress is for example this: [Provisional version](https://boobagreen.github.io/Counter/)
