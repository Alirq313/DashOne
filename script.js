let hrs = document.querySelector(".hrs");
let mins = document.querySelector(".min");
let secs = document.querySelector(".sec");

let day = document.querySelector(".day");
let month = document.querySelector(".month");
let year = document.querySelector(".year");
let today = document.querySelector(".today");

let qoute = document.querySelector(".qoute");


setInterval(() => {
    let time = new Date();
    
    hrs.innerHTML = time.getHours()
    if(hrs.innerHTML > 12){
        hrs.innerHTML = hrs.innerHTML - 12;
            if(hrs.innerHTML < 10){
                hrs.innerHTML = "0" + hrs.innerHTML;
            }
    }
    
    
    mins.innerHTML = (time.getMinutes()<10?"0":"") + time.getMinutes()
    secs.innerHTML = (time.getSeconds()<10?"0":"") + time.getSeconds()
}
, 1000);

const monthNames = ["January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let date = new Date();
today.innerHTML = dayNames[date.getDay()]
month.innerHTML = monthNames[date.getMonth()]
day.innerHTML = (date.getDate()<10?"0":"") + date.getDate()
year.innerHTML = date.getFullYear()

const sayings = [
    '"Practice makes knowledge perfect. "-Imam Ali (AS)',
    '"This entire world is not worth a single tear." -Imam Ali (AS)',
    '"You must be humble, as it is one of the greatest [forms of] worship." -Imam Ali (AS)',
    '"A wise man takes a lesson even from a minor lapse." -Imam Ali (AS)',
    '"Oh God, You are my only trust in every calamity, You are my only hope in every hardship, You are the only promise in anxiety and distress..." -Imam Hussain (AS)',
    '"The most complete gift of God is a life based on knowledge." -Imam Ali (AS)',
    '"Whoever accepts your grant, he has helped you with your generosity." -Imam Ali (AS)',
    '"Never raise your need except to three (kinds of people): to a religious, to a brave man or to a nobleman." -Imam Hussain (AS)',
    '"And do good; indeed, Allāh loves the doers of good." (Quran 2:195)',
    '"Indeed, with hardship [will be] ease." (Quran 94:5-6)',
    '"Your Lord has not forsaken you." (Surah Ad-Duha 93:3)',
    '"My mercy embraces all things." (Surah Al-A,raf 7:156)',
    '"Allah does not burden a soul beyond that it can bear." (Surah Al-Baqarah 2:286)',
    '"So remember Me; I will remember you." (Surah Al-Baqarah 2:152)',
    '"And He found you lost and guided [you]." (Quran 93:7)',
    '"And He is the Forgiving, the Loving." (Quran 85:14)',
    '"O, Man you came from a drop of semen, and you will leave as dust, you never knew when you came and you will never know when you will leave. Yet you walk around this earth as if you know everything." -Imam Ali (AS)'


]
setInterval(() => {
    let randomIndex = Math.floor(Math.random() * sayings.length);
qoute.innerHTML = sayings[randomIndex]
}, 100000);
