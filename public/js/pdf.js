window.onload = function(){
    document.getElementById("download").
    addEventListener("click",()=>{
        const Deposit = this.document.getElementById("Deposit");
        console.log(Deposit);
        console.log(window);
        html2pdf().from(Deposit).save();
    })
}