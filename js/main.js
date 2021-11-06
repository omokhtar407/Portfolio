
// for Hearder Links
$('.offcanvas-body li').click(function(){
    $(this).find('i').addClass('ico-active');
    $(this).siblings().find('i').removeClass('ico-active');
});
// For Header bar
$('#bar').click(function(){
    
    $('#header').animate({left :'0'},500);
    $('#bar').fadeOut(5);
    $('#close').fadeIn(5 , () => {
        $('body').css("overflow-y" , "hidden");
    });
    $('#header').removeClass('tran');
})
// For Header Close
$('#close').click(function(){
    
    $('#header').animate({left :'-300px'},100);
    $('#close').fadeOut(5);
    $('#bar').fadeIn(5 ,() => {
        $('body').css("overflow-y" , "auto");
    });
    $('#header').addClass('tran');
})
// for BtnUp
let aboutOffset = $('#About').offset().top;
$(window).scroll(function(){
    let wScroll = $(window).scrollTop();
    if(wScroll > aboutOffset - 300){
        $('.image').slideDown(800);
        $('.info').slideDown(800);
        $('#btnUp').fadeIn(500);
    }
    else{
        $('#btnUp').fadeOut(500);
    }
})
$('#btnUp').click(function(){
    $('body,html').animate({scrollTop:0},1000)
})

// for Section scroll
$("a[href^= '#'] ").click(function(e){
    let aHref = e.target.getAttribute('href');
    let secOffset = $(aHref).offset().top;
    $('body,html').animate({scrollTop: secOffset },1000);
    $('#close').fadeOut(5);
    $('#bar').fadeIn(5);
    $('#header').animate({left :'-300px'},500);
    $('body').css("overflow-y" , "auto");
})

// for Loading
$(document).ready(function(){
    $('.spinner').fadeOut(2000, () => {
        $('.spinner').parent().fadeOut(3000 , () => {
            $('.loading').remove();
            $('body').css("overflow-y" , "auto");
        })
    });
    var typed = new Typed('.typed', {
        strings: ['Freelance', 'Developer','Designer'],
        typeSpeed:50,
        backSpeed:50,
        loop:true
    });
    var mixer = mixitup('.tab-content');
})

// for Portfolio Btns
$('.nav-pills li').click(function(){
    $(this).find('button').addClass('btn-active');
    $(this).siblings().find('button').removeClass('btn-active');
});

// for Portfolio
let imgs =Array.from( document.querySelectorAll('.img-item'));
let Plus =Array.from( document.querySelectorAll('#plus'));
let Main_image = document.querySelector('.main-image');
let SelectImg = document.getElementById('selectImg');
let prevButton = document.getElementById('prev');
let nextButton = document.getElementById('next');
let closeButton = document.getElementById('closex');


curentIndex = 0;

for(let x = 0; x < Plus.length ; x++){
    Plus[x].addEventListener('click',function(e){
        e.preventDefault();
        curentIndex = x;
        let imgSrc =imgs[x].getAttribute('src');
        SelectImg.setAttribute('src',imgSrc);
        Main_image.classList.replace('d-none','d-flex');
        document.body.style.overflow=`hidden`;  
    }) 
}

function slide(i){

    curentIndex = curentIndex + i;

    if(curentIndex == -1){
        curentIndex = imgs.length - 1;
    }
    if(curentIndex == imgs.length){
        curentIndex = 0 ;
    }
    let imgSrc = imgs[curentIndex].getAttribute('src');
    SelectImg.setAttribute('src',imgSrc);
}

function closeSlide(){
    Main_image.classList.replace('d-flex','d-none');
    document.body.style.overflow=`auto`;
}

nextButton.addEventListener('click',function(){
    slide(1);
})

prevButton.addEventListener('click',function(){
    slide(-1);
})

closeButton.addEventListener('click',function(){
    closeSlide();
})

