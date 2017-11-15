$(document).ready(function(){
	
		$("#NewDyName").click(function () {
	    if ($(this).val() == '请输入新订阅名称') { $(this).val(''); }
	   });



		var setting = {
			view: {
				selectedMulti: false
			},
			check: {
				enable: true
			},
			data: {
				simpleData: {
					enable: true
				}
			},
			callback:{
				beforeCheck: beforeCheck,
                onCheck:onCheck
            }
		};

		var zNodes =[
			{ id:1, pId:0, name:"宏观经济", open:true},
			
			{ id:'mg11', pId:1, name:"美国", open:true},
			{ id:'mg111', pId:'mg11', name:"年度"},
			{ id:'mg112', pId:'mg11', name:"半年度"},
			{ id:'mg113', pId:'mg11', name:"季度"},
			{ id:'mg114', pId:'mg11', name:"月度"},
            { id:'mg115', pId:'mg11', name:"周报"},
            
			{ id:'rb12', pId:1, name:"日本", open:true},
			{ id:'rb121', pId:'rb12', name:"年度"},
			{ id:'rb122', pId:'rb12', name:"半年度"},
			{ id:'rb123', pId:'rb12', name:"季度"},
			{ id:'rb124', pId:'rb12', name:"月度"},			
			{ id:'rb125', pId:'rb12', name:"周报"},	
			
			{ id:'oz13', pId:1, name:"欧洲", open:true},
			{ id:'oz131', pId:'oz13', name:"年度"},
			{ id:'oz132', pId:'oz13', name:"半年度"},
			{ id:'oz133', pId:'oz13', name:"季度"},
			{ id:'oz134', pId:'oz13', name:"月度"},			
			{ id:'oz135', pId:'oz13', name:"周报"},				
			
			{ id:14, pId:1, name:"中国", open:true},
			{ id:141, pId:14, name:"年度"},
			{ id:142, pId:14, name:"半年度"},
			{ id:143, pId:14, name:"季度"},
			{ id:144, pId:14, name:"月度"},			
			{ id:145, pId:14, name:"周报"},				
			
			{ id:15, pId:1, name:"其他海外", open:true},
			{ id:151, pId:15, name:"年度"},
			{ id:152, pId:15, name:"半年度"},
			{ id:153, pId:15, name:"季度"},
			{ id:154, pId:15, name:"月度"},			
			{ id:155, pId:15, name:"周报"},					
			
			
			{ id:2, pId:0, name:"行业分析", checked:false, open:true},
			{ id:21, pId:2, name:"定期报告"},
			{ id:211, pId:21, name:"行业（年度）"},
			{ id:212, pId:21, name:"行业（半年度）"},
			{ id:213, pId:21, name:" 行业（季度）"},
			{ id:214, pId:21, name:"行业（月度）"},
			{ id:215, pId:21, name:"行业（周报）"},
			
			
			{ id:22, pId:2, name:"行业策略", open:true},
			{ id:221, pId:22, name:"策略专题", checked:false},
			{ id:222, pId:22, name:"行业策略（年度）"},
			{ id:223, pId:22, name:"行业策略（半年度）"},
			{ id:224, pId:22, name:"行业策略（季度）"},
			{ id:225, pId:22, name:"行业策略（月度）"},
			
			
			{ id:23, pId:2, name:"行业评论"},
		    { id:231, pId:23, name:"点评", checked:false},
			{ id:232, pId:23, name:"调研"},
			
			{ id:24, pId:2, name:"行业数据"},
		    { id:241, pId:24, name:"行业数据库", checked:false},
			
			
			{ id:3, pId:0, name:"公司研究"},
			{ id:31, pId:3, name:"研究深度"},
		    { id:311, pId:31, name:"年度", checked:false},			
			{ id:312, pId:31, name:"半年度", checked:false},	
			{ id:313, pId:31, name:"季度", checked:false},	
			
			{ id:4, pId:0, name:"投资策略"},
			
			{ id:41, pId:4, name:"定期策略"},
		    { id:411, pId:41, name:"年度", checked:false},			
			{ id:412, pId:41, name:"半年度", checked:false},	
			{ id:413, pId:41, name:"季度", checked:false},				
			
			{ id:42, pId:4, name:"策略专题"},

			
			{ id:43, pId:4, name:"申购策略"},
		    { id:431, pId:43, name:"新股申购策略", checked:false},			

			{ id:44, pId:4, name:"市场投资策略"},
            { id:45, pId:4, name:"板块投资策略"},
			
			
			{ id:5, pId:0, name:"晨会早刊"},
			{ id:51, pId:5, name:"晨报"},
			{ id:52, pId:5, name:"晨会报告"},
			{ id:53, pId:5, name:"期货早报"},
			{ id:54, pId:5, name:"期权早报"},
			
			
			{ id:6, pId:0, name:"机构内参"},
			
			{ id:7, pId:0, name:"商品期货"},
			
			{ id:8, pId:0, name:"金融期货"},
			
			{ id:81, pId:8, name:"股指期货"},
			{ id:811, pId:81, name:"期货早报", checked:false},
			{ id:812, pId:81, name:"期货日报", checked:false},
			{ id:813, pId:81, name:"期货周报", checked:false},
			{ id:814, pId:81, name:"期货月报", checked:false},
			
			{ id:82, pId:8, name:"国债期货"},
			{ id:821, pId:82, name:"期货早报", checked:false},
			{ id:822, pId:82, name:"期货日报", checked:false},
			{ id:823, pId:82, name:"期货周报", checked:false},
			{ id:824, pId:82, name:"期货月报", checked:false},		
			
			{ id:83, pId:8, name:"期货市场评论"},
			{ id:84, pId:8, name:"策略相关"},
			
			
			{ id:9, pId:0, name:"期权研究"},
			{ id:91, pId:9, name:"定期研报"},
			{ id:911, pId:91, name:"年度", checked:false},
			{ id:912, pId:91, name:"半年度", checked:false},
			{ id:913, pId:91, name:"季度", checked:false},
			{ id:914, pId:91, name:"月度", checked:false},
			{ id:915, pId:91, name:"周报", checked:false},
			
			{ id:92, pId:9, name:"期权策略"},
			
			{ id:10, pId:0, name:"基金研究"},
			
			{ id:101, pId:10, name:"新发基金"},
			{ id:102, pId:10, name:"封闭式基金"},
			{ id:103, pId:10, name:"开放式基金"},
			{ id:104, pId:10, name:"社保基金"},
			{ id:105, pId:10, name:"私募基金"},
			{ id:106, pId:10, name:"基金管理公司"},
			
			
			{ id:111, pId:0, name:"债券研究"},
			{ id:1101, pId:111, name:"新发债券"},
			{ id:1102, pId:111, name:"可转债"},
			{ id:1103, pId:111, name:"国债"},
			{ id:1104, pId:111, name:"企债"},
			{ id:1105, pId:111, name:"公司债"},
			{ id:1106, pId:111, name:"金融债"},			
			
			{ id:12, pId:0, name:"外汇研究"},
			
			{ id:13, pId:0, name:"港股市场"},
			
			{ id:14, pId:0, name:"金融工程"},
			
			{ id:15, pId:0, name:"投资组合"},
			
			
			{ id:16, pId:0, name:"融资融券"},
			{ id:161, pId:16, name:"定期报告"},
			{ id:162, pId:161, name:"年度", checked:false},
			{ id:163, pId:161, name:"半年度", checked:false},
			{ id:164, pId:161, name:"季度", checked:false},
			{ id:165, pId:161, name:"月度", checked:false},
			{ id:166, pId:161, name:"周报", checked:false},
			
			
			{ id:162, pId:16, name:"两融策略"},
			
			
			{ id:17, pId:0, name:"新股研究"},
			
			{ id:18, pId:0, name:"并购重组"},
			
			{ id:19, pId:0, name:"研报期刊-宏观经济"},
			{ id:191, pId:19, name:"年报"},
			{ id:192, pId:19, name:"半年报"},
			{ id:193, pId:19, name:"季报"},
			{ id:194, pId:19, name:"月报"},
			{ id:195, pId:19, name:"周报"},
			{ id:196, pId:19, name:"日报"},
			
			{ id:20, pId:0, name:"研报期刊-投资策略"},
			{ id:201, pId:20, name:"年报"},
			{ id:202, pId:20, name:"半年报"},
			{ id:203, pId:20, name:"季报"},
			{ id:204, pId:20, name:"月报"},
			{ id:205, pId:20, name:"周报"},
			{ id:206, pId:20, name:"日报"},			
			

			{ id:'fx21', pId:0, name:"研报期刊-行业分析"},
			{ id:'fx211', pId:'fx21', name:"年报"},
			{ id:'fx212', pId:'fx21', name:"半年报"},
			{ id:'fx213', pId:'fx21', name:"季报"},
			{ id:'fx214', pId:'fx21', name:"月报"},
			{ id:'fx215', pId:'fx21', name:"周报"},
			{ id:'fx216', pId:'fx21', name:"日报"},		

			{ id:'yj22', pId:0, name:"研报期刊-公司研究"},
			{ id:'yj221', pId:'yj22', name:"年报"},
			{ id:'yj222', pId:'yj22', name:"半年报"},
			{ id:'yj223', pId:'yj22', name:"季报"},
			{ id:'yj224', pId:'yj22', name:"月报"},
			{ id:'yj225', pId:'yj22', name:"周报"},
			{ id:'yj226', pId:'yj22', name:"日报"},		


			{ id:'zx23', pId:0, name:"研报期刊-机构咨询"},
			{ id:'zx231', pId:'zx23', name:"年报"},
			{ id:'zx232', pId:'zx23', name:"半年报"},
			{ id:'zx233', pId:'zx23', name:"季报"},
			{ id:'zx234', pId:'zx23', name:"月报"},
			{ id:'zx235', pId:'zx23', name:"周报"},
			{ id:'zx236', pId:'zx23', name:"日报"},		
			
			
			{ id:'zx24', pId:0, name:"研报期刊-基金频道"},
			{ id:'zx241', pId:'zx24', name:"年报"},
			{ id:'zx242', pId:'zx24', name:"半年报"},
			{ id:'zx243', pId:'zx24', name:"季报"},
			{ id:'zx244', pId:'zx24', name:"月报"},
			{ id:'zx245', pId:'zx24', name:"周报"},
			{ id:'zx246', pId:'zx24', name:"日报"},					
			
			
			{ id:'zx25', pId:0, name:"研报期刊-基金频道"},
			{ id:'zx251', pId:'zx25', name:"年报"},
			{ id:'zx252', pId:'zx25', name:"半年报"},
			{ id:'zx253', pId:'zx25', name:"季报"},
			{ id:'zx254', pId:'zx25', name:"月报"},
			{ id:'zx255', pId:'zx25', name:"周报"},
			{ id:'zx256', pId:'zx25', name:"日报"},				

			{ id:'zx26', pId:0, name:"研报期刊-期货研究"},
			{ id:'zx261', pId:'zx26', name:"年报"},
			{ id:'zx262', pId:'zx26', name:"半年报"},
			{ id:'zx263', pId:'zx26', name:"季报"},
			{ id:'zx264', pId:'zx26', name:"月报"},
			{ id:'zx265', pId:'zx26', name:"周报"},
			{ id:'zx266', pId:'zx26', name:"日报"},		


			{ id:'zx27', pId:0, name:"研报期刊-港股研究"},
			{ id:'zx271', pId:'zx27', name:"年报"},
			{ id:'zx272', pId:'zx27', name:"半年报"},
			{ id:'zx273', pId:'zx27', name:"季报"},
			{ id:'zx274', pId:'zx27', name:"月报"},
			{ id:'zx275', pId:'zx27', name:"周报"},
			{ id:'zx276', pId:'zx27', name:"日报"},		
			
			{ id:'zx28', pId:0, name:"研报期刊-技术分析"},
			{ id:'zx281', pId:'zx28', name:"年报"},
			{ id:'zx282', pId:'zx28', name:"半年报"},
			{ id:'zx283', pId:'zx28', name:"季报"},
			{ id:'zx284', pId:'zx28', name:"月报"},
			{ id:'zx285', pId:'zx28', name:"周报"},
			{ id:'zx286', pId:'zx28', name:"日报"},				
			
			{ id:'zx29', pId:0, name:"研报期刊-新股研究"},
			{ id:'zx291', pId:'zx29', name:"年报"},
			{ id:'zx292', pId:'zx29', name:"半年报"},
			{ id:'zx293', pId:'zx29', name:"季报"},
			{ id:'zx294', pId:'zx29', name:"月报"},
			{ id:'zx295', pId:'zx29', name:"周报"},
			{ id:'zx296', pId:'zx29', name:"日报"},					
			
		];
		
				var code, log, className = "dark";
		function beforeCheck(treeId, treeNode) {
			className = (className === "dark" ? "":"dark");
			showLog("[ "+getTime()+" beforeCheck ]&nbsp;&nbsp;&nbsp;&nbsp;" + treeNode.name );
			return (treeNode.doCheck !== false);
		}
//		function onCheck(e, treeId, treeNode) {
//			showLog("[ "+getTime()+" onCheck ]&nbsp;&nbsp;&nbsp;&nbsp;" + treeNode.name );
//		}		
		function showLog(str) {
			if (!log) log = $("#log");
			log.append("<li class='"+className+"'>"+str+"</li>");
			if(log.children("li").length > 6) {
				log.get(0).removeChild(log.children("li")[0]);
			}
		}
		function getTime() {
			var now= new Date(),
			h=now.getHours(),
			m=now.getMinutes(),
			s=now.getSeconds(),
			ms=now.getMilliseconds();
			return (h+":"+m+":"+s+ " " +ms);
		}

		var clearFlag = false;
//		function onCheck(e, treeId, treeNode) {
//			count();
//			if (clearFlag) {
//				clearCheckedOldNodes();
//			}
//		}
		function clearCheckedOldNodes() {
			var zTree = $.fn.zTree.getZTreeObj("treeDemo"),
			nodes = zTree.getChangeCheckedNodes();
			for (var i=0, l=nodes.length; i<l; i++) {
				nodes[i].checkedOld = nodes[i].checked;
			}
		}

//		function setAutoTrigger(e) {
//			var zTree = $.fn.zTree.getZTreeObj("treeDemo");
//			zTree.setting.check.autoCheckTrigger = $("#autoCallbackTrigger").attr("checked");
//			$("#autoCheckTriggerValue").html(zTree.setting.check.autoCheckTrigger ? "true" : "false");
//		}
		
		function createTree() {
			$.fn.zTree.init($("#treeDemo"), setting, zNodes);
			
			$.fn.zTree.init($("#treeHangye"), setting, zNodes);
			
			$.fn.zTree.init($("#treeYbly"), setting, zNodes);
			clearFlag = $("#last").attr("checked");
		}		
		
		$(document).ready(function(){
                createTree();	
		});		
		
		
		
		        function onCheck(e,treeId,treeNode){
					if (clearFlag) {
						clearCheckedOldNodes();
					}
		            var treeObj=$.fn.zTree.getZTreeObj("treeDemo"),
		            nodes=treeObj.getCheckedNodes(true),
		            v="";
		            var lxhtml = [];
		            for(var i=0;i<nodes.length;i++){
		            v+=nodes[i].name + ",";
		            lxhtml.push(nodes[i].name+"+");
		      
		            
		            }
		              
		            $("#lx").html(lxhtml.join(""));    
		            
	            
	            }











	
});



