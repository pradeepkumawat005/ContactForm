function sendEmail() {

    Email.send({
        Host: "smtp.gmail.com",
        Username: "pradeepkumawat005@gmail.com",
        Password: "Maple#00",
        To: 'jagdishkumawatji006@gmail.com',
        From: document.getElementById("email").value,
        Subject: "New Contact form Enquiry",
        Body: "Name: " +document.getElementById("name").value
            + "<br> Email:" + document.getElementById("email").value
            + "<br> Phone no:" + document.getElementById("phone").value
            + "<br> Message:" + document.getElementById("message").value

    }).then(
        message => alert("Message Sent Succesfully")
    );

}