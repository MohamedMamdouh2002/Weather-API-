let arrOfCurrent=[]
let arrOfLocation=[]
let arrOfForecast=[]
let row=document.getElementById("row")
let search=document.getElementById("search")

async function searchWeather() {""
let city = document.getElementById("cityInput").value;
  await getWeather(city);
}

async function getWeather(city){
  let apiResponse=await fetch(`https://api.weatherapi.com/v1/forecast.json?key=ce50fd77ce94441eab3181847230808&q=${city}&days=7`)
  let finalRlt = await apiResponse.json();
   arrOfCurrent=finalRlt.current;
    arrOfLocation=finalRlt.location;
    arrOfForecast=finalRlt.forecast;
   console.log(finalRlt);
 
   display()
 
}
getWeather("cairo")
  function  display(){
    let startDate = new Date(arrOfCurrent.last_updated);
    let startDate2 = new Date(arrOfForecast.forecastday[1].date);
    let startDate3 = new Date(arrOfForecast.forecastday[2].date);
    let startDateMaxTemp = new Number(arrOfForecast.forecastday[1].day.maxtemp_c);
    let startDateMimTemp = new Number(arrOfForecast.forecastday[1].day.mintemp_c);   
    let startDateMaxTemp2 = new Number(arrOfForecast.forecastday[2].day.maxtemp_c);
    let startDateMimTemp2 = new Number(arrOfForecast.forecastday[2].day.mintemp_c);
    let dayName = startDate.toLocaleDateString('en-EG', { weekday: 'long' });
    let dayName2 = startDate2.toLocaleDateString('en-EG', { weekday: 'long' });
    let dayName3 = startDate3.toLocaleDateString('en-EG', { weekday: 'long' });
    let month = startDate.toLocaleDateString('en-EG', { month: 'long' });
    
 
       let  box=` 
<div class="col-lg-4 col-sm-12 " >
    <div class="head text-center d-flex justify-content-between p-2 ">
        <p class="mx-1 my-2"> ${dayName}</p>
        <p class=" mx-1 my-2">${startDate.getDate()+month}</p>
    </div>
    <div class="body  p-2">
    <p class="pt-2 mRem">${arrOfLocation.name}</p>
    <div class="temp d-flex justify-content-around align-items-center mt-5">
    <p class="fs-temp mb-2">${arrOfCurrent.temp_c}<sup class="fw-bolder">o</sup>C</p>
    <img src="https://${arrOfCurrent.condition.icon}"  class="w-25"/>
    </div>
    <p class=" text-primary">${arrOfCurrent.condition.text}</p>
    <div class="d-flex gap-4  static-color">
    <div  class="d-flex gap-1    ">
    <i class="fa-solid fa-umbrella my-1 static-color"></i>
    
<p>20%</p>
    </div>
    <div  class="d-flex gap-1  ">
    <i class="fa-solid fa-wind my-1"></i>    
<p>18km/h </p>
    </div>
    <div  class="d-flex gap-1">
    <i class="fa-solid fa-compass my-1"></i>    
<p>East</p>
    </div>
   
    </div> 
    </div> 
    </div> 
<div class="col-lg-4 col-sm-12">
    <div class="head1 text-center d-flex justify-content-between  p-2">
        <p class="m-auto my-2">${dayName2}</p>
    </div>
    <div class="body1 ">
    <div class=" d-flex justify-content-center">
    <img src="https://${arrOfForecast.forecastday[1].day.condition.icon}" class="w-25 d-flex "/>
    </div>
    <p class=" text-center fs-3"> ${startDateMaxTemp}<sup>o</sup>C</p>
    <p class="text-center"> ${startDateMimTemp}<sup>o</sup></p>
    <p class=" text-primary text-center">${arrOfForecast.forecastday[1].day.condition.text}</p>
    </div>
</div>
<div class="col-lg-4 col-sm-12">
<div class="head2 text-center d-flex justify-content-between  p-2">
<p class="m-auto my-2">${dayName3}</p>
</div>
<div class="body2">
<div class=" d-flex justify-content-center">
<img src="https://${arrOfForecast.forecastday[2].day.condition.icon}" class="w-25 d-flex "/>
</div>
<p class=" text-center fs-3"> ${startDateMaxTemp2}<sup>o</sup>C</p>
<p class="text-center"> ${startDateMimTemp2}<sup>o</sup></p>
<p class=" text-primary text-center">${arrOfForecast.forecastday[2].day.condition.text}</p>
</div>
</div>
         `
    
     row.innerHTML=box
}
