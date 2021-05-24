"use strict";

// Quote randomizer
const quoteDisplay = [
    "It\'s been great catching up, but I\’ve got another call in a few minutes.",
    "It sounds like we\’ve covered everything we needed to today, so I\’ll let you go.",
    "My battery is dying, so I\'m going to get going.",
    "I\’m sorry I have to leave so quickly, but it\’s been a pleasure and I hope we can reconnect soon.",
    "I\’m going to mingle a bit more, but before I go, can I introduce you to...?",
    "I\'m sorry, but I\'m on a strict deadline.",
    "I\'d love to hear more about it when we\'ve got more time.",
    "Well, it looks like we\’ve hit everything on the agenda.",
    "I\'m going to go knock out some quick emails.",
    "I\'ve never thought of it that way before.",
    "I don\'t know enough about that topic to offer an opinion.",
    "I\'ll need to do more research on that.",
    "Excuse me, I need to check on the kids.",
    "It sounds like you\’ve got a lot on your plate, so I\’ll let you get back to it.",
    "I can\'t beleive it\'s already so late!",
    "I\'d like to hear more about your weekend.",
    "Can you believe this weather?",
    "I\'m going to let you let me go.",
    "Please excuse me.",
    "I\'m sorry, but I have to get going.",
    "I\'m sure other people want to talk to you, too.",
    "I don\'t want to take up all of your time.",
    "It\'s been great catching up with you!",
    "Thanks for the heads up, I\'ll definitely check out...",
    "I loved talking to you, but I need to catch up with a few other people.",
    "Do you know where the bathroom is?",
    "I need to get another drink.",
    "I need to respond to this message.",
    "Let\'s catch up later.",
    "I\'d really like to give you my full attention, but I have to finish with this ASAP.",
    "This is an important conversation, but could we talk about it when we have more time?",
    "I did hear about that.",
    "I respect your opinion, but I\'d rather not talk about this here.",
    "I have plenty to say about that, but if I get started now, I\’ll never get anything done.",
    "Don\'t get me started about that.",
    "Have you read that new book everyone\'s talking about?",
    "Did you see that new show on Netflix?",
    "That hasn\'t been my experience at all.",
    "That's an interesting perspective.",
    "I disagree.",
    "I don't find jokes like that funny.",
    "Let\'s talk about that another time, I\'m still reading the article.",
    "Can we talk about something else?",
    "Seriously?",
    "I couldn\'t possibly comment.",
    "I\'d rather not get into it right now.",
    "I\'m not open to discussing that.",
    "Why are you sharing this with me?",
    "Can I interrupt, because we still haven\'t discussed that new restaurant?",
    "Interesting, but I really wanted to hear your thoughts on the new Marvel movie.",
    "So what else is keeping your busy these days?",
    "Well, do you know what I heard the other day?",
    "I\'m not one to gossip.",
    "What I heard you say was: _____.",
    "What is your favorite stress-relieving activity?",
    "You\'ve given me a lot to think about.",
    "Excuse me.",
    "Oh, one last thing before I go...",
    "I\'m sorry to interrupt, but I really have to run.",
    "Thanks for talking!",
    "What time is it?",
    "I really shouldn\'t hold you longer, I know you have important things to do.",
    "I\'d prefer not to.",
    "You\'re right."
]

function changeQuote() {
    const randomNumber = Math.floor(Math.random() * (quoteDisplay.length));
    document.getElementById("quoteDisplay").innerHTML = quoteDisplay[randomNumber];

    console.log(randomNumber);
}

changeQuote();

// Background image randomizer
const button = document.getElementById("button-change-background");

function modifyBackground() {
    const x = Math.floor(Math.random() * 256);
    const y = Math.floor(Math.random() * 256);
    const z = Math.floor(Math.random() * 256);
    const backgroundColor = "rgb(" + x + "," + y + "," + z + ")";
    console.log(backgroundColor);
    
    document.body.style.background = backgroundColor;
}

modifyBackground();

// Event listener on page
button.addEventListener("click",() => {
    modifyBackground();
    changeQuote();
});
