"use strict";

(function(){
    var regionSelect = document.querySelector(".opt_comm");
    var selectedRegion = document.querySelector(".link_selected");
    var nowRegion = document.querySelector(".link_option");

    //셀렉트박스 열기
    selectedRegion.addEventListener("click", function(){
        regionSelect.classList.add("opt_open");
    });

    //셀렉트박스 닫기
    nowRegion.addEventListener("click", function(){
        var seleVal = this.innerHTML;
        document.querySelector(".link_selected").innerHTML = seleVal;

        this.parentNode.classList.add("on");
        regionSelect.classList.remove("opt_open");

        alert("선택된 지역 : "+seleVal);
    });
})();