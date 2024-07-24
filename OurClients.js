
function showImages(clientType) {
    const imageContainer = document.getElementById('imageContainer');
    imageContainer.innerHTML = '';

    let images = [];
    switch(clientType) {
        case 'builders':
            images = [
                'assets/BUILDER/Aditya properties.jpg', 'assets/BUILDER/Amar builders.jpg', 
                'assets/BUILDER/Arham landmarks.jpg', 'assets/BUILDER/Ankur associates.jpg', 
                'assets/BUILDER/Antarkar and joshi pramoters.jpg', 'assets/BUILDER/badhekar_group.jpg', 
                'assets/BUILDER/Beharay group.jpg', 'assets/BUILDER/BK jhala and associates.jpg', 
                'assets/BUILDER/Deshpande-Landmarks.jpg', 'assets/BUILDER/Gera group.jpg', 
                'assets/BUILDER/Goel ganga develpoments.jpg', 'assets/BUILDER/Gokhle constructions.JPG', 
                'assets/BUILDER/Joshi buildcon.jpg', 'assets/BUILDER/K_Raheja_Corp.jpg', 
                'assets/BUILDER/karan developers.jpg', 'assets/BUILDER/Kotibhaskar infra.jpg', 
                'assets/BUILDER/Kran group properties and buildres.jpg', 'assets/BUILDER/Lohia jain.jpg', 
                'assets/BUILDER/Majestique landmarks.jpg', 'assets/BUILDER/Mittal group.jpg', 
                'assets/BUILDER/nest constuctions.jpg', 'assets/BUILDER/New front group.jpg', 
                'assets/BUILDER/Nirman developers.jpg', 'assets/BUILDER/Paranjape schemes.jpg', 
                'assets/BUILDER/Parulekar realty.jpg', 'assets/BUILDER/Pride housing and construction.jpg', 
                'assets/BUILDER/Ranjekar Construction.jpg', 'assets/BUILDER/Ravetkar construction.JPG', 
                'assets/BUILDER/Rohan-Builders.jpg', 'assets/BUILDER/sangam-press-pvt-ltd.jpg', 
                'assets/BUILDER/vyas-buildcon pvt.ltd.jpg', 'assets/BUILDER/shubhankar.jpg',
                'assets/BUILDER/Sharda alliance.jpg', 'assets/BUILDER/Shree venktesh buildcon.jpg', 
                'assets/BUILDER/Siddhashila group.jpg', 'assets/BUILDER/Signet realties.jpg', 
                'assets/BUILDER/Sobha group.jpg', 'assets/BUILDER/Solitaire.jpg', 
                'assets/BUILDER/Swajas Construction.jpg', 'assets/BUILDER/TejRaj group.jpg', 
                'assets/BUILDER/Tribandha ventures.jpg', 'assets/BUILDER/Vilas javdkar.jpg', 
                'assets/BUILDER/vyas-buildcon pvt.ltd.jpg', 'assets/BUILDER/Yash pramoters and builders.jpg'

            ];
            break;
        case 'hotel':
            images = [
                'assets/HOTEL/Atithi by kwality restaurent.jpg', 'assets/HOTEL/Cafe durga.jpg', 
                'assets/HOTEL/Crazy cheesy cafe.jpg', 'assets/HOTEL/Katakirr Logo.jpg', 
                'assets/HOTEL/Khatri bandhu.jpg', 'assets/HOTEL/Kwality restorent.jpg', 
                'assets/HOTEL/Maskawala & co.jpg', 'assets/HOTEL/Naturals ice cream.jpg', 
                'assets/HOTEL/S.P Biryani House.jpg', 'assets/HOTEL/Saiba amrittulya.jpg', 
                'assets/HOTEL/Sujata mastani.jpg', 'assets/HOTEL/Yewale amruttulya.jpg'
            ];
            break;
        case 'hospital':
            images = [
                'assets/HOSPITAL/Jahangir hospital.jpg', 'assets/HOSPITAL/Jupiter hospital.jpg', 
                'assets/HOSPITAL/Shashwat hospital.jpg'
            ];
            break;
    }

    images.forEach(src => {
        const div = document.createElement('div');
        div.className = 'image-box';
        const img = document.createElement('img');
        img.src = src;
        img.alt = clientType;
        div.appendChild(img);
        imageContainer.appendChild(div);
    });

    // Display the images
    imageContainer.style.display = 'flex';
}

humburger =document.querySelector('.humburger')
navbar =document.querySelector('.navbar')
navList =document.querySelector('.nav-list')

humburger =document.querySelector('.humburger')
humburger.addEventListener('click',()=>{
navList.classList.toggle('v-class')
navbar.classList.toggle('h-nav')
})