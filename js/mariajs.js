 //jQuery begins... NOW//

$(document).ready(function() {


$('.picandstory').hide ();

$('#mariathumb').on('click', () => {
  $('#mariag').toggle();
});
$('#harryvivthumb').on('click', () => {
  $('#harry').toggle();
});
$('#tontithumb').on('click', () => {
  $('#tonti').toggle();
});
$('#gregthumb').on('click', () => {
  $('#greg').toggle();
});
$('#sotothumb').on('click', () => {
  $('#soto').toggle();
});
$('#viruetthumb').on('click', () => {
  $('#viruet').toggle();
});
$('#carlosvargasthumb').on('click', () => {
  $('#carlosvargas').toggle();
});

//coverpage
ScrollReveal().reveal('.hiddentext', { duration: 5000 });
ScrollReveal().reveal('#introsent', { delay: 12000 , duration:8000 });
//people
ScrollReveal().reveal('#mariaall', { duration:12000 });
ScrollReveal().reveal('#harryall', { duration:13000 });
ScrollReveal().reveal('#tontiall', { duration:14000 });
ScrollReveal().reveal('#gregall', { duration:15000 });
ScrollReveal().reveal('#sotoall', { duration:16000 });
ScrollReveal().reveal('#viruetall', { duration:17000 });
ScrollReveal().reveal('#carlosall', { duration:18000 });

//ATTRIBUTION FOR SLIDESHOW CODE:https://www.khanacademy.org/computing/computer-programming/html-css-js/using-js-libraries-in-your-webpage/pt/using-a-js-library-slideshow-library

let slideShow = function(container) {
    this.images = [];
    this.curImage = 0;
    for (i = 0; i < container.childElementCount; i++) {
        this.images.push(container.children[i]);
        this.images[i].style.display = "none";
    }

    // Handle going to to the next slide
    let nextSlide = function() {
        for (var i = 0; i < this.images.length; i++) {
            this.images[i].style.display = "none";
        }
        this.images[this.curImage].style.display = "block";
        this.curImage++;
        if (this.curImage >= this.images.length) {
            this.curImage = 1;
        }
        window.setTimeout(nextSlide.bind(this), 2500);
    };

    nextSlide.call(this);
};
slideShow(document.getElementById("animalslideshow"));

$('.poderex').hide ();

$('#gob').on('click', () => {
  $('#govtexplanation').toggle();
});
$('#aee').on('click', () => {
  $('#powerexplanation').toggle();
});
  //this bracket thing & parenthesis MUST STAY AT THE END//
    })
