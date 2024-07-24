
humburger =document.querySelector('.humburger')
navbar =document.querySelector('.navbar')
navList =document.querySelector('.nav-list')

humburger =document.querySelector('.humburger')
humburger.addEventListener('click',()=>{
navList.classList.toggle('v-class')
navbar.classList.toggle('h-nav')
})
