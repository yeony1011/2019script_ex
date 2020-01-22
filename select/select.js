"use strict";

(function(){
    var regionSelect = document.querySelector(".opt_comm");
    var selectedRegion = document.querySelector(".btn_selected");   //querySelector, getElementById : dom list 출력
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
            console.log(this);
            var seleVal = this.innerHTML;
            document.querySelector(".txt_choice").innerHTML = seleVal;
            document.querySelector(".val_region").value = seleVal;
    
            this.parentNode.classList.add("on");
            regionSelect.classList.remove("opt_open");
            
            alert("선택된 지역 : "+seleVal);
        })
    })
})();