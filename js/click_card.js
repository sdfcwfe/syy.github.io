// 让侧边栏作者卡片点击跳转到关于页
function linkAuthorCard() {
    // 找到侧边栏作者卡片元素
    var authorCard = document.querySelector('.card-author');
    if (authorCard) {
        // 修改鼠标样式为手型，提醒用户可以点击
        authorCard.style.cursor = 'pointer';
        // 绑定点击事件
        authorCard.onclick = function() {
            // 跳转到你的个人介绍页面（注意带上你的二级目录）
            window.location.href = '/syy.github.io/about/';
        };
    }
}

// 确保页面加载完成后执行
document.addEventListener('DOMContentLoaded', linkAuthorCard);
// 如果使用了 PJAX（Butterfly 默认开启），还需要在 pjax:complete 时执行
document.addEventListener('pjax:complete', linkAuthorCard);