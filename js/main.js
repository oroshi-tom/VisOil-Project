// smooth scroll animation
$('#view-about').on('click',function(){
    const about = $('#about').position().top;

    $('html, body').animate(
        {
            scrollTop: about
        },
        900
    );
});
// TODO link not working
$('#view-team').on('click',function(){
    const team = $('#team').position().top;

    $('html, body').animate(
        {
            scrollTop: team
        },
        900
    );
});
// TODO link not working
$('#view-docs').on('click',function(){
    const docs = $('#docs').position().top;

    $('html, body').animate(
        {
            scrollTop: docs
        },
        900
    );
});