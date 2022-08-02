const navbar= document.getElementById('navbar__list'); 
const sections= document.querySelectorAll('section');

// create function createNavigationBar
function createNavigationBar(){ 
  sections.forEach((section)=>{
        createUnorderItem= document.createElement('li');
        title = section.getAttribute('data-nav'); 
        url = section.getAttribute('id');
        // Create section link 
        createUnorderItem.innerHTML = `<a class="menu__link" href="#${url}">${title}</a>` 
        createUnorderItem.addEventListener('click',(e)=>{
           e.preventDefault();
           section.scrollIntoView({
            behavior:'smooth',
           });

        });
        navbar.appendChild(createUnorderItem);
      });
}
createNavigationBar(); 


//  make navigation bar responsive in mobile 
const barHambgureMenu= document.getElementById('myLinks'); // get id(myLinks) from ul tag from html file
function toggleMobileMenu(menu) {
     menu.classList.toggle('open');  /// to open the HambgureMenu 
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

  sections.forEach((section)=>{ // create loop for loop on the All-sections
    unorderList= document.createElement('li'); // create un-order list
    Name = section.getAttribute('data-nav'); // get data-nav from HTML File
    Linkofsection = section.getAttribute('id'); // get id from HTML File
    unorderList.innerHTML = `<a class="menu__link" href="#${Linkofsection}">${Name}</a>` // make unordered list and show sections names and make links
    unorderList.addEventListener('click',(mobileres)=>{
      mobileres.preventDefault();
      section.scrollIntoView({
       behavior:'smooth',
      });
   });
    barHambgureMenu.appendChild(unorderList); // to put section names to Hambgure Menu in unorderList
  });

  
// Cheack if Section is Active State and higlighting the link
function IsActiveSection(section){
    return section.getBoundingClientRect().top>0 && section.getBoundingClientRect().top<200 ;
}

document.addEventListener('scroll',function(){  // event lister when scroll call ActiveState function
  sections.forEach((section)=>{
    const ActiveLink = document.querySelector(`a[href="#${section.id}"]`);  
        if (IsActiveSection(section)){
            //if (!section.classList.contains('your-active-class')){
                section.classList.add('your-active-class');
                ActiveLink.classList.add('active-link');
            //}
        } 
        else{
            section.classList.remove('your-active-class');
            ActiveLink.classList.remove('active-link');
        }
    });
});


// create button to scroll to the top of page
let Topbutton = document.getElementById("myBtn"); // get id from button tag from html file
window.onscroll = function() {scrollFunction()}; // to make scroll when click on the top button
function scrollFunction() { // make scroll when scroll down 30px from top show button
  if (document.documentElement.scrollTop > 30 || document.body.scrollTop > 30  ) {
    Topbutton.style.display = "block";
  } else {
    Topbutton.style.display = "none";
  }
}
// When the user clicks on the top button, make scroll to top of the page
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


// collapsible section 5
var collapsible = document.getElementsByClassName("collapsible");
var i;
for (i = 0; i < collapsible.length; i++) {
  collapsible[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}



