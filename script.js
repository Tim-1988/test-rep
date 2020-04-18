let rootElem = $('#root');

let width = rootElem.width();
let height = rootElem.height();

$('.screen').width(width);
$('.screen').height(height);


$('.screen .slides li').width(width);
$('.screen .slides li').height(height);

let slideCnt = $('.screen .slides li').length

$('.screen .slides').width(width * slideCnt)

let page = 0
const SPEED = 500;

function goRight(){
    if (page ===slideCnt-1){
        return
    }
    $('.screen .slides').animate({'left': `-${++page*width}px`}, SPEED);
    changeActivePoint()
}

function goLeft(){
    if (page === 0) {
        return
    }
    $('.screen .slides').animate({'left': `-${--page*width}px`}, SPEED);
    changeActivePoint()
}

function changeActivePoint(){
    $('.points li').removeClass('active')
    $('.points li').eq(page).addClass('active')
}


$('.t-left').on('click', goLeft);
$('.t-right').on('click', goRight);

$('.points li').on('click', function(){
    let cur = $(this); 
    $('.points li').removeClass('active');
    cur.addClass('active');
    let index = $('.points li').index(cur);
    page = index;
    $('.screen .slides').animate({'left': `-${page*width}px`}, SPEED);
    
})

//Добавление класса
 $('.points li').addClass('active')

//Удаление класса
 $('.points li').removeClass('active')