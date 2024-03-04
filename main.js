let rating = 0;

function toggleActive(e) {
  const btn = e.target;
  const btnValue = parseInt(btn.getAttribute('data-value'));

  if (btnValue === rating) {
    rating = 0;
  } else {
    rating = btnValue;
  }

  ratingBtns.forEach((btn, i) => {
    if (i === rating - 1) {
      btn.previousElementSibling.classList.add('active');
      btn.parentElement.classList.add('active');
    } else {
      btn.previousElementSibling.classList.remove('active');
      btn.parentElement.classList.remove('active');
    }
  });
  document.getElementById('rating-result').textContent = `You selected ${rating} out of 5`
  console.log("Rating",rating);
}

function toggleHover(e) {
  const btn = e.target;
  btn.previousElementSibling.classList.toggle('hover');
  btn.parentElement.classList.toggle('hover');
}

function toggleHoverBtn(e) {
  const btn = e.target;
  btn.classList.toggle('hover');
}

const ratingBtns = document.querySelectorAll('.rating-btn');

const submitBtn = document.getElementById('submit-btn');

ratingBtns.forEach(btn => {
  btn.addEventListener('click', toggleActive);
  btn.addEventListener('mouseover', toggleHover);
  btn.addEventListener('mouseout', toggleHover);
})

submitBtn.addEventListener('mouseover', toggleHoverBtn);
submitBtn.addEventListener('mouseout', toggleHoverBtn);
submitBtn.addEventListener('click', () => {
  if (rating > 0) {
    document.getElementById('pre-rate').style.display = 'none';
    document.getElementById('post-rate').style.display = 'flex';
  }
})