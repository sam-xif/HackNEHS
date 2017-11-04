document.documentElement.style.height = '100%';
document.body.style.height = '100%';
document.documentElement.style.width = '100%';
document.body.style.width = '100%';

var div = document.createElement( 'div' );
var submitForm = document.createElement( 'form' );
submitForm.action = "http://localhost:8000/api/comment/";
submitForm.method = "post";
submitForm.style.margin = '0 auto';
submitForm.style.border = "1px solid black";

var comment = document.createElement( 'input' );
comment.type = 'text';
comment.id = 'comment';
comment.name = 'comment_field';
comment.display = "inline-block";
comment.placeholder = 'Write your thoughts';
// alert(window.location.href);
var submitButton = document.createElement( 'input' );
submitButton.type = 'submit';
submitButton.value = 'Submit';
submitButton.onclick = function() {
    postdata = {};
    postdata["text"] = document.getElementById("comment").innerHTML;
    postdata["selectedText"] = document.getSelection().toString();
    postdata["webpage"] = window.location.href;
}

//append all elements
document.body.appendChild( div );

//set attributes for div
div.id = 'myDivId';
div.style.position = 'fixed';
div.style.top = '0%';
div.style.left = '60%';
div.style.width = '40%';
div.style.height = '100%';
div.style.backgroundColor = 'lightblue';
div.style.opacity = 0;
div.style.zIndex = 2147483647;


//set attributes for btn
// "btn.removeAttribute( 'style' );
// submitButton.type = 'button';
// submitButton.value = 'hello';
// submitButton.style.position = 'absolute';
// submitButton.style.top = '50%';
// submitButton.style.left = '50%';

// append new message box

// create a div that holds everyting that this function creates
var messageHolder = document.createElement('div');
messageHolder.style.overflowY = 'auto';
messageHolder.style.height = '90%';
for (var i = 99; i >= 0; i--) {
  var tempDiv = document.createElement('div');
  var tempText = document.createElement('p');
  tempText.id = 'text'+ (i);
  tempText.innerHTML = "";
  tempText.style.paddingTop = "5px";
  tempText.style.paddingLeft = "5px";
  tempText.style.paddingRight = "5px";
  tempText.style.paddingBottom = "5px";
  tempDiv.style.height = '10%';
  tempDiv.style.width = '95%';
  tempDiv.style.border = 'solid';
  tempDiv.style.borderWidth = '1px';
  tempDiv.style.margin = '0 auto';
  tempDiv.appendChild(tempText);
  messageHolder.appendChild(tempDiv);
}
div.appendChild(messageHolder)
var messageContainer = document.createElement( 'div' );
div.appendChild(messageContainer);
messageContainer.appendChild( submitForm );
submitForm.appendChild( comment );
submitForm.appendChild( submitButton );
messageContainer.style.bottom = 0;
messageContainer.style.position = 'fixed';
messageContainer.style.width = '100%';
messageHolder.scrollTop = messageHolder.scrollHeight;


//set attributes for submitForm
submitForm.action = '';
function appendMessage(message, order)
{
  document.getElementById("text" + order).innerHTML = message;
}
appendMessage('hello', 0);
appendMessage('12345', 2);
appendMessage('asdf', 1);
div.style.backgroundColor = 'white';
div.style.opacity = 0;

//set attributes for submitForm
submitForm.action = '';
