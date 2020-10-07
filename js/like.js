let likeBtn = document.querySelector('.news-stats__like');
let likeNumbers = document.querySelector('.likes-number');
let comments = document.querySelector('.comments__list');
let commentsTextarea = document.querySelector('.comments__textarea');
let text = document.getElementById('text');
let btn = document.querySelector('.btn-submit');
let form = document.querySelector('.comments__form');



likeBtn.addEventListener('click', function() {
    if (likeNumbers.classList.contains('liked')) {
        likeNumbers.classList.remove('liked');
        likeNumbers.textContent = Number(likeNumbers.textContent) - 1;
        likeNumbers.style.color = '';  
    } else {
        likeNumbers.classList.add('liked');
        likeNumbers.textContent = Number(likeNumbers.textContent) + 1;
        likeNumbers.style.color = 'red';
    }
  }); 

  btn.addEventListener('click', function (evt) {
        evt.preventDefault();
    let commentsItem = document.createElement('li');
        commentsItem.classList.add('comments__item');
    let userName = document.createElement('p');
    let img = document.createElement('img');
        img.src='img/userAvatar.jpg';
        userName.appendChild(img); 
    let userB = document.createElement('b');
        userB.textContent = text.value;
        userName.appendChild(userB);
    let userText = document.createElement('p');
        userName.classList.add('comments__user');
        userText.classList.add('comments__text');
        userText.textContent = commentsTextarea.value;
        commentsItem.appendChild(userName);
        commentsItem.appendChild(userText);
        comments.appendChild(commentsItem);
  }); 


  commentsTextarea.oninput = function () {
    if (commentsTextarea.value.length < 10 || commentsTextarea.value.length > 200) {
      commentsTextarea.style.color = 'red';
      btn.disabled = true;
      btn.style.cursor = 'not-allowed';
      btn.style.opacity = .5;
    } else {
      commentsTextarea.style.color = '';
      btn.disabled = false;
      btn.style.cursor = 'pointer';
      btn.style.opacity = 1;
    }
};

 


