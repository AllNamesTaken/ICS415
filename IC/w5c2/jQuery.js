/**
 * Created by Yiming on 9/21/2015.
 */
$(document).ready(loadJQuery());


function loadJQuery()
{
  $(".navbar").hide();
  $(".navbar").fadeIn("10000");
  //$("header").hide();
  $("button").click(function(){
    jQuery.ajax({})
  });
  console.log("a");
}