// Add your code here
document.querySelector('#input').onchange = function(elem) {
    email = elem.target.value;
    message = document.querySelector('#message');
    if(message == null){
        message = document.createElement("p")
        message.id = 'message';
        message.class = 'h3';
        message.style.marginTop = '10px';
        message.style.marginBottom = '-20px';
    }
    if (/[a-z0-9A-Z]+\@[a-zA-Z0-9]+\.[a-zA-Z0-9]+/.test(email) == true){
        message.innerHTML = "Thank you. This is a valid email address.";
        message.style.color = "green";
    } else {
        message.innerHTML = "Error. Please enter a valid email address";
        message.style.color = "red";
    }

    const container = document.querySelector(".form-group");
    container.appendChild(message);
}