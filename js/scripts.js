{
$(function () {
var $scratchit = $('.scratchit').scratchIt();
});

  $("#scratch-card-1").on('mousedown mouseup',function(){
    $("#scratch-card-1").toggleClass("cursor-grabbing");
  });
  
  $("#scratch-card-2").click(function(){
    $("#scratch-card-2").toggleClass("cursor-grabbing");
  });
  
  $("#scratch-card-3").click(function(){
    $("#scratch-card-3").toggleClass("cursor-grabbing");
  });
}