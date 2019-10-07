// JavaScript Document

// Navigation
const $body = $('body');
const $btnShowNav = $('#nav-button');
const $navMain = $('#main-nav');
$btnShowNav.click(function(){ $body.toggleClass('show'); });
$btnShowNav.mousedown(function(e){ e.preventDefault(); })
$navMain.click(function(){ $body.removeClass('show'); });

// Slideshow
const $btnPrevNext = $('#prev, #next');
$btnPrevNext.mousedown(function(e){ e.preventDefault(); })