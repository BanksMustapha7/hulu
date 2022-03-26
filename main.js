'use strict';
const details = document.querySelectorAll(".details");
const mediaQuery = window.matchMedia('(max-width: 618px)');
const tabLink1 = document.getElementById("tablink1");
const tablink2 = document.getElementById("tablink2");
const tablink3 = document.getElementById("tablink3");
const sport = document.querySelector(".sport");
const sportsHead =  document.getElementById("sportsHead");
const sportsContent = document.getElementById("sportsContent");
const sportImg1 = document.getElementById("s1");
const sportImg2 = document.getElementById("s2");
const sportImg3 = document.getElementById("s3");
const sportImg4 = document.getElementById("s4");
const sportsContentBox = document.getElementById("sportcontent");
const loginForm =  document.querySelector(".loginForm");
const loginBtn = document.querySelector(".logIn");
const sportImg = "url('assets/images/live-sports.jpg')";
const newsImg = "url('assets/images/news.jpg')";

function activeLink(link) {
    link.addEventListener("click", function(){
        sportsContentBox.classList.remove("animate__fadeInUp");
        tabLink1.classList.remove("active");
        tablink2.classList.remove("active");
        tablink3.classList.remove("active");
        link.classList.add("active");

        if (tabLink1.classList.contains("active")){
            console.log(`tablink1 active`);
            sportsHead.textContent = 'Live Sports';
            sportsContent.textContent = `Catch your games at home or on the go. Stream live games from major college and pro leagues including the NCAA®, NBA, NHL, NFL, and more.`
            sport.style.backgroundImage = sportImg;
            sportImg1.src = "assets/images/live-sports-logo-1.png"
            sportImg2.src = "assets/images/live-sports-logo-2.png"
            sportImg3.src = "assets/images/live-sports-logo-3.svg"
            sportImg4.src = "assets/images/live-sports-logo-4.png"
            sportsContentBox.classList.add("animate__fadeInUp");
        }
        else if (tablink2.classList.contains("active")){
            sportsContentBox.classList.add("animate__fadeInUp");
            sportsHead.textContent = 'Breaking News'
            sport.style.backgroundColor = "Yellow";
            console.log(`tablink2 active`);
            sportsContent.textContent = "Keep pace with what's going on locally and globally with trusted opinions from all the top news networks."
            sport.style.backgroundImage = newsImg;
            sportImg1.src = "assets/images/cnn.svg"
            sportImg2.src = "assets/images/abc.png"
            sportImg3.src = "assets/images/fox.svg"
            sportImg4.src = "assets/images/msnbc.png"
            sportsContentBox.classList.add("animate__fadeInUp");
        }
        else{
            sportsContentBox.classList.add("animate__fadeInUp");
            sport.style.backgroundImage = "url('assets/images/event.jpg')";
            sportsHead.textContent = 'Biggest Events';
            sportsContent.textContent = "Spectacular, can't-miss moments like the Olympics, Grammys®, Oscars®, Emmys®, and more."
            console.log(`tablink3 active`);
            sportImg1.src = "assets/images/grammy.png"
            sportImg2.src = "assets/images/oscars.png"
            sportImg3.src = "assets/images/gg.png"
            sportImg4.src = "assets/images/evet.png"
        }
    });
   
}
activeLink(tabLink1);
activeLink(tablink2);
activeLink(tablink3);



loginBtn.addEventListener("click", showLogin);
document.querySelector(".content").addEventListener("click", hideLogin)
document.getElementById("x").addEventListener("click", hideLogin)
document.body.addEventListener("click", function(e){
    if(e.key === 'Esc'){
        hideLogin();
    }
});

function showLogin () {
    loginForm.classList.toggle("hidden");
}

function hideLogin() {
    loginForm.classList.add("hidden");
}

function thanks () {
    document.getElementById("lt").style.display  = 'none';
    document.getElementById("form").style.display = "none";
    document.getElementById("logIn").style.display = "none";
    document.getElementById("submit").style.display = "none";
    const myThanks = document.createElement("h2");
    myThanks.textContent = "Thanks for Checking out My Project😄😇🤟";
    myThanks.style.fontSize = '2.75rem';
    myThanks.style.lineHeight = "150%";
    document.querySelector(".loginForm").appendChild(myThanks);
}

if(mediaQuery.matches) {
    document.querySelector(".loginForm").classList.add("animate__slideInLeft", "animate__faster");
}