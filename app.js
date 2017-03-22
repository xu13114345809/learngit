var mainApp, GNum = 1;

GMyApp.showPreloader();
// IOS设备特殊处理
if (GMyApp.device.ios && GIsPhone) {
    var interval = setInterval(function () {
        GNum++;
        if (GUserInfo.userId) {
            clearInterval(interval);
            // 初始化创建活动对象
            mainApp = new MainAPP();
            GMyApp.hidePreloader();
            mainApp.init();
        }
        // 30s响应超时
        if (GNum == 30 * 10) {
            GMyApp.hidePreloader();
            clearInterval(interval);
            GMyApp.alert('响应超时, 请稍候再试！', '温馨提示', function () {
                goMainWin();
            });
        }
    }, 100);
} else {
// 初始化创建活动对象
    mainApp = new MainAPP();
    GMyApp.hidePreloader();
    mainApp.init();
}

// 设置UC权限下 大区、管理(经营)城市、品牌(部)数据
setTimeout(function(){
    setUCDataByLocal(true);
}, 500);