let articles = document.querySelectorAll('.featured-posts__item');
let bigArticle = document.querySelectorAll('.featured-posts__big-item');
let filter = document.querySelector('.filter');
let comment = document.getElementById('textarea');
let submitButton = document.querySelector('.btn-submit');
  
  filter.onchange = function () {
    for (let article of articles) {
        if (article.dataset.category !== filter.value && filter.value !== 'all') {
          article.classList.add('hidden');
       } else {
        article.classList.remove('hidden');
       }
      }
    for (let article of bigArticle) {
      if (article.dataset.category !== filter.value && filter.value !== 'all') {
        article.classList.add('hidden');
     } else {
        article.classList.remove('hidden');
     }
    }
  };

  comment.oninput = function () {
    if (comment.value.length > 200 || comment.value.length < 10) {
        comment.classList.add('warning');
        submitButton.disabled = true;
        submitButton.style.opacity = '.5';
        submitButton.style.cursor = 'not-allowed';
    } else {
        comment.classList.remove('warning');
        submitButton.disabled = false;
        submitButton.style.opacity = '1';
        submitButton.style.cursor = 'pointer';
    }
  };


  
  