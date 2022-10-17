var pop1 = document.querySelector(".BODY")
var login = document.querySelector(".a")
var help = document.querySelector(".b")
var cross = document.querySelector(".cross")
var btn = document.querySelector(".l")
var red = document.querySelector(".red")
var green = document.querySelector(".green")
var blue = document.querySelector(".blue")
var pop2 = document.querySelector(".BODY1")
var cross1 = document.querySelector(".cross1")
var pop3 = document.querySelector(".popup2")
var over = document.querySelector(".overlay")


login.addEventListener("click", function () {
    pop1.style.display = "initial"
})

cross.addEventListener("click", function () {
    pop1.style.display = "none"
})

btn.addEventListener("click", function () {
    pop2.style.display = "initial"
})

cross1.addEventListener("click", function () {
    pop2.style.display = "none"
})

red.addEventListener("click", function () {
    pop2.style.display = "initial"
})

cross1.addEventListener("click", function () {
    pop2.style.display = "none"
})

green.addEventListener("click", function () {
    pop2.style.display = "initial"
})

cross1.addEventListener("click", function () {
    pop2.style.display = "none"
})

blue.addEventListener("click", function () {
    pop2.style.display = "initial"
})

cross1.addEventListener("click", function () {
    pop2.style.display = "none"
})

help.addEventListener("click", function () {
    pop3.style.display = "initial"
})

over.addEventListener("click", function () {
    pop3.style.display = "none"
})

var arr = [
    { img: "https://img.shaadi.com/success-story/1SH33489376-3SH88040420-big.jpg", ame: "Niraj & Punam", bio: "Hello Team Shaadi.com, First of all, I want to thank the entire Shaadi.com team for making me meet my soulmate. I found my match within a week. We interacted a bit... " },
    { img: "https://img.shaadi.com/success-story/9SH55446966-2SH46407805-big.jpg", ame: "Megha & Shubham", bio: "I sent her a request and later she accepted. We started communication to know each other better and within a period of one month we met for the first time in Jaipur... " },
    { img: "https://img.shaadi.com/success-story/6SH31796819-7SH96354711-big.jpg", ame: "Shikha & Himank", bio: "We met from shaadi.com and than met as individual person after knowing each other we finally decided to move to relationship to other step known as better half" },
    { img: "https://img.shaadi.com/success-story/uSH49041356-USH09118008-big.jpg", ame: "Mohit & Neha", bio: "I created my profile here on suggestion of my big brother who also got her partner from this platform. I also met my partner Neha here. I am grateful to Shaadi.com... " },
    { img: "https://img.shaadi.com/success-story/DSH19812108-SSH47407833-big.jpg", ame: "Shiristi & Raj", bio: "I had an amazing experience with Shaadi.com as I found my life partner and a good family to spend my life in future happily. Thank you Shaadi.com for creating such a interactive and user friendly... " },
    { img: "https://img.shaadi.com/success-story/2SH60717064-lSH09050622-big.jpg", ame: "Pratik & Anushka", bio: "I met Anushka Chand from Gorakhpur, We were in relationship for almost 1 year finally we have convinced our family and we getting married next month. Thanks a lot Shaadi.com    " },
    { img: "https://img.shaadi.com/success-story/ASH13053429-hSH54514027-big.jpg", ame: "Neha & Piyush", bio: "Hi,I met Neha on shaadi in May 2022. We found each other's profile quite matching and meeting our expectations. We started discussing our views on marriage from each ..." },
    { img: "https://img.shaadi.com/success-story/GSH57368383-jSH82190427-big.jpg", ame: "Vibhor & Shikha", bio: "Matched with her 60 days back we talked for a few days and due to some reason we had to stop talking but somewhere she did not give up she kept in touch so we talked a little ever..." },
    { img: "https://img.shaadi.com/success-story/0SH07935434-3SH28147496-big.jpg", ame: "Vikash & Vineetha", bio: "I am quite happy that I found my soul mate from Lucknow. I am thankful to Shaadi.com to provide such a nice platform to view various profiles.    " },
    { img: "https://img.shaadi.com/success-story/CSH19144329-OSH83504104-big.jpg", ame: "Soumya & Chaitali", bio: "I got my match on Shaadi.com on 21st February and we got married on 26th June. Thanks to Shaadi.com. Wish everyone gets their perfect partner soon." },
    { img: "https://img.shaadi.com/success-story/jSH99687283-bSH32160734-big.jpg", ame: "Abhishek & Pournima", bio: "I liked her profile and I sent her a request. She liked my profile and accepted and from there onward our conversation started and led to this beautiful story. Below added photo is our.." },
    { img: "https://img.shaadi.com/success-story/YSH30122362-PSH90375270-big.jpg", ame: "Sameer & Neha", bio: "It was a beautiful journey of 6 months from the first time I came across Sameer's profile an sent him the connection request. His status an personality just glue me towards him an... " }
]
var clutter = "";
arr.forEach(function (elem) {
    clutter += ` <div class="card1">
    <img width="365px" height"20px" src="${elem.img}" alt="">
    <h1>${elem.ame}</h1>
      <p> ${elem.bio}</p>
    <div class="bottom">
        <h3>Read more</h3> <img src="arrow-right-s-fill.png" alt="">
    </div>
</div>`
    document.querySelector(".BOX1").innerHTML = clutter;

})

$('.BOX1').slick(
    {   
        autoplay:true,
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 3,
        adaptiveHeight: true
    }
);
































