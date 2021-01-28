$(document).ready(function(){   // 제이쿼리 v3.xx 부터 사라짐
    'use strict';               // 자바스크립트 인터프리터에서 코드를 더 엄격하게 처리
    
    //console.log('main.js loaded');

    paper.install(window);      // paper.js를 전역에 스코프 설치
    paper.setup(document.getElementById('mainCanvas'));     // paper.js를 캔버스에 연결, paper.js가 그림그리기 준비

    //TODO
    /*
    var c = Shape.Circle(200, 200, 50);     // 원객체, 매개변수 3개 받음(X, Y, r)
    c.fillColor = 'green';
    */

    var c;
    for(var x=25; x<400; x+=50){
        for(var y=25; y<400; y+=50){
            c = Shape.Circle(x, y, 20);
            c.fillColor = 'green';
        }
    }

    var tool = new Tool();      // 객체
    tool.onMouseDown = function(event){     // 이벤트 핸들러 : onMouseDown
        var cir = Shape.Circle(event.point.x, event.point.y, 20);
        //var cir = Shape.Circle(event.point, 20);      // event.point : 프로퍼티
        cir.fillColor = 'yellowgreen';
    }

    var c2 = Shape.Circle(200,200,80);
    c2.fillColor = 'black';
    var text = new PointText(200,200);
    text.justification = 'center';
    text.fillColor = 'white';
    text.fontSize = 20;
    text.content = 'hello world';

    paper.view.draw();      // 화면에 그림
});