// $('#scroll-down').click(function() {
//   $("html, body").animate({ scrollTop: $(document).height() }, 7000);
//   return false;
// });


$(document).ready(function(){
$('.scroll-down').click(function(){
	$('html,body').animate({scrollTop: $('#scroll-down').offset().top}, 1000);
if($(window).scrollTop()<880){
$('html').animate({scrollTop: 880}, 1000);
}
else {
if($(window).scrollTop()<1620){
$('html').animate({scrollTop: 1620}, 1000);
}
else {
if($(window).scrollTop()< 2545){
$('html').animate({scrollTop: 2545}, 1000);
$(".scroll-down").css("border","1px solid black");
}
else {
if($(window).scrollTop()< 3565){
$('html').animate({scrollTop: 3565}, 1000);
}
else{
if($(window).scrollTop()< 3921){
$('html').animate({scrollTop: 3921}, 1000);
}
else{
if($(window).scrollTop()< 4771){
$('html').animate({scrollTop: 4771}, 1000);
}
}
}
}
}
}
});

});

// $('.scroll-up').click(function(){
// 	$('html,body').animate({scrollTop: $('#scroll-up').offset().top}, 2000);
// if($(window).scrollBottom()>4771){
// $('html').animate({scrollBottom:4771 }, 1500);
// }
// else {
// if($(window).scrollBottom()>3921){
// $('html').animate({scrollTBottom:3921 }, 1500);
// }
// else {
// if($(window).scrollBottom()> 3565){
// $('html').animate({scrollBottom: 3565}, 1500);
// $(".scroll-up").css("border","1px solid black");
// }
// else {
// if($(window).scrollBottom()> 2545){
// $('html').animate({scrollBottom: 2545}, 1500);
// }
// else{
// if($(window).scrollBottom()> 1620){
// $('html').animate({scrollBottom: 1620}, 1500);
// }
// else{
// if($(window).scrollBottom()> 880){
// $('html').animate({scrollBottom: 880}, 1500);
// }
// }
// }
// }
// }
// }
// });

$('#scroll-up').click(function(){
if($(window).scrollTop()>4771){
$('html').animate({scrollTop: 4771}, 1000);
}
else {
if($(window).scrollTop()>3921){
$('html').animate({scrollTop: 3921}, 1000);
}
else {
if($(window).scrollTop()>3565){
$('html').animate({scrollTop: 3565}, 1000);
$(".scroll").css("border","1px solid black");
}
else {
if($(window).scrollTop()>2545){
$('html').animate({scrollTop: 2545}, 1000);
}
else{
if($(window).scrollTop()>1620){
$('html').animate({scrollTop: 1620}, 1000);
}
else{
if($(window).scrollTop()>880){
$('html').animate({scrollTop: 880}, 1000);
}
else{
if($(window).scrollTop()>0){
$('html').animate({scrollTop: 0}, 1000);
}
}
}
}
}
}
}
}); 
