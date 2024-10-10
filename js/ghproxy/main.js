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
  const backToTopButton = document.getElementById('top-btn');
  
  // 点击回到顶部按钮的事件
  backToTopButton.addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });  // 平滑滚动到顶部
  });

  // 监听页面滚动事件，显示或隐藏按钮
  window.addEventListener('scroll', function() {
    if (window.scrollY > 300) {
      // 使用 mdui 框架的 show 方法
      backToTopButton.classList.remove('mdui-fab-hide');
    } else {
      // 使用 mdui 框架的 hide 方法
      backToTopButton.classList.add('mdui-fab-hide');
    }
  });
});


window.addEventListener('hashchange', function() {
  if (window.location.hash === '#link-list') {
    history.replaceState(null, null, ' ');
  }
});
