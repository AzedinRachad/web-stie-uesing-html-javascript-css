// show and hide the mobile nav
document.querySelector('.navbar .container .fa-bars').onclick = ()=>{

    document.querySelector('.navbar .container .links').classList.toggle('active')
}

// show and hide the setting 
document.querySelector('.landing .setting-box .icon-box').onclick = ()=>{

    document.querySelector('.landing .setting-box .icon-box .fa-cog').classList.toggle('fa-spin')

    document.querySelector('.landing .setting-box').classList.toggle('active')
}

// change color theme

// ------------------ stock the theme selected on the local storage

let colors = localStorage.getItem('option-color');

if(colors !== null){

        document.documentElement.style.setProperty('--maincolor',colors);

        document.querySelectorAll('.landing .setting-box .colors ul li').forEach(li =>{

            li.classList.remove('active');

            if(li.dataset.color === colors){
                li.classList.add('active')
            }
        })
        

}
let list_colors = document.querySelectorAll('.landing .setting-box .colors ul li');

list_colors.forEach(color =>{

    color.addEventListener('click' , (e)=>{

        document.documentElement.style.setProperty('--maincolor', e.target.dataset.color)

        localStorage.setItem('option-color',e.target.dataset.color);

        e.target.parentElement.querySelectorAll('.active').forEach(li =>{

            li.classList.remove('active')
        })
        e.target.classList.add('active')
    })

})



// randomize pictures
// -------------------------------- stock the background option on lacale strorage
let randomize_status = true;

let background_landin = localStorage.getItem('background-option');

if(background_landin !== null){

    document.querySelectorAll('.landing .setting-box .back span').forEach(span =>{

        span.classList.remove('active');

        if(background_landin === 'yes'){

            document.querySelector('.landing .setting-box .back .yes').classList.add('active');

            randomize_status = true;

        }else{
            document.querySelector('.landing .setting-box .back .no').classList.add('active');

            randomize_status = false;
        }
        
    })
}



let pictures = ['image/1.jpg','image/2.jpg','image/3.jpg','image/4.jpg','image/5.jpg','image/6.jpg'];

let landingBack = document.querySelector('.landing');

let randomNumber;

let stopRandomize ;

function randomize(){

    if(randomize_status === true){

        stopRandomize = setInterval(function(){

            randomNumber = Math.floor(Math.random() * pictures.length);

            landingBack.style.background = 'url('+pictures[randomNumber]+')';

        },2500)
    }else{

           clearInterval(stopRandomize);
    }
}
randomize()

// togleclass active from button
let buttons = document.querySelectorAll('.landing .setting-box .back span');

    buttons.forEach(span =>{

        span.addEventListener('click' ,(e) => {

            e.target.parentElement.querySelectorAll('.active').forEach(element =>{

                element.classList.remove('active')

            })

            e.target.classList.add('active')
            
            if(e.target.dataset.background === 'yes'){

                randomize_status = true;
                randomize();
                localStorage.setItem('background-option' , 'yes')
                
            }else{

                randomize_status = false;
                clearInterval(stopRandomize);
                localStorage.setItem('background-option' , 'no')
            }
    })
})


// start galery
let images = document.querySelectorAll('.services .galery img');

images.forEach(img =>{

    img.addEventListener('click' , (e)=>{

        e.target.parentElement.querySelectorAll('.active').forEach(element =>{

            // element.classList.remove('active');
            

        })
        // e.target.classList.add('active')

        //create our galery animation 
        let galery = document.getElementById('Services');

        let galery_hover = document.createElement('div');

        galery_hover.className='galery-hover';

        galery.appendChild(galery_hover);

        let box = document.createElement('div');

        box.className='galery_box';

        galery_hover.appendChild(box);

        let title = document.createElement('h2');

        title.textContent = e.target.alt;

        box.appendChild(title);

        let pic = document.createElement('img');

        pic.src = e.target.src;

        box.appendChild(pic);

        let close = document.createElement('span');

        close.className= 'close';

        close.textContent='x';

        box.appendChild(close)

    })
    
})
// ------------close poup
document.addEventListener('click',(e)=>{

    if(e.target.className === 'close'){

        e.target.parentNode.remove();

        document.querySelector('.galery-hover').remove()
    }
})

// end popup

// animate skills section :
let sklillsBox = document.querySelectorAll('.skills .skill .animate');

let progressContainer = document.querySelector('.progress');

let progressBars = document.querySelectorAll('.progress .prog div .bar span');

let featuresBox = document.querySelectorAll('.features .feat .animation3');

