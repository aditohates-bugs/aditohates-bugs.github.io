let movies = document.getElementsByClassName("myMovies");
let index =0;
let index2=0;
let movieNames = ["AVENGERS ENDGAME", "IRON MAN", "DOCTOR STRANGE", "FREE GUY", "BALERINA", "RA-ONE", "SHOLAY", "THOR RAGNAROK", "WAR 2", "X-MEN", "DHURENDHAR","Ant-MAN","SHANG-CHI"];
let movieColor = ["#A855F7","#EF4444","#F59E0B","#06B6D4","#F472B6","#60A5FA","#FDE047","#FACC15","#94A3B8","#3B82F6","#FF6600","#EF4444","#DC2626"];
let movieFont = ["'Bebas Neue', sans-serif", "'Orbitron', sans-serif","'Cinzel Decorative', serif","'Monoton', cursive","'Cinzel Decorative', serif","'Orbitron', sans-serif","'Metal Mania', cursive","'Permanent Marker', cursive", "'Bebas Neue', sans-serif","'Orbitron', sans-serif","'Metal Mania', cursive","'Bebas Neue', sans-serif","'Cinzel Decorative', serif"];
let movieshadow = ["0 0 2px #A855F7","0 0 2px #EF4444","0 0 3px #F59E0B","0 0 3px #06B6D4","0 0 3px #F472B6","0 0 3px #60A5FA","0 0 3px #FDE047","0 0 3px #FACC15","0 0 3px #94A3B8","0 0 3px #3B82F6","0 0 3px #FF6600","0 0 3px #EF4444","0 0 3px #DC2626"];
let cominglet = ["C","O","M","I","N","G","-","S","O","O","N",":"];
let index3 = -1;
showMovies();
showText();
coming();
exclusive();

function showText(){
    index2++;
    if(index2 > movieNames.length){
        index2=1;
    }
    document.getElementById("movie_name").innerText = movieNames[index2-1];
    document.getElementById("movie_name").style.color = movieColor[index2-1];
    document.getElementById("movie_name").style.fontFamily = movieFont[index2-1];
    document.getElementById("movie_name").style.textShadow = movieshadow[index2-1];
    setTimeout(showText, 5000);
}

function showMovies(){
    let movies = document.getElementsByClassName("myMovies");
    for (let i = 0; i < movies.length; i++) {
        movies[i].style.display = "none";
        movies[i].classList.remove("fade")
    }
    index++;
    if(index > movies.length){
        index=1;
    }
    movies[index-1].style.display = "block";
    movies[index-1].classList.add("fade");

    let background = document.getElementById("background");
    let current = movies[index - 1].querySelector("img").src;
    
    
    background.style.backgroundImage = `url(${current})`;
    setTimeout(showMovies, 5000);
}

function coming(){
    index3++;
    if(index3 >= cominglet.length){
        index3=0;
        document.getElementById("coming_name").innerText = "";
    }
    document.getElementById("coming_name").innerText += cominglet[index3];
    setTimeout(coming, 400);
}

let blink= true;

function exclusive(){
    let offer = document.getElementById("offer");
    offer.innerText = "Exclusive Offers";
    if(blink){
        offer.style.color = "#FBBF24";
        offer.style.textShadow = "0 0 10px #FBBF24";
    }
    else{
        offer.style.color = "white";
        offer.style.textShadow = "none";
    }
    blink = !blink;
    setTimeout(exclusive, 800);
}

let bookb = document.querySelector("#book_button");
let move_title = document.querySelector("#movie_name");

bookb.addEventListener("click", (e)=>{
    
    let whichMovie = document.getElementById("movie_name").innerText;
    
    movie_title.innerText = movieNames[index2-1];

})