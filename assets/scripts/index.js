

const updateBitcoinButtonText = (val) => {  
    document.getElementById("bitcoin-button").textContent = "test";   
}


if (typeof exports != "undefined") {
    module.exports = {
        updateBitcoinButtonText
    }
}  
