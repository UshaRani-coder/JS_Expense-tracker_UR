// Load existing transactions from LocalStorage

//let savedTransactions = JSON.parse(localStorage.getItem("transactions")) || [];

let arrow_down = document.querySelector(" .select-category img");
let dropdown = document.querySelector(".dropdown");
let dropdown_menu = document.querySelectorAll(".dropdown span");
let select = document.querySelector(" .select-category div");
let amount = document.querySelector("input");
let addTransaction = document.querySelector("button");
let savings = document.querySelector(".savings div span");
let res = document.querySelectorAll(".top div span span");
let income = res[0];
let expenses = res[1];
let transactions = document.querySelector(".main");
let transactionsText = document.querySelector(".main span");
let clickedCategoryText;
let clickedCategory;

/*function saveTransactionsToLocalStorage(transactions) {
    localStorage.setItem("transactions", JSON.stringify(transactions));
  }*/


arrow_down.addEventListener("click",()=>{
dropdown.style.display="flex";
setTimeout(()=>{
    alert("Click on blue area to select the 'Expense category'(Do not click on the image or text)");
},1000);
})

function handleCategoryClick(event){
    clickedCategory = event.target;
     clickedCategoryText = event.target.textContent;
       select.textContent = clickedCategoryText;
        dropdown.style.display="none";
        select.style.color = "rgb(255,255,0)";
        select.style.fontWeight = "900";
}

dropdown_menu.forEach(category=>{
    category.addEventListener("click",handleCategoryClick);
            amount.addEventListener("input",()=>{ 
                const currentAmount = amount.value;
                addTransaction.addEventListener("click",()=>{

                    if(select.textContent.trim()==="Income"){
                        income.textContent = amount.value;
                    }
                    else if(select.textContent.trim()!=="Income" && select.textContent.trim() !== "Select Category"){
                        expenses.textContent = amount.value;
                        
                    }

       // Here's the part to add the selected category with the entered amount to transactions
        if (select.textContent.trim() !== "Select Category" && amount.value !== "") {

               /*   // Create the new Transaction object
              const Transaction = {
                                  category: select.textContent.trim(),
                                  amount: amount.value,
                                  //imgSrc: imgSrc,
                                   };

                // Add the new transaction to the savedTransactions array
                 savedTransactions.push(Transaction);
                 document.addEventListener("DOMContentLoaded", () => {
                    // Update the data from LocalStorage when the page loads
                    savedTransactions = JSON.parse(localStorage.getItem("transactions")) || [];
                 });
                // Save the updated savedTransactions array back to LocalStorage
                saveTransactionsToLocalStorage(savedTransactions);*/
                 

            let newTransaction = document.createElement("div");
            newTransaction.innerHTML = `<img class="save" src="Assets/save.png" width="15px"><img class="delete" src="Assets/bin.png" width="18px"><img src="${clickedCategory.querySelector('img').src}" width="20px" />
            <div>${select.textContent.trim()}: \u20B9 ${amount.value}</div>`;
            transactions.appendChild(newTransaction);
            newTransaction.style.display = "flex";
            newTransaction.style.alignItems = "center";
            newTransaction.style.justifyContent = "space-evenly";
            newTransaction.style.borderRadius = "10px";
            newTransaction.style.padding = "5px";
            newTransaction.style.width = "150px";
            newTransaction.style.backgroundColor="rgb(135,206,235,0.5)";
    
           //working with delete icon
           let del =  newTransaction.querySelector(".delete");
           del.addEventListener("click",()=>{
            del.style.width = "20px";
            setTimeout(()=>{
            newTransaction.style.display="none";},500);
           })
           //working with save icon
           let save = newTransaction.querySelector(".save");
           save.addEventListener("click",()=>{
            save.style.width = "18px";
            //saveTransactionsToLocalStorage(clickedCategory,currentAmount);
           })

        }
                    let incomeVal = +income.textContent;
                    let expenseval = +expenses.textContent;  
                    savings.textContent = incomeVal-expenseval;
    
                    transactionsText.textContent="";
                    amount.value = "";
                    select.textContent = "Select Category";
                    select.style.color = "rgb(225,225,225)";
                    select.style.fontWeight = "400";
        }) 
        })
    })

   





















                    