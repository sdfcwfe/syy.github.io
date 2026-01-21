function runtime() {
    window.setTimeout("runtime()", 1000);

    // 1. 本站运行时间逻辑
    var start_time = new Date("2025/09/08 00:00:00"); // 这里修改为你建站的时间
    var now_time = new Date();
    var diff_time = now_time.getTime() - start_time.getTime();
    var days = Math.floor(diff_time / (24 * 3600 * 1000));
    var hours = Math.floor((diff_time % (24 * 3600 * 1000)) / (3600 * 1000));
    var mins = Math.floor(((diff_time % (24 * 3600 * 1000)) % (3600 * 1000)) / (60 * 1000));
    var secs = Math.floor((((diff_time % (24 * 3600 * 1000)) % (3600 * 1000)) % (60 * 1000)) / 1000);

    var runtime_html = "本站居然运行了 " + days + " 天 " + hours + " 小时 " + mins + " 分 " + secs + " 秒 ❤️";
    if (document.getElementById("runtime-show")) {
        document.getElementById("runtime-show").innerHTML = runtime_html;
    }

    // 2. 旅行者 1 号距离逻辑 (这是一个模拟数值，根据速度实时累加)
    var voyager_start = new Date("2025/09/08 00:00:00"); // 距离参考点
    var voyager_base = 24264952436; // 初始距离(千米)
    var seconds_passed = (now_time.getTime() - voyager_start.getTime()) / 1000;
    var current_dist = voyager_base + (seconds_passed * 17); // 假设速度 17km/s
    var au_dist = (current_dist / 149597870.7).toFixed(6); // 转为天文单位

    var voyager_html = "旅行者 1 号当前距离地球 " + Math.floor(current_dist) + " 千米，约为 " + au_dist + " 个天文单位 🚀";
    if (document.getElementById("voyager-show")) {
        document.getElementById("voyager-show").innerHTML = voyager_html;
    }
}
runtime();