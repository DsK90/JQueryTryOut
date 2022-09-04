
$("h1").click(function(){
  if ($("h1").hasClass("big-title")) {
      $("h1").removeClass("big-title");
      $("h1").addClass("big-title-purple");
      console.log($('h1').hasClass('big-title-purple'))
  }
  else if ($("h1").hasClass("big-title-purple")) {
      $("h1").removeClass("big-title-purple");
      $("h1").addClass("big-title");
    }})


$(document).keydown(function(event) {
  console.log(event.key);
  $("h1").text(event.key);
})

$("button").click(function(){
  $("button").html("<p>Why did you do that?</p>");
})
