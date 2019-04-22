"use strict";

(function(){
    var nowVal = 0;
    var tfVal = document.querySelector(".tf_val");
    var plus = document.querySelector(".plus");
    var minus = document.querySelector(".minus");
    tfVal.value = nowVal;

    plus.addEventListener("click", function(){
        if(nowVal >= 0){
            nowVal++;
            tfVal.value = nowVal;
        }
    });
    minus.addEventListener("click", function(){
        if(nowVal > 0){
            nowVal--;
            tfVal.value = nowVal;
        }
    });
    tfVal.addEventListener("keyup", function(e){
        if(e.keyCode >= 48 && e.keyCode <= 57){
            nowVal = Number(this.value);
        }else{
            alert("숫자로 넣어주세요.");
        }
    });
})();