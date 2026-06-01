// 添加DOM加载完成监听
document.addEventListener('DOMContentLoaded', function() {
    // 初始化所有角色详情为隐藏 
    // 修改点击事件为鼠标悬停
    document.querySelectorAll('.character-item').forEach(item =>{
        item.addEventListener('mouseenter', function() {
            const target = this.dataset.target;
            document.getElementById(target).classList.add('active');
        });
        
        item.addEventListener('mouseleave', function() {
            const target = this.dataset.target;
            document.getElementById(target).classList.remove('active');
        });
    });
    
    // 初始化隐藏所有文字详情
    document.querySelectorAll('.character-detail').forEach(detail => {
        detail.style.opacity = '0';
    });
    
    // 为每个角色卡片添加点击事件
    document.querySelectorAll('.character-item').forEach(item => {
        item.addEventListener('click', () => {
            // 移除所有激活状态
            document.querySelectorAll('.character-detail').forEach(detail => {
                detail.style.opacity = '0';
            });
            
            // 显示对应ID的文字内容
            const targetId = item.dataset.target;
            const targetDetail = document.getElementById(targetId);
            if (targetDetail) {
                targetDetail.style.opacity = '1';
            }
        });
    });
});
// // 新增鼠标移动检测
// document.addEventListener('mousemove', (e) => {
//     const bar = document.querySelector('.character-bar');
//     const centerY = window.innerHeight / 2;
//     const rotateValue = (e.clientY - centerY) * 0.02;
//     bar.style.transform = `translateY(-50%) perspective(1200px) rotateX(${15 - rotateValue}deg)`;
// });
// // 添加滚轮滚动事件监听
// let rotateAngle=15;
// document.addEventListener('wheel', (e) => {
//    const bar = document.querySelector('.character-bar');
//    rotateAngle += e.deltaY*0.1;
//    bar.style.transform = `translateY(-50%) perspective(1200px) rotateX(${rotateAngle}deg)`; 
// });