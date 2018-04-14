var menuOpener = document.getElementsByClassName('menu_opener');
console.log(menuOpener[0])
console.log($('.menu_opener'))
$('.menu_opener').click(function(){
  $(this).find('.icon-list').toggleClass('icon-list_opened');
  $('.menu').toggleClass('active');
})
var hammertime = new Hammer(document);
hammertime.on('panleft panright', function(ev) {
  console.log(ev.type);
  if(ev.type == 'panright'){
    $('.menu_opener .icon-list').addClass('icon-list_opened');
    $('.menu').addClass('active');
  }
  if(ev.type == 'panleft'){
    $('.menu_opener .icon-list').removeClass('icon-list_opened');
    $('.menu').removeClass('active');
  }
});

jQuery(document).ready(function (e) {
    function t(t) {
        e(t).bind("click", function (t) {
            t.preventDefault();
            e(this).parent().fadeOut()
        })
    }
    e(".dropdown-toggle").click(function () {
        var t = e(this).parents(".button-dropdown").children(".dropdown-menu").is(":hidden");
        e(".button-dropdown .dropdown-menu").hide();
        e(".button-dropdown .dropdown-toggle").removeClass("active");
        if (t) {
            e(this).parents(".button-dropdown").children(".dropdown-menu").toggle().parents(".button-dropdown").children(".dropdown-toggle").addClass("active")
        }
    });
    e(document).bind("click", function (t) {
        var n = e(t.target);
        if (!n.parents().hasClass("button-dropdown")) e(".button-dropdown .dropdown-menu").hide();
    });
    e(document).bind("click", function (t) {
        var n = e(t.target);
        if (!n.parents().hasClass("button-dropdown")) e(".button-dropdown .dropdown-toggle").removeClass("active");
    })
});