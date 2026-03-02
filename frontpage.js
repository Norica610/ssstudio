<script>
    // 定义你想要循环切换的词组或短句
    const phrases = ["Experiences", "Interfaces", "Solutions", "Communities"];
    let currentIndex = 0;
    const textElement = document.getElementById('rotating-text');

    setInterval(() => {
        // 1. 先让文字变透明 (触发 CSS 中的 transition)
        textElement.style.opacity = 0;

        setTimeout(() => {
            // 2. 等透明后再切换文字内容
            currentIndex = (currentIndex + 1) % phrases.length;
            textElement.textContent = phrases[currentIndex];
            
            // 3. 重新变回不透明
            textElement.style.opacity = 1;
        }, 500); // 这里的 500ms 对应你 CSS 里的 0.5s transition
    }, 2500); // 每 2.5 秒执行一次完整切换
</script>