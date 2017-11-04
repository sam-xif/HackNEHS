var temp = document.createElement('div');
var p = temp.appendChild('p');
p.innerHTML = "aaosiuhokcxjgoarskjhdnaaosiuhokcxjgoarskjhdn";

document.addEventListener('XIF', () => {
  var commentBox = document.createElement('div')
  var inputBar = document.createElement('input')
  var submitButton = document.createElement('button')


  commentBox.appendChild('inputBar');
  commentBox.appendChild('submitButton');

  //Here is where we need to attach this Div to the window
  document.getElementById('comments').appendChild('commentBox')

});
