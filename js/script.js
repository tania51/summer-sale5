let price = 0;
function cardProductClicked(product) {
    // single product and total price without 
    const productChildName = product.childNodes[3].childNodes[5].innerText;
    const productNameId = document.getElementById('product-name');
    const li = document.createElement('li');
    productNameId.appendChild(li);
    li.style.listStyle = "number";
    li.style.fontWeight = 600;
    li.innerText = productChildName;
    

    const productChildList = product.childNodes[3].childNodes[7].innerText;
    const productPriceString = productChildList.split(' ')[0];
    const productPrice = parseFloat(productPriceString);
    price = price + productPrice;

    // set total price without discount
    const totalPriceText = document.getElementById('total-price');
    totalPriceText.innerText = price;
    
    // discount condition and discount price
    const discountPrice = price * 0.20;
    const discountPriceInDecimal = parseFloat(discountPrice).toFixed(2);

    // get discount id
    const discountId = document.getElementById('discount-price');

     // total price with discount
    const discount = parseFloat(discountPriceInDecimal);

    // total price with discount get the id
    const totalPriceId = document.getElementById('total-with-discount');



    // practice starts
    if(price >= 200) {
        couponButtonId.removeAttribute('disabled');

        document.getElementById('coupon-button').addEventListener('click', function() {
            const couponButtonId = document.getElementById('cuppon-selector').value;
    
            if(couponButtonId === 'SELL200') {
    
                // total price with discount calculation
                const totalPrice = price - discount;
                const totalPriceDecimal = totalPrice.toFixed(2);
                    
                if(price >= 200) {
                    discountId.innerText = discountPriceInDecimal;
    
                    totalPriceId.innerText = totalPriceDecimal;
                }
            }
            
         })
    }

    

    //practice ends


    
    // coupon code use
    // const couponInput = document.getElementById('coupon-input-field');
    // const couponInputValue = couponInput.value;
    
    

    // coupon button id get
    



    

    // purchase button disabled attribute remove
    const purchaseId = document.getElementById('purchase');
    if(price > 0) {
        purchaseId.removeAttribute('disabled');
    }
    

    
    

}

// clear everything after purchage and click go home button
const totalPriceText = document.getElementById('total-price');

// get discount id
const discountId = document.getElementById('discount-price');
// total price with discount get the id
const totalPriceId = document.getElementById('total-with-discount');

const couponButtonId = document.getElementById('coupon-button');

 // purchase button disabled attribute remove
 const purchaseId = document.getElementById('purchase');

 const couponSelector = document.getElementById('cuppon-selector');

 const productChildNameList = document.getElementById('product-name');
    
 
 document.getElementById('home-after-purchase').addEventListener('click', function() {

    totalPriceText.innerText = 0;
    discountId.innerText = 0;

    totalPriceId.innerText = 0;

    couponButtonId.setAttribute('disabled', true);
    
    purchaseId.setAttribute('disabled', true);

    couponSelector.value = '';
    productChildNameList.innerText = '';
    
})
