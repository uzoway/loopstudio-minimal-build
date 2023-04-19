

https://user-images.githubusercontent.com/73430874/232936341-0809228c-53af-4657-adb8-e6da64d2abfb.mp4

# Loop studio about page rebuild

Loop studio is one agency I really admire because of the incredible range of awesome projects in their portfolio. So I decided to make a minimal rebuild of the about page of the wesbite you can find here👉 [Loop studio about page](https://www.agentur-loop.com/about). My focus was on the interaction you see when you hover on any employee name. 

## Table of contents

- [Overview](#overview)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

## My process

### Built with

- Semantic HTML5 markup
- TailwindCSS
- Vanilla JavaScript

### What I learned

I spent a lot of time getting each image to be centered on the mouse position on mouseenter and mousemove. I was focused on solving this entirely with JavaScript, ignoring the possibility that CSS might be the fix. I finally decided to go through my process from scratch and found the issue to be CSS related. Using transform: translate(-50%, -50%) was the solution I'd been searching for. You can never be fully confident in your abilites in CSS right?😆
Below is a markup(tailwind incl.) of the typical image card👇

```HTML
    <div class="opacity-0 duration-150 js-imgContainer fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-150 w-[16rem] h-[20rem] overflow-hidden">
        <img src="./images/male-employees/8.jpg" alt="Portrait of Adalbert Agler" class="absolute top-0 left-0 object-cover">
    </div>
```

## Author

- LinkedIn - [Uzochukwu Victor Okafor](https://www.linkedin.com/in/uzochukwuokafor/)
- Twitter - [@uzoway_](https://twitter.com/Uzoway_)

## Acknowledgments

Credits to [unsplash](https://unsplash.com/) for all the employees images I used. And also to Loop studio for the logo.
