let body = '';
let backimg = document.querySelector('.backimg img');
let header = '';
let  footer = document.querySelector('footer');
let lol = '';
let mainmember = '';
let categoryArray = [];
function createBody(){
    body = document.querySelector('body');
     header = document.querySelector('header');  
     lol = createKategories();
    header.after(lol);
     mainmember = createMain();
    lol.after(mainmember);
}  
createBody();


function createKategories(){  
let aside = document.createElement('aside');
aside.classList.add('aside');
let div = document.createElement('div');
    div.className = 'kategories';
kategories.forEach((element) =>{
  let newdiv = document.createElement('div');
  newdiv.className = 'mydiv';
newdiv.textContent = element.name;
newdiv.dataset.id = 'category-click';
newdiv.id = `${element.id}`;
newdiv.key = `${element.key}`;
newdiv.class = element.class;
newdiv.addEventListener('click', hideKategory);
categoryArray.push(newdiv);
let img = document.createElement('img');
    img.src = `${element.imgSrc}`;
    newdiv.append(img);
    div.append(newdiv);
});
aside.append(div);
  return aside ;
};

function createMain(){
let main = document.createElement('main');
main.className = 'main';
arraySections.forEach((element)=>{
    let section = document.createElement('section');
    section.className = `${element.sectionname}`;
    let divForm = document.createElement('div');
    let divContent = document.createElement('div');
    divContent.className = 'normal';
    let pText = document.createElement('p');
    pText.textContent = `${element.pText}`;
    let img = document.createElement('img');
    img.src = `${element.imgSrc}`;
    divContent.append(pText);
    divForm.append(divContent);
    section.prepend(divForm);
    section.append(img);
    main.append(section);   
})
return main;
}

let selectKategory  = ' ';

let mainKategory = ' ';

function hideKategory(event){ 
    categoryArray.forEach((element)=>{
        if(event.target.id !== element.id){
            element.classList.remove('active');
          }else{     
            element.classList.add('active');
             } 
        })
     mainKategory = document.createElement('div');
    mainKategory.className = 'categorybox';
    let asidebox = document.createElement('div');
    asidebox.className = 'addAsideBox';
    let asideBoxDiv = ' ';
    let img = ' ';
    podCategory.forEach((element)=>{  
        if(event.target.key === element.key) {      
        let boxForCategory = document.createElement('div');
       boxForCategory.className = 'boxForCategory';  
       boxForCategory.classList.add('active');
       boxForCategory.name = element.name;
       boxForCategory.addEventListener('click', addGoods );
       asideBoxDiv = document.createElement('div');
       asideBoxDiv.className = 'insideBoxDiv';
       asideBoxDiv.textContent = `${element.name}`;
        img = document.createElement('img');
        img.src = `${element.imgSrc}`;
        boxForCategory.append(asideBoxDiv, img);
        asidebox.append(boxForCategory);
        }
    })
     selectKategory = document.createElement('div');
    selectKategory.className = 'moreChoose';
    mainKategory.append(asidebox);  
    remove(); 
    header.after(lol,mainKategory, footer);
}
function remove(){ 
    body.innerHTML = ' ';
    body.prepend(header);
     body.classList.add('clean');
     body.classList.remove('forUser');
}

function addGoods(event){
    removeMaiCategory()
    mainKategory.classList.add('change')
    event.target.classList.add
    towar.forEach((element) => {
        if(element.key === event.target.name){
            let divInSide = document.createElement('div' );
            divInSide.className = 'category';
            let sectionFirstDiv = document.createElement('img');
            sectionFirstDiv.className = 'sizeFirstDiv';
    sectionFirstDiv.src = `${element.imgSrc}`;
    let sectionTwoDiv = document.createElement('div');
    sectionTwoDiv.className = 'sizeTwoDiv';
    sectionTwoDiv.textContent = `${element.name}`;
    let sectionThirdDiv = document.createElement('div');
    sectionThirdDiv.className = 'sizeThirdDiv';
    let spanOfDiv1 = document.createElement('span');
    spanOfDiv1,className = 'sizeSpan';
    spanOfDiv1.textContent = `${element.price} грн`;
    let buttonOfDiv = document.createElement('button');
    buttonOfDiv.className = 'sizeButton';
    buttonOfDiv.addEventListener('click', addToCart)
    buttonOfDiv.textContent = 'Cart';
    // let likeButton = document.createElement('button');
    let buttonImg = document.createElement('img');
        buttonImg.src = `${'https://img.icons8.com/ios/50/like--v1.png'}`;
    // likeButton.className = 'likebutton';
    // likeButton.append(`${buttonImg}`);
    let divContain = document.createElement('div');
    divContain.className = 'divcontain';
    divContain.append(buttonOfDiv );
        sectionThirdDiv.append(spanOfDiv1, divContain);
    divInSide.append(sectionFirstDiv, sectionTwoDiv, sectionThirdDiv );
    selectKategory.append(divInSide);          }    
        mainKategory.append(selectKategory);
    });
     
}

let newArray = [];
newArray.push()
function addToCart(event){
    newArray.push(event.target.parentElement.parentElement.parentElement);
}
         

function removeMaiCategory(){
    selectKategory.innerHTML = ' ';
}

let toHome = document.querySelector('.toHome');
toHome.addEventListener('click', home )
function home(){
    remove();
    body.className.remove;
        createBody();
    body.append(footer);
}
let user = document.querySelector('.user');
user.addEventListener('click', createUser);

