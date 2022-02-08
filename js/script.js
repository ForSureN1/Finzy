$('.sert__slider').slick({
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    speed: 1500,
    autoplaySpeed: 2500,
    focusOnSelect: true,
    infinite: true,
    variableWidth: true,
    pauseOnHover: true,
    prevArrow: '<button type="button" class="slick_arrow slick_prev"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.29299 11.293L8.29299 4.29298C8.48159 4.11082 8.7342 4.01003 8.99639 4.01231C9.25859 4.01458 9.5094 4.11975 9.69481 4.30516C9.88022 4.49057 9.98539 4.74138 9.98767 5.00358C9.98994 5.26577 9.88915 5.51838 9.70699 5.70698L4.41399 11H22C22.2652 11 22.5196 11.1053 22.7071 11.2929C22.8946 11.4804 23 11.7348 23 12C23 12.2652 22.8946 12.5195 22.7071 12.7071C22.5196 12.8946 22.2652 13 22 13H4.41399L9.70699 18.293C9.8025 18.3852 9.87868 18.4956 9.93109 18.6176C9.9835 18.7396 10.0111 18.8708 10.0122 19.0036C10.0134 19.1363 9.98809 19.268 9.93781 19.3909C9.88753 19.5138 9.81328 19.6255 9.71939 19.7194C9.62549 19.8133 9.51384 19.8875 9.39095 19.9378C9.26805 19.9881 9.13637 20.0134 9.00359 20.0122C8.87081 20.0111 8.73959 19.9835 8.61759 19.9311C8.49558 19.8787 8.38524 19.8025 8.29299 19.707L1.29299 12.707C1.10551 12.5194 1.0002 12.2651 1.0002 12C1.0002 11.7348 1.10551 11.4805 1.29299 11.293Z" fill="white"/></svg></button>',
    nextArrow: '<button type="button" class="slick_arrow slick_next"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d = "M22.707 11.293L15.707 4.29298C15.5184 4.11082 15.2658 4.01003 15.0036 4.01231C14.7414 4.01458 14.4906 4.11975 14.3052 4.30516C14.1198 4.49057 14.0146 4.74138 14.0123 5.00358C14.0101 5.26577 14.1108 5.51838 14.293 5.70698L19.586 11H2C1.73478 11 1.48043 11.1053 1.29289 11.2929C1.10536 11.4804 1 11.7348 1 12C1 12.2652 1.10536 12.5195 1.29289 12.7071C1.48043 12.8946 1.73478 13 2 13H19.586L14.293 18.293C14.1975 18.3852 14.1213 18.4956 14.0689 18.6176C14.0165 18.7396 13.9889 18.8708 13.9878 19.0036C13.9866 19.1363 14.0119 19.268 14.0622 19.3909C14.1125 19.5138 14.1867 19.6255 14.2806 19.7194C14.3745 19.8133 14.4862 19.8875 14.6091 19.9378C14.732 19.9881 14.8636 20.0134 14.9964 20.0122C15.1292 20.0111 15.2604 19.9835 15.3824 19.9311C15.5044 19.8787 15.6148 19.8025 15.707 19.707L22.707 12.707C22.8945 12.5194 22.9998 12.2651 22.9998 12C22.9998 11.7348 22.8945 11.4805 22.707 11.293V11.293Z"fill = "white" / ></svg></button>',
    responsive: [{
            breakpoint: 900,
            settings: {
                slidesToShow: 1,
                arrows: false,
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 3,
                centerMode: true,
                arrows: false,
            }
        },
    ]
})



//Count sliders



$('.sert__slider').on('afterChange', function(event, slick, currentSlide) {
    function getCurrentSlide() {
        let count = document.querySelector('.sert__count-sliders')
        totalCurr = parseInt(currentSlide + 1)
        if (parseInt(currentSlide) <= 9) {
            count.innerText = '0' + totalCurr
        } else {
            count.innerText = totalCurr
        }
    }
    getCurrentSlide();
})

