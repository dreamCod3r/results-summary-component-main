# Frontend Mentor - Results summary component solution

This is a solution to the [Results summary component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/results-summary-component-CE_K6s0maV). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)


**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![](./Screenshot%20.jpg)



### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- Sass styling (using modules: mixins, colors)
- Flexbox
- Mobile-first workflow
- JavaScript


### What I learned

This challenge was a learning experience for me. I had to use my JS skills to make a simple webpage that displayed data from a json file in a table. I created the table with JavaScript code. I also used some online ai tools like bing ai to help me with this task. 

```js 

const url = './data.json'; 

fetch(url) 

          .then(response => response.json()) 

          .then(data => { 

            const table = document.createElement('table'); 

``` 
I also used Sass map and @each condition to style the ```tr``` elements in the ```table```. This is how I wrote the Sass code: 
```scss
$colors: (colors.$txtRed, colors.$txtYellow, colors.$txtGreen, colors.$txtBlue);
$i: 1;

@each $color in $colors{
    tr:nth-child(#{$i}){
        color: $color;
        background-color: rgba($color, 0.1);
    }
    $i: $i + 1;
}
```
This code snippet shows how I used the spread operator to make a new data array with a different order of properties for each item. I did this with the map( ) method. This part was hard because I had to change the way the data was organized.
```js
const newData = [...data.map(item => ({icon: item.icon, category: item.category, score: item.score}))];
```
Another thing I like about JS code is how it lets you choose different operations for different properties.
```js
for (const [property, value] of Object.entries(item)) {
  ...
}
```

### Continued development

I need to devote more time and effort to improve my proficiency on the asynchronous concept in JS, which is the ability to handle multiple tasks without waiting for one to finish.



## Author

- Website - [Github page](https://dreamcod3r.github.io/results-summary-component-main/)
- Frontend Mentor - [@dreamCod3r](https://www.frontendmentor.io/profile/dreamCod3r)