window.onscroll = function(){

    let windowTopPosition = window.pageYOffset;

    let windowHeight = window.innerHeight;

    let windowBottomPosition = (windowHeight + windowTopPosition);

    // start testimonials animation ;
    featuresBox.forEach(box2 =>{

        let featuresBoxTopP = box2.offsetTop;
        let featuresBoxHeight = box2.offsetHeight;
        let featuresBoxBottomP = (featuresBoxHeight + featuresBoxTopP);

        if( (featuresBoxBottomP >= windowTopPosition) && (featuresBoxTopP <= windowBottomPosition) ){

            box2.classList.add('active');

        }else{

            box2.classList.remove('active');
        }
    })

    // start skills Box animation
    sklillsBox.forEach(box =>{

        let boxTopPosition = box.offsetTop;
        let boxHeight = box.offsetHeight;
        let boxBottomPosition = (boxHeight + boxTopPosition);
        
        if( (boxBottomPosition >= windowTopPosition) && (boxTopPosition <= windowBottomPosition) ){

            box.classList.remove('active');
            
        }else{
            box.classList.add('active');
            
        }
    })

    // start progress bar animation

    let progressContainerTopP = progressContainer.offsetTop;
    let progressContainerHeight = progressContainer.offsetHeight;
    let progressContainerBottomP = (progressContainerHeight + progressContainerTopP);

    if((progressContainerBottomP >= windowTopPosition) && (progressContainerTopP <= windowBottomPosition)){

        progressBars.forEach(span =>{

            span.style.width = span.dataset.prpgress+'%';
        })
    }else{
        progressBars.forEach(span =>{

            span.style.width = 0;
        })
    }
 
    
}

// create a function for scrolling to the section 
let All_links = document.querySelectorAll('.navbar .links li');
let links_bullets = document.querySelectorAll('.bullets ul li');

function scrolling(elements){

    elements.forEach(link =>{

        link.addEventListener('click' , (e)=>{

            document.getElementById(''+e.target.dataset.scroll+'').scrollIntoView({

                behavior:'smooth'
            },1000)
        })
    })
}

scrolling(All_links);
scrolling(links_bullets)

// start bullets box 

// --------------------------------locale storage for bullets
let bullets_button = document.querySelectorAll('.landing .setting-box .bullets-box span');

let bullets_scrolling = localStorage.getItem('bullets-option');

let bullets_box = document.querySelector('.bullets ul');

if(bullets_scrolling !== null){

    bullets_button.forEach(span =>{

        span.classList.remove('active');

        console.log(bullets_scrolling)
        if(bullets_scrolling === 'yes'){

            document.querySelector('.landing .setting-box .bullets-box .yes').classList.add('active');
            bullets_box.style.display = 'block';

        }else{
            document.querySelector('.landing .setting-box .bullets-box .no').classList.add('active');
            bullets_box.style.display = 'none';
        }
    })
}



bullets_button.forEach(span =>{

    span.addEventListener('click' , (e)=>{

        e.target.parentElement.querySelectorAll('.active').forEach(el =>{

            el.classList.remove('active');

        })

        e.target.classList.add('active');
        
        localStorage.setItem('bullets-option',e.target.dataset.bullets);

        if(e.target.dataset.bullets === 'yes'){

            bullets_box.style.display = 'block';

        }else{
            bullets_box.style.display = 'none';
        }
    })
})

//start dellet all locale storage
document.querySelector('.remove').onclick = function(){

    localStorage.removeItem('bullets-option');
    localStorage.removeItem('option-color');
    localStorage.removeItem('background-option');
    window.location.reload()
}


// start our slider
// ---------------------colect informations
let slider_images = document.querySelectorAll('.slider-box .slider .our-slider img');

let numberOfImages = slider_images.length;

let currentSlider = 1;

let nextButton = document.querySelector('.next');

let prevButton = document.querySelector('.prev');

function nextSlider(){
    
    if(nextButton.classList.contains('stop')){
         
        return null;

    }else{
        
        currentSlider++;
        check()
    }


}

function prevSlider(){
    if(prevButton.classList.contains('stop')){
         
        return null;

    }else{
        
        currentSlider--;
        check()
    }    
}

nextButton.onclick = nextSlider;
prevButton.onclick = prevSlider;


// start creat bullets
let bullets_number = document.querySelector('.slider-box .slider .controls .bullets-number');

for(var i = 1 ; i <= numberOfImages ; i++){

    let bullets_number_items = document.createElement('li');
    
    // bullets_number_items.className='bullets_number_items';

    bullets_number_items.textContent = i;

    bullets_number_items.setAttribute('data-number', i);

    bullets_number.appendChild(bullets_number_items);
}

let bullets_number_items_class = document.querySelectorAll('.slider-box .slider .controls .bullets-number li');
// end creat bullets

// ------------------------ our Check function
function check(){

    document.querySelector('.slider-box .slider .our-slider .info-box').textContent = 'Slider '+currentSlider+' Of '+numberOfImages;

    deleting();

    slider_images[currentSlider - 1].classList.add('active');

    bullets_number.children[currentSlider - 1].classList.add('active');
    
    
    if(currentSlider == 1){

        prevButton.classList.add('stop');

    }else{
        prevButton.classList.remove('stop');
    }

    if(currentSlider == numberOfImages){
        
        nextButton.classList.add('stop');
        
    }else{
        nextButton.classList.remove('stop');
    }

}
check()

// start function that delet class active ffrom  element
function deleting(){

    slider_images.forEach(img =>{

        img.classList.remove('active')
    });

    document.querySelectorAll('.slider-box .slider .controls .bullets-number li').forEach(li =>{

        li.classList.remove('active');
    })
}

// end our slider

// start function for bullets numbers
bullets_number_items_class.forEach(li =>{

    li.onclick = function(e){

        currentSlider = e.target.dataset.number;
        check()
    }
})



// start reload animation
window.onload = function(){

    document.querySelector('.content-reload').remove()
    
}
// end reload animation