document.addEventListener('DOMContentLoaded', function() {
    // 添加空值校验
    const clickableVideo = document.querySelector('.clickable-video');
    if (!clickableVideo) return;

    clickableVideo.addEventListener('click', function(e) {
        e.stopPropagation(); // 保留阻止冒泡
        const videoContainer = this.parentElement.querySelector('.card-video-container');
        
        if (!videoContainer) return;
        const video = videoContainer.querySelector('.card-video');
        // 添加视频校验
        if (!video) return;

        videoContainer.classList.add('active');
        
        // 添加全局点击监听
        const closeHandler = function(e) {
            // 修改判断条件，允许点击视频区域关闭
            if (!videoContainer.contains(e.target) || e.target === video) {
                videoContainer.classList.remove('active');
                video.pause();
                document.removeEventListener('click', closeHandler);
            }
        };
        
        document.addEventListener('click', closeHandler);
        
        video.play().catch(error => {
            video.load();
            video.muted = true;
            video.play().catch(err=>{
                console.error('最终播放失败：',err);
            });
        });
        video.addEventListener('dblclick',function(e){
            e.stopPropagation();
        });
    });
});