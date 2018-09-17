$(document).ready(function(){
      var lis=$(".leftTitleList").find("li");
      var detaildLis=$(".serviceDetail").find(".item");

      /*$(lis).click(function(){
          $(this).addClass("active").siblings().removeClass("active")
      })*/
      var id=GetRequest("id").id||1;
      $(lis[id-1]).addClass("active").siblings().removeClass("active");
      $(detaildLis).css({"display":"none"});
      $(detaildLis[id-1]).css({"display":"block"});
})


