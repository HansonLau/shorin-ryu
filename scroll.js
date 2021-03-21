window.onscroll = function() {myFunction()};

    var nav = document.getElementById("nav");
    var des = document.getElementById("de");

    var sticky = nav.offsetTop;

    function myFunction() {
        if (window.pageYOffset >= sticky) {
            nav.classList.add("sticky");
            des.classList.add("correction");
        } 
        else {
            nav.classList.remove("sticky");
            des.classList.remove("correction");
        }
    }