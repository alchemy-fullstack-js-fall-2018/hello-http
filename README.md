## Welcome to Hello HTTP

### About
This is a simple API with two core functions. It will either say "Happy Birthday!" to the person of your choice, or supply one of three randomly-selected facts about HTTP, everyone's favorite protocol.

### To Use
* You must run Node.js. This project was developed using v10.11.0
* Fork this repository, clone it, create an empty directory, type `git clone <your repository URL>`, then open your editor.
* In the command line, type `npm i` to install Node modules on your local machine.
* Typing `npm start` will launch the server, then open a browser at the URL `localhost:<whatever port you choose>`. The default port for this project is 9999.

### Saying "Happy Birthday!" 
* Go to `localhost:<PORT>/happy-birthday/<name>`. If no name is supplied, it will default to "Stranger".
* To supply an additional message, go to `localhost:<PORT>/happy-birthday/<name>/?custom=<whatever you want to say>`.

### Getting Facts about HTTP
* Go to `localhost:<PORT>/fact` and you will be shown one of three facts about HTTP.


**Thanks for reading!** 

### Author

I'm Alex Rankin! This was a project for my Fullstack Javascript class at Alchemy Code Lab in Portland, OR.
