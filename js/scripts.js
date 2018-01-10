$(document).ready(function() {
  $("#form-one").submit(function(){
    $(".summary").hide();

    var product = $("input:radio[name=product]:checked").val();

    $("span.order1").text($("#name-first").val());
    $("span.order2").text($("#name-last").val());
    $("span.order3").text(product);
    $("span.order4").text($("#address").val());
    $("span.order5").text($("#city").val());
    $("span.order6").text($("#state").val());
    $("span.order7").text($("#zip").val());
    $("span.order8").text($("#reason").val());
    $(".summary").fadeIn();

    event.preventDefault();
  });

  $(".well").click(function(){
    $(".thumbnail").hide();
    $(this).children("img").fadeIn();
  });
});
