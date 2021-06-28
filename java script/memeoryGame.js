// start build shuffeld card game
let box = document.getElementById('game');

let closer = document.querySelector('.game .closer');

document.querySelector('.landing .setting-box .cart-game .play').onclick = ()=>{

    let hoverly = document.createElement('div');

    hoverly.className= 'hoverly2';

    document.documentElement.appendChild(hoverly);

    let start = document.createElement('button');

    start.className = 'start';

    start.appendChild(document.createTextNode('play'));

    hoverly.appendChild(start);

    let hoverly3 = document.createElement('div');
    hoverly3.className = 'hoverly3';
    blocksContainer.appendChild(hoverly3);

    start.onclick = ()=>{

        let name = prompt('what is your name ?');
    
        if(name === null || name === ''){
    
            nameBox.textContent = 'Unknow';
    
        }else{
    
            nameBox.textContent = name;
        }
        start.remove()
        hoverly3.remove()
    }
    

    document.documentElement.style.overflow = 'hidden';
    
 
    box.style.display = 'block';

}

 closer.onclick = function(){

    document.querySelector('.hoverly2').remove();
 
    box.style.display = 'none';

    document.documentElement.style.overflow = 'auto';

    nameBox.textContent = '';
    triesBox.textContent = "0";
}

// --------------------start game.game 

let nameBox = document.querySelector('.game .info .name span');

let triesBox = document.querySelector('.game .info .tries span');



// -----------------------collect informations 
let blocksContainer = document.querySelector('.game .memory-games-block');

let blocks = Array.from(blocksContainer.children);

let rangeTable = [...Array(blocks.length).keys()];

const duration =1000;

//--------------------------add order css property to the block

shuffel(rangeTable)
console.log(rangeTable);

blocks.forEach((block , index) =>{

    block.style.order = rangeTable[index];

    block.addEventListener('click' , ()=>{

        fliped(block);

        let cartsfliped = blocks.filter(cartfliped => cartfliped.classList.contains('is-fliped'));
        
        if(cartsfliped.length === 2){
        
            stopClicking();

            mushed(cartsfliped[0],cartsfliped[1])

            let cartmushed = blocks.filter(cart =>cart.classList.contains('has-mush'));
            
            if(cartmushed.length === 20){

                
                document.querySelectorAll('.game .memory-games-block .block').forEach(cart =>{

                    cart.classList.remove('has-mush');
                })
                
                shuffel(rangeTable)
                
                block.style.order = rangeTable[index];
            }
        }
        })

        
    
})

//-------------------------- create a function to shuffel the blocks
function shuffel(table){

    let current = table.length;
    let tempo;
    let random;

    while(current > 0){

        random = Math.floor(Math.random() * current);

        current--;

        tempo = table[current];
        table[current] = table[random];
        table[random] = tempo;
    
    }
    return table;
}

// create fliped function 
function fliped(cart){

    cart.classList.add('is-fliped');
}

// create stopClickinh function 
function stopClicking(){

    blocksContainer.classList.add('stop-click');

    setTimeout(()=>{
        blocksContainer.classList.remove('stop-click');
    },duration)
}

// create muched function
function mushed(element1 , element2){


    if(element1.dataset.technology === element2.dataset.technology){

        element1.classList.remove('is-fliped');
        element2.classList.remove('is-fliped');

        
        element1.classList.add('has-mush');
        element2.classList.add('has-mush');

        document.querySelector('.audio .right').play();
    }else{
    
        triesBox.innerHTML = parseInt(triesBox.innerHTML) + 1;

        setTimeout(()=>{

            element1.classList.remove('is-fliped');
            element2.classList.remove('is-fliped');

        },duration)

        document.querySelector('.audio .wrong').play();
    }
}
