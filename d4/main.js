const explain = document.getElementById("explain");
const guess = document.getElementById("guess");
const submit = document.getElementById("submit");
const get_hint = document.getElementById("get-hint");
const hint = document.getElementById("hint");
const result = document.getElementById("result");

const movies = [
    {title: 'Harry Potter', explanation: 'This movie is about a dude with a stick...', hint: 'It\'s Magic'},
    {title: 'Just Go With It', explanation: 'This movie is about people who go on holiday...', hint: 'Adam, Drew and Jennifer'},
    {title: 'Never Back Down', explanation: 'This movie is about two guys with daddy issues who beat each other up...', hint: 'Kanye West - Stronger'},
    {title: 'Spongebob Squarepants', explanation: 'This movie is about a rectangle...', hint: 'It\'s a cartoon'},
    {title: '50 First Dates', explanation: 'This movie is about a chick, she has the worst memory...', hint: '50 times...'},
    {title: 'Cars', explanation: 'In this movie, car go fast...', hint: 'Kachow'},
    {title: 'Spiderman', explanation: 'In this movie this guy just does not pay his rent, no matter how many times the landlord asks...', hint: 'Peta-Paka'},
    {title: 'The Wolf Of Wall Street', explanation: 'In this movie there\'s like illegal stuff, lots of money, and a blonde chick...', hint: 'HAWOOooooooooooo'},
    {title: 'Inception', explanation: 'In this movie everyone is like sleeping all the time...', hint: 'Dreams...'},
    {title: 'Peter Pan', explanation: 'In this movie some kids die and an angel escorts them to heaven...', hint: 'Always flying, cuz he neverlands'},
    {title: 'The Lord Of The Rings', explanation: 'In this movie some small guys go for a walk...', hint: 'You will not vacate past this exact position'}
   ];

let answer = Math.floor(Math.random() * movies.length);
explain.innerHTML = movies[answer].explanation;

get_hint.addEventListener("click", (event) => {
    hint.style.display = "block";
    hint.innerHTML = movies[answer].hint;
});

submit.addEventListener("click", (event) => {
    if (guess.value == movies[answer].title){
        result.classList.add("alert-success");
        result.innerHTML = "Correct!";
        setTimeout(() => {result.classList.remove("alert-success");}, 2000);
    } else {
        result.classList.add("alert-danger");
        result.innerHTML = "Incorrect!";
        setTimeout(() => {result.classList.remove("alert-danger");}, 2000);
    }
    result.style.display = "block";
    setTimeout(() => {result.style.display = "none";}, 2000);
    answer = Math.floor(Math.random() * movies.length);
    explain.innerHTML = movies[answer].explanation;
});