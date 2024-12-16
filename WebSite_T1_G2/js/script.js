let lastClicked = null;

// 获取所有带有 .clickable 类的按钮
const buttons = document.querySelectorAll('.clickable');

buttons.forEach(button => {
    button.addEventListener('click', function() {
        // 移除之前点击的按钮的 .clicked 类
        if (lastClicked) {
            lastClicked.classList.remove('clicked');
        }
        // 给当前按钮添加 .clicked 类
        button.classList.add('clicked');
        // 更新 lastClicked
        lastClicked = button;
    });
});