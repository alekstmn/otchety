import * as KRONA from "./arrKrona.js";

const { hoods, duhovki, varki, stirki, PMM, holodAndSuchMachina,
   vstrsvch, svch, pechi, chainiki, blendery, mjasorubki, tostery, kofevarki, sushki } = KRONA;

const KRONA_KEY = 'KRONA_VAL';

const selectKrona = document.querySelector(".selectes-krona");
const resultKrona = document.querySelector(".result-list-krona");
const resulBottomtKrona = document.querySelector(".result-bottom-krona");
const btnsKrona = document.querySelector(".btns-krona");
const btnClearKrona = btnsKrona.querySelector(".btn-clear");
const btnDowlandKrona = document.getElementById("sheetjsexport");
let goodsKrona = document.querySelector(".goods-list-krona");
let liveKrona = goodsKrona.getElementsByTagName("li");
let resKronaLi = resultKrona.getElementsByTagName('li');
let resKronaSpan = resulBottomtKrona.getElementsByTagName('span');

//=================================================

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
   createList(chainiki, "chainik", "chainiki");
   createList(blendery, "blender", "blendery");
   createList(mjasorubki, "mjasorubka", "mjasorubki");
   createList(tostery, "toster", "tostery");
   createList(kofevarki, "kofevarka", "kofevarki");
   createList(sushki, "sushka", "sushki");
 };

 init();

 //===============================

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

selectKrona.querySelectorAll("button")?.forEach(item => {
   item.addEventListener("click", handleClick)
});

//==============================

let ARR_KRONA = [];

