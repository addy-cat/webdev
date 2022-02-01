document.querySelector('#reverse').onclick = function (){
  // Add your code here
  var number = document.querySelector('#input').value;
  //console.log(number)
  message = document.querySelector('#message');
  if(message == null){
    message = document.createElement('p');
    message.id = 'message';
    message.class = 'h3';
    message.style.marginBottom = '-5px';
  }
  var old = number;
  var result = 0;
  var digit = 0;
  if(number < 100000000 && number > 9999999) {
    while (number) {
      digit = number % 10;
      result = (result * 10) + digit;
      number = number / 10|0;
    }
    message.innerHTML = `${old} --> ${result}`;
    message.style.color = 'green';
  } else {
    message.innerHTML = "Error: Please input an 8-digit number";
    message.style.color = 'red';
  }

  const container = document.querySelector('main');
  container.appendChild(message);
};
