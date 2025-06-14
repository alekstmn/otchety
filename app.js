import * as KRONA from "./arrKrona.js";
import * as KONIGIN from "./arrKonigin.js"

 const { hoods, duhovki, varki, stirki, PMM, holodAndSuchMachina,
   vstrsvch, svch, pechi, mbt } = KRONA;

const { hoodsKg, duhovkiKg, varkiKg, vstrsvchKg} = KONIGIN;

const KRONA_KEY = 'KRONA_VAL';
const KONIGIN_KEY = 'KONIGIN_VAL';
 
const selectKrona = document.querySelector(".selectes-krona");
const selectKonigin = document.querySelector(".selectes-konigin");
const resultKrona = document.querySelector(".result-list-krona");
const resultKonigin = document.querySelector(".result-list-konigin");
let goodsKrona = document.querySelector(".goods-list-krona");
let goodsKonigin = document.querySelector(".goods-list-konigin")
let liveKrona = goodsKrona.getElementsByTagName("li");
let liveKonigin = goodsKonigin.getElementsByTagName("li");
const resulBottomtKrona = document.querySelector(".result-bottom-krona");
const resulBottomtKonigin = document.querySelector(".result-bottom-konigin");
const btnsKrona = document.querySelector(".btns-krona");
const btnsKonigin = document.querySelector(".btns-konigin");
const btnClearKrona = btnsKrona.querySelector(".btn-clear");
const btnClearKonigin = btnsKonigin.querySelector(".btn-clear");
const btnDowlandKrona = btnsKrona.querySelector(".btn-dowland");
const btnDowlandKonigin = btnsKonigin.querySelector(".btn-dowland");
const brands = document.querySelector(".brands");
const btns = document.querySelectorAll(".btns");





function init(){
   createList(hoods, "hood", "hoods");
   createList(duhovki, "duhovka", "duhovki");
   createList(varki, "varka", "varki");
   createList(stirki, "stirka", "stirki");
   createList(PMM, "pmm", "pmms");
   createList(holodAndSuchMachina, "holandsuchmachina", "holandsuchmachins");
   createList(vstrsvch, "vstrsvch", "vstrsvchs");
   createList(svch, "svch", "svchs");
   createList(pechi, "pech", "pechi");
   createList(mbt, "mbt", "mbts");
   createList(hoodsKg, "hoodkg", "hoodskg");
   createList(duhovkiKg, "duhovkakg", "duhovkikg");
   createList(varkiKg, "varkakg", "varkikg");
   createList(vstrsvchKg, "vstrsvchkg", "vstrsvchskg");
 };

 init();

//====================================

function createList(arr, cls, showCls){
   let res = '';
   arr?.forEach( item => {    
      res += createLi(item, `${cls}`)
   });
   document.querySelector(`.${showCls}`).innerHTML = res;
};

function createLi(good, cls){
   return `
   <li class=${cls} data-price=${good.price}>
      ${good.name} 
   </li>
   `
};

//------------------------

const handleClick = event => {
   if(event.target.tagName != 'BUTTON') return;
   const target = event.target.nextElementSibling;
   target.classList.toggle("active");

   selectKrona.querySelectorAll("ul")?.forEach(item => {
      if(item !== target) {
         item.classList.remove("active");
      }
   })

};
const handleClickTwo = event => {
   if(event.target.tagName != 'BUTTON') return;
   const target = event.target.nextElementSibling;
   target.classList.toggle("active");

   selectKonigin.querySelectorAll("ul")?.forEach(item => {
      if(item !== target) {
         item.classList.remove("active");
      }
   })

};

selectKrona.querySelectorAll("button")?.forEach(item => {
   item.addEventListener("click", handleClick)
});
selectKonigin.querySelectorAll("button")?.forEach(item => {
   item.addEventListener("click", handleClickTwo)
})

//============================



let ARR_KRONA = [];
let ARR_KONIGIN = [];

function getSum(val, sum){
  
   resulBottomtKrona.innerHTML = `
   <div class="result-count">Количество : <span>${val}</span> </div>
   <div class="result-sum">Сумма :<span>${sum}</span></div>
   `;
};

 function getSumTwo(val, sum){
   resulBottomtKonigin.innerHTML = `
   <div class="result-count">Количество : <span>${val}</span> </div>
   <div class="result-sum">Сумма :<span>${sum}</span></div>
   `
};

