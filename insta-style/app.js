const $image = document.querySelector('.image');
const $heart = document.querySelector('.heart');
const $people = document.querySelector('.people');

$image.addEventListener('dblclick', e => {
    $heart.style.top = `${e.clientY - e.target.offsetTop}px`;
    $heart.style.left = `${e.clientX - e.target.offsetLeft}px`;

    $heart.classList.add('active');

    $people.innerText = Number($people.innerText) + 1;

    setTimeout(() => {
        $heart.classList.remove('active');
    }, 1000);
});
