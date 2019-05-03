"use strict";

(function(){
    var btnOpen = document.querySelector(".btn_open");
    var btnClose = document.querySelector(".btn_close");
    var modal = document.querySelector(".sample_layer");
    var dimModal = document.querySelector(".dimmed_layer");

    //modal open
    function modalOpen(){
        modal.classList.add("on");
        dimModal.classList.add("on");
    }

    //modal close
    function modalClose(){
        modal.classList.remove("on");
        dimModal.classList.remove("on");
    }

    btnOpen.addEventListener("click", modalOpen);
    btnClose.addEventListener("click", modalClose);
    dimModal.addEventListener("click", modalClose);
})();