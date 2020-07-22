// Scroll to 'about'
$('#view-about').on('click',function(){
    const about = $('#about').position().top;

    $('html, body').animate(
        {
            scrollTop: about
        },
        900
    );
});
// Scroll to 'features'
$('#view-features').on('click',function(){
    const features = $('#features').position().top;

    $('html, body').animate(
        {
            scrollTop: features
        },
        900
    );
});

// Scroll to 'team'
$('#view-team').on('click',function(){
    const team = $('#team').position().top;

    $('html, body').animate(
        {
            scrollTop: team
        },
        900
    );
});

// Scroll to 'docs'
$('#view-docs').on('click',function(){
    const docs = $('#docs').position().top;

    $('html, body').animate(
        {
            scrollTop: docs
        },
        900
    );
});

// Scroll button
var scrollBtn = document.getElementById('top-btn');

// If user scrolls more than 20px, display button
window.onscroll = function () {showButton()};

function showButton() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
        scrollBtn.style.display = 'block';
    } else {
        scrollBtn.style.display = 'none';
    }
}

// Scroll to top if button clicked
$('#top-btn').on('click', function(){
    $('html, body').animate(
        {
            scrollTop: 0
        }
    )
});

window.onload = () => {
    $('body').fadeIn(500);
};
