let count = 0;


const countHeader = document.getElementById("count");
const countAdd = document.getElementById("Add");
const countSubtract = document.getElementById("subtract");

countHeader.innerText = count;


countAdd.addEventListener("click", ()=>{
    count++;
    countHeader.innerText = count;

    
    if (result > 10) {
        result = 0;
      }


});

countSubtract.addEventListener("click", ()=>{
    count--;
    countHeader.innerText = count
    
});