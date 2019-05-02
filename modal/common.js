"use strict";

(function(){
    var btnOpen = document.querySelector(".btn_open");
    var btnClose = document.querySelector(".btn_close");
    var modal = document.querySelector(".sample_layer");

    function modalOpen(){
        modal.classList.add("on");
    }
    function modalClose(){
        modal.classList.remove("on");
    }

    btnOpen.addEventListener("click", modalOpen);
    btnClose.addEventListener("click", modalClose);
})();