document.addEventListener('keydown',function(e){
    if(e.key == "ArrowRight"){
        slide(1);
    }
    else if(e.key == "ArrowLeft"){
        slide(-1);
    }
    else if(e.key == "Escape"){
        closeSlide();
    }
})

/* Form Validation */
let userNameInput = document.getElementById('userName'); 
let userEmailInput = document.getElementById('userEmail'); 
let userSubjectInput = document.getElementById('userSubject'); 
let messageInput = document.getElementById('message');
/* hold Spans */
let userNameReqError = document.getElementById('userNameReq'); 
let userEmailReqError = document.getElementById('userEmailReq'); 
let userSubjectReqError = document.getElementById('userSubjectReq');  
let messageReqError = document.getElementById('messageReq'); 

let Btn = document.getElementById('btnSubmit');

// User Name
function validateUserName(){
    let regex = /^([A-z ]{3,15})$/;
    
    if(regex.test(userNameInput.value) == true){
        Btn.disabled =!1;
        userNameInput.classList.add('is-valid');
        userNameInput.classList.remove('is-invalid');
        userNameReqError.classList.add('d-none');
        return true;
    }
    else{
        Btn.disabled =!0;
        userNameInput.classList.add('is-invalid');
        userNameInput.classList.remove('is-valid');
        userNameReqError.classList.remove('d-none');
        
        return false;
    }
}
userNameInput.addEventListener('keyup',function () {
    validateUserName();
})

// User Email
function validateUserEmail(){
    let regex = /^([A-z][.A-z]{2,15}[0-9]{0,4}@(gmail|yahoo|outlook).com)$/;
    if(regex.test(userEmailInput.value) == true){
        Btn.disabled =!1;
        userEmailInput.classList.add('is-valid');
        userEmailInput.classList.remove('is-invalid');
        userEmailReqError.classList.add('d-none');
        return true;
    }
    else{
        Btn.disabled =!0;
        userEmailInput.classList.add('is-invalid');
        userEmailInput.classList.remove('is-valid');
        userEmailReqError.classList.remove('d-none');
        
        return false;
    }
}
userEmailInput.addEventListener('keyup',function () {
    validateUserEmail();
})

// User Phone
function validateUserSubject(){
    let regex = /^([A-z ]{4,15})$/;
    if(regex.test(userSubjectInput.value) == true){
        Btn.disabled =!1;
        userSubjectInput.classList.add('is-valid');
        userSubjectInput.classList.remove('is-invalid');
        userSubjectReqError.classList.add('d-none');
        return true;
    }
    else{
        Btn.disabled =!0;
        userSubjectInput.classList.add('is-invalid');
        userSubjectInput.classList.remove('is-valid');
        userSubjectReqError.classList.remove('d-none');
        
        return false;
    }
}
userSubjectInput.addEventListener('keyup',function () {
    validateUserSubject();
})

// User Message
function validateUserMessage(){
    let regex = /^([A-z ]{2,200})$/;
    
    if(regex.test(messageInput.value) == true){
        Btn.disabled =!1;
        messageInput.classList.add('is-valid');
        messageInput.classList.remove('is-invalid');
        messageReqError.classList.add('d-none');
        return true;
    }
    else{
        Btn.disabled =!0;
        messageInput.classList.add('is-invalid');
        messageInput.classList.remove('is-valid');
        messageReqError.classList.remove('d-none');
        
        return false;
    }
}
messageInput.addEventListener('keyup',function () {
    validateUserMessage();
})
// Submit
let Form = document.getElementById('form');

document.getElementById('ContactUs').addEventListener('click',function () {
    Form.addEventListener('submit',function(e){
        e.preventDefault();
    
        if(validateUserName() == true && validateUserEmail() == true && validateUserSubject() == true && validateUserMessage() == true){
            Btn.disabled =!1;
        }
        else{
            Btn.disabled=!0;
        }
    })
});
