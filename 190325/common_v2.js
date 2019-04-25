"use strict";

(function(){
    var nowVal = 1;
    var minVal = 1;
    var maxVal = 30;
    var tfVal = document.querySelector(".tf_val");
    var plus = document.querySelector(".plus");
    var minus = document.querySelector(".minus");
    tfVal.value = nowVal;

    // 증가
    function increase(){
        if(nowVal < maxVal){
            nowVal++;
            tfVal.value = nowVal;
        }
    }

    // 감소
    function decrease(){
        if(nowVal > minVal){
            nowVal--;
            tfVal.value = nowVal;
        }
    }

    // 숫자체크
    function numChk(e){
        var key = e.keyCode || e.which; // 모든 브라우저에서 작동할 수 있음
        if(key === 8) return;   // back키 버튼 : 함수 빠져나감
        if(key >= 48 && key <= 57){ // 숫자키 버튼
            nowVal = Number(this.value);
        }else{
            alert("숫자로 넣어주세요.");
        }
    }

    plus.addEventListener("click", increase);
    minus.addEventListener("click", decrease);
    tfVal.addEventListener("keyup", numChk);
})();