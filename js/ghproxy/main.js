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

// 回到顶部功能
document.addEventListener('DOMContentLoaded', function () {
  const backToTopButton = document.getElementById('backToTop');
  
  // 点击回到顶部按钮的事件
  backToTopButton.addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // 监听页面滚动事件（适用于桌面）
  window.addEventListener('scroll', toggleBackToTopButton);
  
  // 监听触摸滚动事件（适用于移动设备）
  window.addEventListener('touchmove', toggleBackToTopButton);

  function toggleBackToTopButton() {
    if (window.scrollY > 300) {
      backToTopButton.style.display = 'block';
    } else {
      backToTopButton.style.display = 'none';
    }
  }
});


