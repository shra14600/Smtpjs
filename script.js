// let btn=document.getElementById('button');
//     btn.addEventListener('click',sendemail)
function sendemail() {
	Email.send({
        SecureToken : "acb6d62a-77a9-44c0-8cff-5407bc39279e",
        To : "shra14600@gmail.com",
        From : "shraddha14600@gmail.com",
        Subject : "Email received",
        Body : "this is the body"
    }).then(
        (message)=>alert(message)
        // if(message=='OK')
        // alert('Message sent successfully!')
        // else
        // alert("Sorry! message not sent.")
    );
}