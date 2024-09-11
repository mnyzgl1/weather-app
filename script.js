const url = 'https://api.openweathermap.org/data/2.5/'
//openweatherdan elde edilen key değişkene atıldı.
const key = '0972da306632dbc727498c997601db4b'

const setQuery = (e) => {

    //key kodu 13 e eşitse enter a basıldı.
    if (e.keyCode == '13')
        getResult(searchBar.value)

}

const getResult = (cityName) => {

    //link oluşturma
     let query = `${url}weather?q=${cityName}&appid=${key}&units=metric&lang=tr`

     //url e istek gönderme
     fetch(query)
     .then(weather=>{
        return weather.json()
     })
     .then(displayResult)
}
const displayResult=(result)=>{

    let city=document.querySelector('.city')
    city.innerText=`${result.name},${result.sys.country}`
    let temp=document.querySelector('.temp')

    //dereceyi yuvarama metodu
    temp.innerText=`${(result.main.temp)}°C`

    //açıklama kısmı
    let desc=document.querySelector('.desc')
    desc.innerText=result.weather[0].description

    let minmax=document.querySelector('.minmax')
    minmax.innerText=`${Math.round(result.main.temp_min)}°C
    /${Math.round(result.main.temp_max)}°C`
}

//input alanındaki şehir yakalandı
const searchBar = document.getElementById('searchBar')
//dinleme işlemi
searchBar.addEventListener('keypress', setQuery)