function createUser(){
        remove();
        const ourContainer = document.createElement('div');
        ourContainer.className = 'ourContainer';
        const firstbox = document.createElement('div');
        firstbox.className = 'firstbox';
        const container1 = document.createElement('div');
        container1.className = 'container1';
        const title1 = document.createElement('h1');
        title1.textContent = 'Create account';
        const input1 = document.createElement('input');
        input1.type = 'text';
        input1.placeholder = ' UserName';
       const input2 = document.createElement('input');
       input2.type = 'text';
       input2.placeholder = ' UserSurname';
        const button1 = document.createElement('button');
        button1.className = 'signIn';
        button1.textContent = 'Sign in';
        const aside1 = document.createElement('div');
        aside1.className = ' aside1';
        const title2 = document.createElement('h1');
        title2.textContent = 'Hello, i am glad to see you again';
        const button2 = document.createElement('button');
        button2.className = 'left';
        button2.addEventListener('click', add); 
        button2.textContent = 'Sign out';
        aside1.append(title2, button2);
        container1.append(title1, input1, input2, button1);
        firstbox.append(container1, aside1);

        const secondbox = document.createElement('div');
        secondbox.className = 'secondbox';
        const container2 = document.createElement('div');
        container2.className = 'container2';
        const title3 = document.createElement('h1');
        title3.textContent = 'Welcome';
        const input3 = document.createElement('input');
        input3.type = 'text';
        input3.placeholder = ' UserName';
       const input4 = document.createElement('input');
       input4.type = 'text';
       input4.placeholder = ' UserSurname';
       const input5 = document.createElement('input');
       input5.type = 'text';
       input5.placeholder = ' Password';
        const button3 = document.createElement('button');
        button3.className = 'signOut';
        button3.textContent = 'Sign out';
        const aside2 = document.createElement('div');
        aside2.className = ' aside2';
        const title4 = document.createElement('h1');
        title4.textContent = 'Create new account';
        const button4 = document.createElement('button');
        button4.className = 'right';
        button4.addEventListener('click', add1)
        button4.textContent = 'Sign in';
        aside2.append(title4, button4);
        container2.append(title3, input3, input4, input5, button3);
        secondbox.append(container2, aside2);

        ourContainer.append(firstbox, secondbox);
        body.classList.add('forUser');
       body.append(ourContainer);
}



function add(event){
    console.dir(event.target.offsetParent.offsetParent.lastChild.children[1].children[0]  );
   let firstbox =  event.target.offsetParent;
   let container1 =  event.target.offsetParent.children[0];
   let aside1 =  event.target.offsetParent.children[1];
   let secondbox = event.target.offsetParent.offsetParent.lastChild.children[1];
   let container2 = event.target.offsetParent.offsetParent.lastChild.children[1].children[0] ;
   let aside2 = event.target.offsetParent.offsetParent.lastChild.children[1].children[1] ;

    firstbox.classList.toggle('active');
    container1.classList.toggle('active');
    aside1.classList.toggle('active');
    aside2.classList.toggle('active');
    secondbox.classList.toggle('active');
    container2.classList.toggle('active');

}

function add1(event){
    console.dir(event.target.offsetParent.offsetParent.offsetParent.children[1].children[0].children[1]);
    let firstbox =  event.target.offsetParent.offsetParent.offsetParent.children[1].children[0];
    let container1 = event.target.offsetParent.offsetParent.offsetParent.children[1].children[0].children[0];
    let aside1 =  event.target.offsetParent.offsetParent.offsetParent.children[1].children[0].children[1];
    let secondbox = event.target.offsetParent.offsetParent;//right
    let container2 = event.target.offsetParent.offsetParent.children[0] ;//right
    let aside2 = event.target.offsetParent.offsetParent.children[1] ;
 
     firstbox.classList.toggle('active');
     container1.classList.toggle('active');
     aside1.classList.toggle('active');
     aside2.classList.toggle('active');
     secondbox.classList.toggle('active');
     container2.classList.toggle('active');

}

const cart = document.querySelector('.cart');
cart.addEventListener('click', createcart )


function createcart(){
    remove();
    body.append(createdcart());
}
function createdcart(){
    let overblock = document.createElement('div');
    overblock.className = 'overblock';
    newArray.forEach((element)=>{
let addedGood = document.createElement('div');
addedGood.className = 'addedGood';
const imgDiv = document.createElement('img');
imgDiv.className = 'productImg';
imgDiv.src = `${element.firstChild.currentSrc}`;
const dataProduct = document.createElement('div');
dataProduct.className = 'dataProduct';
const titleDiv = document.createElement('div');
titleDiv.className = 'productTitle'
titleDiv.textContent = `${element.children[1].lastChild.textContent}`
const forCounter = document.createElement('div');
forCounter.className = 'forCounter';
const countDiv = document.createElement('div');
countDiv.className = 'boxCounter';
const minus = document.createElement('button');
minus.textContent = '-';
minus.className = 'minus';
const countInput = document.createElement('div');
countInput.className = 'count';
countInput.textContent = '1'
const plus = document.createElement('button');
plus.textContent = '+';
plus.className = 'plus';
const priceProduct = document.createElement('div');
priceProduct.className = 'priceProduct';
priceProduct.textContent = `${element.lastChild.children[0].innerHTML}`
const buyDiv = document.createElement('button');
buyDiv.className = 'finishBuy';
buyDiv.textContent = 'Buy';
countDiv.append(minus, countInput, plus);
forCounter.append(countDiv, priceProduct);
dataProduct.append(titleDiv, forCounter, buyDiv);
addedGood.append(imgDiv, dataProduct);
overblock.append(addedGood);
    }) 
    return overblock;



}