function getValueResItems(){

   let KR_HOODS = ARR_KRONA.filter(item => item.className == 'hood' );
   let KR_VARS = ARR_KRONA.filter(item => item.className == 'varka' );
   let KR_DUHS = ARR_KRONA.filter(item => item.className == 'duhovka' );
   let KR_STIRS = ARR_KRONA.filter(item => item.className == 'stirka' );
   let KR_PMMS = ARR_KRONA.filter(item => item.className == 'pmm' );
   let KR_HOLANDSUCHS = ARR_KRONA.filter(item => item.className == 'holandsuchmachina' );
   let KR_VSTRSVCHS = ARR_KRONA.filter(item => item.className == 'vstrsvch' );
   let KR_SVCHS = ARR_KRONA.filter(item => item.className == 'svch' );
   let KR_PECHS = ARR_KRONA.filter(item => item.className == 'pech' );
   let KR_MBTS = ARR_KRONA.filter(item => item.className == 'mbt' );

   const SUM_HOODS = KR_HOODS.reduce((acc, item) => acc + +item.price, 0);
   const SUM_VARS = KR_VARS.reduce((acc, item) => acc + +item.price, 0);
   const SUM_DUHS = KR_DUHS.reduce((acc, item) => acc + +item.price, 0);
   const SUM_STIRS = KR_STIRS.reduce((acc, item) => acc + +item.price, 0);
   const SUM_PMMS = KR_PMMS.reduce((acc, item) => acc + +item.price, 0);
   const SUM_HOLANDSUCHS = KR_HOLANDSUCHS.reduce((acc, item) => acc + +item.price, 0);
   const SUM_VSTRSVCHS = KR_VSTRSVCHS.reduce((acc, item) => acc + +item.price, 0);
   const SUM_SVCHS = KR_SVCHS.reduce((acc, item) => acc + +item.price, 0);
   const SUM_PECHS = KR_PECHS.reduce((acc, item) => acc + +item.price, 0);
   const SUM_MBTS = KR_MBTS.reduce((acc, item) => acc + +item.price, 0);


   resultKrona.innerHTML = `
 <li>ВЫТЯЖКИ <span>${KR_HOODS.length}</span><span>${SUM_HOODS}</span></li>
 <li>ВАРОЧНЫЕ ПОВЕРХНОСТИ<span>${KR_VARS.length}</span><span>${SUM_VARS}</span></li>
 <li>ДУХОВЫЕ ШКАФЫ<span>${KR_DUHS.length}</span><span>${SUM_DUHS}</span></li>
 <li>СТИРАЛЬНЫЕ МАШИНЫ<span>${KR_STIRS.length}</span><span>${SUM_STIRS}</span></li>
 <li>ПОСУДОМОЕЧНЫЕ МАШИНЫ<span>${KR_PMMS.length}</span><span>${SUM_PMMS}</span></li>
 <li>ХОЛОДИЛЬНИКИ/СУШ. МАШИНЫ<span>${KR_HOLANDSUCHS.length}</span><span>${SUM_HOLANDSUCHS}</span></li>
 <li>СВЧ ВСТРАИВАЕМЫЕ<span>${KR_VSTRSVCHS.length}</span><span>${SUM_VSTRSVCHS}</span></li>
 <li>СВЧ ОТДЕЛЬНОСТОЯЩИЕ<span>${KR_SVCHS.length}</span><span>${SUM_SVCHS}</span></li>
 <li>МИНИ-ПЕЧИ<span>${KR_PECHS.length}</span><span>${SUM_PECHS}</span></li>
 <li>РАЗНАЯ МЕЛКОБЫТОВАЯ<span>${KR_MBTS.length}</span><span>${SUM_MBTS}</span></li>
 `;
 
 let summaKrona = ARR_KRONA.reduce((acc, item)=> acc + +item.price, 0);
 let countResultKrona = ARR_KRONA.length;
 getSum(countResultKrona, summaKrona);
};

function getValueResItemsTwo(){

   let KG_HOODS = ARR_KONIGIN.filter(item => item.className == 'hoodkg' );
   let KG_VARS = ARR_KONIGIN.filter(item => item.className == 'varkakg' );
   let KG_DUHS = ARR_KONIGIN.filter(item => item.className == 'duhovkakg' );
   let KG_VSTRSVCHS = ARR_KONIGIN.filter(item => item.className == 'vstrsvchkg' );
   

   const SUM_HOODS = KG_HOODS.reduce((acc, item) => acc + +item.price, 0);
   const SUM_VARS = KG_VARS.reduce((acc, item) => acc + +item.price, 0);
   const SUM_DUHS = KG_DUHS.reduce((acc, item) => acc + +item.price, 0);
   const SUM_VSTRSVCHS = KG_VSTRSVCHS.reduce((acc, item) => acc + +item.price, 0);
  


   resultKonigin.innerHTML = `
 <li>ВЫТЯЖКИ <span>${KG_HOODS.length}</span><span>${SUM_HOODS}</span></li>
 <li>ВАРОЧНЫЕ ПОВЕРХНОСТИ<span>${KG_VARS.length}</span><span>${SUM_VARS}</span></li>
 <li>ДУХОВЫЕ ШКАФЫ<span>${KG_DUHS.length}</span><span>${SUM_DUHS}</span></li>
 <li>СВЧ ВСТРАИВАЕМЫЕ<span>${KG_VSTRSVCHS.length}</span><span>${SUM_VSTRSVCHS}</span></li>
 `;

let summaKonigin = ARR_KONIGIN.reduce((acc, item)=> acc + +item.price, 0);
 let countResultKonigin = ARR_KONIGIN.length;
 getSumTwo( countResultKonigin, summaKonigin);
}



 function getStorage(){
   ARR_KRONA = getState();
   ARR_KRONA.forEach(item => {
      let li = createGoodDiv(item);
      goodsKrona.innerHTML += li;
   });
   getValueResItems()
};

