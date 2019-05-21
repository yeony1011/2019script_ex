"use strict";

(function(){
    var regionSelect = document.querySelector(".opt_comm");

    document.querySelector(".link_selected").addEventListener("click", function(){
        console.log("open");
        regionSelect.classList.add("opt_open");
    });
    document.querySelector(".link_option").addEventListener("click", function(){
        console.log("close");
        //regionSelect.classList.remove("opt_open");
    });
})();