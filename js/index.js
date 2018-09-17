$(document).ready(function(){
    var mySwiper = new Swiper ('.swiper-container', {
        direction: 'horizontal',
        loop: true,
        pagination: {
            el: '.swiper-pagination',
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        }
    })

    $.get("./json/info.json",function(res){
        var infoList=res.info;
        var len=(infoList.length>3)?3:(infoList.length);
        var listCon="";
        for(var i=0;i<len;i++){
            listCon+="<li>\n" +
               "                               <a class='info_con' href='./infoDetail.html?id="+infoList[i].id+"'>\n" +
               "                                   <div class='left'>" +
               "                                       <div class='img_wrapper' style=\"background:url("+(infoList[i].titleImg)+");background-size: cover;\">" +
               "                                       </div>" +
               "                                   </div>" +
               "                                   <div class='right'>" +
               "                                       <h3>"+infoList[i].title+"</h3>" +
               "                                       <p class='con'>"+infoList[i].content+"</p>\n" +
               "                                       <i class='detail'>查看详情></i>" +
               "                                   </div>" +
               "                               </a>" +
               "                           </li>"
        }
        if(listCon){
            $("#info_con").html("").append(listCon);
        }

    })
})


