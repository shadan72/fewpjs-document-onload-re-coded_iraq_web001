// Your code goes here
document.addEventListener("DOMContentLoaded", function() {
  console.log("The DOM has loaded");
  Text=document.getElementById('text');
  Text.textcontent=""
});
 
console.log(
  "This console.log() fires when index.js loads - before DOMContentLoaded is triggered"
);