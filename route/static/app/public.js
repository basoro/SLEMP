$(document).ready(function() {
	$(".sub-menu a.sub-menu-a").click(function() {
		$(this).next(".sub").slideToggle("slow").siblings(".sub:visible").slideUp("slow");
	});
});

function toSize(a) {
	var d = [" B", " KB", " MB", " GB", " TB", " PB"];
	var e = 1024;
	for(var b = 0; b < d.length; b++) {
		if(a < e) {
			return(b == 0 ? a : a.toFixed(2)) + d[b]
		}
		a /= e
	}
}

function toTrim(x) {
    return x.replace(/^\s+|\s+$/gm,'');
}

function inArray(f, arr){
	for (var i = 0; i < arr.length; i++) {
		if (f == arr[i]) {
			return true;
		}
	}
	return false;
}

function tableFixed(name) {
    var tableName = document.querySelector('#' + name);
    tableName.addEventListener('scroll', scrollHandle);
}

function escapeHTML(a){
    a = "" + a;
    return a.replace(/&/g, "&amp;").replace(/</g, "&lt;").
    replace(/>/g, "&gt;").replace(/"/g, '&quot;').
    replace(/'/g,"‘").replace(/\(/g,"&#40;").replace(/\&#60;/g,"&lt;").
    replace(/\&#62;/g,"&gt;").replace(/`/g,"&#96;").replace(/=/g,"＝");
}

function scrollHandle(e) {
    var scrollTop = this.scrollTop;
    $(this).find("thead").css({ "transform": "translateY(" + scrollTop + "px)", "position": "relative", "z-index": "1" });
}

function toSizeM(byteLen) {
    var a = parseInt(byteLen) / 1024 / 1024;
    return a || 0;
}

function toSizeG(bytes){
	var c = 1024 * 1024;
	var b = 0;
	if(bytes > 0){
		var b = (bytes/c).toFixed(2);
	}
	return b;
}

function toUnixTime(txt){
        var unix = new Date(Date.parse(txt.replace(/-/g,'/'))).getTime();
        return unix/1000;
    }

function randomStrPwd(b) {
	b = b || 32;
	var c = "AaBbCcDdEeFfGHhiJjKkLMmNnPpRSrTsWtXwYxZyz2345678";
	var a = c.length;
	var d = "";
	for(i = 0; i < b; i++) {
		d += c.charAt(Math.floor(Math.random() * a))
	}
	return d
}

function getRandomString(len) {
	len = len || 32;
	var chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678';
	var maxPos = chars.length;
	var pwd = '';
	for (i = 0; i < len; i++) {
		pwd += chars.charAt(Math.floor(Math.random() * maxPos));
	}
	return pwd;
}

function isValidIP(ip) {
    var reg = /^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$/
    return reg.test(ip);
}

function isContains(str, substr) {
    return str.indexOf(substr) >= 0;
}


function filterPath(path){
	var path_arr = path.split('/');
	var path_new = [];
	for (var i = 0; i < path_arr.length; i++) {
		if (path_arr[i]!=''){
			path_new.push(path_arr[i]);
		}
	}
	var rdata = "/"+path_new.join('/');
	return rdata;
}

function msgTpl(msg, args){
	if (typeof args == 'string'){
		return msg.replace('{1}', args);
	} else if (typeof args == 'object'){
		for (var i = 0; i < args.length; i++) {
			rep = '{' + (i + 1) + '}';
			msg = msg.replace(rep, args[i]);
		}
	}
	return msg;
}

function refresh() {
	window.location.reload()
}

function mwsPost(path, args, callback){
	$.post(path, args, function(rdata){
		if(typeof(callback) == 'function'){
			callback(rdata);
		}
	},'json');
}

function syncPost(path, args){
	var retData;
	 $.ajax({
		type : 'post',
		url : path,
		data : args,
		async : false,
		dataType:'json',
		success : function(data){
        	retData = data;
		}
    });
	return retData;
}

function repeatPwd(a) {
	$("#MyPassword").val(randomStrPwd(a))
}

$(".menu-icon").click(function() {
	$(".sidebar-scroll").toggleClass("sidebar-close");
	$(".main-content").toggleClass("main-content-open");
	if($(".sidebar-close")) {
		$(".sub-menu").find(".sub").css("display", "none")
	}
});

var Upload, percentage;
Date.prototype.format = function(b) {
	var c = {
		"M+": this.getMonth() + 1,
		"d+": this.getDate(),
		"h+": this.getHours(),
		"m+": this.getMinutes(),
		"s+": this.getSeconds(),
		"q+": Math.floor((this.getMonth() + 3) / 3),
		S: this.getMilliseconds()
	};
	if(/(y+)/.test(b)) {
		b = b.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length))
	}
	for(var a in c) {
		if(new RegExp("(" + a + ")").test(b)) {
			b = b.replace(RegExp.$1, RegExp.$1.length == 1 ? c[a] : ("00" + c[a]).substr(("" + c[a]).length))
		}
	}
	return b
};

function getLocalTime(a) {
	a = a.toString();
	if(a.length > 10) {
		a = a.substring(0, 10)
	}
	return new Date(parseInt(a) * 1000).format("yyyy/MM/dd hh:mm:ss")
}

function getFormatTime(tm, format) {
	if (format == undefined) format = "yyyy/MM/dd hh:mm:ss";
	tm = tm.toString();
	if (tm.length > 10) {
	  tm = tm.substring(0, 10);
	}
	var data = new Date(parseInt(tm) * 1000);
	var o = {
	  "M+": data.getMonth() + 1, //month
	  "d+": data.getDate(), //day
	  "h+": data.getHours(), //hour
	  "m+": data.getMinutes(), //minute
	  "s+": data.getSeconds(), //second
	  "q+": Math.floor((data.getMonth() + 3) / 3), //quarter
	  "S": data.getMilliseconds() //millisecond
	}
	if (/(y+)/.test(format)) format = format.replace(RegExp.$1,
	    (data.getFullYear() + "").substr(4 - RegExp.$1.length));
	for (var k in o)
	  if (new RegExp("(" + k + ")").test(format))
	    format = format.replace(RegExp.$1,RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));
	return format;
}

function changePathCallback(default_dir, callback) {

	var c = layer.open({
		type: 1,
		area: "650px",
		title: 'Select directory',
		closeBtn: 1,
		shift: 5,
		shadeClose: false,
		content: "<div class='changepath'>\
					<div class='path-top'>\
						<button type='button' class='btn btn-default btn-sm' onclick='backFile()'>\
							<span class='glyphicon glyphicon-share-alt'></span>Return\
						</button>\
						<div class='place' id='PathPlace'>Current path：<span></span></div>\
					</div>\
					<div class='path-con'>\
						<div class='path-con-left'>\
						<dl><dt id='changecomlist' onclick='backMyComputer()'>My Computer</dt></dl>\
						</div>\
						<div class='path-con-right'>\
							<ul class='default' id='computerDefautl'></ul>\
							<div class='file-list divtable'>\
								<table class='table table-hover' style='border:0 none'>\
									<thead>\
										<tr class='file-list-head'>\
											<th width='40%'>File name</th>\
											<th width='20%'>Modified</th>\
											<th width='10%'>Permissions</th>\
											<th width='10%'>Owner</th>\
											<th width='10%'></th>\
										</tr>\
									</thead>\
									<tbody id='tbody' class='list-list'></tbody>\
								</table>\
							</div>\
						</div>\
					</div>\
				</div>\
				<div class='getfile-btn' style='margin-top:0'>\
					<button type='button' class='btn btn-default btn-sm pull-left' onclick='createFolder()'>New folder</button>\
					<button type='button' class='btn btn-danger btn-sm mr5 btn-close'>Close</button>\
					<button type='button' class='btn btn-success btn-sm btn-choose'>Select</button>\
				</div>",
		success:function(layero,layer_index){
			$('.btn-close').click(function(){
				layer.close(layer_index);
			});

			$('.btn-choose').click(function(){
				var a = $("#PathPlace").find("span").text();
				a = a.replace(new RegExp(/(\\)/g), "/");
				a_len = a.length;
				if (a[a_len-1] == '/'){
					a = a.substr(0,a_len-1);
				}
				callback(a);
				layer.close(layer_index);
			});
		}
	});
	getDiskList(default_dir);
	activeDisk();
}

