---
title: 'Hacking the infamous chrome dino'
date: '2022-10-12'
lastmod: '2022-10-12'
tags: ['Chrome', 'RollViral']
draft: false
summary: 'How do you hack the Chrome Dino?'
images: ['/static/images/ConsoleDinoChrome.png']
authors: ['default']
---

You might have already heard of the chrome dino. It's a simple game about a dino jumping over cacti. And in this blog I will show you how to hack it.

How to access the dino
Before you can hack the dino, you need to first access it. You can do that by disconnecting from the wifi. Or you can just type chrome://dino into the search bar of chrome.

Opening the console
To hack dino you need to open developer tools and from there access the console. Because every hack i'll show you is only accessible through the console. You can access the console by either right clicking and clicking on "Inspect" or by pressing Ctrl + Shift + I (F12).


![DinoImage](/static/images/ConsoleDinoChrome.png)


blog open console.png
Setting the speed of the dino
Finally you are ready to hack the dino! To make the dino faster just paste this code into the console: 

```javascript
Runner.instance_.setSpeed(1000)
```

You can change the number in the brackets to any number you want. Just remember, higher number means faster dino and at some speed the game would be unplayable!

Making the dino immortal
Yes, you heard it right! You can make the dino immortal!

First we need to save the original gameOver function to a variable:

```javascript
var original = Runner.prototype.gameOver
```

And then we need to make the gameOver function empty:

```javascript
Runner.prototype.gameOver = function(){}
```

Now you are immortal! To get back and be able to lose and save the score we need to load back the gameOver function from the variable: 

```javascript
Runner.prototype.gameOver = original
```

Setting the score
Your dino is now immortal and fast, but you want to get your score higher. What do you do?

You set the score! To set the score you need this code: 

```javascript
Runner.instance_.distanceRan = 12345 / Runner.instance_.distanceMeter.config.COEFFICIENT
```

You can set the score to any number that is less than 99999.

Changing the jump height
Now you have the biggest high score you can get. Now let's have some fun :D

The code: 

```javascript
Runner.instance_.tRex.setJumpVelocity(10)
```

The camera isn't moving up and down. So if you set the number to high, it will fly in the air for some time and you will see nothing...

