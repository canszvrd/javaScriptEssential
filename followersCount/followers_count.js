let count=0; //Inıtialize count to 0

function increaseCount(){
    count++;
    displayCount();
    checkCountValue();
}

function clearCount(){
    clear();
    alert("Takipci sifirlandi!");
}

function displayCount(){
    document.getElementById('countDisplay').innerHTML=count; //show count on HTML
}

function checkCountValue(){
    if(count === 10){
        alert("Instagram gonderiniz 10 takipci kazandi! Tebrikler!");
    }
    else if(count === 20){
        alert("Instagram gonderiniz 20 takipci kazandi! Devam edin!");
    }
}

function clear(){
    count=0;
    document.getElementById('countDisplay').innerHTML=count;
}