function changePath(d) {
	setCookie('SetId', d);
	setCookie('SetName', '');
	var c = layer.open({
		type: 1,
		area: "650px",
		title: 'Select directory',
		closeBtn: 1,
		shift: 5,
		shadeClose: false,
		content: "\
			<div class='changepath'>\
				<div class='path-top'>\
					<button type='button' class='btn btn-default btn-sm' onclick='backFile()'><span class='glyphicon glyphicon-share-alt'></span>Return</button>\
					<div class='place' id='PathPlace'>Current path：<span></span></div>\
				</div>\
				<div class='path-con'>\
					<div class='path-con-left'><dl><dt id='changecomlist' onclick='backMyComputer()'>My Computer</dt></dl></div>\
					<div class='path-con-right'>\
						<ul class='default' id='computerDefautl'></ul>\
						<div class='file-list divtable'>\
							<table class='table table-hover' style='border:0 none'>\
								<thead>\
									<tr class='file-list-head'>\
										<th width='40%'>File name</th>\
										<th width='20%'>Modified</th>\
										<th width='10%'>Permissions</th>\
										<th width='10%'>Owner</th>\
										<th width='10%'></th>\
									</tr>\
								</thead>\
								<tbody id='tbody' class='list-list'></tbody>\
							</table>\
						</div>\
					</div>\
				</div>\
			</div>\
			<div class='getfile-btn' style='margin-top:0'>\
			<button type='button' class='btn btn-default btn-sm pull-left' onclick='createFolder()'>New folder</button>\
			<button type='button' class='btn btn-danger btn-sm mr5' onclick=\"layer.close(getCookie('changePath'))\">Cancel</button>\
			<button type='button' class='btn btn-success btn-sm' onclick='getfilePath()'>Select</button>\
		</div>"
	});
	setCookie("changePath", c);
	var b = $("#" + d).val();
	tmp = b.split(".");
	if(tmp[tmp.length - 1] == "gz") {
		tmp = b.split("/");
		b = "";
		for(var a = 0; a < tmp.length - 1; a++) {
			b += "/" + tmp[a]
		}
		setCookie("SetName", tmp[tmp.length - 1])
	}
	b = b.replace(/\/\//g, "/");
	getDiskList(b);
	activeDisk();
}

function getDiskList(b) {
	var d = "";
	var a = "";
	var c = "path=" + b + "&disk=True";
	$.post("/files/get_dir", c, function(h) {
		if(h.DISK != undefined) {
			for(var f = 0; f < h.DISK.length; f++) {
				a += "<dd onclick=\"getDiskList('" + h.DISK[f].path + "')\"><span class='glyphicon glyphicon-hdd'></span>&nbsp;" + h.DISK[f].path + "</dd>"
			}
			$("#changecomlist").html(a)
		}
		for(var f = 0; f < h.DIR.length; f++) {
			var g = h.DIR[f].split(";");
			var e = g[0];
			if(e.length > 20) {
				e = e.substring(0, 20) + "..."
			}
			if(isChineseChar(e)) {
				if(e.length > 10) {
					e = e.substring(0, 10) + "..."
				}
			}
			d += "<tr>\
				<td onclick=\"getDiskList('" + h.PATH + "/" + g[0] + "')\" title='" + g[0] + "'>\
					<span class='glyphicon glyphicon-folder-open'></span>" + e + "</td><td>" + getLocalTime(g[2]) + "</td>\
				<td>" + g[3] + "</td>\
				<td>" + g[4] + "</td>\
				<td><span class='delfile-btn' onclick=\"NewDelFile('" + h.PATH + "/" + g[0] + "')\">X</span></td>\
			</tr>";
		}
		if(h.FILES != null && h.FILES != "") {
			for(var f = 0; f < h.FILES.length; f++) {
				var g = h.FILES[f].split(";");
				var e = g[0];
				if(e.length > 20) {
					e = e.substring(0, 20) + "..."
				}
				if(isChineseChar(e)) {
					if(e.length > 10) {
						e = e.substring(0, 10) + "..."
					}
				}
				d += "<tr>\
					<td title='" + g[0] + "'><span class='glyphicon glyphicon-file'></span>" + e + "</td>\
					<td>" + getLocalTime(g[2]) + "</td>\
					<td>" + g[3] + "</td>\
					<td>" + g[4] + "</td>\
					<td></td>\
				</tr>";
			}
		}
		$(".default").hide();
		$(".file-list").show();
		$("#tbody").html(d);
		if(h.PATH.substr(h.PATH.length - 1, 1) != "/") {
			h.PATH += "/"
		}
		$("#PathPlace").find("span").html(h.PATH);
		activeDisk();
		return;
	},'json');
}

function createFolder() {
	var a = "<tr>\
		<td colspan='2'><span class='glyphicon glyphicon-folder-open'></span><input id='newFolderName' class='newFolderName' type='text' value=''></td>\
		<td colspan='3'><button id='nameOk' type='button' class='btn btn-success btn-sm'>Yes</button>\
			&nbsp;&nbsp;<button id='nameNOk' type='button' class='btn btn-default btn-sm'>Cancel</button></td>\
		</tr>";
	if($("#tbody tr").length == 0) {
		$("#tbody").append(a)
	} else {
		$("#tbody tr:first-child").before(a)
	}
	$(".newFolderName").focus();
	$("#nameOk").click(function() {
		var c = $("#newFolderName").val();
		var b = $("#PathPlace").find("span").text();
		newTxt = b.replace(new RegExp(/(\/\/)/g), "/") + c;
		var d = "path=" + newTxt;
		$.post("/files/create_dir", d, function(e) {
			if(e.status == true) {
				layer.msg(e.msg, {
					icon: 1
				})
			} else {
				layer.msg(e.msg, {
					icon: 2
				})
			}
			getDiskList(b);
		},'json');
	});
	$("#nameNOk").click(function() {
		$(this).parents("tr").remove()
	})
}

function NewDelFile(c) {
	var a = $("#PathPlace").find("span").text();
	newTxt = c.replace(new RegExp(/(\/\/)/g), "/");
	var b = "path=" + newTxt + "&empty=True";
	$.post("/files/delete_dir", b, function(d) {
		if(d.status == true) {
			layer.msg(d.msg, {
				icon: 1
			})
		} else {
			layer.msg(d.msg, {
				icon: 2
			})
		}
		getDiskList(a);
	},'json');
}

function activeDisk() {
	var a = $("#PathPlace").find("span").text().substring(0, 1);
	switch(a) {
		case "C":
			$(".path-con-left dd:nth-of-type(1)").css("background", "#eee").siblings().removeAttr("style");
			break;
		case "D":
			$(".path-con-left dd:nth-of-type(2)").css("background", "#eee").siblings().removeAttr("style");
			break;
		case "E":
			$(".path-con-left dd:nth-of-type(3)").css("background", "#eee").siblings().removeAttr("style");
			break;
		case "F":
			$(".path-con-left dd:nth-of-type(4)").css("background", "#eee").siblings().removeAttr("style");
			break;
		case "G":
			$(".path-con-left dd:nth-of-type(5)").css("background", "#eee").siblings().removeAttr("style");
			break;
		case "H":
			$(".path-con-left dd:nth-of-type(6)").css("background", "#eee").siblings().removeAttr("style");
			break;
		default:
			$(".path-con-left dd").removeAttr("style")
	}
}

function backMyComputer() {
	$(".default").show();
	$(".file-list").hide();
	$("#PathPlace").find("span").html("");
	activeDisk();
}

function backFile() {
	var c = $("#PathPlace").find("span").text();
	if(c.substr(c.length - 1, 1) == "/") {
		c = c.substr(0, c.length - 1)
	}
	var d = c.split("/");
	var a = "";
	if(d.length > 1) {
		var e = d.length - 1;
		for(var b = 0; b < e; b++) {
			a += d[b] + "/"
		}
		getDiskList(a.replace("//", "/"))
	} else {
		a = d[0]
	}
	if(d.length == 1) {}
}

function getfilePath() {
	var a = $("#PathPlace").find("span").text();
	a = a.replace(new RegExp(/(\\)/g), "/");
	a_len = a.length;
	if (a[a_len-1] == '/'){
		a = a.substr(0,a_len-1);
	}

	$("#" + getCookie("SetId")).val(a + getCookie("SetName"));
	layer.close(getCookie("changePath"));
	return a;
}

function setCookie(a, c) {
	var b = 30;
	var d = new Date();
	d.setTime(d.getTime() + b * 24 * 60 * 60 * 1000);
	document.cookie = a + "=" + escape(c) + ";path=/;expires=" + d.toGMTString();
}

function getCookie(b) {
	var a, c = new RegExp("(^| )" + b + "=([^;]*)(;|$)");
	if(a = document.cookie.match(c)) {
		return unescape(a[2])
	} else {
		return null
	}
}

function autoHeight() {
	var a = $("body").height() - 40;
	$(".main-content").css("min-height", a);
}

function showMsg(msg, callback ,icon, time){

	if (typeof time == 'undefined'){
		time = 2000;
	}

	if (typeof icon == 'undefined'){
		icon = {};
	}

	var loadT = layer.msg(msg, icon);
	setTimeout(function() {
		layer.close(loadT);
		if (typeof callback == 'function'){
			callback();
		}
	}, time);
}

function openPath(a) {
	setCookie("open_dir_path", a);
	window.location.href = "/files/"
}

function onlineEditFile(k, f, callback) {
	if(k != 0) {
		var l = $("#PathPlace input").val();
		var h = encodeURIComponent($("#textBody").val());
		var a = $("select[name=encoding]").val();
		var loadT = layer.msg('Saving, please wait...', {icon: 16,time: 0});
		$.post("/files/save_body", "data=" + h + "&path=" + encodeURIComponent(f) + "&encoding=" + a, function(data) {
			if(k == 1) {
				layer.close(loadT);
			}
			layer.msg(data.msg, {icon: data.status ? 1 : 2});
			if (data.status && typeof(callback) == 'function'){
				callback(k, f);
			}
		},'json');
		return
	}
	var e = layer.msg('Reading file, please wait...', {icon: 16,time: 0});
	var g = f.split(".");
	var b = g[g.length - 1];
	var d;
	switch(b) {
		case "html":
			var j = {
				name: "htmlmixed",
				scriptTypes: [{
					matches: /\/x-handlebars-template|\/x-mustache/i,
					mode: null
				}, {
					matches: /(text|application)\/(x-)?vb(a|script)/i,
					mode: "vbscript"
				}]
			};
			d = j;
			break;
		case "htm":
			var j = {
				name: "htmlmixed",
				scriptTypes: [{
					matches: /\/x-handlebars-template|\/x-mustache/i,
					mode: null
				}, {
					matches: /(text|application)\/(x-)?vb(a|script)/i,
					mode: "vbscript"
				}]
			};
			d = j;
			break;
		case "js":
			d = "text/javascript";
			break;
		case "json":
			d = "application/ld+json";
			break;
		case "css":
			d = "text/css";
			break;
		case "php":
			d = "application/x-httpd-php";
			break;
		case "tpl":
			d = "application/x-httpd-php";
			break;
		case "xml":
			d = "application/xml";
			break;
		case "sql":
			d = "text/x-sql";
			break;
		case "conf":
			d = "text/x-nginx-conf";
			break;
		default:
			var j = {
				name: "htmlmixed",
				scriptTypes: [
					{matches: /\/x-handlebars-template|\/x-mustache/i,mode: null},
					{matches: /(text|application)\/(x-)?vb(a|script)/i,mode: "vbscript"}
				]
			};
			d = j;
	}
	$.post("/files/get_body", "path=" + encodeURIComponent(f), function(s) {
		if(s.status === false){
			layer.msg(s.msg,{icon:5});
			return;
		}
		layer.close(e);
		var u = ["utf-8", "GBK", "GB2312", "BIG5"];
		var n = "";
		var m = "";
		var o = "";
		for(var p = 0; p < u.length; p++) {
			m = s.data.encoding == u[p] ? "selected" : "";
			n += '<option value="' + u[p] + '" ' + m + ">" + u[p] + "</option>";
		}
		var code_mirror = null;
		var r = layer.open({
			type: 1,
			shift: 5,
			closeBtn: 1,
			area: ["90%", "90%"],
			btn:['Save','Cancel'],
			title: "Online editing [" + f + "]",
			content: '<form class="bt-form pd20">\
				<div class="line">\
					<p style="color:red;margin-bottom:10px">Tip: Ctrl+F to search keywords, Ctrl+G to find next, Ctrl+S to save, Ctrl+Shift+R to find and replace!\
						<select class="bt-input-text" name="encoding" style="width: 74px;position: absolute;top: 31px;right: 19px;height: 22px;z-index: 9999;border-radius: 0;">' + n + '</select>\
					</p>\
					<textarea class="mCustomScrollbar bt-input-text" id="textBody" style="width:100%;margin:0 auto;line-height: 1.8;position: relative;top: 10px;" value="" />\
				</div>\
				</form>',
				success:function(){
					$("#textBody").text(s.data.data);
					var q = $(window).height() * 0.9;
					$("#textBody").height(q - 160);
					code_mirror = CodeMirror.fromTextArea(document.getElementById("textBody"), {
						extraKeys: {
							"Ctrl-F": "findPersistent",
							"Ctrl-H": "replaceAll",
							"Ctrl-S": function() {
								$("#textBody").text(code_mirror.getValue());
								onlineEditFile(2, f,callback);
							},
							"Cmd-S":function() {
								$("#textBody").text(code_mirror.getValue());
								onlineEditFile(2, f,callback);
							},
						},
						mode: d,
						lineNumbers: true,
						matchBrackets: true,
						matchtags: true,
						autoMatchParens: true
					});
					code_mirror.focus();
					code_mirror.setSize("auto", q - 150);

					$(window).resize(function(){
              var q = $(window).height() * 0.9;
              code_mirror.setSize("auto", q - 150);
	        });
			},
			yes:function(){
				$("#textBody").text(code_mirror.getValue());
				onlineEditFile(1, f,callback);
			}
		});
	},'json');
}

function divcenter() {
	$(".layui-layer").css("position", "absolute");
	var c = $(window).width();
	var b = $(".layui-layer").outerWidth();
	var g = $(window).height();
	var f = $(".layui-layer").outerHeight();
	var a = (c - b) / 2;
	var e = (g - f) / 2 > 0 ? (g - f) / 2 : 10;
	var d = $(".layui-layer").offset().left - $(".layui-layer").position().left;
	var h = $(".layui-layer").offset().top - $(".layui-layer").position().top;
	a = a + $(window).scrollLeft() - d;
	e = e + $(window).scrollTop() - h;
	$(".layui-layer").css("left", a + "px");
	$(".layui-layer").css("top", e + "px")
}

function copyText(value) {
	var clipboard = new ClipboardJS('#slemp_copys');
    clipboard.on('success', function (e) {
        layer.msg('Copy successfully',{icon:1,time:2000});
    });

    clipboard.on('error', function (e) {
        layer.msg('Copy failed, browser incompatible!',{icon:2,time:2000});
    });
    $("#slemp_copys").attr('data-clipboard-text',value);
    $("#slemp_copys").click();
}

function copyPass(value){
	copyText(value);
}

function isChineseChar(b) {
	var a = /[\u4E00-\u9FA5\uF900-\uFA2D]/;
	return a.test(b)
}

function safeMessage(j, h, g, f) {
	if(f == undefined) {
		f = ""
	}
	var d = Math.round(Math.random() * 9 + 1);
	var c = Math.round(Math.random() * 9 + 1);
	var e = "";
	e = d + c;
	sumtext = d + " + " + c;
	setCookie("vcodesum", e);
	var mess = layer.open({
		type: 1,
		title: j,
		area: "350px",
		closeBtn: 1,
		shadeClose: true,
		content: "<div class='bt-form webDelete pd20 pb70'>\
			<p>" + h + "</p>" + f + "<div class='vcode'>"+lan.bt.cal_msg+"<span class='text'>" + sumtext + "</span>=<input type='number' id='vcodeResult' value=''></div>\
			<div class='bt-form-submit-btn'>\
				<button type='button' class='btn btn-danger btn-sm bt-cancel'>"+lan.public.cancel+"</button>\
				<button type='button' id='toSubmit' class='btn btn-success btn-sm' >"+lan.public.ok+"</button></div>\
			</div>"
	});
	$("#vcodeResult").focus().keyup(function(a) {
		if(a.keyCode == 13) {
			$("#toSubmit").click()
		}
	});
	$(".bt-cancel").click(function(){
		layer.close(mess);
	});
	$("#toSubmit").click(function() {
		var a = $("#vcodeResult").val().replace(/ /g, "");
		if(a == undefined || a == "") {
			layer.msg('Please enter the calculation result correctly!');
			return
		}
		if(a != getCookie("vcodesum")) {
			layer.msg('Please enter the calculation result correctly!');
			return
		}
		layer.close(mess);
		g();
	})
}
//isAction();

function isAction() {
	hrefs = window.location.href.split("/");
	name = hrefs[hrefs.length - 1];
	if(!name) {
		$("#memuA").addClass("current");
		return
	}
	$("#memuA" + name).addClass("current")
}
var W_window = $(window).width();
if(W_window <= 980) {
	$(window).scroll(function() {
		var a = $(window).scrollTop();
		$(".sidebar-scroll").css({
			position: "absolute",
			top: a
		})
	})
} else {
	$(".sidebar-scroll").css({
		position: "fixed",
		top: "0"
	})
}
$(function() {
	$(".fb-ico").hover(function() {
		$(".fb-text").css({
			left: "36px",
			top: 0,
			width: "80px"
		})
	}, function() {
		$(".fb-text").css({
			left: 0,
			width: "36px"
		})
	}).click(function() {
		$(".fb-text").css({
			left: 0,
			width: "36px"
		});
		$(".zun-feedback-suggestion").show()
	});
	$(".fb-close").click(function() {
		$(".zun-feedback-suggestion").hide()
	});
	$(".fb-attitudes li").click(function() {
		$(this).addClass("fb-selected").siblings().removeClass("fb-selected")
	})
});

$("#signout").click(function() {
	layer.confirm('Do you really want to exit the panel?', {icon:3,closeBtn: 1}, function() {
		window.location.href = "/login?signout=True"
	});
	return false
});


var openWindow = null;
var downLoad = null;
var speed = null;

function task() {
	messageBox();
}

function ActionTask() {
	var a = layer.msg(lan.public.the_del, {
		icon: 16,
		time: 0,
		shade: [0.3, "#000"]
	});
	$.post("/files?action=ActionTask", "", function(b) {
		layer.close(a);
		layer.msg(b.msg, {
			icon: b.status ? 1 : 5
		})
	})
}

function removeTask(b) {
	var a = layer.msg('Deleting, please wait...', {
		icon: 16,
		time: 0,
		shade: [0.3, "#000"]
	});
	$.post("/files/remove_task", "id=" + b, function(c) {
		layer.close(a);
		layer.msg(c.msg, {
			icon: c.status ? 1 : 5
		});
	},'json').error(function(){
		layer.msg(lan.bt.task_close,{icon:1});
	});
}

function GetTaskList(a) {
	a = a == undefined ? 1 : a;
	$.post("/task/list", "tojs=GetTaskList&table=tasks&limit=10&p=" + a, function(g) {
		console.log(g);
		var e = "";
		var b = "";
		var c = "";
		var f = false;
		for(var d = 0; d < g.data.length; d++) {
			switch(g.data[d].status) {
				case "-1":
					f = true;
					if(g.data[d].type != "download") {
						b = "<li><span class='titlename'>" + g.data[d].name + "</span><span class='state'>Installing <img src='/static/img/ing.gif'> | <a href=\"javascript:removeTask(" + g.data[d].id + ")\">Cancel</a></span><span class='opencmd'></span><pre class='cmd'></pre></li>"
					} else {
						b = "<li><div class='line-progress' style='width:0%'></div><span class='titlename'>" + g.data[d].name + "<a id='speed' style='margin-left:130px;'>0.0M/12.5M</a></span><span class='com-progress'>0%</span><span class='state'> downloading <img src='/static/img/ing.gif'> | <a href=\"javascript:removeTask(" + g.data[d].id + ")\">"+lan.public.close+"</a></span></li>"
					}
					break;
				case "0":
					c += "<li><span class='titlename'>" + g.data[d].name + "</span><span class='state'>wait</span> | <a href=\"javascript:removeTask(" + g.data[d].id + ")\">delete['']</a></li>";
					break;
				case "1":
					e += "<li><span class='titlename'>" + g.data[d].name + "</span><span class='state'>" + g.data[d].addtime + "  "+'completed'+"  "+ 'time consuming' + (g.data[d].end - g.data[d].start)+" second</span></li>"
			}
		}
		$("#srunning").html(b + c);
		$("#sbody").html(e);
		return f
	})
}

function getTaskCount() {
	$.get("/task/count", "", function(a) {
		$(".task").text(a);
	});
}
getTaskCount();
setInterval(function(){
	getTaskCount();
},6000);

function setSelectChecked(c, d) {
	var a = document.getElementById(c);
	for(var b = 0; b < a.options.length; b++) {
		if(a.options[b].innerHTML == d) {
			a.options[b].selected = true;
			break
		}
	}
}

function jump() {
	layer.closeAll();
	window.location.href = "/soft"
}

function installTips() {
	$(".fangshi label").mouseover(function() {
		var a = $(this).attr("data-title");
		layer.tips(a, this, {tips: [1, "#787878"],time: 0});
	}).mouseout(function() {
		$(".layui-layer-tips").remove()
	})
}


// function fly(a) {
// 	var b = $("#task").offset();
// 	$("." + a).click(function(d) {
// 		var e = $(this);
// 		var c = $('<span class="yuandian"></span>');
// 		c.fly({
// 			start: {
// 				left: d.pageX,
// 				top: d.pageY
// 			},
// 			end: {
// 				left: b.left + 10,
// 				top: b.top + 10,
// 				width: 0,
// 				height: 0
// 			},
// 			onEnd: function() {
// 				layer.closeAll();
// 				layer.msg(lan.bt.task_add, {icon: 1});
// 				getTaskCount();
// 			}
// 		});
// 	});
// };

function flySlow(a) {
	var b = $("#task").offset();
	var c = $('<span class="yuandian"></span>');
	var d = $("." + a);
	c.fly({
		start: {
			left: d.offset().left,
			top: d.offset().top,
		},
		end: {
			left: b.left + 10,
			top: b.top + 10,
			width: 0,
			height: 0
		},
		speed: 0.65,
		onEnd: function() {
			layer.closeAll();
			layer.msg(lan.bt.task_add, {icon: 1});
			getTaskCount();
			$('.yuandian').remove();
		}
	});

};

function readerTableChecked(){
    $('thead').find('input').bind('click',function(){
        $('tbody').find('tr').each(function(i,obj){
        	var fin = $(this).find('td')[0];
        	checked = $(fin).find('input').prop('checked');
        	$(fin).find('input').prop('checked',!checked);
        });
    });
}

function checkSelect(){
	setTimeout(function(){
		var num = $('tbody').find('input[type="checkbox"]:checked').length;
        if (num == 1) {
            $('button[batch="true"]').hide();
            $('button[batch="false"]').show();
        }else if (num>1){
            $('button[batch="true"]').show();
            $('button[batch="false"]').show();
		}else{
            $('button[batch="true"]').hide();
            $('button[batch="false"]').hide();
		}
	},5);
}

function listOrder(skey,type,obj){
	or = getCookie('order');
	orderType = 'desc';
	if(or){
		if(or.split(' ')[1] == 'desc'){
			orderType = 'asc';
		}
	}
	setCookie('order',skey + ' ' + orderType);
	getWeb(1);
	$(obj).find(".glyphicon-triangle-bottom").remove();
	$(obj).find(".glyphicon-triangle-top").remove();
	if(orderType == 'asc'){
		$(obj).append("<span class='glyphicon glyphicon-triangle-bottom' style='margin-left:5px;color:#bbb'></span>");
	}else{
		$(obj).append("<span class='glyphicon glyphicon-triangle-top' style='margin-left:5px;color:#bbb'></span>");
	}
}

function getPanelList(){
	var con ='';
	$.post("/config/get_panel_list",function(rdata){
		for(var i=0; i<rdata.length; i++){
			con +='<h3 class="mypcip mypcipnew" style="opacity:.6" data-url="'+rdata[i].url+'" data-user="'+rdata[i].username+'" data-pw="'+rdata[i].password+'">\
				<span class="f14 cw">'+rdata[i].title+'</span>\
				<em class="btedit" onclick="bindPanel(0,\'c\',\''+rdata[i].title+'\',\''+rdata[i].id+'\',\''+rdata[i].url+'\',\''+rdata[i].username+'\',\''+rdata[i].password+'\')"></em>\
				</h3>';
		}

		$("#newbtpc").html(con);
		$(".mypcipnew").hover(function(){
			$(this).css("opacity","1");
		},function(){
			$(this).css("opacity",".6");
		}).click(function(){
			$("#btpanelform").remove();
			var murl = $(this).attr("data-url");
			var user = $(this).attr("data-user");
			var pw = $(this).attr("data-pw");
			layer.open({
			  type: 2,
			  title: false,
			  closeBtn: 0,
			  shade: [0],
			  area: ['340px', '215px'],
			  offset: 'rb',
			  time: 5,
			  anim: 2,
			  content: [murl+'/login', 'no']
			});
			var loginForm ='<div id="btpanelform" style="display:none"><form id="toBtpanel" action="'+murl+'/do_login" method="post" target="btpfrom">\
				<input name="username" id="btp_username" value="'+user+'" type="text">\
				<input name="password" id="btp_password" value="'+pw+'" type="password">\
				<input name="code" id="bt_code" value="12345" type="text">\
			</form><iframe name="btpfrom" src=""></iframe></div>';
			$("body").append(loginForm);
			layer.msg('Opening panel...',{icon:16,shade: [0.3, '#000'],time:1000});
			setTimeout(function(){
				$("#toBtpanel").submit();
			},500);
			setTimeout(function(){
				window.open(murl);
			},1000);
		});
		$(".btedit").click(function(e){
			e.stopPropagation();
		});
	},'json');
}
getPanelList();

function bindPanel(a,type,ip,btid,url,user,pw){
	var titleName = 'Association panel';
	if(type == "b"){
		btn = "<button type='button' class='btn btn-success btn-sm' onclick=\"bindPanel(1,'b')\">Add to</button>";
	} else {
		titleName = 'Modify association' + ip;
		btn = "<button type='button' class='btn btn-default btn-sm' onclick=\"bindPaneldel('"+btid+"')\">Delete</button><button type='button' class='btn btn-success btn-sm' onclick=\"bindPanel(1,'c','"+ip+"','"+btid+"')\" style='margin-left:7px'>Revise</button>";
	}
	if(url == undefined) url="http://";
	if(user == undefined) user="";
	if(pw == undefined) pw="";
	if(ip == undefined) ip="";
	if(a == 1) {
		var gurl = "/config/add_panel_info";
		var btaddress = $("#btaddress").val();
		if(!btaddress.match(/^(http|https)+:\/\/([\w-]+\.)+[\w-]+:\d+/)){
			layer.msg('Panel address format is incorrect, example：<p>http://192.168.0.1:8888</p>',{icon:5,time:5000});
			return;
		}
		var btuser = encodeURIComponent($("#btuser").val());
		var btpassword = encodeURIComponent($("#btpassword").val());
		var bttitle = $("#bttitle").val();
		var data = "title="+bttitle+"&url="+encodeURIComponent(btaddress)+"&username="+btuser+"&password="+btpassword;
		if(btaddress =="" || btuser=="" || btpassword=="" || bttitle==""){
			layer.msg(lan.bt.panel_err_empty,{icon:8});
			return;
		}
		if(type=="c"){
			gurl = "/config/set_panel_info";
			data = data+"&id="+btid;
		}
		$.post(gurl, data, function(b) {
			if(b.status) {
				layer.closeAll();
				layer.msg(b.msg, {icon: 1});
				getPanelList();
			} else {
				layer.msg(b.msg, {icon: 2})
			}
		},'json');
		return
	}
	layer.open({
		type: 1,
		area: "400px",
		title: titleName,
		closeBtn: 1,
		shift: 5,
		shadeClose: false,
		content: "<div class='bt-form pd20 pb70'>\
				<div class='line'><span class='tname'>Panel address</span>\
				<div class='info-r'><input class='bt-input-text' type='text' name='btaddress' id='btaddress' value='"+url+"' placeholder='Panel address' style='width:100%'/></div>\
				</div>\
				<div class='line'><span class='tname'>Username</span>\
				<div class='info-r'><input class='bt-input-text' type='text' name='btuser' id='btuser' value='"+user+"' placeholder='Username' style='width:100%'/></div>\
				</div>\
				<div class='line'><span class='tname'>Password</span>\
				<div class='info-r'><input class='bt-input-text' type='password' name='btpassword' id='btpassword' value='"+pw+"' placeholder='Password' style='width:100%'/></div>\
				</div>\
				<div class='line'><span class='tname'>Description</span>\
				<div class='info-r'><input class='bt-input-text' type='text' name='bttitle' id='bttitle' value='"+ip+"' placeholder='Description' style='width:100%'/></div>\
				</div>\
				<div class='line'><ul class='help-info-text c7'>\
					<li>Bookmark other server panel data to realize one-click login panel function</li><li>Panel remarks cannot be repeated</li>\
					<li><font style='color:red'>Note that turning on ad blocking will make it impossible to log in quickly.</font></li></ul>\
				</div>\
				<div class='bt-form-submit-btn'><button type='button' class='btn btn-danger btn-sm' onclick=\"layer.closeAll()\">Cancel</button> "+btn+"</div>\
				</div>",

			success:function(){
				$("#btaddress").on("input",function(){
					var str =$(this).val();
					var isip = /([\w-]+\.){2,6}\w+/;
					var iptext = str.match(isip);
					if(iptext) $("#bttitle").val(iptext[0]);
				}).blur(function(){
					var str =$(this).val();
					var isip = /([\w-]+\.){2,6}\w+/;
					var iptext = str.match(isip);
					if(iptext) $("#bttitle").val(iptext[0]);
				});
			}
	});
}

function bindPaneldel(id){
	$.post("/config/del_panel_info","id="+id,function(rdata){
		layer.closeAll();
		layer.msg(rdata.msg,{icon:rdata.status?1:2});
		getPanelList();
	},'json');
}

function getSpeed(sele){
	if(!$(sele)) {
		return;
	}
	$.get('/files/get_speed',function(data){
		var speed = data['data'];
		if(speed.title === null){
			return;
		}
		var mspeed = '';
		if(speed.speed > 0){
			mspeed = '<span class="pull-right">'+toSize(speed.speed)+'/s</span>';
		}
		var body = '<p>'+speed.title+' <img src="/static/img/ing.gif"></p>\
		<div class="bt-progress"><div class="bt-progress-bar" style="width:'+speed.progress+'%"><span class="bt-progress-text">'+speed.progress+'%</span></div></div>\
		<p class="f12 c9"><span class="pull-left">'+speed.used+'/'+speed.total+'</span>'+mspeed+'</p>';
		$(sele).prev().hide();
		$(sele).css({"margin-left":"-37px","width":"380px"});
		$(sele).parents(".layui-layer").css({"margin-left":"-100px"});

		$(sele).html(body);
		setTimeout(function(){
			getSpeed(sele);
		},1000);
	},'json');
}

function messageBox() {
	layer.open({
		type: 1,
		title: 'Message box',
		area: "670px",
		closeBtn: 1,
		shadeClose: false,
		content: '<div class="bt-form">\
					<div class="bt-w-main">\
						<div class="bt-w-menu">\
							<p class="bgw" id="taskList" onclick="tasklist()">Task List(<span class="task_count">0</span>)</p>\
							<p onclick="remind()">Message list(<span class="msg_count">0</span>)</p>\
							<p onclick="execLog()">Execution log</p>\
						</div>\
						<div class="bt-w-con pd15">\
							<div class="taskcon"></div>\
						</div>\
					</div>\
				</div>'
	});
	$(".bt-w-menu p").click(function(){
		$(this).addClass("bgw").siblings().removeClass("bgw");
	});
	tasklist();
}

function execLog(){
	$.post('/task/get_exec_log',{},function(logs){
		var lbody = '<textarea readonly="" style="margin: 0px;width: 530px;height: 520px;background-color: #333;color:#fff; padding:0 5px" id="exec_log">'+logs+'</textarea>';
		$(".taskcon").html(lbody);
		var ob = document.getElementById('exec_log');
		ob.scrollTop = ob.scrollHeight;
	});
}

function getSFM(seconds, dateFormat = 'H:i:s') {
  var obj = {};
  obj.H = Number.parseInt(seconds / 3600);
  obj.i = Number.parseInt((seconds - obj.H * 3600) / 60);
  obj.s = Number.parseInt(seconds - obj.H * 3600 - obj.i * 60);
  if (obj.H < 10) {
    obj.H = '0' + obj.H;
  }
  if (obj.i < 10) {
    obj.i = '0' + obj.i;
  }
  if (obj.s < 10) {
    obj.s = '0' + obj.s;
  }

  var rs = dateFormat.replace('H', obj.H).replace('i', obj.i).replace('s', obj.s);
  return rs;
}

function remind(a){
	a = a == undefined ? 1 : a;
	$.post("/task/list", "table=tasks&result=2,4,6,8&limit=10&p=" + a, function(g) {
		// console.log(g);
		var e = "";
		var f = false;
		var task_count = 0;
		for(var d = 0; d < g.data.length; d++) {
			if(g.data[d].status != '1'){
				task_count++;
				e += '<tr><td><input type="checkbox"></td><td><div class="titlename c3">'+g.data[d].name+'</span><span class="rs-status"> ['+lan.bt.task_the+'] <span><span class="rs-time">Time consuming ['+ getSFM(g.data[d].end - g.data[d].start) +']</span></div></td><td class="text-right c3">'+g.data[d].addtime+'</td></tr>'
			} else{
				e += '<tr><td><input type="checkbox"></td><td><div class="titlename c3">'+g.data[d].name+'</span><span class="rs-status"> ['+lan.bt.task_ok+'] <span><span class="rs-time">Time consuming ['+ getSFM(g.data[d].end - g.data[d].start) +']</span></div></td><td class="text-right c3">'+g.data[d].addtime+'</td></tr>';
			}
		}
		var con = '<div class="divtable"><table class="table table-hover">\
					<thead><tr><th width="20"><input id="Rs-checkAll" type="checkbox" onclick="RscheckSelect()"></th><th>'+lan.bt.task_name+'</th><th class="text-right">'+lan.bt.task_time+'</th></tr></thead>\
					<tbody id="remind">'+e+'</tbody>\
					</table></div>\
					<div class="mtb15" style="height:32px">\
						<div class="pull-left buttongroup" style="display:none;">\
							<button class="btn btn-default btn-sm mr5 rs-del" disabled="disabled">'+lan.public.del+'</button>\
							<button class="btn btn-default btn-sm mr5 rs-read" disabled="disabled">'+lan.bt.task_tip_read+'</button>\
							<button class="btn btn-default btn-sm">'+lan.bt.task_tip_all+'</button>\
						</div>\
						<div id="taskPage" class="page"></div>\
					</div>';

		$(".task_count").text(task_count);
		$(".msg_count").text(g.count);
		$(".taskcon").html(con);
		$("#taskPage").html(g.page);

		$("#Rs-checkAll").click(function(){
			if($(this).prop("checked")){
				$("#remind").find("input").prop("checked",true)
			} else {
				$("#remind").find("input").prop("checked",false)
			}
		});
	},'json');
}

function getReloads() {
	var a = 0;
	var mm = $(".bt-w-menu .bgw").html()
	if(mm == undefined || mm.indexOf(lan.bt.task_list) == -1) {
		clearInterval(speed);
		a = 0;
		speed = null;
		return
	}
	if(speed) {return;}
	speed = setInterval(function() {
		var mm = $(".bt-w-menu .bgw").html()
		if(mm == undefined || mm.indexOf(lan.bt.task_list) == -1) {
			clearInterval(speed);
			speed = null;
			a = 0;
			return
		}
		a++;
		$.post('/task/get_task_speed', '', function(h) {
			if(h.task == undefined) {
				$(".cmdlist").html(lan.bt.task_not_list);
				return;
			}
			var b = "";
			var d = "";
			$("#task").text(h.task.length);
			$(".task_count").text(h.task.length);
			for(var g = 0; g < h.task.length; g++) {
				if(h.task[g].status == "-1") {
					if(h.task[g].type != "download") {
						var c = "";
						var f = h.msg.split("\n");
						for(var e = 0; e < f.length; e++) {
							c += f[e] + "<br>"
						}
						if(h.task[g].name.indexOf("scanning") != -1) {
							b = "<li><span class='titlename'>" + h.task[g].name + "</span><span class='state'>Scanning <img src='/static/img/ing.gif'> | <a href=\"javascript:removeTask(" + h.task[g].id + ")\">cancel</a></span><span class='opencmd'></span><div class='cmd'>" + c + "</div></li>"
						} else {
							b = "<li><span class='titlename'>" + h.task[g].name + "</span><span class='state'>Installing <img src='/static/img/ing.gif'> | <a href=\"javascript:removeTask(" + h.task[g].id + ")\">cancel</a></span><div class='cmd'>" + c + "</div></li>"
						}
					} else {
						b = "<li><div class='line-progress' style='width:" + h.msg.pre + "%'></div><span class='titlename'>" + h.task[g].name + "<a style='margin-left:130px;'>" + (toSize(h.msg.used) + "/" + toSize(h.msg.total)) + "</a></span><span class='com-progress'>" + h.msg.pre + "%</span><span class='state'>"+lan.bt.task_downloading+" <img src='/static/img/ing.gif'> | <a href=\"javascript:removeTask(" + h.task[g].id + ")\">"+lan.public.close+"</a></span></li>"
					}
				} else {
					d += "<li><span class='titlename'>" + h.task[g].name + "</span><span class='state'>wait | <a style='color:green' href=\"javascript:removeTask(" + h.task[g].id + ')">delete</a></span></li>'
				}
			}
			$(".cmdlist").html(b + d);
			$(".cmd").html(c);
			try{
				if($(".cmd")[0].scrollHeight) $(".cmd").scrollTop($(".cmd")[0].scrollHeight);
			}catch(e){
				return;
			}
		},'json').error(function(){});
	}, 1000);
}

function RscheckSelect(){
	setTimeout(function(){
		var checkList = $("#remind").find("input");
		var count = 0;
		for(var i=0;i<checkList.length;i++){
			if(checkList[i].checked) count++;
		}
		if(count > 0){
			$(".buttongroup .btn").removeAttr("disabled");
		}else{
			$(".rs-del,.rs-read").attr("disabled","disabled");
		}
	},5);
}


function tasklist(a){
	var con='<ul class="cmdlist"></ul>\
		<span style="position:  fixed;bottom: 13px;">Jika task sudah lama tidak dijalankan, silakan coba untuk mengatur ulang antrian tugas dengan mengklik [Restart Panel] di halaman beranda</span>';
	$(".taskcon").html(con);
	a = a == undefined ? 1 : a;
	$.post("/task/list", "tojs=getTaskList&table=tasks&limit=10&p=" + a, function(g) {
		var e = "";
		var b = "";
		var c = "";
		var f = false;
		var task_count =0;
		for(var d = 0; d < g.data.length; d++) {
			switch(g.data[d].status) {
				case "-1":
					f = true;
					if(g.data[d].type != "download") {
						b = "<li><span class='titlename'>" + g.data[d].name + "</span><span class='state pull-right c6'>Menginstal <img src='/static/img/ing.gif'> | <a class='btlink' href=\"javascript:removeTask(" + g.data[d].id + ")\">Tutup</a></span><span class='opencmd'></span><pre class='cmd'></pre></li>"
					} else {
						b = "<li><div class='line-progress' style='width:0%'></div><span class='titlename'>" + g.data[d].name + "<a id='speed' style='margin-left:130px;'>0.0M/12.5M</a></span><span class='com-progress'>0%</span><span class='state'>Mengunduh <img src='/static/img/ing.gif'> | <a href=\"javascript:removeTask(" + g.data[d].id + ")\">Tutup</a></span></li>"
					}
					task_count++;
					break;
				case "0":
					c += "<li><span class='titlename'>" + g.data[d].name + "</span><span class='state pull-right c6'>Tunggu</span> | <a href=\"javascript:removeTask(" + g.data[d].id + ")\" class='btlink'>"+lan.public.del+"</a></li>";
					task_count++;
					break;
			}
		}


		$(".task_count").text(task_count);
		$(".cmdlist").html(b + c);
		getReloads();
		return f
	},'json');
}

function activeDisk() {
	var a = $("#PathPlace").find("span").text().substring(0, 1);
	switch(a) {
		case "C":
			$(".path-con-left dd:nth-of-type(1)").css("background", "#eee").siblings().removeAttr("style");
			break;
		case "D":
			$(".path-con-left dd:nth-of-type(2)").css("background", "#eee").siblings().removeAttr("style");
			break;
		case "E":
			$(".path-con-left dd:nth-of-type(3)").css("background", "#eee").siblings().removeAttr("style");
			break;
		case "F":
			$(".path-con-left dd:nth-of-type(4)").css("background", "#eee").siblings().removeAttr("style");
			break;
		case "G":
			$(".path-con-left dd:nth-of-type(5)").css("background", "#eee").siblings().removeAttr("style");
			break;
		case "H":
			$(".path-con-left dd:nth-of-type(6)").css("background", "#eee").siblings().removeAttr("style");
			break;
		default:
			$(".path-con-left dd").removeAttr("style");
	}
}


function backMyComputer() {
	$(".default").show();
	$(".file-list").hide();
	$("#PathPlace").find("span").html("");
	activeDisk();
}

function check_login(){
	$.post('/check_login',{},function(rdata){
		if(rdata === true) return;
	});
}

function to_login(){
	layer.confirm('Your login status has expired, please log in again!',{title:'Session expired',icon:2,closeBtn: 1,shift: 5},function(){
		location.reload();
	});
}

function table_fixed(name){
	var tableName = document.querySelector('#'+name);
	tableName.addEventListener('scroll',scroll_handle);
}
function scroll_handle(e){
	var scrollTop = this.scrollTop;
	$(this).find("thead").css({"transform":"translateY("+scrollTop+"px)","position":"relative","z-index":"1"});
}


$(function(){
///
setInterval(function(){check_login();},6000);
///
});

function asyncLoadImage(obj, url){

	if (typeof(url) == 'undefined'){
		return;
	}

	function loadImage(obj,url,callback){
	    var img = new Image();
	    img.src = url;

	    if(img.complete){
	        callback.call(img,obj);
	        return;
	    }
	    img.onload = function(){
	        callback.call(img,obj);
	    }
	}

	function showImage(obj){
	    obj.src = this.src;
	}
	loadImage(obj, url, showImage);
}

function loadImage(){
	$('img').each(function(i){
		// console.log($(this).attr('data-src'));
		if ($(this).attr('data-src') != ''){
			asyncLoadImage(this, $(this).attr('data-src'));
		}
    });
}

var socket, gterm;
function webShell() {
    var termCols = 83;
    var termRows = 21;
    var sendTotal = 0;
    if(!socket)socket = io.connect();
    var term = new Terminal({ cols: termCols, rows: termRows, screenKeys: true, useStyle: true});

    term.open();
    term.setOption('cursorBlink', true);
    term.setOption('fontSize', 14);
    gterm = term;

    socket.on('server_response', function (data) {
        term.write(data.data);
        if (data.data == '\r\nSign out\r\n' ||
            data.data == 'Sign out\r\n' ||
            data.data == '\r\nlogout\r\n' ||
            data.data == 'logout\r\n') {
            setTimeout(function () {
                layer.closeAll();
                term.destroy();
                clearInterval(interval);
            }, 500);
        }
    });

    $(window).unload(function(){
  　     term.destroy();
        clearInterval(interval);
    });

    if (socket) {
        socket.emit('webssh', '');
        interval = setInterval(function () {
            socket.emit('webssh', '');
        }, 500);
    }

    term.on('data', function (data) {
        socket.emit('webssh', data);
    });


    var term_box = layer.open({
        type: 1,
        title: "Local terminal",
        area: ['685px','463px'],
        closeBtn: 1,
        shadeClose: false,
        content: '<div class="term-box"><div id="term"></div></div>\
					<div class="shell-text-input">\
                    <textarea type="text" class="bt-input-text-shell" placeholder="Please paste the command here.." value="" name="ssh_copy" />\
					<div class="shell-btn-group">\
                    <button class="shellbutton btn btn-success btn-sm pull-right shell_btn_1">Send (Ctrl+Enter)</button>\
					<button class="shellbutton btn btn-default btn-sm pull-right shell_btn_close">Cancel</button>\
					</div>\
                </div>',
        success:function(){
        	$(".shell_btn_close").click(function(){
				layer.close(term_box);
				term.destroy();
		        clearInterval(interval);
			});
        },
        cancel: function () {
            term.destroy();
            clearInterval(interval);
        }
    });


    setTimeout(function () {

        $('.terminal').detach().appendTo('#term');
        $("#term").show();
        socket.emit('webssh', "\n");
        term.focus();

        var can = $("#term");
        can.contextmenu(function (e) {
            var winWidth = can.width();
            var winHeight = can.height();
            var mouseX = e.pageX;
            var mouseY = e.pageY;
            var menuWidth = $(".contextmenu").width();
            var menuHeight = $(".contextmenu").height();
            var minEdgeMargin = 10;
            if (mouseX + menuWidth + minEdgeMargin >= winWidth &&
                mouseY + menuHeight + minEdgeMargin >= winHeight) {
                menuLeft = mouseX - menuWidth - minEdgeMargin + "px";
                menuTop = mouseY - menuHeight - minEdgeMargin + "px";
            }
            else if (mouseX + menuWidth + minEdgeMargin >= winWidth) {
                menuLeft = mouseX - menuWidth - minEdgeMargin + "px";
                menuTop = mouseY + minEdgeMargin + "px";
            }
            else if (mouseY + menuHeight + minEdgeMargin >= winHeight) {
                menuLeft = mouseX + minEdgeMargin + "px";
                menuTop = mouseY - menuHeight - minEdgeMargin + "px";
            }
            else {
                menuLeft = mouseX + minEdgeMargin + "px";
                menuTop = mouseY + minEdgeMargin + "px";
            };

            var selectText = term.getSelection()
            var style_str = '';
            var paste_str = '';
            if (!selectText) {
                if (!getCookie('shell_copy_body')) {
                    paste_str = 'style="color: #bbb;" disable';
                }
                style_str = 'style="color: #bbb;" disable';
            } else {
                setCookie('ssh_selection', selectText);
            }


            var menudiv = '<ul class="contextmenu">\
                        <li><a class="shell_copy_btn menu_ssh" data-clipboard-text="'+ selectText + '" ' + style_str + '>Copy to clipboard</a></li>\
                        <li><a  onclick="shell_paste_text()" '+ paste_str+'>Paste selected</a></li>\
                    </ul>';
            $("body").append(menudiv);
            $(".contextmenu").css({
                "left": menuLeft,
                "top": menuTop
            });
            return false;
        });
        can.click(function () {
            remove_ssh_menu();
        });

        clipboard = new ClipboardJS('.shell_copy_btn');
        clipboard.on('success', function (e) {
            layer.msg('Copy successfully!');
            setCookie('shell_copy_body', e.text)
            remove_ssh_menu();
            term.focus();
        });

        clipboard.on('error', function (e) {
            layer.msg('Copy failed, browser incompatible!');
            setCookie('shell_copy_body', e.text)
            remove_ssh_menu();
            term.focus();
        });

        $(".shellbutton").click(function () {
            var tobj = $("textarea[name='ssh_copy']");
            var ptext = tobj.val();
            tobj.val('');
            if ($(this).text().indexOf('Alt') != -1) {
                ptext +="\n";
            }
            socket.emit('webssh', ptext);
            term.focus();
        });
        $("textarea[name='ssh_copy']").keydown(function (e) {
            if (e.ctrlKey && e.keyCode == 13) {
                $(".shell_btn_1").click();
            } else if (e.altKey && e.keyCode == 13) {
                $(".shell_btn_1").click();
            }
        });
    }, 100);
}

function shell_paste_text(){
    socket.emit('webssh', getCookie('ssh_selection'));
    remove_ssh_menu();
    gterm.focus();
}

function remove_ssh_menu() {
    $(".contextmenu").remove();
}

function showSpeed(filename) {
    $.post('/files/get_last_body', { num: 10,path: filename}, function (rdata) {
    	if ($("#speed_log_lst").length < 1){
    		return;
    	}
		if (rdata.status) {
			$("#speed_log_lst").html(rdata.data);
			$("#speed_log_lst").scrollTop($("#speed_log_lst")[0].scrollHeight);
		}
		setTimeout(function () { showSpeed(filename); }, 1000);
    },'json');
}

function showSpeedWindow(msg, speed_log_func_name, callback){
	var speed_msg = "<pre style='margin-bottom: 0px;height:250px;text-align: left;background-color: #000;color: #fff;white-space: pre-wrap;' id='speed_log_lst'>[MSG]</pre>";
	var showSpeedKey = layer.open({
		title: false,
		type: 1,
		closeBtn: 2,
		shade: 0.3,
		area: "700px",
		offset: "30%",
		content: speed_msg.replace('[MSG]', msg),
		success: function (layers, index) {
			var url = speed_log_func_name.replace('.','/');
			$.post('/'+url, {}, function(rdata){
				if (rdata.status){
					setTimeout(function () {
						showSpeed(rdata.data);
					}, 1000);
				} else {
					layer.msg("The specified file is missing!");
				}
			},'json');
			if (callback) {callback(layers,index,showSpeedKey);}
		}
    });
}

function toArrayObject(str){
	var data = {};
    kv = str.split('&');
    for(i in kv){
        v = kv[i].split('=');
        data[v[0]] = v[1];
    }
    return data;
}

function entitiesEncode(text) {
    text = text.replace(/&/g, "&amp;");
    text = text.replace(/</g, "&lt;");
    text = text.replace(/>/g, "&gt;");
    text = text.replace(/ /g, "&nbsp;");
    text = text.replace(/"/g, "&quot;");
    return text;
}

function entitiesDecode(text) {
    text = text.replace(/&amp;/g, "&");
    text = text.replace(/&lt;/g, "<");
    text = text.replace(/&gt;/g, ">");
    text = text.replace(/&nbsp;/g, " ");
    text = text.replace(/&quot;/g, "'");
    return text;
}

function base64_encode(str) {
    var base64EncodeChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    var out, i, len;
    var c1, c2, c3;

    len = str.length;
    i = 0;
    out = "";
    while(i < len) {
        c1 = str.charCodeAt(i++) & 0xff;
        if(i == len)
        {
            out += base64EncodeChars.charAt(c1 >> 2);
            out += base64EncodeChars.charAt((c1 & 0x3) << 4);
            out += "==";
            break;
        }
        c2 = str.charCodeAt(i++);
        if(i == len)
        {
            out += base64EncodeChars.charAt(c1 >> 2);
            out += base64EncodeChars.charAt(((c1 & 0x3)<< 4) | ((c2 & 0xF0) >> 4));
            out += base64EncodeChars.charAt((c2 & 0xF) << 2);
            out += "=";
            break;
        }
        c3 = str.charCodeAt(i++);
        out += base64EncodeChars.charAt(c1 >> 2);
        out += base64EncodeChars.charAt(((c1 & 0x3)<< 4) | ((c2 & 0xF0) >> 4));
        out += base64EncodeChars.charAt(((c2 & 0xF) << 2) | ((c3 & 0xC0) >>6));
        out += base64EncodeChars.charAt(c3 & 0x3F);
    }
    return out;
}

function base64_decode(str) {
    var base64DecodeChars = new Array(
        -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
        -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
        -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 62, -1, -1, -1, 63,
        52, 53, 54, 55, 56, 57, 58, 59, 60, 61, -1, -1, -1, -1, -1, -1,
        -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,
        15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, -1, -1, -1, -1, -1,
        -1, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
        41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, -1, -1, -1, -1, -1);
    var c1, c2, c3, c4;
    var i, len, out;

    len = str.length;
    i = 0;
    out = "";
    while(i < len) {
        /* c1 */
        do {
            c1 = base64DecodeChars[str.charCodeAt(i++) & 0xff];
        } while(i < len && c1 == -1);
        if(c1 == -1)
            break;

        /* c2 */
        do {
            c2 = base64DecodeChars[str.charCodeAt(i++) & 0xff];
        } while(i < len && c2 == -1);
        if(c2 == -1)
            break;

        out += String.fromCharCode((c1 << 2) | ((c2 & 0x30) >> 4));

        /* c3 */
        do {
            c3 = str.charCodeAt(i++) & 0xff;
            if(c3 == 61)
                return out;
            c3 = base64DecodeChars[c3];
        } while(i < len && c3 == -1);
        if(c3 == -1)
            break;

        out += String.fromCharCode(((c2 & 0XF) << 4) | ((c3 & 0x3C) >> 2));

        /* c4 */
        do {
            c4 = str.charCodeAt(i++) & 0xff;
            if(c4 == 61)
                return out;
            c4 = base64DecodeChars[c4];
        } while(i < len && c4 == -1);
        if(c4 == -1)
            break;
        out += String.fromCharCode(((c3 & 0x03) << 6) | c4);
    }
    return out;
}

function utf16to8(str) {
    var out, i, len, c;

    out = "";
    len = str.length;
    for(i = 0; i < len; i++) {
        c = str.charCodeAt(i);
        if ((c >= 0x0001) && (c <= 0x007F)) {
            out += str.charAt(i);
        } else if (c > 0x07FF) {
            out += String.fromCharCode(0xE0 | ((c >> 12) & 0x0F));
            out += String.fromCharCode(0x80 | ((c >> 6) & 0x3F));
            out += String.fromCharCode(0x80 | ((c >> 0) & 0x3F));
        } else {
            out += String.fromCharCode(0xC0 | ((c >> 6) & 0x1F));
            out += String.fromCharCode(0x80 | ((c >> 0) & 0x3F));
        }
    }
    return out;
}

function utf8to16(str) {
    var out, i, len, c;
    var char2, char3;

    out = "";
    len = str.length;
    i = 0;
    while(i < len) {
        c = str.charCodeAt(i++);
        switch(c >> 4)
        {
            case 0: case 1: case 2: case 3: case 4: case 5: case 6: case 7:
            // 0xxxxxxx
            out += str.charAt(i-1);
            break;
            case 12: case 13:
            // 110x xxxx 10xx xxxx
            char2 = str.charCodeAt(i++);
            out += String.fromCharCode(((c & 0x1F) << 6) | (char2 & 0x3F));
            break;
            case 14:
                // 1110 xxxx 10xx xxxx 10xx xxxx
                char2 = str.charCodeAt(i++);
                char3 = str.charCodeAt(i++);
                out += String.fromCharCode(((c & 0x0F) << 12) |
                    ((char2 & 0x3F) << 6) |
                    ((char3 & 0x3F) << 0));
                break;
        }
    }

    return out;
}

function pluginService(_name, version, _suffix_name=''){

	var default_name = 'status';
	if ( _suffix_name != '' ){
		default_name = 'status_'+_suffix_name;
	}

	var data = {name:_name, func:default_name};
	if ( typeof(version) != 'undefined' ){
		data['version'] = version;
	} else {
		version = '';
	}
	// console.log(version);

	var loadT = layer.msg('Retrieving...', { icon: 16, time: 0, shade: 0.3 });
	$.post('/plugins/run', data, function(data) {
		layer.close(loadT);
        if(!data.status){
            layer.msg(data.msg,{icon:0,time:3000,shade: [0.3, '#000']});
            return;
        }
        if (data.data == 'start'){
            pluginSetService(_name, true, version, _suffix_name);
        } else {
            pluginSetService(_name, false, version, _suffix_name);
        }
    },'json');
}

function pluginSetService(_name ,status, version, _suffix_name=''){

	var default_name = 'status';
	var restart_name = 'restart';
	var reload_name = 'reload';
	var status_ss = (status?'stop':'start');
	if ( _suffix_name != '' ){
		default_name = 'status_'+_suffix_name;
		restart_name = 'restart_'+_suffix_name;
		reload_name = 'reload_'+_suffix_name;
		status_ss = status_ss+'_'+_suffix_name;
	}

	var serviceCon ='<p class="status">Current status：<span>'+(status ? 'start' : 'stop' )+
        '</span><span style="color: '+
        (status?'#20a53a;':'red;')+
        ' margin-left: 3px;" class="glyphicon ' + (status?'glyphicon glyphicon-play':'glyphicon-pause')+'"></span></p><div class="sfm-opt">\
						<button class="btn btn-default btn-sm" onclick="pluginOpService(\''+_name+'\',\''+status_ss+'\',\''+version+'\',\''+_suffix_name+'\')">'+(status?'stop':'start')+'</button>\
						<button class="btn btn-default btn-sm" onclick="pluginOpService(\''+_name+'\',\''+restart_name+'\',\''+version+'\',\''+_suffix_name+'\')">restart</button>\
						<button class="btn btn-default btn-sm" onclick="pluginOpService(\''+_name+'\',\''+reload_name+'\',\''+version+'\',\''+_suffix_name+'\')">reload</button>\
        </div>';
    $(".soft-man-con").html(serviceCon);
}


function pluginOpService(a, b, v, _suffix_name='') {

    var c = "name=" + a + "&func=" + b;
    if(v != ''){
    	c = c + '&version='+v;
    }

    var d = "";
    b = b.split('_')[0];
    switch(b) {
        case "stop":d = 'stop';break;
        case "start":d = 'start';break;
        case "restart":d = 'restart';break;
        case "reload":d = 'reload';break;
    }

    _ver = v;
    if(v != ''){
    	_ver = '[' + v + ']';
    }

    layer.confirm( msgTpl('Do you really want {1}{2}{3} service？', [d,a,_ver]), {icon:3,closeBtn: 1}, function() {
        var e = layer.msg(msgTpl('Serving {1}{2}{3}, please wait...',[d,a,_ver]), {icon: 16,time: 0});

        $.post("/plugins/run", c, function(g) {
            layer.close(e);


            var f = g.data == 'ok' ? msgTpl('{1} {2} service has been {3}',[a,_ver,d]) : msgTpl('{1}{2} failed to serve {3}!',[a,_ver,d]);
            layer.msg(f, {icon: g.data == 'ok' ? 1 : 2});

            if( b != "reload" && g.data == 'ok' ) {
                if ( b == 'start' ) {
                    pluginSetService(a, true, v, _suffix_name);
                } else if ( b == 'stop' ){
                    pluginSetService(a, false, v, _suffix_name);
                }
            }

            if( g.status && g.data != 'ok' ) {
                layer.msg(g.data, {icon: 2,time: 3000,shade: 0.3,shadeClose: true});
            }

            setTimeout(function(){
            	// location.reload();
            	getSList();
            },2000);
        },'json').error(function() {
            layer.close(e);
            layer.msg('操作异常!', {icon: 1});
        });
    })
}

function pluginConfig(_name, version, func){
	if ( typeof(version) == 'undefined' ){
		version = '';
	}

	var func_name = 'conf';
    if ( typeof(func) != 'undefined' ){
        func_name = func;
    }

    var con = '<p style="color: #666; margin-bottom: 7px">Tip: Ctrl+F to search keywords, Ctrl+G to find next, Ctrl+S to save, Ctrl+Shift+R to find and replace!</p>\
    			<textarea class="bt-input-text" style="height: 320px; line-height:18px;" id="textBody"></textarea>\
                <button id="onlineEditFileBtn" class="btn btn-success btn-sm" style="margin-top:10px;">Save</button>\
                <ul class="help-info-text c7 ptb15">\
                    <li>Here is the main configuration file of '+ _name + version +', if you do not understand the configuration rules, please do not modify it at will.</li>\
                </ul>';


    var loadT = layer.msg('Getting configuration file path...',{icon:16,time:0,shade: [0.3, '#000']});
    $.post('/plugins/run', {name:_name, func:func_name,version:version},function (data) {
        layer.close(loadT);

        try{
        	var jdata = $.parseJSON(data.data);
        	if (!jdata['status']){
        		layer.msg(jdata.msg,{icon:0,time:2000,shade: [0.3, '#000']});
                return;
        	}
		}catch(err){/*console.log(err);*/}

		$(".soft-man-con").html(con);

        var loadT2 = layer.msg('File content fetching...',{icon:16,time:0,shade: [0.3, '#000']});
        var fileName = data.data;
        $.post('/files/get_body', 'path=' + fileName, function(rdata) {
            layer.close(loadT2);
            if (!rdata.status){
                layer.msg(rdata.msg,{icon:0,time:2000,shade: [0.3, '#000']});
                return;
            }
            $("#textBody").empty().text(rdata.data.data);
            $(".CodeMirror").remove();
            var editor = CodeMirror.fromTextArea(document.getElementById("textBody"), {
                extraKeys: {
                    "Ctrl-Space": "autocomplete",
                    "Ctrl-F": "findPersistent",
                    "Ctrl-H": "replaceAll",
                    "Ctrl-S": function() {
                    	$("#textBody").text(editor.getValue());
                        pluginConfigSave(fileName);
                    }
                },
                lineNumbers: true,
                matchBrackets:true,
            });
            editor.focus();
            $(".CodeMirror-scroll").css({"height":"300px","margin":0,"padding":0});
            $("#onlineEditFileBtn").click(function(){
                $("#textBody").text(editor.getValue());
                pluginConfigSave(fileName);
            });
        },'json');
    },'json');
}

function pluginConfigTpl(_name, version, func, config_tpl_func, read_config_tpl_func){
	if ( typeof(version) == 'undefined' ){
		version = '';
	}

	var func_name = 'conf';
    if ( typeof(func) != 'undefined' ){
        func_name = func;
    }

    var _config_tpl_func = 'config_tpl';
    if ( typeof(config_tpl_func) != 'undefined' ){
        _config_tpl_func = config_tpl_func;
    }

    var _read_config_tpl_func = 'read_config_tpl';
    if ( typeof(read_config_tpl_func) != 'undefined' ){
        _read_config_tpl_func = read_config_tpl_func;
    }


    var con = '<p style="color: #666; margin-bottom: 7px">Tip: Ctrl+F to search keywords, Ctrl+G to find next, Ctrl+S to save, Ctrl+Shift+R to find and replace!</p>\
    			<select id="config_tpl" class="bt-input-text mr20" style="width:30%;margin-bottom: 3px;"><option value="0">Please choose</option></select>\
    			<textarea class="bt-input-text" style="height: 320px; line-height:18px;" id="textBody"></textarea>\
                <button id="onlineEditFileBtn" class="btn btn-success btn-sm" style="margin-top:10px;">Save</button>\
                <ul class="help-info-text c7 ptb15">\
                    <li>Here is the main configuration file of '+ _name + version +', if you do not understand the configuration rules, please do not modify it at will.</li>\
                </ul>';
    $(".soft-man-con").html(con);

    function getFileName(file){
    	var list = file.split('/');
    	var f = list[list.length-1];
    	return f
    }

    var fileName = '';
    $.post('/plugins/run',{name:_name, func:_config_tpl_func,version:version}, function(data){
    	var rdata = $.parseJSON(data.data);
    	for (var i = 0; i < rdata.length; i++) {
    		$('#config_tpl').append('<option value="'+rdata[i]+'"">'+getFileName(rdata[i])+'</option>');
    	}

    	$('#config_tpl').change(function(){
    		var selected = $(this).val();
    		if (selected != '0'){
    			var loadT = layer.msg('Getting the configuration template...',{icon:16,time:0,shade: [0.3, '#000']});

    			var _args = JSON.stringify({file:selected});
    			$.post('/plugins/run', {name:_name, func:_read_config_tpl_func,version:version,args:_args}, function(data){
    				layer.close(loadT);
    				var rdata = $.parseJSON(data.data);
    				if (!rdata.status){
		                layer.msg(rdata.msg,{icon:0,time:2000,shade: [0.3, '#000']});
		                return;
		            }

    				$("#textBody").empty().text(rdata.data);
    				$(".CodeMirror").remove();
		            var editor = CodeMirror.fromTextArea(document.getElementById("textBody"), {
		                extraKeys: {
		                    "Ctrl-Space": "autocomplete",
		                    "Ctrl-F": "findPersistent",
		                    "Ctrl-H": "replaceAll",
		                    "Ctrl-S": function() {
		                    	$("#textBody").text(editor.getValue());
		                        pluginConfigSave(fileName);
		                    }
		                },
		                lineNumbers: true,
		                matchBrackets:true,
		            });
		            editor.focus();
		            $(".CodeMirror-scroll").css({"height":"300px","margin":0,"padding":0});
		            $("#onlineEditFileBtn").unbind('click');
		            $("#onlineEditFileBtn").click(function(){
		                $("#textBody").text(editor.getValue());
		                pluginConfigSave(fileName);
		            });
    			},'json');
    		}
    	});

    },'json');

    var loadT = layer.msg('Getting configuration file path...',{icon:16,time:0,shade: [0.3, '#000']});
    $.post('/plugins/run', {name:_name, func:func_name,version:version}, function (data) {
        layer.close(loadT);

        var loadT2 = layer.msg('File content fetching...',{icon:16,time:0,shade: [0.3, '#000']});
        fileName = data.data;
        $.post('/files/get_body', 'path=' + fileName, function(rdata) {
            layer.close(loadT2);
            if (!rdata.status){
                layer.msg(rdata.msg,{icon:0,time:2000,shade: [0.3, '#000']});
                return;
            }
            $("#textBody").empty().text(rdata.data.data);
            $(".CodeMirror").remove();
            var editor = CodeMirror.fromTextArea(document.getElementById("textBody"), {
                extraKeys: {
                    "Ctrl-Space": "autocomplete",
                    "Ctrl-F": "findPersistent",
                    "Ctrl-H": "replaceAll",
                    "Ctrl-S": function() {
                    	$("#textBody").text(editor.getValue());
                        pluginConfigSave(fileName);
                    }
                },
                lineNumbers: true,
                matchBrackets:true,
            });
            editor.focus();
            $(".CodeMirror-scroll").css({"height":"300px","margin":0,"padding":0});
            $("#onlineEditFileBtn").click(function(){
                $("#textBody").text(editor.getValue());
                pluginConfigSave(fileName);
            });
        },'json');
    },'json');
}

function pluginConfigSave(fileName) {
    var data = encodeURIComponent($("#textBody").val());
    var encoding = 'utf-8';
    var loadT = layer.msg('Saving...', {icon: 16,time: 0});
    $.post('/files/save_body', 'data=' + data + '&path=' + fileName + '&encoding=' + encoding, function(rdata) {
        layer.close(loadT);
        layer.msg(rdata.msg, {icon: rdata.status ? 1 : 2});
    },'json');
}


function pluginInitD(_name, _version, _suffix_name=''){
	if (typeof _version == 'undefined'){
    	_version = '';
    }

  var default_name = 'initd_status';

	if ( _suffix_name != '' ){
		default_name = 'initd_status_'+_suffix_name;
	}

	var loadT = layer.msg('Retrieving...', { icon: 16, time: 0, shade: 0.3 });
	$.post('/plugins/run', {name:_name, func:default_name, version : _version}, function(data) {
		layer.close(loadT);
        if( !data.status ){
            layer.msg(data.msg,{icon:0,time:3000,shade: [0.3, '#000']});
            return;
        }
        if( data.data!='ok' && data.data!='fail' ){
            layer.msg(data.data,{icon:0,time:3000,shade: [0.3, '#000']});
            return;
        }
        if (data.data == 'ok'){
            pluginSetInitD(_name, _version, true, _suffix_name);
        } else {
            pluginSetInitD(_name, _version, false, _suffix_name);
        }
    },'json');
}

function pluginSetInitD(_name, _version, status,_suffix_name=''){

	var default_name = (status?'initd_uninstall':'initd_install');
	if ( _suffix_name != '' ){
		default_name = default_name + '_' + _suffix_name;
	}

	var serviceCon ='<p class="status">Current status：<span>'+(status ? 'start' : 'stop' )+
        '</span><span style="color: '+
        (status?'#20a53a;':'red;')+
        ' margin-left: 3px;" class="glyphicon ' + (status?'glyphicon glyphicon-play':'glyphicon-pause')+'"></span></p><div class="sfm-opt">\
            <button class="btn btn-default btn-sm" onclick="pluginOpInitD(\''+_name+'\',\''+_version+'\',\''+default_name+'\',\''+_suffix_name+'\')">'+(status?'stop':'start')+'</button>\
        </div>';
    $(".soft-man-con").html(serviceCon);
}

function pluginOpInitD(a, _version, b, _suffix_name='') {
    var c = "name=" + a + "&func=" + b + "&version="+_version;
    var d = "";
    b = b.split('_'+_suffix_name)[0];
    switch(b) {
        case "initd_install":d = 'start';break;
        case "initd_uninstall":d = 'stop';break;
    }

		_ver = _version;
    if(_version != ''){
    	_ver = '【' + _version + '】';
    }

    layer.confirm( msgTpl('Do you really want {1}{2}{3} service？', [d,a,_ver]), {icon:3,closeBtn: 1}, function() {
        var e = layer.msg(msgTpl('Serving {1}{2}{3}, please wait...',[d,a,_ver]), {icon: 16,time: 0});
        $.post("/plugins/run", c, function(g) {
            layer.close(e);
            var f = g.data == 'ok' ? msgTpl('{1} {3} service has been {2}',[a,d,_version]) : msgTpl('{1}{3} failed to serve {2}!',[a,d,_ver]);
            layer.msg(f, {icon: g.data == 'ok' ? 1 : 2});

            if ( b == 'initd_install' && g.data == 'ok' ) {
                pluginSetInitD(a, _version, true);
            }else{
                pluginSetInitD(a, _version, false);
            }
            if(g.data != 'ok') {
                layer.msg(g.data, {icon: 2,time: 0,shade: 0.3,shadeClose: true});
            }
        },'json').error(function() {
            layer.close(e);
            layer.msg('System exception!', {icon: 0});
        });
    })
}

function pluginLogs(_name, version, func, line){
		var _this = this;
    if ( typeof(version) == 'undefined' ){
        version = '';
    }

    var func_name = 'error_log';
    if ( typeof(func) != 'undefined' ){
        func_name = func;
    }

    var file_line = 100;
    if ( typeof(line) != 'undefined' ){
        file_line = line;
    }


    var loadT = layer.msg('Obtaining the log path...',{icon:16,time:0,shade: [0.3, '#000']});
    $.post('/plugins/run', {name:_name, func:func_name, version:version},function (data) {
        layer.close(loadT);

        try{
        	var jdata = $.parseJSON(data.data);
        	if (!jdata['status']){
        		layer.msg(jdata.msg,{icon:0,time:2000,shade: [0.3, '#000']});
                return;
        	}
		}catch(err){/*console.log(err);*/}


        var loadT2 = layer.msg('File content fetching...',{icon:16,time:0,shade: [0.3, '#000']});
        var fileName = data.data;
        $.post('/files/get_last_body', 'path=' + fileName+'&line='+file_line, function(rdata) {
            layer.close(loadT2);
            if (!rdata.status){
                layer.msg(rdata.msg,{icon:0,time:2000,shade: [0.3, '#000']});
                return;
            }

            if(rdata.data == '') {
            	rdata.data = 'Currently no logs!';
            }
						var h =  parseInt($('.bt-w-menu').css('height')) - 40;
            var ebody = '<textarea readonly="" style="margin: 0px;height: '+h+'px;width: 100%;background-color: #333;color:#fff; padding:0 5px" id="info_log">'+rdata.data+'</textarea>';
            $(".soft-man-con").html(ebody);
            var ob = document.getElementById('info_log');
            ob.scrollTop = ob.scrollHeight;
        },'json');
    },'json');
}


function pluginRollingLogs(_name, version, func, _args, line){
	if ( typeof(version) == 'undefined' ){
        version = '';
    }

    var func_name = 'error_log';
    if ( typeof(func) != 'undefined' ){
        func_name = func;
    }

    var file_line = 100;
    if ( typeof(line) != 'undefined' ){
        file_line = line;
    }

    var reqTimer = null;

    function requestLogs(fileName){
    	$.post('/files/get_last_body', 'path=' + fileName+'&line='+file_line, function(rdata) {
            if (!rdata.status){
                return;
            }

            if(rdata.data == '') {
            	rdata.data = 'Currently no logs!';
            }
            var ebody = '<textarea readonly="readonly" style="margin: 0px;width: 100%;height: 360px;background-color: #333;color:#fff; padding:0 5px" id="roll_info_log">'+rdata.data+'</textarea>';
            $("#plugins_rolling_logs").html(ebody);
            var ob = document.getElementById('roll_info_log');
            ob.scrollTop = ob.scrollHeight;
        },'json');
    }


    layer.open({
        type: 1,
        title: _name + ' log',
        area: '640px',
        end: function(){
        	if (reqTimer){
        		clearInterval(reqTimer);
        	}
        },
        content:'<div class="change-default pd20" id="plugins_rolling_logs">\
        	<textarea readonly="readonly" style="margin: 0px;width: 100%;height: 360px;background-color: #333;color:#fff; padding:0 5px" id="roll_info_log"></textarea>\
        </div>',
        success:function(){
        	$.post('/plugins/run', {name:_name, func:func_name, version:version, args:_args},function (data) {
		    	var fileName = data.data;
		    	requestLogs(fileName);
		    	reqTimer = setInterval(function(){
		    		requestLogs(fileName);
		    	},1000);
		    },'json');
        }
    });
}


function pluginStandAloneLogs(_name, version, func, _args, line){
	if ( typeof(version) == 'undefined' ){
        version = '';
    }

    var func_name = 'error_log';
    if ( typeof(func) != 'undefined' ){
        func_name = func;
    }

    var file_line = 100;
    if ( typeof(line) != 'undefined' ){
        file_line = line;
    }


    layer.open({
        type: 1,
        title: _name + ' log',
        area: '640px',
        content:'<div class="change-default pd20" id="plugins_stand_alone_logs">\
        	<textarea readonly="readonly" style="margin: 0px;width: 100%;height: 360px;background-color: #333;color:#fff; padding:0 5px"></textarea>\
        	</div>'
    });

    $.post('/plugins/run', {name:_name, func:func_name, version:version,args:_args},function (data) {
    	var fileName = data.data;
		$.post('/files/get_last_body', 'path=' + fileName+'&line='+file_line, function(rdata) {
            if (!rdata.status){
                return;
            }

            if(rdata.data == '') {
            	rdata.data = 'Currently no logs!';
            }
            var ebody = '<textarea readonly="" style="margin: 0px;width: 100%;height: 360px;background-color: #333;color:#fff; padding:0 5px">'+rdata.data+'</textarea>';
            $("#plugins_stand_alone_logs").html(ebody);
            var ob = document.getElementById('plugins_stand_alone_logs');
            ob.scrollTop = ob.scrollHeight;
        },'json');
    },'json');
}


$(function() {
	autoHeight();
});
$(window).resize(function() {
	autoHeight();
});
