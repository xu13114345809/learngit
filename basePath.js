/*!
 * Project Mobile
 * Author chen.wj
 * Email chen.wj@wonhigh.cn
 * Date 2015/02/03
 */
var __CreateJSPath = function (js) {
    var scripts = document.getElementsByTagName("script");
    var path = "";
    for (var i = 0, l = scripts.length; i < l; i++) {
        var src = scripts[i].src;
        if (src.indexOf(js) != -1) {
            var ss = src.split(js);
            path = ss[0];
            break;
        }
    }
    var href = location.href;
    href = href.split("#")[0];
    href = href.split("?")[0];
    var ss = href.split("/");
    ss.length = ss.length - 1;
    href = ss.join("/");
    if (path.indexOf("https:") == -1 && path.indexOf("http:") == -1 && path.indexOf("file:") == -1 && path.indexOf("\/") != 0) {
        path = href + "/" + path;
    }
    return path;
};

var GBasePATH = __CreateJSPath("basePath.js");


function getUrlParam(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
    var r = window.location.search.substr(1).match(reg);  //匹配目标参数
    if (r != null) return decodeURI(r[2]);
    return null; //返回参数值
}

var v = "2.0.0",// 参考版本信息
    isDev = false, // true开发版 false 正式版
//bootPATH = "/resources/boot/",
    min = isDev ? "" : ".min",
// 系统参数
    GAppParams = JSON.parse(sessionStorage.getItem('appParams')) || {},
// 系统配置文件
    GAppConfig = JSON.parse(sessionStorage.getItem('appConfig')) || null,
// 品牌编号， 用于主题
    GBCTheme = ',TM,BL11,',
    GBrandCode = GAppParams['brandCode'] || getUrlParam('bCode');

if (!GAppConfig) {
    alert("系统异常，请稍后再试！");
} else {
    // 静态资源路径
    var mobileStaticUrl = GAppConfig['mobileStaticUrl'] || 'http://s.belle.net.cn',
    // 模板静态资源路径
        mobileStaticAppUrl = GAppConfig['mobileStaticAppUrl'] || 'http://s.belle.net.cn';

    if (isDev) {
        document.write('<link rel="stylesheet" type="text/css" href="' + mobileStaticUrl + '/resources/boot/dist/css/ui.css?v=4fe1b9bfff" />');

        document.write('<script type="text/javascript" src="' + mobileStaticUrl + '/resources/boot/dist/js/libs/jquery.js"></script>');
        document.write('<script type="text/javascript" src="' + mobileStaticUrl + '/resources/boot/dist/js/libs/jquery.lazyload.js"></script>');
        document.write('<script type="text/javascript" src="' + mobileStaticUrl + '/resources/boot/dist/js/ui.js"></script>');

        // 调试
        document.write('<script type="text/javascript" src="' + mobileStaticUrl + '/resources/common/vconsole.min.js?v=38439ea8d2"></script>');
    } else {
        document.write('<link rel="stylesheet" type="text/css" href="' + mobileStaticUrl + '/resources/boot/dist/css/ui.min.css?v=d3e17929b6" />');

        document.write('<script type="text/javascript" src="' + mobileStaticUrl + '/resources/boot/dist/js/libs/jquery.min.js"></script>');
        document.write('<script type="text/javascript" src="' + mobileStaticUrl + '/resources/boot/dist/js/libs/jquery.lazyload.min.js"></script>');
        document.write('<script type="text/javascript" src="' + mobileStaticUrl + '/resources/boot/dist/js/ui.min.js"></script>');
    }

// 客服样式
    document.write('<link rel="stylesheet" type="text/css" href="' + mobileStaticUrl + '/resources/js/kefu/static/css/im.css" />');

    if (GBCTheme.indexOf(',' + GBrandCode + ',') >= 0) {
        //主题
        document.write('<link rel="stylesheet" type="text/css" href="' + mobileStaticUrl + '/resources/boot/themes/' + GBrandCode + '.css" />');
    }
// 微信
    document.write('<script type="text/javascript" src="' + mobileStaticUrl + '/resources/common/jweixin.js?v=ad021d4c53"></script>');
    document.write('<script type="text/javascript" src="' + mobileStaticUrl + '/resources/common/common.js?v=4891a9dec3"></script>');

// 模板静态资源路径
    document.write('<link rel="stylesheet" type="text/css" href="' + mobileStaticAppUrl + '/bs3/1.0.0/css/lts.css" />');

    document.write('<script type="text/javascript" src="' + mobileStaticAppUrl + '/bs3/1.0.0/js/swiper/swiper.jquery.umd.min.js"></script>');
    document.write('<script type="text/javascript" src="' + mobileStaticAppUrl + '/bs3/1.0.0/js/lts/app.preview.bundle.min.js"></script>');
    document.write('<script type="text/javascript" src="' + mobileStaticAppUrl + '/bs3/1.0.0/js/lts/all.tpls.preview.bundle.min.js"></script>');


    document.write('<script data-main="' + mobileStaticUrl + '/resources/js/app.js?v=935a770dcc" src="' +
        mobileStaticUrl + '/resources/boot/dist/js/libs/require.min.js"></script>');
}


/**
 * 百度統計js数组
 */
var _hmt = _hmt || [];
_hmt.push(['_setAutoPageview', false]);//关闭自动PV跟踪，规则化每一个url请求


console.log('第二个版本')
console.log('123')
console.log('哈哈哈哈哈哈哈')