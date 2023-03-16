const sections = document.querySelectorAll(".section");
const sectBtns = document.querySelectorAll("controlls");
const sectBtn = document.querySelectorAll(".control");
const allSections = document.querySelector(".main-content");
const themeBtn = document.querySelector('.theme-btn');
const form = document.querySelector('.contact-form');
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


function sendEmail(e){
    e.preventDefault();
    Email.send({
        SecureToken : "eb695443-71b5-4467-9083-19d7fdd260ac",
        To : 'robertjoshua905@gmail.com',
        From : document.getElementById("email").value,
        Subject : document.getElementById("subject").value,
        Body : document.getElementById("message").value
    }).then(
      message => alert(message)
    );
    
}

/// add the event listener for submit
form.addEventListener('submit', sendEmail);
