$(document).ready(function(){
    var nowVal = 0;
    var $tfVal = $(".tf_val");
    $tfVal.val(nowVal);
    $(".plus").on("click", function(){
        if(nowVal >= 0){
            nowVal = nowVal + 1;
            $tfVal.val(nowVal);
        }
    });
    $(".minus").on("click", function(){
        if(nowVal > 0){
            nowVal = nowVal - 1;
            $tfVal.val(nowVal);
        }
    });
    $tfVal.on("keyup", function(e){
        if(e.keyCode >= 48 && e.keyCode <= 57){
            nowVal = Number($(this).val());
        }else{
            alert("숫자로 넣어주세요.");
        }
    });
});