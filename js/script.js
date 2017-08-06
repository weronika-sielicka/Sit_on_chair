document.addEventListener("DOMContentLoaded", function(){

var section3_box_1_title = document.getElementById('section3_box_1_title');
var section3_box_2_title = document.getElementById('section3_box_2_title');

function hide(){
  this.style.opacity = 0;

}

function show(){
  this.style.opacity = 1;

}

  section3_box_1_title.addEventListener('mouseenter', hide);

section3_box_1_title.addEventListener('mouseleave', show);
  section3_box_2_title.addEventListener('mouseenter', hide);

 section3_box_2_title.addEventListener('mouseleave', show); 







});