getStorage();


function getStorageTwo(){
   ARR_KONIGIN = getStateTwo();
   ARR_KONIGIN.forEach(item => {
      let li = createGoodDiv(item);
      goodsKonigin.innerHTML += li;
   });
   getValueResItemsTwo();
};

getStorageTwo();

function createGoodDiv(item){

 return `

   <li class=${item.className} data-price=${item.datadiv}><span>${item.name}</span><input value=${item.price} /></li>
   
   `  
};
function createObj(obj){
   let ob = {};
   ob.name = obj.textContent.trim();
   ob.className = obj.className;
   ob.datadiv = obj.dataset.price;
   ob.price = obj.dataset.price;
   console.log(ob)
   return ob;
};

const getObjGoodDiv = event => {
   if(event.target.tagName != 'LI') return;
   let target = event.target;
   let obj = createObj(target);
   let li = createGoodDiv(obj);
   goodsKrona.innerHTML += li;
   ARR_KRONA.push(obj);
   localStorage.removeItem(KRONA_KEY);
   saveState();
   getValueResItems()
};

const getObjGoodDivTwo = event => {
   if(event.target.tagName != 'LI') return;
   let target = event.target;
   let obj = createObj(target);
   let li = createGoodDiv(obj);
   goodsKonigin.innerHTML += li;
   ARR_KONIGIN.push(obj);
   saveStateTwo();
   getValueResItemsTwo()
};



const removeGoodDiv = event => {
   if(event.target.tagName !="LI") return;
   let target = event.target;
   target.remove();
   ARR_KRONA = [];
   [...liveKrona].forEach(item => {
      let val = createObj(item);
      ARR_KRONA.push(val);
   });
   saveState();
   getValueResItems()
};

const removeGoodDivTwo = event => {
   if(event.target.tagName !="LI") return;
   let target = event.target;
   target.remove();
   ARR_KONIGIN = [];
   [...liveKonigin].forEach(item => {
      let val = createObj(item);
      ARR_KONIGIN.push(val);
   });
   saveStateTwo();
   getValueResItemsTwo()
};

function saveState(){
   localStorage.setItem(KRONA_KEY, JSON.stringify(ARR_KRONA))
};
function saveStateTwo(){
   localStorage.setItem(KONIGIN_KEY, JSON.stringify(ARR_KONIGIN))
};

function getState(){
   const raw = localStorage.getItem(KRONA_KEY);
   return raw ? JSON.parse(raw) : [];
};

function getStateTwo(){
   const raws = localStorage.getItem(KONIGIN_KEY);
   return raws ? JSON.parse(raws) : [];
};

  

 selectKrona.addEventListener('click', getObjGoodDiv);
 selectKonigin.addEventListener('click', getObjGoodDivTwo);
 goodsKrona.addEventListener('dblclick', removeGoodDiv);
 goodsKonigin.addEventListener('dblclick', removeGoodDivTwo);

 //=================== clear and print

function clearResultKrona(){
   goodsKrona.innerHTML = '';
   ARR_KRONA = [];
   localStorage.removeItem(KRONA_KEY);
   getValueResItems()
};

function clearResultKronaTwo(){
   goodsKonigin.innerHTML = '';
   ARR_KONIGIN = [];
   localStorage.removeItem(KONIGIN_KEY);
   getValueResItemsTwo()
};

function btnsHidden(){
   btns.forEach(item => item.style.visibility = "hidden");
}
function btnsShow(){
   btns.forEach(item => item.style.visibility = "visible");
}

function printPage() { 
   brands.style.visibility = "hidden";
   btnsHidden();
   window.print();
   setTimeout(() => brands.style.visibility = "visible", 1000);
   setTimeout(() => btnsShow(), 1000);
}; 


 btnClearKrona.addEventListener("click", clearResultKrona);
 btnClearKonigin.addEventListener("click", clearResultKronaTwo);
 btnDowlandKrona.addEventListener("click", printPage);
 btnDowlandKonigin.addEventListener("click", printPage);

 

