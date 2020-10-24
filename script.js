const QUOTEBANK = [
    {
        quote: "It does not matter how slowly you go as long as you do not stop.",
        author: "Confucius"
    },
    {
        quote: "I hear and I forget. I see and I remember. I do and I understand.",
        author: "Confucius"
    },
    {
        quote: "Knowing is not enough, we must apply. Willing is not enough, we must do.",
        author: "Johann Wolfgang von Goethe"
    },
    {
        quote: "The secret of getting ahead is getting started.",
        author: "Mark Twain"
    },
    {
        quote: "There is no subject so old that something new cannot be said about it.",
        author: "Fyodor Dostoevsky"
    },
    {
        quote: "One can know a man from his laugh, and if you like a man's laugh before you know anything of him, you may confidently say that he is a good man.",
        author: "Fyodor Dostoevsky"
    },
    {
        quote: "Never mistake motion for action.",
        author: "Ernest Hemingway"
    },
    {
        quote: "Well done is better than well said.",
        author: "Benjamin Franklin"
    },
    {
        quote: "A place for everything, everything in its place.",
        author: "Benjamin Franklin"
    },
    {
        quote: "Strive not to be a success, but rather to be of value.",
        author: "Albert Einstein"
    },
    {
        quote: "I have no special talent. I am only passionately curious.",
        author: "Albert Einstein"
    },
    {
        quote: "Reality is merely an illusion, albeit a very persistent one.",
        author: "Albert Einstein"
    },
    {
        quote: "Society is our extended mind and body.",
        author: "Alan Watts"
    }
]

window.onload = init;

function init() {
    generateQuote();
}

function generateQuote() {
    qLength = QUOTEBANK.length;
    randomQuoteId = Math.floor(Math.random() * qLength);
    randomQuoteData = QUOTEBANK[randomQuoteId];

    tweetLink = "https://twitter.com/intent/tweet?text=";

    quoteInURI = randomQuoteData.quote.replace(/ /g, '%20');
    tweetLink += quoteInURI;
    authorInURI = randomQuoteData.author.replace(/ /g, '%20');
    tweetLink += ' - ' + authorInURI;


    document.getElementById("text").innerText = randomQuoteData.quote;
    document.getElementById("author").innerText = "- " + randomQuoteData.author;
    document.getElementById("tweet-quote").href = tweetLink;
}

document.addEventListener("keydown", function(event) {
    if (event.code == 'Space') {
        event.preventDefault();
        generateQuote();
    }
});