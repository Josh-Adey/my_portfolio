const sections = document.querySelectorAll(".section");
const sectBtns = document.querySelectorAll("controlls");
const sectBtn = document.querySelectorAll(".control");
const allSections = document.querySelector(".main-content");
const themeBtn = document.querySelector('.theme-btn');
const serviceID = "service_svfwwqi";
const templateID = "template_re06w3s";

function pageTransitions(){
    //Button click active class
    for(let i=0; i<sectBtn.length; i++){
        sectBtn[i].addEventListener("click", function() {
            let currentBtn = document.querySelectorAll(".active-btn");
            currentBtn[0].className = currentBtn[0].className.replace('active-btn', '');
            this.className += "active-btn";
        })
    }


// sections active class
allSections.addEventListener('click', (e) => {
    const id = e.target.dataset.id;
    if(id){
        // remove selected from the other btns
        sectBtns.forEach((btn) => {
            btn.classList.remove('active')
        })
        e.target.classList.add('active')

        // hide other sections
        sections.forEach((section) =>{
            section.classList.remove('active')
        })
 
        const element = document.getElementById(id);
        element.classList.add('active');
         

    }
})

}
// Toggle theme
themeBtn.addEventListener('click', () =>{
   let element = document.body;
   element.classList.toggle('light-mode');
});

pageTransitions();


function sendEmail(){
    var inputs = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        // subject: document.getElementById("subject").value,
        message: document.getElementById("message").value,

    };
    
    emailjs.send(serviceID, templateID, inputs)
.then(
    res =>{
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        // document.getElementById("subject").value = "";
        document.getElementById("message").value = "",
        console.log(res);
        alert("Your message sent successfully");
    })
.catch((err) => console.log(err));
}
