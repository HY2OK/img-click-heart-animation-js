const image = document.querySelector('.img');
const heart = document.querySelector('.heart');

console.log(heart);

image.addEventListener('dblclick', e => {
    heart.style.left = `${e.clientX - e.target.offsetLeft}px`;
    heart.style.top = `${e.clientY - e.target.offsetTop}px`;

    heart.classList.add('active');

    setTimeout(() => {
        heart.classList.remove('active');
    }, 1000);
});
