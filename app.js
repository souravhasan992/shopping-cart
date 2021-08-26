function product(input,isIncreasing,price){
    const productCountingText= document.getElementById(input+'-count');
    const productCounting = productCountingText.value;
    let productCount= parseInt(productCounting);
    if(isIncreasing){
        productCount = productCount +1;
    }
    else if (productCount > 0){
        productCount = productCount -1;
    }
    productCountingText.value = productCount;
        
    document.getElementById(input+'-price').innerText=productCount * price;
    calculateTotal();
}

function calculateTotal(){
    const phonePrice = document.getElementById('phone-price').innerText;
    const casePrice = document.getElementById('case-price').innerText;
    const subTotal = parseInt(phonePrice) + parseInt(casePrice);
    const tax = subTotal/10;
    const total = subTotal + tax;
    // update on html 
    document.getElementById('sub-total').innerText= subTotal;
    document.getElementById('tax').innerText = tax;
    document.getElementById('total').innerText= total;

}



document.getElementById('phone-plus').addEventListener('click',function(){
    product('phone',true,1219);
})
document.getElementById('phone-minus').addEventListener('click',function(){
    product('phone',false,1219);
})
document.getElementById('case-plus').addEventListener('click',function(){
    product('case',true,59);
})
document.getElementById('case-minus').addEventListener('click',function(){
    product('case',false,59);
})