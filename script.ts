const form = document.getElementById("resume-form") as HTMLFormElement;
const resumeDisplayElement = document.getElementById(
  "resume-display"
) as HTMLDivElement;

form.addEventListener("submit", (event: Event) => {
  event.preventDefault();

  const name = document.getElementById("name") as HTMLInputElement;
  const email = document.getElementById("email") as HTMLInputElement;
  const phone = document.getElementById("phone") as HTMLInputElement;
  const education = document.getElementById("education") as HTMLInputElement;
  const experience = document.getElementById("experience") as HTMLInputElement;
  const skills = document.getElementById("skills") as HTMLInputElement;

  const resumeHtml = `
    <h2> <b> Resume</b> </h2>
    <h3> Personal information</h3>
    <p><b>Name: </b> ${name}</p>
     <p><b>Email: </b> ${email}</p>
      <p><b>Phone: </b> ${phone}</p>
       <p><b>Education: </b> ${education}</p>
       <p><b>Experience: </b> ${experience}</p>
       <p><b>Skills: </b> ${skills}</p>
    `;
  if (resumeDisplayElement) {
    resumeDisplayElement.innerHTML = resumeHtml;
  } else {
    console.log("the resume display element is missing.");
  }
});
