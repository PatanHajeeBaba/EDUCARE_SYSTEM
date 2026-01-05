let next = document.querySelector('.next')
let prev = document.querySelector('.prev')

next.addEventListener('click',function(){
  let items = document.querySelectorAll('.item')
  document.querySelector('.slide').appendChild(items[0])
})

prev.addEventListener('click',function(){
  let items = document.querySelectorAll('.item')
  document.querySelector('.slide').prepend(items[items.length -1])
})

function sub(n){
  n.preventDefault();

  var firstname=document.getElementById("fname").value;
  var lastname=document.getElementById("lname").value;
  var Email=document.getElementById("email").value;
  var Subject=document.getElementById("Subject").value;
  var Message=document.getElementById("comment").value;
  
  if(firstname==''){
      alert("please enter the first name")
      return false;
  }
  if(lastname==''){
      alert("please enter the last name")
      return false;
  }
  if(Email==''){
      alert("please enter the Email")
      return false;
  }
  if(Subject==''){
      alert("please enter the Subject")
      return false;
  }
  if(Message==''){
      alert("please enter the Message")
  }

  console.log(firstname);
  console.log(lastname);
  console.log(Email);
  console.log(Subject);
  console.log(Message);
}
function st()
{
  document.getElementById("submit")
  alert("form is submitted")
}


/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}