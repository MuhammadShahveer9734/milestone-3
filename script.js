var form = document.getElementById("resume-form");
var resumeDisplayElement = document.getElementById("resume-display");
form.addEventListener("submit", function (event) {
    event.preventDefault();
    var name = document.getElementById("name");
    var email = document.getElementById("email");
    var phone = document.getElementById("phone");
    var education = document.getElementById("education");
    var experience = document.getElementById("experience");
    var skills = document.getElementById("skills");
    var resumeHtml = "\n    <h2> <b> Resume</b> </h2>\n    <h3> Personal information</h3>\n    <p><b>Name: </b> ".concat(name, "</p>\n     <p><b>Email: </b> ").concat(email, "</p>\n      <p><b>Phone: </b> ").concat(phone, "</p>\n       <p><b>Education: </b> ").concat(education, "</p>\n       <p><b>Experience: </b> ").concat(experience, "</p>\n       <p><b>Skills: </b> ").concat(skills, "</p>\n    ");
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHtml;
    }
    else {
        console.log("the resume display element is missing.");
    }
});
