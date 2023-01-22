var count = 0;
var counterP = document.querySelector("#counter");
var showHideBtn = document.querySelector("#show-hide");
var plusBtn = document.querySelector("#plus");
var minusBtn = document.querySelector("#minus");
var resetBtn = document.querySelector("#reset");

counterP.innerText = count;

// prvo declariramo funkcije
function handleHideBtn(){
    counterP.classList.toggle('hide');
}
function handlePlusBtn(){
    count++;
    counterP.innerText = count;
    
}
function handleMinusBtn(){
    count--;
    counterP.innerText = count;
    
}
function handleResetBtn(){
    count = 0;
    counterP.innerText = count;
    
}
// zatim ih pozovemo
showHideBtn.addEventListener('click', handleHideBtn);
plusBtn.addEventListener('click', handlePlusBtn);
minusBtn.addEventListener('click', handleMinusBtn);
resetBtn.addEventListener('click', handleResetBtn);

// declariramo nove funkcije 
function handleHideElement (e){
    console.log(e.target); //ovako pomocu ovog targeta cemo tocno znati od kojeg je dosao event listener 
    var element = e.target; 
    element.classList.add('hide');

}

var brojBtnList = document.querySelectorAll('.broj');
for(var i = 0 ; i < brojBtnList.length; i++){
    var btn = brojBtnList[i];
    btn.addEventListener('mouseover', handleHideElement); //napravili smo jednu varaijablu u koju smo spremili sve btn-ove i onda smo na sve primjenili istu eventlistener funkciju

}