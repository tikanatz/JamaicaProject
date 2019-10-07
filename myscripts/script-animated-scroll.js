// Animated Scroll

// Script Below will only run if Native CSS
// Animated Scroll is NOT supported
if(CSS.supports('(scroll-behavior: smooth)') === false){
    loadJQ();
}

// Conditionally Load jQuery (javascript)
// The loadJQ function was modified from 
// code found at:
// https://gist.github.com/gists/902090/
function loadJQ(){
    jQ = document.createElement('script');
    jQ.type = 'text/javascript';
    jQ.onload = jQ.onreadystatechange = animateScroll;
    jQ.src = 'scripts/jquery-3.4.1.min.js';
    document.body.appendChild(jQ);
    console.log('jQuery loaded')
}

// This animated scroll jQuery code modified from 
// code found at this CSS-Tricks article:
// https://css-tricks.com/snippets/jquery/smooth-scrolling/
function animateScroll(){
    // Select all links with hashes
    $('a[href*="#"]')
        // Remove links that don't actually link to anything
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function(event) {
            // On-page links
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname){
                // Figure out element to scroll to
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                // Does a scroll target exist?
                if(target.length){
                    // Only prevent default if animation is actually gonna happen
                    event.preventDefault();
                    $('html, body').animate({
                        scrollTop: target.offset().top
                        }, 1000, function() {
                            // Callback after animation
                            // Must change focus!
                            var $target = $(target);
                            $target.focus();
                            if ($target.is(":focus")) { // Checking if the target was focused
                                return false;
                            }else{
                                $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
                                $target.focus(); // Set focus again
                            }
                        });
                }
            }
        });
}
