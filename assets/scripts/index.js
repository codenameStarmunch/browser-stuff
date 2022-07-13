

const updateBitcoinButtonText = (val) => {  
    document.getElementById("bitcoin-button").textContent = "test";   
}


if (typeof exports != "undefined") {
    module.exports = {
        updateBitcoinButtonText
    }
}  


function switchColors(element)  
        {  
        links=document.getElementsByTagName("color-click") ;  
        document.body.style.background = 'black' ;  
        element.style.color='chartreuse' ;  
        }  



