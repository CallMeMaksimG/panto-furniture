const infoButtons = document.querySelectorAll('.info-dot');
const infoHints = document.querySelectorAll('.info-hint');

for (let button of infoButtons) {
    button.addEventListener('click', showHint);
}

function showHint(e) {
    e.stopPropagation();
    for (let hint of infoHints) {
        hint.classList.add('none');
    }
    const parentNode = this.parentNode;
    const infoHint = parentNode.querySelector('.info-hint');
    infoHint.classList.toggle('none');
}

document.addEventListener('click', closeHints);

function closeHints() {
    for (let hint of infoHints) {
        hint.classList.add('none');
    }
}

for (let hint of infoHints) {
    hint.addEventListener('click', (e) => e.stopPropagation());
}

//swiper
const swiper = new Swiper('.swiper', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 42,
    freeMode: true,
    breakpoints: {
        600: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        920: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        1230: {
            slidesPerView: 4,
            spaceBetween: 42,
        },
    },

    navigation: {
        nextEl: '#sliderNext',
        prevEl: '#sliderPrev',
    },
});

//Tabs

const tabsBtns = document.querySelectorAll('[data-tab]');
const tabsProducts = document.querySelectorAll('[data-tab-value]');

for (let btn of tabsBtns) {
    btn.addEventListener('click', () => {
        for (let btn of tabsBtns) {
            btn.classList.remove('tab-controls__btn--active');
        }

        btn.classList.add('tab-controls__btn--active');

        for (let product of tabsProducts) {
            if (btn.dataset.tab === 'all') {
                product.classList.remove('none');
            } else {
                if (product.dataset.tabValue === btn.dataset.tab) {
                    product.classList.remove('none');
                } else {
                    product.classList.add('none');
                }
            }
        }
        swiper.update();
    });
}

// Mobile nav

const mobileNavOpenBtn = document.querySelector('.nav__btn');
const mobileNavCloseBtn = document.querySelector('.mobile-nav-btn-close');
const mobileMenu = document.querySelector('.mobile-nav-wrapper');
mobileNavOpenBtn.addEventListener('click', () => {
    mobileMenu.classList.add('mobile-nav-wrapper--open');
});

mobileNavCloseBtn.addEventListener('click', () => {
    mobileMenu.classList.remove('mobile-nav-wrapper--open');
});
