function getRandomInt(min, max) {
 return Math.floor(Math.random() * (max - min)) + min;
}

function generateQuestion() {
 for(i = 0; i < 10; i++) {
   $("#box").append('<p><span id="num' + i + '_1"></span> + <span id="num' + i +'_2"></span> = <input type="text" id="answer' + i +'"/> <img id="icon" src=""></img></p>');
   var num1 = getRandomInt(0, 100);
   var num2 = getRandomInt(0, 100);
   $("#num" + i + "_1").html(num1);
   $("#num" + i + "_2").html(num2);
 }
}

function compareAnswer() {
 for(i = 0; i < 10; i++) {
   var total = +$("#answer" + i).val();
   var num_12 = numi_1 + numi_2
   if(total === num_12) {
     $("#icon").attr("src", "correct.png")
   }
   else {
      $("#icon").attr("src", "iconWrong.png")
   }
 }
}

$(document).ready(function() {

 generateQuestion();
 $("#submit").on("click", function(e) {
   e.preventDefault();
    compareAnswer();
 })
})
