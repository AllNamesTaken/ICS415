/**
 * Created by Yiming on 9/14/2015.
 */
var nav = document.getElementById("nav-bar");
var nodeArray = nav.childNodes;

for(temp in nodeArray)
{
  if(temp.innerHTML=="HIDE ME!") {
    hideNavBar();
  }
}
function hideNavBar()
{
  document.getElementById("nav-bar").hide;
}