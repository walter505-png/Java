function sendMail() {

    var params = {

        email: document.getElementById("email").value,
        

    };
    const serviceID ="service_o5qgcss";
const templateID ="template_0q2kis6";

emailjs
    .send(serviceID, templateID, params)
    .then((res) => {
     
        document.getElementById("email").value ="";
        console.log(res);
        alert("your email sent successfully");
    })
    .catch((err) => console.log(err));
}
