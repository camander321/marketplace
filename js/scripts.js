$(document).ready(function() {
  $("#form-one").submit(function(){
    $(".summary").hide();

    var product = $("input:radio[name=product]:checked").val();

    $("span.order1").text($("#name-first").val());
    $("span.order2").text($("#name-last").val());
    $("span.order3").text($("#address").val());
    $(".summary").fadeIn();

    event.preventDefault();
  });

  // $(".well").click(function(){
  //   $(".thumbnail").hide();
  //   alert(this.getElementsByClassName("thumbnail"));
  // });
});
