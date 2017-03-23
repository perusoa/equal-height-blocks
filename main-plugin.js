$.fn.equalHeight = function(){
    var $this = $(this);
    
    //Set the heights to auto if on mobile
    $this.css('height', 'auto');
    
    //Make a variable to store the heights
    var commonHeight = 0;
    
    $.fn.blockHeights = function(){
      $(this).each(function(){
        var blockHeight = $(this).outerHeight();
        if (blockHeight > commonHeight) {
          commonHeight = blockHeight;
        }
      });
      $(this).css('height', commonHeight);
    };
    
    $(window).resize(blockHeights);
    $this.blockHeights();
    return $this;
};

$(document).ready(function(){
  $('.match').equalHeight();
});
