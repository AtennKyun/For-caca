function showSlide(slideNumber) {
    document.querySelectorAll('.slide').forEach(slide => {
        slide.style.display = 'none';
    });
    document.getElementById('slide' + slideNumber).style.display = 'flex';
}

function moveButton() {
    const button = document.getElementById('moveButton');
    const x = Math.random() * (window.innerWidth - button.clientWidth);
    const y = Math.random() * (window.innerHeight - button.clientHeight);
    button.style.position = 'absolute';
    button.style.left = x + 'px';
    button.style.top = y + 'px';
}
