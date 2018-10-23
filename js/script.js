// FSJS - Random Quote Generator

// Create the array of quote objects and name it quotes

//the quote used for theis project where taken from: https://www.brainyquote.com/quotes/jason_silva_621954?src=t_technology 

var quotes = [
    {       quote:'New technology is not good or evil in and of itself. It\'s all about how people choose to use it.',
            author:'David Wong',
            citation:'',
            year:''
        },

        {   quote:'Technology is nothing. What\'s important is that you have a faith in people, that they\'re basically good and smart, and if you give them tools, they\'ll do wonderful things with them.',
            author:'Steve Jobs',
            citation:'Wall Street Journal',
            year:'1993'
        },

        {   quote:'Every once in a while, a new technology, an old problem, and a big idea turn into an innovation.',
            author:'Dean Kamen',
            citation:'',
            year:''
        },

        {   quote:'We live in a society exquisitely dependent on science and technology, in which hardly anyone knows anything about science and technology.',
            author:'Carl Sagan',
            citation:'',
            year:''
        },

        {   quote:'Technology is, of course, a double edged sword. Fire can cook our food but also burn us.' ,
            author:'Jason Silva',
            citation:'nterview with Natasha Waisfeld,',
            year:'April 17, 2015' 
        }
]


// Create the getRandomQuuote function and name it getRandomQuote
function getRandomQuote(list){
    // generate a random number from 0 to the quote array lentgh
    var randomNumber = Math.floor(Math.random() * list.length);
    
    // creating a object which will hold propreties of the random quote and returning it as a single random quote object 
    var randomQuote = {
        quoteToDisplay : list[randomNumber].quote,
        quoteAuthor : list[randomNumber].author,
        quoteCitation : list[randomNumber].citation,
        quoteYear: list[randomNumber].year,

    }
    return randomQuote;
    
}





// Create the printQuote funtion and name it printQuote
function printQuote(){
    //storing the return value of this function into a variable so i can access the random quote
    var random = getRandomQuote(quotes);

    // formating the html string to be displayed on the page
    var stringOfQuote = '';
    stringOfQuote += '<p class="quote">'+random.quoteToDisplay+ '</p>';
    stringOfQuote+='<p class="source">'+random.quoteAuthor;

    //displaying the quote citation and year on condition where there are not empty
    //they wont be displayed if they empty in the quote object
    if(random.quoteCitation !== ''){
    stringOfQuote+='<span class="citation">' +random.quoteCitation+ '</span>';
    }
    if(random.quoteYear !== ''){
        stringOfQuote+='<span class="year">' +random.quoteYear+ '</span>';;
    }
  
    stringOfQuote+='</p>';
    console.log('i am connected')

    //displaying all on the page
    document.getElementById('quote-box').innerHTML = stringOfQuote;
}



// This event listener will respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);



