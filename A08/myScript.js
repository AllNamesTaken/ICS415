/**
 * Created by Yiming on 9/27/2015.
 */
$(document).ready(toggleFAQ());

function toggleFAQ() {
  $("dd").hide();

  $("#button1").click(function () {
    $("#first").toggle();
    if ($("#button1").text() == "+") {
      $("#button1").text("-");
    }
    else {
      $("#button1").text("+");
    }
  });


  $("#button2").click(function () {
    $("#second").toggle();
    if ($("#button2").text() == "+") {
      $("#button2").text("-");
    }
    else {
      $("#button2").text("+");
    }
  });

  $("#button3").click(function () {
    $("#third").toggle();
    if($("#button3").text() == "+") {
      $("#button3").text("-");
    }
    else{
      $("#button3").text("+");
    }
  });

  $("#button4").click(function () {
    $("#fourth").toggle();
    if($("#button4").text() == "+") {
      $("#button4").text("-");
    }
    else{
      $("#button4").text("+");
    }
  });


  $("#button5").click(function () {
    $("#fifth").toggle();
    if($("#button5").text() == "+") {
      $("#button5").text("-");
    }
    else{
      $("#button5").text("+");
    }
  });
}