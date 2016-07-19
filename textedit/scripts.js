/*chrome.browserAction.onClicked.addListener(function(activeTab){
  chrome.tabs.executeScript({
          file: 'jquery-2.2.3.min.js'
      });
  var newURL = "index.html";
  chrome.tabs.create({ url: newURL });
});
*/
chrome.browserAction.onClicked.addListener(function() {
    chrome.tabs.create({'url': "index.html"});
});




function ht(){
  var glap = document.getElementById('title-page').innerHTML = "HTML"
  var cat = document.getElementById('mok1').style.display = 'block';
  var cat = document.getElementById('mok2').style.display = 'none';
  var cat = document.getElementById('mok3').style.display = 'none';
}

function cs() {
  var glap = document.getElementById('title-page').innerHTML = "CSS"
  var cat = document.getElementById('mok1').style.display = 'none';
  var bat = document.getElementById('mok2').style.display = 'block';
  var sat = document.getElementById('mok3').style.display = 'none';
}

function js(){
  var glap = document.getElementById('title-page').innerHTML = "javascript"
  var cat = document.getElementById('mok1').style.display = 'none';
  var bat = document.getElementById('mok2').style.display = 'none';
  var sat = document.getElementById('mok3').style.display = 'block';
}

function openz(){
  var cat = document.getElementById('txt1').value;
  var bat = document.getElementById('txt2').value;
  var sat = document.getElementById('txt3').value;
 var blah = window.open();
 blah.document.write("<html>"+cat+"</html>");
 blah.document.write("<style>"+bat+"</style>");
 blah.document.write("<script>"+sat+"</script>");
}

function help() {
  var c = document.getElementById("help-info");

  if(c.style.display === "none")
  {
    c.style.display = "block";
  }
  else
  {
    c.style.display = "none";
  }
}
