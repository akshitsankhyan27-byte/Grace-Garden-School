document.getElementById("form").addEventListener("submit", function(e){

e.preventDefault();

document.getElementById("msg").innerHTML =
"Admission Form Submitted Successfully!";

});

let slideIndex = 0;

showSlides();

function showSlides() {

let slides = document.getElementsByClassName("slide");

for (let i = 0; i < slides.length; i++) {
slides[i].style.display = "none";
}

slideIndex++;

if (slideIndex > slides.length) {
slideIndex = 1;
}

slides[slideIndex-1].style.display = "block";

setTimeout(showSlides, 3000);
}





<script>

function sendToWhatsapp(){

var name = document.getElementById("name").value;
var studentClass = document.getElementById("class").value;
var parent = document.getElementById("parent").value;
var phone = document.getElementById("phone").value;

var message =
"New Admission Form:%0A"+
"Student Name: "+name+"%0A"+
"Class: "+studentClass+"%0A"+
"Parent Name: "+parent+"%0A"+
"Phone: "+phone;

var whatsappURL =
"https://wa.me/918219778399 ?text="+message;

window.open(whatsappURL,"_blank");

}

</script>