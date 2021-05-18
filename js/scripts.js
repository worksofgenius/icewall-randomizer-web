"use strict";

// Quote randomizer
const quoteDisplay = [
    "Describe your first job.",
    "Describe a famous person you\'ve met.",
    "Summarize the most recent book you\'ve read.",
    "Name three people who you want on your team in the zombie apocalypse.",
    "What is your favorite emoji?",
    "What is your favorite meme?",
    "Which famous person do you most resemble?",
    "Which actor would play you in a movie about your life?",
    "What is your favorite karaoke song?",
    "Which food did you hate as a child?",
    "If you were a dessert, what would you be?",
    "What would you bring with you on a deserted island?",
    "Which planet would you like to visit?",
    "What is your favorite pizza topping?",
    "What is your favorite sandwich?",
    "What is the best advice you\'ve ever received?",
    "What is the worst advice you\'ve ever received?",
    "What is your dream vacation?",
    "What would be the title of your autobiography?",
    "What language would you like to learn?",
    "What is your favorite animal?",
    "Who is your favorite superhero?",
    "If you were a superhero, what would your super power be?",
    "Which sport would you compete in if you were in the Olympics?",
    "What would be your theme song?",
    "Do you prefer coffee or tea?",
    "What hobby would you like to learn?",
    "What artist, living or dead, would you like to see in concert?",
    "If you could time travel, where would you go?",
    "What did you have for breakfast?",
    "What is the strangest food you\'ve ever eaten?",
    "If you could live anywhere for one year, where would you go?",
    "If you could be an animal, what would you be?",
    "If you had a personal assistant, what would they do?",
    "If you gave a TED Talk, what would the subject be?",
    "What would be the title of your bestselling book?",
    "What is your favorite season?",
    "What is your favorite quote?",
    "What is something that pleasantly surprised you?",
    "What was your favorite band 10 years ago?",
    "What is your favorite holiday?",
    "What made your smile today?",
    "What is your favorite charity that you wish more people knew about?",
    "What does your name mean?",
    "What three people would you have over for a dinner party?",
    "Do you prefer cats or dogs?",
    "What is your favorite scary story?",
    "What app is essential to you?",
    "What fictional place would you like to visit?",
    "What documentary do you recommend?",
    "If you could be guaranteed one thing in life, what would it be?",
    "Would you rather go under the sea or into space?",
    "What skill should everyone know?",
    "What do you want to do when you retire?",
    "What is your favorite stress-relieving activity?",
    "What food are you craving right now?",
    "If you were an animal, what would you be?",
    "What would you buy if you won the lottery?",
    "What TV show do you recommend for binge watching?",
    "Which artist would you hire to paint your portrait?",
    "What is your favorite recipe?",
    "What is your favorite ride at an amusement park?",
    "What is an interesting fact about you that nobody here knows?",
    "What is your favorite restaurant?",
    "Describe one interesting fact about your hometown.",
    "What was your favorite class when you were in school?",
    "Who inspires you?",
    "What is your favorite color?",
    "What did you learn as a child that you still use today?",
    "What did you believe earlier in your career that has changed?",
    "What is your greatest accomplish so far?",
    "What is the most valuable career advice you\'ve received?",
    "What is something that you wish you had handled differently?",
    "What is the secret to getting through a tough workday?",
    "For what reason would you want to be famous?",
    "What invention completely changed the world?"
]

function changeQuote() {
    const randomNumber = Math.floor(Math.random() * (quoteDisplay.length));
    document.getElementById("quoteDisplay").innerHTML = quoteDisplay[randomNumber];

    console.log(randomNumber);
}

changeQuote();

// Background color randomizer
const button = document.getElementById("button-change-color");

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
button.addEventListener("click", modifyBackground);
button.addEventListener("click", changeQuote);