$(document).ready(function(){

    $('#itemslider3').carousel({ interval: 3000 });
    
    $('.carousel-showmanymoveone3 .item').each(function(){
    var itemToClone2 = $(this);
    
    for (var i=1;i<6;i++) {
    itemToClone2 = itemToClone2.next();
    
    if (!itemToClone2.length) {
    itemToClone2 = $(this).siblings(':first');
    }
    
    itemToClone2.children(':first-child').clone()
    .addClass("cloneditem-"+(i))
    .appendTo($(this));
    }
    });
    });