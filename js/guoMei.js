// 国美会员下拉框
$(document).ready(function(){
	$('.bighuiyuan').hover(function(){
		$('.hy_down').css('display','block');
		$('.huiyuan').css('background','#fff');
		$(document).ready(function(){
		var n=0;
		var next=0;
		var width=$(".lun_box").width();
		$('.you').click(function(){
			next=n+1;
			if(next>=$('.ul1').length){
				next=0;
			}
			$('.ul1').eq(next).css("left",width).end().eq(n).animate({left:-width}).end().eq(next).animate({left:0});
			n=next;
		})
		$('.zuo').click(function(){
			next=n-1;
			if(next<0){
				next=$('.ul1').length-1;
			}
			$('.ul1').eq(next).css("left",-width+"px").end().eq(n).animate({left:width}).end().eq(next).animate({left:0});
			n=next;
		})// 国美会员轮播

	})

	},function(){
		$('.hy_down').css('display','none');
		$('.huiyuan').css('background','#F8F8F8');
	})
})
//我的国美
$(document).ready(function(){
	$('.big_li_one').hover(function(){
		$('.dingdan').css('display','block');
		$('.li_one').css('background','#fff');
	},function(){
		$('.dingdan').css('display','none');
		$('.li_one').css('background','#F8F8F8');
	})
})
//服务中心
$(document).ready(function(){
	$('.big_li_two').hover(function(){
		$('.myguomei').css('display','block');
		$('.li_two').css('background','#fff');
	},function(){
		$('.myguomei').css('display','none');
		$('.li_two').css('background','#F8F8F8');
	})
})	
//网络导航
$(document).ready(function(){
	$('.big_li_three').hover(function(){
		$('.net_daohang').css('display','block');
		$('.li_three').css('background','#fff');
	},function(){
		$('.net_daohang').css('display','none');
		$('.li_three').css('background','#F8F8F8');
	})
})	
//手机国没
$(document).ready(function(){
	$('.big_li_four').hover(function(){
		$('.weixin').css('display','block');
		$('.li_four').css('background','#fff');
	},function(){
		$('.weixin').css('display','none');
		$('.li_four').css('background','#F8F8F8');
	})
})
//第二栏叉叉
$(document).ready(function(){
	$('.cha').click(function(){
		$('.gif').css('display','none');
	})
})
// 第三栏购物车
$(document).ready(function(){
	$('.big_kong').hover(function(){
		$('.kong_down').css('display','block');
		$('.kong').css('background','#fff');
	},function(){
		$('.kong_down').css('display','none');
		$('.kong').css('background','');
	})
})
//大侧栏下拉框
$(document).ready(function(){
	$('.o').hover(function(){
		var index=$(this).index();
		$('.Oword').css('display','none').eq(index).css('display','block');
		$('.o').css({'background':'#fff'}).eq(index).css({'background':''});
	},function(){
		$('.Oword').css('display','none');
		$('.o').css('background','');
	})
})

//banner轮播
$(document).ready(function(){
	var now=0;
	var net=0;
	var nt=0;
	var time=setInterval(banner,2000);
	function banner(){
		net=now+2;
		nt++;
		if(nt>=$('.background_li').length/2){
			nt=0;
		}
		if(net>=$('.background_li').length){
			net=0;
		}
		$('.background_li').eq(now).css('opacity','0').end().eq(net).css('opacity','1');
		$('.juxing .S_juxing').eq(nt).hide().end().eq(nt-1).show();
		$('.juxing .item').eq(nt).css('display','block').end().eq(nt-1).css('display','none');
		$('.juxing i').eq(now).css('background','#fff').end().eq(net).css('background','red');
				now=net;
			}
		
			$('.background_right').click(function(){
				net=now+1;
				nt++;
				if(nt>=$('.background_li').length/2){
					nt=0;
				}
				if(net>=$('.background_li').length){
					net=0;
				}
				$('.background_li').eq(now).css('opacity','0').end().eq(net).css('opacity','1');
				$('.juxing .S_juxing').eq(nt).hide().eq(nt).hide().end().eq(nt-1).show();
				$('.juxing .item').eq(nt).css('display','block').eq(nt).css('display','block').end().eq(nt-1).css('display','none');
				$('.juxing i').eq(now).css('background','#fff').end().eq(net).css('background','red');
				now=net;
			})
			$("#banner").mouseover(function(){
					clearInterval(time);
				});
			$("#banner").mouseout(function(){
				time=setInterval(banner,2000);
			})
		})
		
//第四栏轮播
$(document).ready(function(){
	var n2=0;
	var next2=0;
	var height=$('.small_ig').height();
	var t2=setInterval(move2,2000);
	function move2(){
		next2=n2+1;
		if(next2>=$('.small_ig').length){
				next2=0;
			}
		$('.small_ig').eq(next2).css("top",height).end().eq(n2).animate({top:-height}).end().eq(next2).animate({top:0});
		n2=next2;
	}
	$('.xia').click(function(){
		move2();
	})
	$('.shang').click(function(){
		next2=n2-1;
		if(next2<0){
				next2=$('.small_ig').length-1;
			}
		$('.small_ig').eq(next2).css("top",-height).end().eq(n2).animate({top:height}).end().eq(next2).animate({top:0});
		n2=next2;
	})
})

