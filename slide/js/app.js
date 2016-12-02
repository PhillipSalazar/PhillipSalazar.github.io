

Reveal.initialize();


$(document).ready(function(){


setInterval(function() {
  $(".cat").toggleClass("blink").delay(500);
  $(".cat").toggleClass("lolz");

//  $("#topleft").toggleClass(".green").delay(500);
//  $("#topleft").toggleClass(".lolz");
//  $(".redp").toggleClass(".lol").delay(500);
//  $(".redp").toggleClass(".lol");

  console.log("toggled!");
}, 500);

document.getElementById('py').addEventListener('click', function(){

  document.getElementById('par').innerHTML ="Python" + "<br>"+ "<br>" +"Python is a widely used high-level, general-purpose, interpreted, dynamic programming language. Its design philosophy emphasizes code readability, and its syntax allows programmers to express concepts in fewer lines of code than possible in languages such as C++ or Java";
});

document.getElementById('js').addEventListener('click', function(){
  document.getElementById('par').innerHTML ="Javascript" + "<br>"+ "<br>" + "is a high level, dynamic, untyped, and interpreted programming language. It has been standardized in the ECMAScript language specification.";
});

document.getElementById('ru').addEventListener('click', function(){
  document.getElementById('par').innerHTML ="Ruby" + "<br>"+ "<br>" + "Ruby is a dynamic, reflective, object-oriented, general-purpose programming language. It was designed and developed in the mid-1990s by Yukihiro Matsumoto in Japan.";
});


document.getElementById('game').addEventListener('click', function(){

document.getElementById('par2').innerHTML = "Pygame"+"<br>" + "<br>" + "is a library for maiking game, it can be use to make all different games";

});

document.getElementById('mobile').addEventListener('click', function(){

document.getElementById('par2').innerHTML = "Cordova"+"<br>" + "<br>" + "Apache Cordova (formerly PhoneGap) is a popular mobile application development framework originally created by Nitobi. The framework is form javascript to make mobile apps";

});


document.getElementById('web').addEventListener('click', function(){

document.getElementById('par2').innerHTML = "Ruby on Rails"+"<br>" + "<br>" + "Ruby on Rails, or simply Rails, is a server-side web application framework written in Ruby under the MIT License. Rails is a model–view–controller framework, providing default structures for a database, a web service, and web pages.";

});
});
