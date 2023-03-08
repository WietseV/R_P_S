## RPS

![image](https://user-images.githubusercontent.com/36664208/221931396-a25bb7fb-6319-480c-b349-1698ed7c6075.png)

This project is currently hosted on vercel. If you are interested of checking it out yourself have a look at: [RPS](https://r-p-s-wietsev.vercel.app/)

The goal of this project was originaly just to play around with localStorage, [nextjs 13](https://nextjs.org/blog/next-13), typescript and have a simple application where maybe I could add some nice front-end features.
This goal was reached very quickly and thus I decided to redefine the scope of the project:

A web application to play the game Rock, Paper, Scissors. But one is none so I decided to add a second gamemode to play Rock, Paper, Scissors, Lizard, Spock. The games originaly where created a single game called upon and played on client side, only the score being kept alive in localStorage. To future proof the application for future updates I decided to store game logic serverside and to create an api that could keep a gamestate. (This so if and when I would implement multiplayer the game already runs server side and clients only need to display the outputs they get from the server.)
No longer working with localStorage I needed a good way to communicate between the server and the client. One option would have been to use [React Queries](https://react-query-v3.tanstack.com) but for this project I chose to use [SWR](https://swr.vercel.app/). The harmony of react with nextjs 13 (the app directory instead of the src directory), vercel and swr made things rather comfortable. The basic workings where soon reached as well. Far from being polished the application worked as expected with just 1 drawback: UX.

Sadly with the serverpolling and the api not being very fast working it took quite a while before getting the results of the game. The importance of UX and the utility of server/client communication was something that I didn't think I would stumble upon when I first started the project but it soon became the main hurdle for this application. SWR was a nice upgrade from just fetching normaly with react hooks to update but in the end it had the same drawbacks.

In the end I decided to keep the project in stasis between the 2 (for me atleast) obvious options:
- The RPS game will just create a game client side and play it out so the results are immediatly available. The score is kept in the api and updates a bit slower but automatic nevertheless.
- The RPSLS game will play the game that is running server side and get both results and score from the server. This so I keep the progress that I made concerning loading states. (though they are not desired it is nice to have loading templates just in case of slow connections)

The goal for the future would be to develop the multiplayer mode and use maybe React Queries to optimize the UX.

Front-end wise I did make some advancements in transforming with css, animations and gradients.

The icons are from [react-icons](https://react-icons.github.io/react-icons/). The favicon was created using [favicon](https://favicon.io). 

The RPS game and RPSLS pages have mostly the same components with the difference in the game being played being the biggest. With pictures the animations are rather difficult to portray here so do have a look if you are interested. When hovering over the possible choices the icon changes into a word, when hovering over the score reset button it rotates 90deg, on smaller screens both the gamemode selection bar on the left as well as the game info bar on the right slide into view by the click of a button.

![image](https://user-images.githubusercontent.com/36664208/221931514-18c984ef-14fa-47ef-adfe-11f2d275bc09.png)


![image](https://user-images.githubusercontent.com/36664208/221931579-8a0a4904-8093-4904-8bab-4820efb6b92f.png)

The result pop-up looks different based on the state and the outcome. When loading the result there will be a skeleton loader. If you win the background is gold, in case of a lose or a tie I kept it civilized and you still get silver.

![image](https://user-images.githubusercontent.com/36664208/221931758-218ba2c8-778b-463b-b5f1-f8a1f06fa417.png)

The rules for both games are available on the bottom rightside, or in the rightside menu on smaller screens. Maybe a bit overkill since the rules for rock, paper, scissors are quite easy but for the RPSLS mode I found it handy nevertheless.

![image](https://user-images.githubusercontent.com/36664208/221931634-69e519b5-9617-45c7-a95d-4c71f801c85b.png)

On tablet size screens this is how the game info bar looks like extended:

![image](https://user-images.githubusercontent.com/36664208/221953463-3fcf6819-8278-411b-b602-6dfb47e9284d.png)

And this is what the app looks like on mobile without the bars extended:

![image](https://user-images.githubusercontent.com/36664208/221953650-5a4d3cf2-b794-49e8-8cd8-72d33a6f7705.png)
![image](https://user-images.githubusercontent.com/36664208/221953827-82f2ef6c-9525-4e3d-95df-ab501c351589.png)