function getSum(val, sum){
  
   resulBottomtKrona.innerHTML = `
   <div class="result-count">Количество : <span>${val}</span> </div>
   <div class="result-sum">Сумма :<span>${sum}</span></div>
   `;
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
   let KR_CHAINIKI = ARR_KRONA.filter(item => item.className == 'chainik' );
   let KR_BLENDS = ARR_KRONA.filter(item => item.className == 'blender' );
   let KR_MJASORB = ARR_KRONA.filter(item => item.className == 'mjasorubka' );
   let KR_TOSTERS = ARR_KRONA.filter(item => item.className == 'toster' );
   let KR_KOFE = ARR_KRONA.filter(item => item.className == 'kofevarka' );
   let KR_SUSH = ARR_KRONA.filter(item => item.className == 'sushka' );





   const SUM_HOODS = KR_HOODS.reduce((acc, item) => acc + +item.price, 0);
   const SUM_VARS = KR_VARS.reduce((acc, item) => acc + +item.price, 0);
   const SUM_DUHS = KR_DUHS.reduce((acc, item) => acc + +item.price, 0);
   const SUM_STIRS = KR_STIRS.reduce((acc, item) => acc + +item.price, 0);
   const SUM_PMMS = KR_PMMS.reduce((acc, item) => acc + +item.price, 0);
   const SUM_HOLANDSUCHS = KR_HOLANDSUCHS.reduce((acc, item) => acc + +item.price, 0);
   const SUM_VSTRSVCHS = KR_VSTRSVCHS.reduce((acc, item) => acc + +item.price, 0);
   const SUM_SVCHS = KR_SVCHS.reduce((acc, item) => acc + +item.price, 0);
   const SUM_PECHS = KR_PECHS.reduce((acc, item) => acc + +item.price, 0);
   const SUM_CHAINIKI = KR_CHAINIKI.reduce((acc, item) => acc + +item.price, 0);
   const SUM_BLENDS = KR_BLENDS.reduce((acc, item) => acc + +item.price, 0);
   const SUM_MJASORB = KR_MJASORB.reduce((acc, item) => acc + +item.price, 0);
   const SUM_TOSTERS = KR_TOSTERS.reduce((acc, item) => acc + +item.price, 0);
   const SUM_KOFE = KR_KOFE.reduce((acc, item) => acc + +item.price, 0);
   const SUM_SUSH = KR_SUSH.reduce((acc, item) => acc + +item.price, 0);




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
 <li>ЧАЙНИКИ<span>${KR_CHAINIKI.length}</span><span>${SUM_CHAINIKI}</span></li>
 <li>БЛЕНДЕРЫ<span>${KR_BLENDS.length}</span><span>${SUM_BLENDS}</span></li>
 <li>МЯСОРУБКИ<span>${KR_MJASORB.length}</span><span>${SUM_MJASORB}</span></li>
 <li>ТОСТЕРЫ<span>${KR_TOSTERS.length}</span><span>${SUM_TOSTERS}</span></li>
 <li>КОФЕВАРКИ<span>${KR_KOFE.length}</span><span>${SUM_KOFE}</span></li>
 <li>СУШИЛКИ ДЛЯ ОВ. И ФР.<span>${KR_SUSH.length}</span><span>${SUM_SUSH}</span></li>
 `;

 let summaKrona = ARR_KRONA.reduce((acc, item)=> acc + +item.price, 0);
 let countResultKrona = ARR_KRONA.length;
 getSum(countResultKrona, summaKrona);
};

function getStorage(){
   ARR_KRONA = getState();
   ARR_KRONA.forEach(item => {
      let li = createGoodDiv(item);
      goodsKrona.innerHTML += li;
   });
   getValueResItems()
};

getStorage();

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
     getValueResItems();
     
  };

  const removeGoodDiv = event => {
   if(event.target.tagName !="SPAN") return;
   let target = event.target;
   target.parentElement.remove();
   ARR_KRONA = [];
   [...liveKrona].forEach(item => {
      let val = createObj(item);
      ARR_KRONA.push(val);
   });
   saveState();
   getValueResItems()
};

function saveState(){
   localStorage.setItem(KRONA_KEY, JSON.stringify(ARR_KRONA))
};

function getState(){
   const raw = localStorage.getItem(KRONA_KEY);
   return raw ? JSON.parse(raw) : [];
};

selectKrona.addEventListener('click', getObjGoodDiv);
goodsKrona.addEventListener('dblclick', removeGoodDiv);

 //=================== clear and exel

 function clearResultKrona(){
   goodsKrona.innerHTML = '';
   ARR_KRONA = [];
   localStorage.removeItem(KRONA_KEY);
   getValueResItems();
};

function createTable(){
   let table = document.createElement('TABLE');
   let tbodySection = document.createElement('TBODY');
   table.id = 'TableToExport';
   table.appendChild(tbodySection);

    for(let i = 0; i < 3; i++){
      let row = document.createElement('tr');
      let cell1 = document.createElement("td");
      let cell2 = document.createElement("td");
      let cell3 = document.createElement("td");
      i == 1 ? cell1.innerHTML = `ОФЕЛИЯ, ул.Кирова 63, отчет за июль 2025
      ` : cell1.innerHTML = `&nbsp;`;
      cell2.innerHTML = `&nbsp;`;
      cell3.innerHTML = `&nbsp;`;
      row.appendChild(cell1);
      row.appendChild(cell2);
      row.appendChild(cell3);
      tbodySection.appendChild(row);
   };
   
   [...resKronaLi].forEach(item => {
      let row = document.createElement('tr');
      let cell1 = document.createElement("td");
      let cell2 = document.createElement("td");
      let cell3 = document.createElement("td");
      cell1.innerHTML = item.firstChild.data;
      cell2.innerHTML = item.children[0].innerText;
      cell3.innerHTML = item.children[1].innerText;
      row.appendChild(cell1);
      row.appendChild(cell2);
      row.appendChild(cell3);
      tbodySection.appendChild(row);
   });

   let rowSum = document.createElement('tr');
   let cel1 = document.createElement("td");
   let cel2 = document.createElement("td");
   let cel3 = document.createElement("td");
   cel1.innerHTML = `Итого :`;
   cel2.innerHTML = resKronaSpan[0].innerText;
   cel3.innerHTML = resKronaSpan[1].innerText;
   rowSum.appendChild(cel1);
   rowSum.appendChild(cel2);
   rowSum.appendChild(cel3);
   tbodySection.appendChild(rowSum);

   for(let i = 0; i < 2; i++){
      let row = document.createElement('tr');
      let cell1 = document.createElement("td");
      let cell2 = document.createElement("td");
      let cell3 = document.createElement("td");
      i == 1 ? cell1.innerHTML = `НАИМЕНОВАНИЯ` : cell1.innerHTML = `&nbsp;`;
      cell2.innerHTML = `&nbsp;`;
      cell3.innerHTML = `&nbsp;`;
      row.appendChild(cell1);
      row.appendChild(cell2);
      row.appendChild(cell3);
      tbodySection.appendChild(row);
   };

   [...liveKrona].forEach(item => {
      let row = document.createElement('tr');
      let cell1 = document.createElement("td");
      let cell2 = document.createElement("td");
      let cell3 = document.createElement("td");
      cell1.innerHTML = item.innerText;
      cell2.innerHTML = '1';
      cell3.innerHTML = item.dataset.price;
      row.appendChild(cell1);
      row.appendChild(cell2);
      row.appendChild(cell3);
      tbodySection.appendChild(row);
   });
    
   goodsKrona.innerHTML = '';
   goodsKrona.appendChild(table);
   
};

function printExel() {
   createTable(resKronaLi)
   var wb = XLSX.utils.table_to_book(document.getElementById("TableToExport"));
  
   XLSX.writeFile(wb, "otchet_kirov.xlsx");
 }

btnDowlandKrona.addEventListener("click", printExel)
btnClearKrona.addEventListener("click", clearResultKrona);
