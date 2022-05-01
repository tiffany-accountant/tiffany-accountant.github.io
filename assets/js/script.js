$(document).ready(function() {
   let typed = new Typed(".typed-element", {
      strings: ["business.", "retirement savings.", "pocket."],
      typeSpeed: 70,
      loop: true,
      startDelay: 1000,
      showCursor: false
   });

   $('#mobile-menu-btn').click(function() {
      $('#mobile-menu-icon').text(function(i, content){
         return content === 'menu' ? 'close' : 'menu';
      });
   });
});