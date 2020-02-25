var cityContainer = document.getElementById('city-container');
var firstCity = document.getElementsByClassName('city-name')[0];
var secondCity = document.getElementsByClassName('city-name')[1];
var priceHeaderTab = document.getElementsByClassName('price-header'); 
var priceInfoTab = document.getElementsByClassName('price-info'); 

cityContainer.addEventListener('click', () => {
    firstCity.classList.toggle('city-active');
    secondCity.classList.toggle('city-active');

    if(priceInfoTab[0].innerText == '30zł'){
        priceHeaderTab[0].innerText = 'STRZYŻENIE WŁOSÓW (+ODSIWIANIE)';
        priceInfoTab[0].innerText = '40zł ( 45 - 70zł )';
    } else {
        priceHeaderTab[0].innerText = 'STRZYŻENIE WŁOSÓW';
        priceInfoTab[0].innerText = '30zł';
    }

    if(priceInfoTab[1].innerText == '30zł'){
        priceHeaderTab[1].innerText = 'STRZYŻENIE BRODY (+ODSIWIANIE)';
        priceInfoTab[1].innerText = '40zł ( 45 - 70zł )';
    } else {
        priceHeaderTab[1].innerText = 'STRZYŻENIE BRODY';
        priceInfoTab[1].innerText = '30zł';
    }

    if(priceInfoTab[2].innerText == '30zł'){
        priceInfoTab[2].innerText = '40zł';
    } else {
        priceInfoTab[2].innerText = '30zł';
    }

    if(priceInfoTab[3].innerText == '55zł'){
        priceHeaderTab[3].innerText = 'COMBO (+ODSIWIANIE)';
        priceInfoTab[3].innerText = '70zł ( 75 - 135zł )';
    } else {
        priceHeaderTab[3].innerText = 'COMBO (STRZYŻENIE WŁOSÓW I BRODY)';
        priceInfoTab[3].innerText = '55zł';
    }

    // if(priceInfoTab[0].innerText == '25,-'){
    //     priceInfoTab[0].innerText = priceInfoTab[2].innerText = priceInfoTab[3].innerText = '35,-';
    //     priceInfoTab[1].innerText = '35,-/45,-';
    // } else {
    //     priceInfoTab[0].innerText = priceInfoTab[2].innerText = priceInfoTab[3].innerText = '25,-';
    //     priceInfoTab[1].innerText = '25,-/35,-';
    // }
})