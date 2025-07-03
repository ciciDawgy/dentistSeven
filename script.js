const logo = document.querySelector('.logo')
const container = document.querySelector('.container')
const navOne = document.querySelector('.hiddenMenu')
const sections = document.querySelectorAll('section')
const pics = document.querySelector('.pics')
const btnLeft = document.querySelector('.btnLeft');
const btnRight = document.querySelector('.btnRight');



function menuToggle(){
  navOne.classList.toggle('active');
}

/* Intersection Observer for sections */ 

window.addEventListener('scroll', checkSections)

checkSections()

function checkSections() {
    const triggerBottom = window.innerHeight / 5 * 3;

    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
       
        if(sectionTop < triggerBottom) {
            section.classList.add('show')
        } else {
            section.classList.remove('show')
        }
    })
}


/*automatic slider for homepage*/

var i = 0;
var images = [];
var time = 6000;

images[0] = "https://cdn.pixabay.com/photo/2013/07/12/14/14/dental-148045_960_720.png";
images[1] = "https://images.pexels.com/photos/12917374/pexels-photo-12917374.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
images[2] = "https://cdn.pixabay.com/photo/2016/06/05/14/16/dentist-1437430_960_720.jpg";
images[3] = "https://cdn.pixabay.com/photo/2019/02/27/09/02/tooth-4023604_960_720.jpg";
images[4] =  "https://cdn.pixabay.com/photo/2018/02/15/09/43/teeth-whitening-3154793_960_720.jpg";
images[5] =  "https://cdn.pixabay.com/photo/2015/03/27/11/18/best-dentist-bangalore-694654_960_720.jpg";


function changeImage() {
    document.slide.src = images[i]

    if(i < images.length - 1) {
        i++
    } else {
        i = 0
    } 
    setTimeout("changeImage()", time)
}

window.onload = changeImage;
