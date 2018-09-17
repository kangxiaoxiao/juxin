$(document).ready(function(){
    var  infoId=GetRequest("id").id||1;
    console.log("infoId",infoId);
    $.get("./json/info.json",function(res){
        var infoList=res.info;
        var listCon="";
        for(var i=0;i<infoList.length;i++){
            if(infoId==infoList[i].id){
                listCon="<div class='title_wrapper'>" +
                    "                                  <h3>"+infoList[i].title+"</h3>" +
                    "                              </div>" +
                    "                             <div class='con_wrapper'>"+infoList[i].content+"</div>"
            }
        }
        if(listCon){
            $("#infoDetail").html("").append(listCon);
        }

    })


})
