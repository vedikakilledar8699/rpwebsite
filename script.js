document.addEventListener("DOMContentLoaded", () => {
    const counters = document.querySelectorAll('.count');
    const speed = 100; // The lower the slower

    counters.forEach(counter => {
        counter.innerText = '0+';

        const updateCount = () => {
            const target = +counter.getAttribute('data-count');
            const count = +counter.innerText.replace('+', '');

            const inc = target / speed;

            if (count < target) {
                counter.innerText = Math.ceil(count + inc) + "+";
                setTimeout(updateCount, 20);
            } else {
                counter.innerText = target + "+";
            }
        };

        updateCount();
    });

// animation
const textBig = document.querySelector('.text-big');
    const words = textBig.innerText.split('');
    textBig.innerHTML = words.map(word => `<span>${word}</span>`).join(' ');

    const spans = textBig.querySelectorAll('span');
    spans.forEach((span, index) => {
        setTimeout(() => {
            span.style.opacity = '1';
            span.style.animation = 'fadeIn 0.5s ease-in-out forwards';
        }, index * 500);
    });

humburger =document.querySelector('.humburger')
navbar =document.querySelector('.navbar')
navList =document.querySelector('.nav-list')

humburger =document.querySelector('.humburger')
humburger.addEventListener('click',()=>{
navList.classList.toggle('v-class')
navbar.classList.toggle('h-nav')
})

})
