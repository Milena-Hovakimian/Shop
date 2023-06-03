const shop = document.querySelector(".app .navbar .menu .shop");
const search_input = document.querySelector('.app .navbar .menu input');
const search = document.querySelector(".app .navbar .menu .srch");
const home = document.querySelector(".app .navbar .menu .home");
const about = document.querySelector(".app .navbar .menu .about");
const contact = document.querySelector(".app .navbar .menu .cont");
const collection = document.querySelector(".app .navbar .menu .collection");
const sliderItem = document.querySelectorAll('.app .slide .slider .item');
const glisSlide  = document.querySelector('.app .slide .slider');
const sliderBlock  = document.querySelector('.slide');
const next = document.querySelector('.app .controler .next');
const prev = document.querySelector('.app .controler .prev');
const shopNow = document.querySelectorAll('.app .product-box .box .item #shop-btn');
const load = document.querySelector('.bg')
const app = document.querySelector('.app')
const ab = document.querySelectorAll('.app .slider .item .text .ab');
const con = document.querySelectorAll('.app .slider .item .text .con');


setTimeout(() => {
    load.style.opacity = 0;
    app.style.opacity = 1;  
},1500)

let current = 0;
let mouseX;
let slideBool = false;
for(let i = 0; i < 3; i++) {
    next.onclick = () => {
        current--;
        Math.abs(current) == 3? current = 0: '';
        glisSlide.style.left = current + '00%';
        glisSlide.style.transition = '1s';
    };
    prev.onclick = () => {
        current++;
        current > 0? current = -3 + 1: '';
        glisSlide.style.left = current + '00%';
        glisSlide.style.transition = '1s';
    };
}
sliderBlock.onmousedown = (e) => {
    mouseX = e.x;
    console.log(mouseX);
    slideBool = true;
};
sliderBlock.onmouseup = () => slideBool = false;
sliderBlock.onmouseleave = () => slideBool = false;

sliderBlock.onmousemove = (e) => {
    if (slideBool) {
        if (e.x < mouseX) {
            current--;
            Math.abs(current) == 3? current = 0: '';
            glisSlide.style.left = current + '00%';
            slideBool = false;
        } else if(e.x > mouseX) {
            current++;
            current > 0? current = -3 + 1: '';
            glisSlide.style.left = current + '00%';
            slideBool= false
        }
    }
};
let a = 0;
search.onclick = () => {
    if(a % 2 == 0) {
        search_input.value = '';
        search_input.style.display = 'inline-block';
        a++;
    } else {
        if(search_input.value == 'Channel' || search_input.value == 'channel') {
            window.scrollTo(700,700);
        }
        search_input.style.display = 'none';
        a++;
    }
}
home.onclick = () => {
    window.scrollTo(0,0)
}
shop.onclick = () => {
    window.scrollTo(700,700)
}
about.onclick = () => {
    window.scrollTo(2500,2500)
}
collection.onclick = () => {
    window.scrollTo(3300,3300)
}
contact.onclick = () => {
    window.scrollTo(4400,4400)
}

ab.forEach((item) => {
    item.onclick = () => {
        window.scrollTo(2500,2500)
    }
});
con.forEach((item) => {
    item.onclick = () => {
        window.scrollTo(4400,4400)
    }
});




shopNow.forEach(item => {
    item.onclick = () => {
        window.open('./card.html');
    }
});

