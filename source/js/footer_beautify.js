/**
 * Hexo Butterfly 页脚美化脚本
 * 功能：建站运行时间统计 & 旅行者 1 号实时距离模拟
 */

var footerTimer; // 全局定时器变量

function updateFooterStats() {
    // --- 配置区域 ---
    var startTime = new Date("2025/09/08 00:00:00"); // 你的建站时间
    var voyagerStart = new Date("2025/09/08 00:00:00"); // 距离计算参考点
    var voyagerBase = 24264952436; // 初始距离(千米)
    var velocity = 17; // 模拟速度 (km/s)

    var now = new Date();

    // 1. 本站运行时间计算
    var diff = now.getTime() - startTime.getTime();
    var days = Math.floor(diff / (24 * 3600 * 1000));
    var hours = Math.floor((diff % (24 * 3600 * 1000)) / (3600 * 1000));
    var mins = Math.floor(((diff % (24 * 3600 * 1000)) % (3600 * 1000)) / (60 * 1000));
    var secs = Math.floor((((diff % (24 * 3600 * 1000)) % (3600 * 1000)) % (60 * 1000)) / 1000);

    var runtimeText = "本站居然运行了 " + days + " 天 " + hours + " 小时 " + mins + " 分 " + secs + " 秒 ❤️";
    var runtimeEl = document.getElementById("runtime-show");
    if (runtimeEl) {
        runtimeEl.innerHTML = runtimeText;
    }

    // 2. 旅行者 1 号距离计算
    var secondsPassed = (now.getTime() - voyagerStart.getTime()) / 1000;
    var currentDist = voyagerBase + (secondsPassed * velocity);
    var auDist = (currentDist / 149597870.7).toFixed(6); // 转化为天文单位(AU)

    var voyagerText = "旅行者 1 号当前距离地球 " + Math.floor(currentDist).toLocaleString() + " 千米，约为 " + auDist + " 个天文单位 🚀";
    var voyagerEl = document.getElementById("voyager-show");
    if (voyagerEl) {
        voyagerEl.innerHTML = voyagerText;
    }

    // 3. 定时器处理
    clearTimeout(footerTimer);
    footerTimer = setTimeout(updateFooterStats, 1000);
}

// 首次加载初始化
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', updateFooterStats);
} else {
    updateFooterStats();
}

// 兼容 PJAX (当切换页面时重新触发)
document.addEventListener('pjax:complete', updateFooterStats);