const $image = document.querySelector('.image');
const $heart = document.querySelector('.heart');

$image.addEventListener('dblclick', e => {
    $heart.style.top = `${e.clientY - e.target.offsetTop}px`;
    $heart.style.left = `${e.clientX - e.target.offsetLeft}px`;

    $heart.classList.add('active');

    setTimeout(() => {
        $heart.classList.remove('active');
    }, 1000);
});
