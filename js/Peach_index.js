$(function(){
	$('.peach_indexcy p').click(function(){
		$('.peach_indexrulesbg,.peach_indexrules').show();
	});
	$('.peach_indexrulesbtn p').click(function(){
		$('.peach_indexrulesbg,.peach_indexrules').hide();
	})
})

$(function(){
	$('#zhuta').click(function(){
		//$('.peach_indexrulesbg,.peach_popsuccess').show();
		var uid = $("#uid").val();
		//console.log(uid);
		$.ajax({ 
	        type: 'post', 
	        url: 'index.php?c=peach&m=vote', 
	        data: {'refee':uid},
	        dataType: 'json', 
	        success: function(json) { 
	        	//alert(json);
	        	//console.log(json);
	        	if(json== (-1)){
	        		//提示已经赞过
	        		$('.peach_indexrulesbg,.peach_popfaile').show();
	        		//$.MsgBox.Alert('亲，您已经赞过！');
	        		//$.MsgBox.Alert('亲，活动已结束');		
	        	}else{
	        		$('.peach_indexrulesbg,.peach_popsuccess').show();
	        		$.each(json,function(key,value){
	        			$('#xq').html("您的好友目前排名为"+value.pm+"名，共收获"+value.num+"个赞！")
	        		});
	        		//$('.peach_indexrulesbg,.peach_popsuccess').show();
	        		//$('#xq').html("您的好友目前排名为"+json.pm+"名，共收获"+json.num+"个赞！");	
	        		//$('#medal').html(json);	
	        	}
	        } 
      }); 
	});
	$('.peach_popbtn').click(function(){
		// $('.peach_indexrulesbg,.peach_popsuccess').hide();
		// $('.peach_indexrulesbg,.peach_popfaile').hide();
		 window.location.reload();
	})
})

$(function(){
	$('.peach_phblist111_intro').click(function(){
		/*$(this).addClass('background').siblings().removeClass('background');*/
		$(this).addClass('shadiaoqiang').css({'background-color':'#0088D1'}).siblings().removeClass('shadiaoqiang').css({'background-color':'#E5DFE1'});
		var uid = $(this).find("input").val();
		$("#uid").val(uid);
	});
	$('#asdf').click(function(){
		var fdsa = $('#uid').val();
		if(fdsa){
			window.location.href = 'http://xz.deep5.cn/index.php?c=peach&m=share&refee='+fdsa;
		}else{
			alert("请选择投票对象");
		}
	})
})

