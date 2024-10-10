function toSubmit(e) {
  e.preventDefault();  // 阻止默认提交行为

  const inputValue = document.getElementsByName('q')[0].value.trim();  // 获取并清理输入框的值

  // 使用 URL 对象拼接新的 URL
  const currentUrl = new URL(window.location.href);
  const baseUrl = currentUrl.origin + currentUrl.pathname.substring(0, currentUrl.pathname.lastIndexOf('/') + 1);
  const newUrl = baseUrl + inputValue;

  // 在新标签页中打开新 URL
  window.open(newUrl, '_blank');

  return false;
}

// 回到顶部功能的脚本
document.addEventListener('DOMContentLoaded', function () {
  const backToTopButton = document.getElementById('backToTop');
  
  backToTopButton.addEventListener('click', function() {
    console.log("回到顶部按钮被点击了"); // 调试用，检查是否点击事件触发
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });  

  // 页面滚动时控制按钮显示或隐藏
  window.addEventListener('scroll', function() {
    if (window.scrollY > 290) {
      backToTopButton.style.display = 'block';
    } else {
      backToTopButton.style.display = 'none';
    }
  });
});