document.addEventListener('DOMContentLoaded', () => {

    let benefits = document.querySelector('.about__notes')
    let benefitsContent = document.querySelector('.about__benefits')
    if (benefits) {
        if (window.innerWidth < 993) {
            benefits.addEventListener('click', () => {
                benefits.classList.toggle('active')
                benefitsContent.classList.toggle('active')
            })
        }
    }

    let dots = document.querySelector('.slick-dots')

    function getBoundDots() {
        let counter = document.querySelector('.sert__count')
            // console.log(dots.getBoundingClientRect().top)
            // console.log(dots.getBoundingClientRect().right)
        counter.style.top = dots.getBoundingClientRect().top + window.scrollY + 'px';
        counter.style.left = dots.getBoundingClientRect().right + 10 + 'px';
    }

    if (dots) {
        setTimeout(() => {
            getBoundDots();
        }, 1000)
        window.addEventListener('resize', getBoundDots);
    }


    //mobile 
    let hamb = document.querySelector('.hamb')
    hamb.addEventListener('click', () => {
        hamb.classList.toggle('active');
        document.querySelector('.header__menu ').classList.toggle('active')
    })


    window.addEventListener('scroll', addClassHeader)

    let header = document.querySelector('.header')

    function addClassHeader() {
        if (window.scrollY > 50) {
            header.classList.add('active')
        } else {
            header.classList.remove('active')
        }
    }
    addClassHeader();

    function descTabs() {
        let descParentTabs = document.querySelector('.desc__tabs')
        let descTabs = document.querySelectorAll('.desc__tab')
        descParentTabs.addEventListener('click', (e) => {
            const target = e.target
            if (target.classList.contains('desc__tab')) {
                // console.log(target)
                descTabs.forEach(item => {
                    item.classList.remove('active')
                })
            }
            target.classList.add('active')
        })
    }


    function descTabsContent() {
        let btn = document.querySelectorAll('.desc__tab');
        let block = document.querySelectorAll('.desc__info-tab')
        btn.forEach((key, index, array) => {
            key.addEventListener('click', function() {
                block.forEach((item, itemindex) => {
                    item.classList.toggle('active', index === itemindex)
                })
            })
        })
    }
    let desc = document.querySelector('.desc')
    if (desc) {
        descTabs();
        descTabsContent();
    }


    function appTabs() {
        let descParentTabs = document.querySelector('.application__tabs')
        let descTabs = document.querySelectorAll('.application__tab')
        descParentTabs.addEventListener('click', (e) => {
            const target = e.target
            if (target.classList.contains('application__tab')) {
                // console.log(target)
                descTabs.forEach(item => {
                    item.classList.remove('active')
                })
            }
            target.classList.add('active')
        })
    }


    function appTabsContent() {
        let btn = document.querySelectorAll('.application__tab');
        let block = document.querySelectorAll('.application__tab-content')
        btn.forEach((key, index, array) => {
            key.addEventListener('click', function() {
                block.forEach((item, itemindex) => {
                    item.classList.toggle('active', index === itemindex)
                })
            })
        })
    }
    let app = document.querySelector('.application')
    if (app) {
        appTabs();
        appTabsContent();
    }

    let packagesLines = document.querySelectorAll('.package__item:not(.front)')
    let packageSection = document.querySelector('.package')
    if (packageSection) {
        window.addEventListener('scroll', addPackagesLinesClass)
        addPackagesLinesClass();

        function addPackagesLinesClass() {
            if (window.pageYOffset > (packageSection.getBoundingClientRect().top + packageSection.clientHeight)) {
                packagesLines.forEach((item, i) => {
                    setTimeout(() => {
                        item.classList.add('active')
                    }, i * 700)
                })
            }
        }
    }


    $('.accord__item').on("click", function(e) {
        const target = e.target
        if (target.classList.contains('active')) {
            $(target.childNodes[3]).slideUp();
            target.classList.remove('active')
        } else {
            $('.accord__content').slideUp();
            $(target.childNodes[3]).slideDown();
            $('.accord__item').removeClass('active')
            target.classList.add('active')
        }
    });

    //START

    let rating = document.querySelector('.stars')
    ratingItem = document.querySelectorAll('.js-star')

    let submitForm = document.querySelector('.js-submit')

    if (submitForm) {
        submitForm.addEventListener('click', (e) => {
            if (document.querySelector('.hidden__input-star').value === '') {
                e.preventDefault();
                alert('Выберите количество звезд!')
            }
        })
        rating.addEventListener('click', (e) => {
            let target = e.target;
            if (target.classList.contains('js-star')) {
                removeClassStar(ratingItem, 'current-active')
                target.classList.add('active', 'current-active')
                let indexStar = parseInt([...target.parentNode.children].indexOf(target) + 1)
                document.querySelector('.hidden__input-star').value = indexStar;
            }
        });
        rating.addEventListener('mouseover', (e) => {
            let target = e.target;
            if (target.classList.contains('js-star')) {
                removeClassStar(ratingItem, 'active')
                target.classList.add('active')
                mouserOverActiveClass(ratingItem);
            }
        })
        rating.addEventListener('mouseout', (e) => {
            addClassStar(ratingItem, 'active')
            mouserOutActiveClass(ratingItem)
        })

        function removeClassStar(arr) {
            for (let i = 0, Ilen = arr.length; i < Ilen; i++) {
                for (let j = 1; j < arguments.length; j++) {
                    ratingItem[i].classList.remove(arguments[j])
                }
            }
        }

        function addClassStar(arr) {
            for (let i = 0, Ilen = arr.length; i < Ilen; i++) {
                for (let j = 1; j < arguments.length; j++) {
                    ratingItem[i].classList.add(arguments[j])
                }
            }
        }

        function mouserOverActiveClass(arr) {
            for (let i = 0, Ilen = arr.length; i < Ilen; i++) {
                if (arr[i].classList.contains('active')) {
                    break;
                } else {
                    arr[i].classList.add('active');
                }
            }
        }

        function mouserOutActiveClass(arr) {
            for (let i = arr.length - 1; i >= 0; i--) {
                if (arr[i].classList.contains('current-active')) {
                    break;
                } else {
                    arr[i].classList.remove('active');
                }
            }
        }

    }

})

let preloader = document.querySelector('.preloader')
let preloadImg = document.querySelectorAll('.pr-bub');
let arrayBub = Array.from(preloadImg)
let reverseArray = arrayBub.reverse();

let timeout;

function setClassBub() {
    reverseArray.forEach((bub, index) => {
        timeout = setTimeout(() => {
            bub.classList.add('animationPreBub')
            if (index === (reverseArray.length - 1)) {
                setTimeout(() => {
                    reverseArray.forEach((item) => {
                        item.classList.remove('animationPreBub')
                    })
                    setClassBub();
                }, 500)
            }
        }, 300 * (index + 1))
    })
}

setClassBub();

document.querySelector('body').style.overflow = "hidden";

window.onload = () => {
    preloader.classList.add('disabled')
    setTimeout(() => {
        preloader.style.display = 'none';
        document.querySelector('body').style.overflow = "unset";
    }, 1000)
    clearTimeout(timeout)
}