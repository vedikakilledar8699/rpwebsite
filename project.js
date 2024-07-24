

humburger =document.querySelector('.humburger')
navbar =document.querySelector('.navbar')
navList =document.querySelector('.nav-list')

humburger =document.querySelector('.humburger')
humburger.addEventListener('click',()=>{
navList.classList.toggle('v-class')
navbar.classList.toggle('h-nav')
})

document.addEventListener('DOMContentLoaded', function() {
    const contentBoxes = [

      { name: 'PARNA', location: 'Sajanand colony,Kothrud,Pune', image: 'assets/WEB IMG/PARNA.jpeg' },
      { name: 'GAURAV ICON TOWER (GIT)', location: 'Mumbai-pune expressway', image: 'assets/WEB IMG/GIT.jpeg' },
      { name: 'METROPOLIS', location: 'Balweadi High Street,Pune', image: 'assets/WEB IMG/METROPOLIS.jpeg' },
      { name: 'NIRMAN VISHNUBAGH', location: ' Model Colony,shivajinagar,pune', image: 'assets/WEB IMG/VISHNUBAGH.jpeg' }, 
      { name: 'GURUVAIBHAV', location: 'Rambagh colony,Kothrud,Pune', image: 'assets/WEB IMG/GURUVAIBHAV.jpeg' },
      { name: 'NOBEL NIWAS', location: 'Gultekdi Marketyard,Pune', image: 'assets/WEB IMG/NOBEL NIWAS.jpeg' },
      { name: 'YOGESHWAR', location: 'Dahanukar colony,Pune', image: 'assets/WEB IMG/YOGESHWAR.jpeg' },
      { name: 'AROHINI', location: 'Dahanukar Colony,Pune', image: 'assets/WEB IMG/AROHINI.jpeg' },
      { name: 'YASHSHWI', location: 'Pune Vidhyapit', image: 'assets/WEB IMG/YASHSHWI.jpeg' },
      { name: 'SWOJAS', location: 'IDEAL COLONY, Poud Road', image: 'assets/WEB IMG/SWOJAS.jpeg' },
      { name: 'ANJALIKUNJ', location: 'Near Bal Vikas Kendra Park,Kothrud', image: 'assets/WEB IMG/ANJALIKUNJ.jpeg' },
      { name: ' VARAD', location: 'Padmreskha Society', image: 'assets/WEB IMG/VARAD.jpg' },
      { name: ' ANANTAM Society', location: ' Gujrat Colony', image: 'assets/WEB IMG/ANANTAM.jpg' },
      { name: ' SAAKAR', location: 'Sajanand colony', image: 'assets/WEB IMG/SAAKAR.jpg' },
    ];

    const container = document.getElementById('projects-container');

    contentBoxes.forEach(box => {
      const boxElement = document.createElement('div');
      boxElement.classList.add('content-box');

      const imgElement = document.createElement('img');
      imgElement.src = box.image;
      imgElement.alt = box.name;
      boxElement.appendChild(imgElement);

      const nameElement = document.createElement('p');
      nameElement.classList.add('name');
      nameElement.textContent = box.name;
      boxElement.appendChild(nameElement);

      const locationElement = document.createElement('p');
      locationElement.classList.add('location');
      locationElement.textContent = box.location;
      boxElement.appendChild(locationElement);

      container.appendChild(boxElement);
    });
  });
  