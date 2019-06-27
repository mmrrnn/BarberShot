var cityContainer = document.getElementById('city-container');
var firstCity = document.getElementsByClassName('city-name')[0];
var secondCity = document.getElementsByClassName('city-name')[1];
var priceInfoTab = document.getElementsByClassName('price-info'); 

cityContainer.addEventListener('click', () => {
    firstCity.classList.toggle('city-active');
    secondCity.classList.toggle('city-active');

    if(priceInfoTab[0].innerText == '25,-'){
        priceInfoTab[0].innerText = priceInfoTab[2].innerText = priceInfoTab[3].innerText = '35,-';
        priceInfoTab[1].innerText = '35,-/45,-';
    } else {
        priceInfoTab[0].innerText = priceInfoTab[2].innerText = priceInfoTab[3].innerText = '25,-';
        priceInfoTab[1].innerText = '25,-/35,-';
    }
})