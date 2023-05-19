/* typing animation */
const typing = new Typed('.typing', {
    strings: ['','Web Designer', 'Web Developer', 'Have Knowledge with Design', 'I Love to Learn More'],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
  });




  
  /* aside */
  const nav = document.querySelector('.nav');
const navList = nav.querySelectorAll('li');
const totalNavList = navList.length;
const allSection=document.querySelectorAll(".section");
const totalSection = allSection.length;
for (let i = 0; i < totalNavList; i++) {
    const a = navList[i].querySelector('a');
 
    a.addEventListener('click', function() {

    removeBackSection();

        for (let j = 0; j < totalNavList; j++){

            if(navList[j].querySelector("a").classList.contains("active")){

                addBackSection(j);  
             
      //allSection[j].classList.add("back-section");

            }
              navList[j].querySelector("a").classList.remove("active");
        }
        this.classList.add("active");
        showSection(this);

        if(window.innerWidth < 1200) {
            asideSectionTogglerBtn();
        }

    });
  }
function removeBackSection() {
    
    for (let i = 0; i < totalSection; i++) {
        allSection[i].classList.remove("back-section");
    }
}
function addBackSection(num) {
    allSection[num].classList.add("back-section");
}
function showSection(element) {
    for (let i = 0; i < totalSection; i++) {
        allSection[i].classList.remove("active")
    }
    // Get the ID of the target section
    const target = element.getAttribute("href").split("#")[1];
    document.querySelector("#" + target).classList.add("active");
  } 
   
function updateNav(ele) {
    for (let i = 0; i < totalNavList; i++) {
        navList[i].querySelector("a").classList.remove("active");
        const target = ele.getAttribute("href").split("#")[1];

        if (target === navList[i].querySelector("a").getAttribute("href").split("#")[1]) {
            navList[i].querySelector("a").classList.add("active");
        }
    }
}
  document.querySelector(".hire-me").addEventListener("click", function() {
    const sectionIndex=this.getAttribute("data-section-index");
    showSection(this);
    updateNav(this);
    removeBackSection();
    addBackSection(sectionIndex);
  })
  const navTogglerBtn=document.querySelector(".nav-toggler"),
  aside=document.querySelector(".aside")

  navTogglerBtn.addEventListener("click", () => {
asideSectionTogglerBtn();
  });
  function asideSectionTogglerBtn() {
    aside.classList.toggle("open");
    navTogglerBtn.classList.toggle("open");

    for (let i = 0; i < totalSection; i++) {
        allSection[i].classList.toggle("open");  
    }
  }
  var aboutButton = document.getElementById("about-button");
  // Get the elements with class "progress-in" and convert them to an array
  var progressBars = Array.from(document.querySelectorAll(".progress-in"));
  
  // Disable the initial progress bars by setting the width to "0%"
  progressBars.forEach(function(progressBar) {
    progressBar.style.width = "0%";
  });
  
  // Add event listener to the "About" button
  aboutButton.addEventListener("click", function() {
    // Add the "about-clicked" class to the body element to trigger the effects
    document.body.classList.add("about-clicked");
  
    // Delay the execution of filling the next progress bars using setTimeout function
    progressBars.forEach(function(progressBar, index) {
      setTimeout(function() {
        progressBar.style.width = progressBar.getAttribute("data-width");
      }, (index + 1) * 200);
    });
  });
 //loader function animation
  function loader(){
    document.querySelector('.loader-container').classList.add('fade-out');
      }
      function fadeOut(){
        setInterval(loader, 3000);
      }
      window.onload=fadeOut; 