$.fn.scrollView = function () {
    return this.each(function () {
        $('html, body').animate({
            scrollTop: $(this).offset().top - $("#nav_top").height()
        }, 500);
    });
}

function scrollTo(target)
{
    $(target).scrollView();
}

$('#main_title').typeIt({
    strings: ['Welcome!'],
    speed: 50,
    breakLines: false,
    autoStart: true
})
.tiPause(1000)
.tiDelete()
.tiType("Site title");

$('#home_btn').click(function(){ scrollTo('#home');});
$('#proj_btn').click(function(){ scrollTo('#projects');});
$('#next_btn').click(function(){ scrollTo('#next');});