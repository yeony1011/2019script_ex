(function(global, $) {
    'use strict';
    
    /**
     * 문서 객체 참조 변수
     */	
    var $root = null;
    var $document = $(document);  
    var $contPromotion = null;
    var $input = null;
    var $btn = null;
  
    /**
     * @function
     * @summary jQuery 객체화
     */
    function setReferenceDomEls() {
      $root = $('html, body');
      $contPromotion = $('.container-promotion.prm_son');
      $input = $('.inp_date');
      $btn = $('.btn_g');
    }
  
    /**
     * @function
     * @summary 초기화
     */
    function init() {
      settings();    
      bindEvents();
      $contPromotion.motionScroll();
    }
  
    /**
     * @function
     * @summary 초기 설정
     */
    function settings() {
      setReferenceDomEls();  
    }
  
    /**
     * @function
     * @summary 이벤트 연결
     */
    function bindEvents() {
        $btn.on('click', function(){
            
            if($input.val() == '1991-07-26'){
                var layerBirth = $btn.layerComm({ 
                    layerPop: $('#layerBirth'),
                    btnOpen: '.btn_g',
                    callbackClose: function(){
                        $('.popup_layer').removeClass('on');
                    }
                });
            }else if($input.val() == '1992-10-11'){
                alert('내생일 말고..');
            }
            else{
                alert('정확한 생일을 입력해 주세요~');
            }
        });
    }
  
    /**
     * @function
     * @summary 페이지 스크롤 플러그인
     * @param {String} element 요소
     * @param {Object} settings 옵션
     */
    function MotionScroll(element, settings) {
      var _ = this;
  
      _.defaults = {	
        aniWrapper: $(element),
        pages: $('.page_scroll'),
        linkTop: $('.link_top'),
        navs: $('.list_menu a.link_menu'),
        root: $('html,body'),
        onClass: 'on',
        stepClass: 'step'
      }
  
      _.initials = {
        navsParent: $('.list_menu a.link_menu'),
        aniWrapper: $('.container-promotion'),
        winHeight: 0,
        pages: null,
        navs: null,
        linkTop: null,
        windowLoad: false,
        currentPage: 0,
        stepCountAll: 0,
        stepClassAll:'',
        stepAllIdx: 0,
        pagesOffset: [],
        isGnbScroll: false,
        root: false
      }
  
      $.extend(_, _.initials);
      _.options = $.extend({}, _.defaults, settings);
      _.root = _.options.root;
      _.pages = _.options.pages;
      _.linkTop = _.options.linkTop;
      _.navs = _.options.navs;
      _.stepCountAll = _.pages.length;
      _.stepAllIdx = _.stepCountAll -1;    
      _.windowLoad = true;
      _.winHeight = $(window).height();
      _.winScrollTop = $(window).scrollTop();
      _.stepClassAll = _.concatStepClassAll();
      _.getOffsetArr();
      _.scrollAni();
      
      $(window).resize(function() {
        _.getOffsetArr();
      });
  
      $(window).scroll(function () {
        if (!_.windowLoad) return false;
        _.winScrollTop = $(window).scrollTop();
        _.scrollAni();
      });        
  
      _.navs.click(function(event){
        event.preventDefault();
  
        var _idx = $(this).data('step');
        if(_.isGnbScroll) return true;
        _.isGnbScroll = true;
        _.pagingAni(_idx);     
        
        _.root.animate({
            scrollTop: $(this.hash).offset().top
        }, 500);
        
        window.setTimeout(function(){
            _.isGnbScroll = false;
        },600);
      });
  
      _.linkTop.click(function (event) {
        event.preventDefault();
        $root.animate({ scrollTop: 0 }, 500);
      });
    };
  
    // step class 전체 붙이기
    MotionScroll.prototype.concatStepClassAll = function() {
      var _ = this,
      result = '',
      i;
  
      for (i = 0;i < _.stepCountAll;i++) {
        result += _.options.stepClass + i + ' ';
      }
  
      return result;
    }
  
    MotionScroll.prototype.scrollAni = function() {
      var _ = this,
          _winPos = _.winScrollTop,
          _winH = _.winHeight,
          i;
        
      if(!_.isGnbScroll){
        for(i = 0;i < _.stepCountAll; i++) {
          if(_winPos < _.pagesOffset[i+1] && _.pagesOffset[i] < _winPos) {
            _.currentPage = i;
            _.pagingAni(i);
          } else if(_winPos + (_winH * 0.5) > _.pagesOffset[_.stepAllIdx]) {
            _.currentPage = _.stepAllIdx;
            _.pagingAni(_.stepAllIdx);
          }
        }
      }
      return false;
    }
  
    MotionScroll.prototype.getOffsetArr = function(delta) {
      var _ = this,
          i;
      _.pagesOffset = [];  
  
      for(i = 0;i < _.stepCountAll; i++) {
        var _temp = _.pages.eq(i).offset().top;
        _.pagesOffset.push(_temp);
      }
  
      return _.pagesOffset;
    }
  
    MotionScroll.prototype.pagingAni = function(idx) {
      var _ = this;
      _.navsParent.attr('aria-selected', 'false').removeClass(_.options.onClass);
      _.navsParent.eq(idx).attr('aria-selected', 'true').addClass(_.options.onClass);
      
      window.setTimeout(function() {
      _.aniWrapper.attr('class','container-promotion');
      _.aniWrapper.addClass(_.options.stepClass + idx);         
      }, 100);
    }
  
    $.fn.motionScroll = function() {
      var _ = this,
        opt = arguments[0],
          l = _.length,
          i;
  
      for (i = 0; i < l; i++) {
        if (typeof opt == 'object' || typeof opt == 'undefined') {
          _[i].motionScroll = new MotionScroll(_[i], opt);
        }
      }
  
      return _;
    }
    
    /**
     * @function
     * @summary 레이어 팝업
     */
      function layerComm(element, settings) {
          var _ = this;
  
          // 커스텀 가능한 기본 옵션
          _.defaults = {
              btnOpen: '.link_',
        btnClose: '.link_close', /* {string} 닫기 버튼 클래스 */
        btnOk: '.btn_ok',
              layerPop: $('.popup_layer'),/* {selector} 오픈되는 레이어 */
              layerPopIn: $('.inner_popup_layer'), /* {selector} 오픈되는 레이어의 inner 클래스 */
              layerDim: $('.dimmed_layer'), /* {selector} 딤드 레이어 */
              showSpeed: 300, /* 레이어 팝업 열리는 속도 */
              closeSpeed: 300, /* 레이어 팝업 닫히는 속도 */
              callbackOpen: function(_){
              },
              callbackClose: function(_){
              },
          }
  
          // 플러그인 내부에서 사용하는 변수
          _.initials = {
              windowLoad: false,
              onClass: 'on'
          }
  
          $.extend(_, _.initials);
          _.options = $.extend({}, _.defaults, settings);
  
          // 옵션을 내부변수에 맵핑
          _.$layer = $(element);
          _.btnOpen = _.options.btnOpen;
      _.btnClose = _.options.btnClose;
      _.btnOk = _.options.btnOk;
          _.layerPop = _.options.layerPop;
          _.layerPopIn = _.options.layerPopIn;
          _.layerDim = _.options.layerDim;
          _.showSpeed = _.options.showSpeed;
          _.closeSpeed = _.options.closeSpeed;
  
          // window load 체크
          $(window).load(function() {
              _.windowLoad = true;
          });
  
          _.preventDef = function(e){
              e.preventDefault();
              return false;
          }
          
          // 레이어 열기		
          $(document).on('click', _.btnOpen, function (event) {
              _.openLayer();
        _.options.callbackOpen(_, event.currentTarget);
              return false;
          });		
  
          // 레이어 닫기 (버튼)
      _.layerPop.find(_.btnClose).on('click', function () {
              _.closeLayer();
              _.options.callbackClose(_, _.btnClose);
              return false;
      });
  
      // 레이어 닫기 (확인 버튼)
      _.layerPop.find(_.btnOk).on('click', function () {
        _.closeLayer();
        _.options.callbackClose(_, _.btnOk);
        return false;
      });
      
          // 레이어 닫기 (딤)
          _.layerDim.on('click', function() {
              _.closeLayer();
              _.options.callbackClose(_, _.layerDim);
              return false;
          });
      }	
  
      //팝업 열기
      layerComm.prototype.openLayer = function () {
          var _ = this;
  
          _.layerDim.addClass(_.onClass);
          _.layerPop.show();
      
          window.setTimeout(function(){ 
        _.layerPop.addClass(_.onClass);
        $('body').addClass('fixed_body');
          },10);
  
          // $('html,body').bind('mousewheel', _.preventDef);
          _.$layer.trigger('openLayer', [_]);
      }
  
      //팝업 닫기
      layerComm.prototype.closeLayer = function () {
          var _ = this;
  
          _.layerDim.removeClass(_.onClass);
          _.layerPop.removeClass(_.onClass);
          _.layerPop.css({'transition-duration': _.closeSpeed + 'ms'});
          _.layerPopIn.css({'transition-duration': _.closeSpeed + 'ms'});
  
          window.setTimeout(function(){       
        _.layerPop.hide();
              _.layerPop.css({'transition-duration': ''});
              _.layerPopIn.css({'transition-duration': ''});
          },_.closeSpeed);
  
      // $('html,body').unbind('mousewheel', _.preventDef);
      $('body').removeClass('fixed_body');
  
          _.$layer.trigger('closeLayer', [_]);
      }
  
      // jquery 플러그인으로 생성
      $.fn.layerComm = function() {
          var _ = this,
          opt = arguments[0],
          args = Array.prototype.slice.call(arguments, 1),
          l = _.length,
          i,
          ret;
          for (i = 0; i < l; i++) {
        if (typeof opt == 'object' || typeof opt == 'undefined'){
          _[i].layerComm = new layerComm(_[i], opt);
        } else {
          ret = _[i].layerComm[opt].apply(_[i].layerComm, args);
          if (typeof ret != 'undefined') return ret;
        }
          }
          return _;
    };
  
  
    $document.ready(init);
  })(window, window.jQuery);