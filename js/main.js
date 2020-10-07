/*let articles = document.querySelectorAll('.featured-posts__item');
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
  }; */


let filter = document.querySelector('.filter');
let post = document.querySelectorAll('.featured-posts__item');
let textareaMessege = document.getElementById('textarea');
let btn = document.querySelector('.btn.btn-submit');


filter.onchange = function () {
for (let item of post) {
    if (item.dataset.category !== filter.value && filter.value !== 'all') {
      item.classList.add('hidden');
    } else {
      item.classList.remove('hidden');
    }
}
};

textareaMessege.oninput = function () {
    if (textareaMessege.value.length < 10 || textareaMessege.value.length > 200) {
      textareaMessege.style.color = 'red';
      btn.disabled = true;
      btn.style.cursor = 'not-allowed';
      btn.style.opacity = .5;
    } else {
      textareaMessege.style.color = '';
      btn.disabled = false;
      btn.style.cursor = 'pointer';
      btn.style.opacity = 1;
    }
};

