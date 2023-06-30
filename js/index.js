// 웹페이지의 넓이
const viewWidth = 1024;
// 메인 이미지의 넓이
const mainImgWidth = 900;

let slidePosition = 0;
let slideIndex = 0;
let slide = document.querySelectorAll('.slide');
$(document).ready(() => {
    // imgShow(slideIndex)
    // setInterval(() => {
    //     // console.log('ck')
    //     slideIndex < $slide.length - 1 ? slideIndex++ : slideIndex = 0;
    //     imgShow(slideIndex)
    // }, 4000);
    autoSlide(true, 2000)
    $('.contents-img').on('click', ()=>{
        console.log('ck')
    })
})

// 매개변수로 받은 인덱스의 이미지를 보여주는 함수
const imgShow = (index) => {
    let $slide = $('.slide')
    console.log($slide, index)
    $slide.css({ 'display': 'none' })
    $slide[index].style.display = 'block'
}

// 이미지 슬라이드를 다음 슬라이드로
const nextSlide = () => {
    slideIndex++;
    // 이미지 슬라이드가 마지막 배열을 넘긴다면 처음으로 되돌린다
    if (slideIndex >= slide.length) {
        slidePosition = 0;
        slideIndex = 0;
    } else {
        // 이미지 슬라이드를 다음 슬라이드로 넘긴다
        slidePosition -= mainImgWidth;
    }


    // 실제로 슬라이드를 넘기는 반복문
    // 슬라이드 배열 트랜스폼을 다음 슬라이드로 이동시킨다
    for (let i = 0; i < slide.length; i++) {
        slide[i].style.transform = `translateX(${slidePosition}px)`
    }
}

// 이미지 슬라이드를 이전 슬라이드로
const prevSlide = () => {
    slideIndex--;
    // 이미지 슬라이드가 처음 배열을 넘긴다면 마지막으로 되돌린다
    if (slideIndex < 0) {
        slideIndex = slide.length - 1;
        slidePosition -= mainImgWidth * slideIndex;
    } else {
        // 이미지 슬라이드를 다음 슬라이드로 넘긴다
        slidePosition += mainImgWidth;
    }

    // 실제로 슬라이드를 넘기는 반복문
    // 슬라이드 배열 트랜스폼을 다음 슬라이드로 이동시킨다
    for (let i = 0; i < slide.length; i++) {
        slide[i].style.transform = `translateX(${slidePosition}px)`
    }
}

// 자동으로 다음 슬라이드로
// @param: isTier(true 반복적으로 호출, false 호출안함)
// @param: time(1000 => 1초)
const autoSlide = (isIter, time) => {
    nextSlide();
    // 2초마다 호출되는 이미지 슬라이드 함수
    if (isIter) {
        setInterval(() => {
            autoSlide()
        }, time)
    }
}
