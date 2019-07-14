var button = document.getElementById('button');
var modal = document.getElementById('page-modal');

var close = document.getElementsByClassName('modal-close')[0];

button.onclick = function() {
  modal.style.display = 'block';
}

close.onclick = function() {
  modal.style.display = 'none';
}


// function to x out of modal, click on background
// window.onclick = function(event) {
//   if(event.target.className = 'modal-background') {
//     modal.style.display = 'none';
//   }
  // to find where the click is on inspect console
  // console.log(event);


// }