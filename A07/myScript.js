/**
 * Created by Yiming on 9/20/2015.
 */
getClasses("<p class=\"foo bar\">HI</p>");
addClass("<p class=\"foo\">HI</p>","bar");

function getClasses(elements)
{
  var pattern = "class=\"";
  var startPos = elements.search(pattern);
  var substring = elements.substring(startPos + pattern.length);
  var endPos = substring.indexOf("\"");
  substring = substring.substring(0,endPos);
  var classArray = substring.split(" ");
  return classArray;
  //console.log(classArray);
  //console.log(endPos);
}

function addClass(elements, className)
{
  var result = elements.search(className);
  if(result == -1)
  {
    var pattern = "class=\"";
    var startPos = elements.search(pattern) + pattern.length;
    elements = elements.slice(0,startPos) + className + " " + elements.slice(startPos);
  }
  //console.log(elements);
}