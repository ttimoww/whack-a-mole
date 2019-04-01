# Whack a Mole
[Whack a Mole](https://ttimoww.github.io/whack-a-mole/)

## Made with
* HTML
* CSS (Sass)
* JavaScript (jQuery)

## Summary
Whack a mole is a simple game where it is the goal to whack as many moles as you can in a timeframe of 30 seconds. The game makes use of the user's local storage to save the players high score.

## Downloading & Installing
For running this project on your computer you can just simply download or clone the code of this repository and open the game by running the `index.html` file. To enhance this project you need to have node installed on your computer.
First, make sure you have sass installed on your machine by typing `sass --version` in your terminal. If you do not have sass installed, run `npm install node-sass`. The `package.json` file has an existing script line which will automatically watch for sass changes. Run this script by writing `npm run sass` in your console.

## Code Snippet
```
initMoles(){
  const self = this;
  let moles = [];
  $('.hole__mole').each(function() {
    const m1 = new Mole(this, self);
    moles.push(m1);
  });
  return moles;
}
```

## Author
* **Timo Wernars** - [LinkedIn](https://www.linkedin.com/in/timo-wernars/)
