"use strict";

(function(){
    var nowVal = 1;
    var minVal = 1;
    var maxVal = 10;
    var tfVal = document.querySelector(".tf_val");
    var plus = document.querySelector(".btn_plus");
    var minus = document.querySelector(".btn_minus");

    document.querySelector(".txt_min").innerHTML = "최소 " + minVal;
    document.querySelector(".txt_max").innerHTML = "최대 " + maxVal;
    tfVal.value = nowVal;

    // 증가
    function increase(){
        if(nowVal < maxVal){
            nowVal++;
            tfVal.value = nowVal;
        }
        nowVal == maxVal ? this.disabled = true : minus.disabled = false;
    }

    // 감소
    function decrease(){
        if(nowVal > minVal){
            nowVal--;
            tfVal.value = nowVal;
        }
        nowVal == minVal ? this.disabled = true : plus.disabled = false;
    }

    // 숫자체크
    function numChk(e){
        var key = e.keyCode || e.which; // 모든 브라우저에서 작동할 수 있음
        if(key === 8) return;   // back키 버튼 : 함수 빠져나감
        if(key >= 48 && key <= 57){ // 숫자키 버튼
            nowVal = Number(this.value);
            if(nowVal > maxVal){
                alert("최대 숫자값을 확인해주세요.");
            }else if(nowVal < minVal){
                alert("최소 숫자값을 확인해주세요.");
            }
        }else{
            alert("숫자로 넣어주세요.");
        }
    }

    plus.addEventListener("click", increase);
    minus.addEventListener("click", decrease);
    tfVal.addEventListener("keyup", numChk);
})();