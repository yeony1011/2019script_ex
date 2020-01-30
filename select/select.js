"use strict";

(function(){
    var regionSelect = document.querySelector(".opt_comm");
    var selectedRegion = document.querySelector(".btn_selected");   //querySelector, getElementById : dom list 출력
    var txtChoice = document.querySelector(".txt_choice");
    var valRegion = document.querySelector("#valRegion");
    var regionList = document.querySelectorAll(".list_opt li");
    var nowRegion = document.querySelectorAll(".link_option");      //querySelectorAll : node list 출력

    /*
    querySelectorAll : 유사배열
    */

    //셀렉트박스 열기
    selectedRegion.addEventListener("click", function(){
        regionSelect.classList.add("opt_open");
    });

    //셀렉트박스 닫기
    Array.from(nowRegion).forEach(el => {
        el.addEventListener("click", function(){
            //console.log(this);
            var seleVal = this.innerHTML;
            txtChoice.innerHTML = seleVal;
            valRegion.value = seleVal;
    
            
            console.log(regionList.classList);
            regionSelect.classList.remove("opt_open");
            this.parentNode.classList.add("on");
            
            //alert("선택된 지역 : "+valRegion.value);
        })
    })
})();