//一楼lunbo
$(document).ready(function(){
	jQuery.extend({
		lunboo:function(lunbo,bottonR,bottonL,imgs,list){
			var n1=0;
			var next1=0;
			var width1=lunbo.width();
			var t1=setInterval(move1,2000);
			function move1(){
				next1=n1+1;
				if(next1>=imgs.length){
					next1=0;
				}
				imgs.eq(next1).css("left",width1).end().eq(n1).animate({left:-width1}).end().eq(next1).animate({left:0});
				list.eq(n1).css('background','#000').end().eq(next1).css('background','red');
				n1=next1;
			}
			lunbo.mouseover(function(){
				clearInterval(t1);
			});
			lunbo.mouseout(function(){
				t1=setInterval(move1,2000);
			})

			bottonR.click(function(){
				move1();
			})
			
			bottonL.click(function(){
				next1=n1-1;
				if(next1<0){
					next1=imgs.length-1;
				}
				imgs.eq(next1).css("left",-width1+"px").end().eq(n1).animate({left:width1}).end().eq(next1).animate({left:0});
				list.eq(n1).css('background','#000').end().eq(next1).css('background','red');
				n1=next1;
			})
			list.click(function(){
				var index=$(this).index();
				if(index>n1){
					imgs.eq(index).css("left",width1+"px").end().eq(n1).animate({left:-width1}).end().eq(index).animate({left:0});
					list.eq(n1).css('background','#000').end().eq(index).css('background','red');
					n1=index;
				}else if(index<n1){
					imgs.eq(index).css("left",-width1+"px").end().eq(n1).animate({left:width1}).end().eq(index).animate({left:0});
					list.eq(n1).css('background','#000').end().eq(index).css('background','red');
					n1=index;
				}
				
			})
		}
	})
	$.lunboo($(".f1 .lunbo"),$('.f1 .bottonR'),$('.f1 .bottonL'),$('.f1 .imgs'),$('.f1 .list'));
	$.lunboo($(".f2 .lunbo"),$('.f2 .bottonR'),$('.f2 .bottonL'),$('.f2 .imgs'),$('.f2 .list'));
	$.lunboo($(".f3 .lunbo"),$('.f3 .bottonR'),$('.f3 .bottonL'),$('.f3 .imgs'),$('.f3 .list'));
	$.lunboo($(".f4 .lunbo"),$('.f4 .bottonR'),$('.f4 .bottonL'),$('.f4 .imgs'),$('.f4 .list'));
	$.lunboo($(".f5 .lunbo"),$('.f5 .bottonR'),$('.f5 .bottonL'),$('.f5 .imgs'),$('.f5 .list'));
	})

//一楼选项卡
$(document).ready(function(){
	jQuery.extend({
		error:function(obj,box,box1){
			box.mouseover(function(){
				var index=$(this).index();
				obj.css('display','none').eq(index).css('display','block');
				box.css({'background':'#fff'}).eq(index).css({'background':'#535353'});
				box1.css({'color':'#000'}).eq(index).css({'color':'#fff'});
			})
		}
	})
	$.error($('.f1 .box_you'),$('.f1 .right_li'),$('.f1 .right_li a'));
	$.error($('.f2 .box_you'),$('.f2 .right_li'),$('.f2 .right_li a'));
	$.error($('.f3 .box_you'),$('.f3 .right_li'),$('.f3 .right_li a'));
	$.error($('.f4 .box_you'),$('.f4 .right_li'),$('.f4 .right_li a'));
	$.error($('.f5 .box_you'),$('.f5 .right_li'),$('.f5 .right_li a'));

}
)



//楼层跳转
$(document).ready(function(){
		$(window).scroll(function(){
		if($(window).scrollTop()>=$('.top11').offset().top-380){
			$('.top_jamp').show()
			// console.log($('.top11').offset().top)
		}else{
			$('.top_jamp').hide()
		}
		if($(window).scrollTop()>=$('.top').last().offset().top+200){
			$('.top_jamp').hide()
		}	
		//出现对应的效果
		$('.top').each(function(z){
			if($(window).scrollTop()>=$('.top').eq(z).offset().top+100){
				// $('top_list').each(function(x){
				// 	console.log(this)
					// $('.fov-in li span').eq(x).css("color","#777")
					// $('.fov-in li p').eq(x).css("color","#777")
				// 	$('.top_list').eq(x).css('background','#fff')
				// })
				// $('.fov-in li span').eq(z).css("color","red")
				// $('.fov-in li p').eq(z).css("color","red")
				$('.top_list').css('background','#fff')
				$('.top_list').eq(z).css('background','yellow')
			}
		})
		//点击回到对应的楼层
		$('.top_list').each(function(){	
			$('.top_list').click(function(){
				var index=$(this).index()
				animate(document.body,{scrollTop:$('.top').eq(index).offset().top})
				animate(document.documentElement,{scrollTop:$('.top').eq(index).offset().top})
			})
		})
		
	})	

	})

// huiqu
$(document).ready(function(){
	$(window).scroll(function(){
		if($(window).scrollTop()>0){
			$('.xianx-4').css("display","block")
		}else{
			$('.xianx-4').css("display","none")
		}
	})
	console.log($('body').scrollTop())
	$('.xianx-4').click(function(){
		$('body,html').animate({scrollTop:0},1000);
	})
	$('.gt').click(function(){
		$('body,html').animate({scrollTop:0},1000);
	})
	$('.lt').click(function(){
		$('body,html').animate({scrollTop:6000},1000);
	})
})