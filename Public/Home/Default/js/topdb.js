﻿/*
Publish Time:20130814
Author ： Yuuk
*/
(function(a){a.fn.slide=function(b){return a.fn.slide.defaults={effect:"fade",autoPlay:!1,delayTime:500,interTime:2500,triggerTime:150,defaultIndex:0,titCell:".hd li",mainCell:".bd",targetCell:null,trigger:"mouseover",scroll:1,vis:1,titOnClassName:"on",autoPage:!1,prevCell:".prev",nextCell:".next",pageStateCell:".pageState",opp:!1,pnLoop:!0,easing:"linear",startFun:null,endFun:null,switchLoad:null},this.each(function(){var c=a.extend({},a.fn.slide.defaults,b),d=c.effect,e=a(c.prevCell,a(this)),f=a(c.nextCell,a(this)),g=a(c.pageStateCell,a(this)),h=a(c.titCell,a(this)),i=h.size(),j=a(c.mainCell,a(this)),k=j.children().size(),l=c.switchLoad;if(null!=c.targetCell)var m=a(c.targetCell,a(this));var n=parseInt(c.defaultIndex),o=parseInt(c.delayTime),p=parseInt(c.interTime);parseInt(c.triggerTime);var r=parseInt(c.scroll),s=parseInt(c.vis),t="false"==c.autoPlay||0==c.autoPlay?!1:!0,u="false"==c.opp||0==c.opp?!1:!0,v="false"==c.autoPage||0==c.autoPage?!1:!0,w="false"==c.pnLoop||0==c.pnLoop?!1:!0,x=0,y=0,z=0,A=0,B=c.easing,C=null,D=n;if(0==i&&(i=k),v){var E=k-s;i=1+parseInt(0!=E%r?E/r+1:E/r),0>=i&&(i=1),h.html("");for(var F=0;i>F;F++)h.append("<li>"+(F+1)+"</li>");var h=a("li",h)}if(j.children().each(function(){a(this).width()>z&&(z=a(this).width(),y=a(this).outerWidth(!0)),a(this).height()>A&&(A=a(this).height(),x=a(this).outerHeight(!0))}),k>=s)switch(d){case"fold":j.css({position:"relative",width:y,height:x}).children().css({position:"absolute",width:z,left:0,top:0,display:"none"});break;case"top":j.wrap('<div class="tempWrap" style="overflow:hidden; position:relative; height:'+s*x+'px"></div>').css({position:"relative",padding:"0",margin:"0"}).children().css({height:A});break;case"left":j.wrap('<div class="tempWrap" style="overflow:hidden; position:relative; width:'+s*y+'px"></div>').css({width:k*y,position:"relative",overflow:"hidden",padding:"0",margin:"0"}).children().css({"float":"left",width:z});break;case"leftLoop":case"leftMarquee":j.children().clone().appendTo(j).clone().prependTo(j),j.wrap('<div class="tempWrap" style="overflow:hidden; position:relative; width:'+s*y+'px"></div>').css({width:3*k*y,position:"relative",overflow:"hidden",padding:"0",margin:"0",left:-k*y}).children().css({"float":"left",width:z});break;case"topLoop":case"topMarquee":j.children().clone().appendTo(j).clone().prependTo(j),j.wrap('<div class="tempWrap" style="overflow:hidden; position:relative; height:'+s*x+'px"></div>').css({height:3*k*x,position:"relative",padding:"0",margin:"0",top:-k*x}).children().css({height:A})}var G=function(){a.isFunction(c.startFun)&&c.startFun(n,i)},H=function(){a.isFunction(c.endFun)&&c.endFun(n,i)},I=function(b){b.eq(n).find("img").each(function(){a(this).attr(l)!==void 0&&a(this).attr("src",a(this).attr(l)).removeAttr(l)})},J=function(a){if(D!=n||a||"leftMarquee"==d||"topMarquee"==d){switch(d){case"fade":case"fold":case"top":case"left":n>=i?n=0:0>n&&(n=i-1);break;case"leftMarquee":case"topMarquee":n>=1?n=1:0>=n&&(n=0);break;case"leftLoop":case"topLoop":var b=n-D;i>2&&b==-(i-1)&&(b=1),i>2&&b==i-1&&(b=-1);var p=Math.abs(b*r);n>=i?n=0:0>n&&(n=i-1)}if(G(),null!=l&&I(j.children()),m&&(null!=l&&I(m),m.hide().eq(n).animate({opacity:"show"},o,function(){j[0]||H()})),k>=s)switch(d){case"fade":j.children().stop(!0,!0).eq(n).animate({opacity:"show"},o,B,function(){H()}).siblings().hide();break;case"fold":j.children().stop(!0,!0).eq(n).animate({opacity:"show"},o,B,function(){H()}).siblings().animate({opacity:"hide"},o,B);break;case"top":j.stop(!0,!1).animate({top:-n*r*x},o,B,function(){H()});break;case"left":j.stop(!0,!1).animate({left:-n*r*y},o,B,function(){H()});break;case"leftLoop":0>b?j.stop(!0,!0).animate({left:-(k-p)*y},o,B,function(){for(var a=0;p>a;a++)j.children().last().prependTo(j);j.css("left",-k*y),H()}):j.stop(!0,!0).animate({left:-(k+p)*y},o,B,function(){for(var a=0;p>a;a++)j.children().first().appendTo(j);j.css("left",-k*y),H()});break;case"topLoop":0>b?j.stop(!0,!0).animate({top:-(k-p)*x},o,B,function(){for(var a=0;p>a;a++)j.children().last().prependTo(j);j.css("top",-k*x),H()}):j.stop(!0,!0).animate({top:-(k+p)*x},o,B,function(){for(var a=0;p>a;a++)j.children().first().appendTo(j);j.css("top",-k*x),H()});break;case"leftMarquee":var q=j.css("left").replace("px","");0==n?j.animate({left:++q},0,function(){if(j.css("left").replace("px","")>=0){for(var a=0;k>a;a++)j.children().last().prependTo(j);j.css("left",-k*y)}}):j.animate({left:--q},0,function(){if(2*-k*y>=j.css("left").replace("px","")){for(var a=0;k>a;a++)j.children().first().appendTo(j);j.css("left",-k*y)}});break;case"topMarquee":var t=j.css("top").replace("px","");0==n?j.animate({top:++t},0,function(){if(j.css("top").replace("px","")>=0){for(var a=0;k>a;a++)j.children().last().prependTo(j);j.css("top",-k*x)}}):j.animate({top:--t},0,function(){if(2*-k*x>=j.css("top").replace("px","")){for(var a=0;k>a;a++)j.children().first().appendTo(j);j.css("top",-k*x)}})}h.removeClass(c.titOnClassName).eq(n).addClass(c.titOnClassName),D=n,0==w&&(f.removeClass("nextStop"),e.removeClass("prevStop"),0==n?e.addClass("prevStop"):n==i-1&&f.addClass("nextStop")),g.html("<span>"+(n+1)+"</span>/"+i)}};J(!0),t&&("leftMarquee"==d||"topMarquee"==d?(u?n--:n++,C=setInterval(J,p),j.hover(function(){t&&clearInterval(C)},function(){t&&(clearInterval(C),C=setInterval(J,p))})):(C=setInterval(function(){u?n--:n++,J()},p),a(this).hover(function(){t&&clearInterval(C)},function(){t&&(clearInterval(C),C=setInterval(function(){u?n--:n++,J()},p))})));var K;"mouseover"==c.trigger?h.hover(function(){n=h.index(this),K=window.setTimeout(J,c.triggerTime)},function(){clearTimeout(K)}):h.click(function(){n=h.index(this),J()}),f.click(function(){(1==w||n!=i-1)&&(n++,J())}),e.click(function(){(1==w||0!=n)&&(n--,J())})})}})(jQuery),jQuery.easing.jswing=jQuery.easing.swing,jQuery.extend(jQuery.easing,{def:"easeOutQuad",swing:function(a,b,c,d,e){return jQuery.easing[jQuery.easing.def](a,b,c,d,e)},easeInQuad:function(a,b,c,d,e){return d*(b/=e)*b+c},easeOutQuad:function(a,b,c,d,e){return-d*(b/=e)*(b-2)+c},easeInOutQuad:function(a,b,c,d,e){return 1>(b/=e/2)?d/2*b*b+c:-d/2*(--b*(b-2)-1)+c},easeInCubic:function(a,b,c,d,e){return d*(b/=e)*b*b+c},easeOutCubic:function(a,b,c,d,e){return d*((b=b/e-1)*b*b+1)+c},easeInOutCubic:function(a,b,c,d,e){return 1>(b/=e/2)?d/2*b*b*b+c:d/2*((b-=2)*b*b+2)+c},easeInQuart:function(a,b,c,d,e){return d*(b/=e)*b*b*b+c},easeOutQuart:function(a,b,c,d,e){return-d*((b=b/e-1)*b*b*b-1)+c},easeInOutQuart:function(a,b,c,d,e){return 1>(b/=e/2)?d/2*b*b*b*b+c:-d/2*((b-=2)*b*b*b-2)+c},easeInQuint:function(a,b,c,d,e){return d*(b/=e)*b*b*b*b+c},easeOutQuint:function(a,b,c,d,e){return d*((b=b/e-1)*b*b*b*b+1)+c},easeInOutQuint:function(a,b,c,d,e){return 1>(b/=e/2)?d/2*b*b*b*b*b+c:d/2*((b-=2)*b*b*b*b+2)+c},easeInSine:function(a,b,c,d,e){return-d*Math.cos(b/e*(Math.PI/2))+d+c},easeOutSine:function(a,b,c,d,e){return d*Math.sin(b/e*(Math.PI/2))+c},easeInOutSine:function(a,b,c,d,e){return-d/2*(Math.cos(Math.PI*b/e)-1)+c},easeInExpo:function(a,b,c,d,e){return 0==b?c:d*Math.pow(2,10*(b/e-1))+c},easeOutExpo:function(a,b,c,d,e){return b==e?c+d:d*(-Math.pow(2,-10*b/e)+1)+c},easeInOutExpo:function(a,b,c,d,e){return 0==b?c:b==e?c+d:1>(b/=e/2)?d/2*Math.pow(2,10*(b-1))+c:d/2*(-Math.pow(2,-10*--b)+2)+c},easeInCirc:function(a,b,c,d,e){return-d*(Math.sqrt(1-(b/=e)*b)-1)+c},easeOutCirc:function(a,b,c,d,e){return d*Math.sqrt(1-(b=b/e-1)*b)+c},easeInOutCirc:function(a,b,c,d,e){return 1>(b/=e/2)?-d/2*(Math.sqrt(1-b*b)-1)+c:d/2*(Math.sqrt(1-(b-=2)*b)+1)+c},easeInElastic:function(a,b,c,d,e){var f=1.70158,g=0,h=d;if(0==b)return c;if(1==(b/=e))return c+d;if(g||(g=.3*e),Math.abs(d)>h){h=d;var f=g/4}else var f=g/(2*Math.PI)*Math.asin(d/h);return-(h*Math.pow(2,10*(b-=1))*Math.sin((b*e-f)*2*Math.PI/g))+c},easeOutElastic:function(a,b,c,d,e){var f=1.70158,g=0,h=d;if(0==b)return c;if(1==(b/=e))return c+d;if(g||(g=.3*e),Math.abs(d)>h){h=d;var f=g/4}else var f=g/(2*Math.PI)*Math.asin(d/h);return h*Math.pow(2,-10*b)*Math.sin((b*e-f)*2*Math.PI/g)+d+c},easeInOutElastic:function(a,b,c,d,e){var f=1.70158,g=0,h=d;if(0==b)return c;if(2==(b/=e/2))return c+d;if(g||(g=e*.3*1.5),Math.abs(d)>h){h=d;var f=g/4}else var f=g/(2*Math.PI)*Math.asin(d/h);return 1>b?-.5*h*Math.pow(2,10*(b-=1))*Math.sin((b*e-f)*2*Math.PI/g)+c:.5*h*Math.pow(2,-10*(b-=1))*Math.sin((b*e-f)*2*Math.PI/g)+d+c},easeInBack:function(a,b,c,d,e,f){return void 0==f&&(f=1.70158),d*(b/=e)*b*((f+1)*b-f)+c},easeOutBack:function(a,b,c,d,e,f){return void 0==f&&(f=1.70158),d*((b=b/e-1)*b*((f+1)*b+f)+1)+c},easeInOutBack:function(a,b,c,d,e,f){return void 0==f&&(f=1.70158),1>(b/=e/2)?d/2*b*b*(((f*=1.525)+1)*b-f)+c:d/2*((b-=2)*b*(((f*=1.525)+1)*b+f)+2)+c},easeInBounce:function(a,b,c,d,e){return d-jQuery.easing.easeOutBounce(a,e-b,0,d,e)+c},easeOutBounce:function(a,b,c,d,e){return 1/2.75>(b/=e)?d*7.5625*b*b+c:2/2.75>b?d*(7.5625*(b-=1.5/2.75)*b+.75)+c:2.5/2.75>b?d*(7.5625*(b-=2.25/2.75)*b+.9375)+c:d*(7.5625*(b-=2.625/2.75)*b+.984375)+c},easeInOutBounce:function(a,b,c,d,e){return e/2>b?.5*jQuery.easing.easeInBounce(a,2*b,0,d,e)+c:.5*jQuery.easing.easeOutBounce(a,2*b-e,0,d,e)+.5*d+c}});
/* HTML5.js*/
(function(l,f){function m(){var a=e.elements;return"string"==typeof a?a.split(" "):a}function i(a){var b=n[a[o]];b||(b={},h++,a[o]=h,n[h]=b);return b}function p(a,b,c){b||(b=f);if(g)return b.createElement(a);c||(c=i(b));b=c.cache[a]?c.cache[a].cloneNode():r.test(a)?(c.cache[a]=c.createElem(a)).cloneNode():c.createElem(a);return b.canHaveChildren&&!s.test(a)?c.frag.appendChild(b):b}function t(a,b){if(!b.cache)b.cache={},b.createElem=a.createElement,b.createFrag=a.createDocumentFragment,b.frag=b.createFrag();
a.createElement=function(c){return!e.shivMethods?b.createElem(c):p(c,a,b)};a.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+m().join().replace(/\w+/g,function(a){b.createElem(a);b.frag.createElement(a);return'c("'+a+'")'})+");return n}")(e,b.frag)}function q(a){a||(a=f);var b=i(a);if(e.shivCSS&&!j&&!b.hasCSS){var c,d=a;c=d.createElement("p");d=d.getElementsByTagName("head")[0]||d.documentElement;c.innerHTML="x<style>article,aside,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}</style>";
c=d.insertBefore(c.lastChild,d.firstChild);b.hasCSS=!!c}g||t(a,b);return a}var k=l.html5||{},s=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,r=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,j,o="_html5shiv",h=0,n={},g;(function(){try{var a=f.createElement("a");a.innerHTML="<xyz></xyz>";j="hidden"in a;var b;if(!(b=1==a.childNodes.length)){f.createElement("a");var c=f.createDocumentFragment();b="undefined"==typeof c.cloneNode||
"undefined"==typeof c.createDocumentFragment||"undefined"==typeof c.createElement}g=b}catch(d){g=j=!0}})();var e={elements:k.elements||"abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup main mark meter nav output progress section summary time video",version:"3.6.2pre",shivCSS:!1!==k.shivCSS,supportsUnknownElements:g,shivMethods:!1!==k.shivMethods,type:"default",shivDocument:q,createElement:p,createDocumentFragment:function(a,b){a||(a=f);if(g)return a.createDocumentFragment();
for(var b=b||i(a),c=b.frag.cloneNode(),d=0,e=m(),h=e.length;d<h;d++)c.createElement(e[d]);return c}};l.html5=e;q(f)})(this,document);
/*ToFavorite*/
function addToFavorite(){var a="http://www.sucaijiayuan.com/";var b="97\u7ad9\u957f\u7f51";if(document.all){window.external.AddFavorite(a,b)}else if(window.sidebar){window.sidebar.addPanel(b,a,"")}else{alert("\u54ce\u54df\uff0c\u60a8\u7684\u6d4f\u89c8\u5668\u4e0d\u652f\u6301\u6b64\u64cd\u4f5c\n\u8bf7\u76f4\u63a5\u5c1d\u8bd5\u4f7f\u7528Ctrl+D\u6536\u85cf\u672c\u7ad9~")}}
/*! Lazy Load 1.9.5 - MIT license - Copyright 2010-2015 Mika Tuupola */
!function(a,b,c,d){var e=a(b);a.fn.lazyload=function(f){function g(){var b=0;i.each(function(){var c=a(this);if(!j.skip_invisible||c.is(":visible"))if(a.abovethetop(this,j)||a.leftofbegin(this,j));else if(a.belowthefold(this,j)||a.rightoffold(this,j)){if(++b>j.failure_limit)return!1}else c.trigger("appear"),b=0})}var h,i=this,j={threshold:0,failure_limit:0,event:"scroll",effect:"show",container:b,data_attribute:"original",skip_invisible:!1,appear:null,load:null,placeholder:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC"};return f&&(d!==f.failurelimit&&(f.failure_limit=f.failurelimit,delete f.failurelimit),d!==f.effectspeed&&(f.effect_speed=f.effectspeed,delete f.effectspeed),a.extend(j,f)),h=j.container===d||j.container===b?e:a(j.container),0===j.event.indexOf("scroll")&&h.bind(j.event,function(){return g()}),this.each(function(){var b=this,c=a(b);b.loaded=!1,(c.attr("src")===d||c.attr("src")===!1)&&c.is("img")&&c.attr("src",j.placeholder),c.one("appear",function(){if(!this.loaded){if(j.appear){var d=i.length;j.appear.call(b,d,j)}a("<img />").bind("load",function(){var d=c.attr("data-"+j.data_attribute);c.hide(),c.is("img")?c.attr("src",d):c.css("background-image","url('"+d+"')"),c[j.effect](j.effect_speed),b.loaded=!0;var e=a.grep(i,function(a){return!a.loaded});if(i=a(e),j.load){var f=i.length;j.load.call(b,f,j)}}).attr("src",c.attr("data-"+j.data_attribute))}}),0!==j.event.indexOf("scroll")&&c.bind(j.event,function(){b.loaded||c.trigger("appear")})}),e.bind("resize",function(){g()}),/(?:iphone|ipod|ipad).*os 5/gi.test(navigator.appVersion)&&e.bind("pageshow",function(b){b.originalEvent&&b.originalEvent.persisted&&i.each(function(){a(this).trigger("appear")})}),a(c).ready(function(){g()}),this},a.belowthefold=function(c,f){var g;return g=f.container===d||f.container===b?(b.innerHeight?b.innerHeight:e.height())+e.scrollTop():a(f.container).offset().top+a(f.container).height(),g<=a(c).offset().top-f.threshold},a.rightoffold=function(c,f){var g;return g=f.container===d||f.container===b?e.width()+e.scrollLeft():a(f.container).offset().left+a(f.container).width(),g<=a(c).offset().left-f.threshold},a.abovethetop=function(c,f){var g;return g=f.container===d||f.container===b?e.scrollTop():a(f.container).offset().top,g>=a(c).offset().top+f.threshold+a(c).height()},a.leftofbegin=function(c,f){var g;return g=f.container===d||f.container===b?e.scrollLeft():a(f.container).offset().left,g>=a(c).offset().left+f.threshold+a(c).width()},a.inviewport=function(b,c){return!(a.rightoffold(b,c)||a.leftofbegin(b,c)||a.belowthefold(b,c)||a.abovethetop(b,c))},a.extend(a.expr[":"],{"below-the-fold":function(b){return a.belowthefold(b,{threshold:0})},"above-the-top":function(b){return!a.belowthefold(b,{threshold:0})},"right-of-screen":function(b){return a.rightoffold(b,{threshold:0})},"left-of-screen":function(b){return!a.rightoffold(b,{threshold:0})},"in-viewport":function(b){return a.inviewport(b,{threshold:0})},"above-the-fold":function(b){return!a.belowthefold(b,{threshold:0})},"right-of-fold":function(b){return a.rightoffold(b,{threshold:0})},"left-of-fold":function(b){return!a.rightoffold(b,{threshold:0})}})}(jQuery,window,document);
$(function(){ 
var RightHeight = parseInt($(".LeftPart").height());
 $(".CenterPart").css("height",RightHeight+25);
});
/*img*/
$(function(){
	//图片预加载
	$("img.js_lazyimg").lazyload({
		effect:"fadeIn"
	});

	$(".fade img").hover(function(){
		$(this).fadeTo(200,0.8)
	},function(){
		$(this).fadeTo(200,1);
	});

});
$(function(){
/*\u5168\u7ad9\u5bfc\u822a*/
$(".nav_con > ul > li").mousemove(function(){$(this).css({"background-color":"#0754ae"});$(this).find("ol").slideDown(300,"easeOutCubic");});$(".nav_con > ul > li").mouseleave(function(){$(this).css({"background-color":""})
$(this).find("ol").stop(true,true).slideUp(100,"easeInCubic");})
$(".nav_con > ul > li > ol:gt(-3)").css({"right":-2,"left":"auto"});
/*\u9996\u9875\u7126\u70b9\u56fe*/
$(".slide").hover(function(){$(".slideControl").fadeIn();},function(){$(".slideControl").fadeOut();});jQuery(".slide").slide({titCell:".slideDot li",mainCell:".slideImg",prevCell:".slidePrev",nextCell:".slideNext",switchLoad:"_src",effect:"left",autoPlay:true,trigger:"click",easing:"swing",delayTime:250,interTime:6000,startFun:function(i){jQuery(".slide .slideText li").eq(i).animate({"bottom":0}).siblings().animate({"bottom":-30});}});
$(".indexPart2Right>li>span:lt(3)").css({"background-color":"#1363aa"});
$(".pngIco li:first,.gifIco li:first").addClass("left");
$(".pngIco li:last,.gifIco li:last").addClass("right");
/*\u9996\u9875\u5b57\u4f53\u680f\u76eetab\u9009\u9879\u5361*/
jQuery(".font").slide({titCell:"#tabs li",mainCell:".fontContnet",titOnClassName:"current",effect:"fade",trigger:"click",switchLoad:"_src",autoPlay:true,delayTime:500,interTime:3000,startFun:function(index){var indicator=$('#indicator'),indicatorHalfWidth=indicator.width()/2,lis=$('#tabs').children('li');var li=lis.eq(index),newPos=li.position().left+(li.width()/2)-indicatorHalfWidth;indicator.stop(true).animate({left:newPos},600,'swing');}});
/*\u8fd4\u56de\u9876\u90e8*/
$("#totop").click(function(){return $("body,html").animate({"scrollTop":0},300,"easeOutQuad");});
/*\u9996\u9875\u5e73\u6ed1\u951a\u94fe\u63a5\u8df3\u8f6c*/
$(".article-quick-down").anchorGoWhere({target:1});
/*js\u9891\u9053\u9875banner*/
jQuery(".jsPart2").slide({titCell:".jsPart2Button li",mainCell:".jsPart2Content",titOnClassName:"current",effect:"left",trigger:"click",switchLoad:"_src",autoPlay:true,delayTime:200,interTime:3000,startFun:function(){$(".tempWrap").css("float","left");$(".jsPart2Button a").addClass("png");}});
$(".jsPart3Content").hover(function(){$(this).css({"border-top-color":"#1d7de7"});},function(){$(this).css({"border-top-color":"#eee"});});$(".jsPart3Content dl").hover(function(){$(this).children(".demo").show();},function(){$(this).children(".demo").hide();});$(".jsPart3Content").each(function(){var dlLast=$(this).children("dl").last();$(dlLast).css("border","none");});
/*\u5b57\u4f53\u9891\u9053\u9875\u56fe\u7247\u6eda\u52a8*/
$(".fontPart2").hover(function(){$(".prev,.next").fadeIn();},function(){$(".prev,.next").fadeOut();});jQuery(".fontPart2").slide({switchLoad:"_src",mainCell:".fontPart2Con",prevCell:".prev",nextCell:".next",effect:"leftLoop",pnLoop:false,delayTime:500,easing:"swing",autoPlay:true,vis:4});		
$(".olist").each(function(){var oLi3=$(this).children("li").eq(0);$(oLi3).addClass("item_num_top");$(oLi3).addClass("active");});$list_li=$(".olist li");$list_li.mouseover(function(){$(this).addClass("active").siblings().removeClass("active");});
/*\u5168\u7ad9\u5217\u8868\u5c55\u5f00\u6298\u53e0*/
var LanMu=$(".lanmu-list");var lanMuSun=LanMu.children("dd");if((lanMuSun.size())>10){LanMu.children("dd:gt(5)").hide();$(".listmore").show();}
$(".listmore").bind("click",function(){if(!$(".listmore").hasClass("ListMoreOn")){$(".listmore").addClass("ListMoreOn");LanMu.children("dd:gt(5)").slideDown();$(".listmore").html("\u6298\u53e0\u680f\u76ee \u2191");}
else{$(".listmore").removeClass("ListMoreOn");LanMu.children("dd:gt(5)").slideUp();$(".listmore").html("\u67e5\u770b\u66f4\u591a \u2193");}});
/*\u5185\u9875\u56fa\u5b9a\u5b9a\u4f4d*/
if($("#fixed").length>0){var offset=$("#fixed").offset();$(window).scroll(function(){var scrollTop=$(window).scrollTop();if(offset.top<scrollTop)$("#fixed").addClass("fixed");else $("#fixed").removeClass("fixed");});}
});
jQuery.fn.anchorGoWhere=function(options){var obj=jQuery(this);var defaults={target:0,timer:300,easing:"easeOutQuad"};var o=jQuery.extend(defaults,options);obj.each(function(i){jQuery(obj[i]).click(function(){var _rel=jQuery(this).attr("href").substr(1);switch(o.target){case 1:var _targetTop=jQuery("#"+_rel).offset().top;jQuery("html,body").animate({scrollTop:_targetTop},o.timer,o.easing);break;case 2:var _targetLeft=jQuery("#"+_rel).offset().left;jQuery("html,body").animate({scrollLeft:_targetLeft},o.timer,o.easing);break;}
return false;});});};
/*pop*/
TINY={};TINY.box=function(){var j,m,b,g,v,p=0;return{show:function(o){v={opacity:70,close:1,animate:1,fixed:1,mask:1,maskid:'',boxid:'',topsplit:2,url:0,post:0,height:0,width:0,html:0,iframe:0};for(s in o){v[s]=o[s]}
if(!p){j=document.createElement('div');j.className='tbox';p=document.createElement('div');p.className='tinner';b=document.createElement('div');b.className='tcontent';m=document.createElement('div');m.className='tmask';g=document.createElement('div');g.className='tclose';g.v=0;document.body.appendChild(m);document.body.appendChild(j);j.appendChild(p);p.appendChild(b);m.onclick=g.onclick=TINY.box.hide;window.onresize=TINY.box.resize}else{j.style.display='none';clearTimeout(p.ah);if(g.v){p.removeChild(g);g.v=0}}
p.id=v.boxid;m.id=v.maskid;j.style.position=v.fixed?'fixed':'absolute';if(v.html&&!v.animate){p.style.backgroundImage='none';b.innerHTML=v.html;b.style.display='';p.style.width=v.width?v.width+'px':'auto';p.style.height=v.height?v.height+'px':'auto'}else{b.style.display='none';if(!v.animate&&v.width&&v.height){p.style.width=v.width+'px';p.style.height=v.height+'px'}else{p.style.width=p.style.height='100px'}}
if(v.mask){this.mask();this.alpha(m,1,v.opacity)}else{this.alpha(j,1,100)}
if(v.autohide){p.ah=setTimeout(TINY.box.hide,1000*v.autohide)}else{document.onkeyup=TINY.box.esc}},fill:function(c,u,k,a,w,h){if(u){if(v.image){var i=new Image();i.onload=function(){w=w||i.width;h=h||i.height;TINY.box.psh(i,a,w,h)};i.src=v.image}else if(v.iframe){this.psh('<iframe src="'+v.iframe+'" width="'+v.width+'" frameborder="0" height="'+v.height+'"></iframe>',a,w,h)}else{var x=window.XMLHttpRequest?new XMLHttpRequest():new ActiveXObject('Microsoft.XMLHTTP');x.onreadystatechange=function(){if(x.readyState==4&&x.status==200){p.style.backgroundImage='';TINY.box.psh(x.responseText,a,w,h)}};if(k){x.open('POST',c,true);x.setRequestHeader('Content-type','application/x-www-form-urlencoded');x.send(k)}else{x.open('GET',c,true);x.send(null)}}}else{this.psh(c,a,w,h)}},psh:function(c,a,w,h){if(typeof c=='object'){b.appendChild(c)}else{b.innerHTML=c}
var x=p.style.width,y=p.style.height;if(!w||!h){p.style.width=w?w+'px':'';p.style.height=h?h+'px':'';b.style.display='';if(!h){h=parseInt(b.offsetHeight)}
if(!w){w=parseInt(b.offsetWidth)}
b.style.display='none'}
p.style.width=x;p.style.height=y;this.size(w,h,a)},esc:function(e){e=e||window.event;if(e.keyCode==27){TINY.box.hide()}},hide:function(){TINY.box.alpha(j,-1,0,3);document.onkeypress=null;if(v.closejs){v.closejs()}},resize:function(){TINY.box.pos();TINY.box.mask()},mask:function(){m.style.height=this.total(1)+'px';m.style.width=this.total(0)+'px'},pos:function(){var t;if(typeof v.top!='undefined'){t=v.top}else{t=(this.height()/v.topsplit)-(j.offsetHeight/2);t=t<20?20:t}
if(!v.fixed&&!v.top){t+=this.top()}
j.style.top=t+'px';j.style.left=typeof v.left!='undefined'?v.left+'px':(this.width()/2)-(j.offsetWidth/2)+'px'},alpha:function(e,d,a){clearInterval(e.ai);if(d){e.style.opacity=0;e.style.filter='alpha(opacity=0)';e.style.display='block';TINY.box.pos()}
e.ai=setInterval(function(){TINY.box.ta(e,a,d)},20)},ta:function(e,a,d){var o=Math.round(e.style.opacity*100);if(o==a){clearInterval(e.ai);if(d==-1){e.style.display='none';e==j?TINY.box.alpha(m,-1,0,2):b.innerHTML=p.style.backgroundImage=''}else{if(e==m){this.alpha(j,1,100)}else{j.style.filter='';TINY.box.fill(v.html||v.url,v.url||v.iframe||v.image,v.post,v.animate,v.width,v.height)}}}else{var n=a-Math.floor(Math.abs(a-o)*.5)*d;e.style.opacity=n/100;e.style.filter='alpha(opacity='+n+')'}},size:function(w,h,a){if(a){clearInterval(p.si);var wd=parseInt(p.style.width)>w?-1:1,hd=parseInt(p.style.height)>h?-1:1;p.si=setInterval(function(){TINY.box.ts(w,wd,h,hd)},20)}else{p.style.backgroundImage='none';if(v.close){p.appendChild(g);g.v=1}
p.style.width=w+'px';p.style.height=h+'px';b.style.display='';this.pos();if(v.openjs){v.openjs()}}},ts:function(w,wd,h,hd){var cw=parseInt(p.style.width),ch=parseInt(p.style.height);if(cw==w&&ch==h){clearInterval(p.si);p.style.backgroundImage='none';b.style.display='block';if(v.close){p.appendChild(g);g.v=1}
if(v.openjs){v.openjs()}}else{if(cw!=w){p.style.width=(w-Math.floor(Math.abs(w-cw)*.6)*wd)+'px'}
if(ch!=h){p.style.height=(h-Math.floor(Math.abs(h-ch)*.6)*hd)+'px'}
this.pos()}},top:function(){return document.documentElement.scrollTop||document.body.scrollTop},width:function(){return self.innerWidth||document.documentElement.clientWidth||document.body.clientWidth},height:function(){return self.innerHeight||document.documentElement.clientHeight||document.body.clientHeight},total:function(d){var b=document.body,e=document.documentElement;return d?Math.max(Math.max(b.scrollHeight,e.scrollHeight),Math.max(b.clientHeight,e.clientHeight)):Math.max(Math.max(b.scrollWidth,e.scrollWidth),Math.max(b.clientWidth,e.clientWidth))}}}();

/*ad*/
function insert(code){
if(code=="duilian"){document.writeln("<script>var cpro_id='u1433739';</script><script src='http://cpro.baidustatic.com/cpro/ui/f.js'></script>")}
/*if(code=="gg1000x60"){document.writeln("<a href='http://www.sucaijiayuan.com/api/gourl.php?url=http://wan.07073.com/union/joinus/?cp=WMPVD' target='_blank'><img src='http://www.sucaijiayuan.com/uploads/ad/20150113-07073.jpg'/></a>")}*/
if(code=="gg1000x60"){document.writeln("<script>var cpro_id = 'u1541568';</script><script src='http://cpro.baidustatic.com/cpro/ui/c.js'></script>")}
if(code=="gg960x90_1"){document.writeln("<script>var cpro_id = 'u1424153';</script><script src='http://cpro.baidustatic.com/cpro/ui/c.js'></script>")}
if(code=="gg960x90_2"){document.writeln("<script>var cpro_id = 'u1424153';</script><script src='http://cpro.baidustatic.com/cpro/ui/c.js'></script>")}
if(code=="gg300x250"){document.writeln("<script>google_ad_client='ca-pub-2208973577457620';google_ad_slot='8591388360';google_ad_width=300;google_ad_height = 250;</script><script src='http://pagead2.googlesyndication.com/pagead/show_ads.js'></script>")}
/*if(code=="gg300x250"){document.writeln("<script>var cpro_id = 'u1424152';</script><script src='http://cpro.baidustatic.com/cpro/ui/c.js'></script>")}*/
if(code=="gg250x250"){document.writeln("<script>var cpro_id = 'u1424155';</script><script src='http://cpro.baidustatic.com/cpro/ui/c.js'></script>")}
if(code=="gg160x600"){document.writeln("<script>var cpro_id = 'u1410676';</script><script src='http://cpro.baidustatic.com/cpro/ui/c.js'></script>")}
if(code=="gg700x90"){document.writeln("<div class='show_keywords_bottom_gg'><script>var cpro_id = 'u1973398';</script><script src='http://cpro.baidustatic.com/cpro/ui/c.js'></script></div>")}
if(code=="show_title_bottom_gg"){document.writeln("<script>var cpro_id ='u1973405';</script><script src='http://cpro.baidustatic.com/cpro/ui/c.js'></script>")}
}//window.onerror=function(){return false}