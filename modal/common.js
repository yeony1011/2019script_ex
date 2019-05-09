"use strict";

(function(){
    var btnOpen = document.querySelector(".btn_open");
    var btnClose = document.querySelector(".btn_close");
    var bodyCont = document.querySelector("body");
    var dimModal = document.querySelector(".dimmed_layer");

    //modal open
    function modalOpen(){
        bodyCont.classList.add("modal_on");
    }

    //modal close
    function modalClose(){
        bodyCont.classList.remove("modal_on");
    }

    btnOpen.addEventListener("click", modalOpen);
    btnClose.addEventListener("click", modalClose);
    dimModal.addEventListener("click", modalClose);
})();