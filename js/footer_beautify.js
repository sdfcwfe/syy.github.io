/**
 * 页脚运行时间 & 旅行者号距离逻辑
 */
var runtimeTimer; // 全局变量，方便管理定时器

function runtime() {
    var start_time = new Date("2025/09/08 00:00:00");
    var now_time = new Date();

    // 1. 本站运行时间
    var diff_time = now_time.getTime() - start_time.getTime();
    var days = Math.floor(diff_time / (24 * 3600 * 1000));
    var hours = Math.floor((diff_time % (24 * 3600 * 1000)) / (3600 * 1000));
    var mins = Math.floor(((diff_time % (24 * 3600 * 1000)) % (3600 * 1000)) / (60 * 1000));
    var secs = Math.floor((((diff_time % (24 * 3600 * 1000)) % (3600 * 1000)) % (60 * 1000)) / 1000);

    var runtime_element = document.getElementById("runtime-show");
    if (runtime_element) {
        runtime_element.innerHTML = "本站居然运行了 " + days + " 天 " + hours + " 小时 " + mins + " 分 " + secs + " 秒 ❤️";
    }

    // 2. 旅行者 1 号距离 (假设速度 17km/s)
    var voyager_start = new Date("2025/09/08 00:00:00");
    var voyager_base = 24264952436;
    var seconds_passed = (now_time.getTime() - voyager_start.getTime()) / 1000;
    var current_dist = voyager_base + (seconds_passed * 17);
    var au_dist = (current_dist / 149597870.7).toFixed(6);

    var voyager_element = document.getElementById("voyager-show");
    if (voyager_element) {
        voyager_element.innerHTML = "旅行者 1 号当前距离地球 " + Math.floor(current_dist) + " 千米，约为 " + au_dist + " 个天文单位 🚀";
    }

    // 使用函数式写法的 setTimeout
    clearTimeout(runtimeTimer);
    runtimeTimer = setTimeout(function() {
        runtime();
    }, 1000);
}



// 每隔 1 秒检查一次（直到成功或尝试 5 次），解决异步加载问题
var retryCount = 0;
var retryTimer = setInterval(function() {
    const btn = document.getElementById('custom-about-btn');
    if (btn || retryCount > 5) {
        clearInterval(retryTimer);
    } else {
        addMoreButtons();
        retryCount++;
    }
}, 1000);

// 兼容 PJAX
document.addEventListener('pjax:complete', function() {
    retryCount = 0; // 重置重试计数
    addMoreButtons();
});