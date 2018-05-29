var button = document.getElementById("button");
var input = document.getElementById("input");
var answer = document.getElementById("answer");
var eight = document.getElementById("eight");
var inputValue = document.getElementById("inputValue");
var options = ["Yes",
                "No",
                "Maybe",
                "Most likely",
                "Probably not",
                "Reply hazy",
                "Concentrate and try again",
                "Definitely not",
                "Absolutely"]

$(document).ready(function(){
  $(".h1").fadeIn(2000);
  $(".begin-btn").fadeIn(3000);
});

$(".begin-btn").click(function(){
    $(".opener").fadeOut(2000);
    $(".content").delay(2000).fadeIn(2000);
});

$("#button").click(function() {
  if (input.value.length<1){
    alert("Please ask a question!");
  } else {
    $("#answer").hide();
    inputValue.innerText = input.value;
    console.log(input.value);
    input.value = "";
    eight.innerText="";
    var num = Math.floor(Math.random()*9);
    answer.innerText = options[num];
    $("#answer").fadeIn(2000);
  }});
