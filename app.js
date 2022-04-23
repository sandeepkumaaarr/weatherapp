const weatherapi = {
    apikey : "7e47e0530dedb0667d8bf2f652985832",
    api: "https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}"
}
// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
const inputcityform = document.getElementById("inputcityform");
console.log(inputcityform);
inputcityform.addEventListener("submit",function(event){
    event.preventDefault();
    var inputcity = document.getElementById("inputcity").value;

    console.log(inputcity);
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputcity}&appid=${weatherapi.apikey}`)
    .then((Response)=>{
        console.log(Response);
        if(!Response.ok){
            throw new Error("Please enter valid city name !!!")
        }
        return Response.json();
        })
    .then(data=>{
        console.log(data);
        const body =  document.body;
        const cityname = document.getElementById("cityname");
        cityname.innerHTML = `${data.name} , ${data.sys.country}`;
        const datee = document.getElementById("datee");
        // console.log(datee);
        const today = new Date();
        const aajdate = today.getDate();
        const maheena = today.getMonth();
        const arraymaheena = ["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"];
        const aajmaheena = arraymaheena[maheena - 1];
        const saal = today.getFullYear();

        console.log(aajdate);
        console.log(aajmaheena);
        console.log(saal);
        const taareekh = `${aajdate}/${aajmaheena}/${saal}`;
        datee.textContent = taareekh;

        const temp = document.getElementById("temp");
        const celtemp = data.main.temp - 273.15;
        const newtemp = Math.round(celtemp*10)/10;
        const newnewtemp = `${newtemp}&deg;C`
        temp.innerHTML = newnewtemp;

        const minmax = document.getElementById("minmax");
        const mintemp = Math.round((data.main.temp_min - 273.15)*10)/10;
        const maxtemp = Math.round((data.main.temp_max - 273.15)*10)/10;
        minmax.innerHTML = `${mintemp}&deg;C/${maxtemp}&deg;C`;

        const icons = document.getElementById("icons");

        const condi = document.getElementById("condi");
        condi.innerHTML = data.weather[0].main;
        console.log(data.weather[0].main);
        if(data.weather[0].main == "Haze"){
            icons.childNodes[1].setAttribute("src","http://openweathermap.org/img/wn/50d@2x.png");
            body.style.backgroundImage = "URL('./icons/Haze.jpg')";
            


        }
        else if(data.weather[0].main == "Smoke"){
            const icons = document.getElementById("icons");
            icons.childNodes[1].setAttribute("src","http://openweathermap.org/img/wn/50d@2x.png");
            body.style.backgroundImage = "URL('./icons/smoke.jpg')";
          

        }
        else if(data.weather[0].main == "Clear"){
            icons.childNodes[1].setAttribute("src","http://openweathermap.org/img/wn/01d@2x.png");
            body.style.backgroundImage = "URL('./icons/cloud.jpg')";

        }
        else if(data.weather[0].main == "Clouds"){
            icons.childNodes[1].setAttribute("src","http://openweathermap.org/img/wn/03d@2x.png");
            body.style.backgroundImage = "URL('./icons/clouuds.jpg')";
           
            

        }
        else if(data.weather[0].main == "Dust"){
            icons.childNodes[1].setAttribute("src","http://openweathermap.org/img/wn/50d@2x.png");
            body.style.backgroundImage = "URL('./icons/Dust.jpg')";


        }
        else if(data.weather[0].main == "Mist"){
            icons.childNodes[1].setAttribute("src","http://openweathermap.org/img/wn/50d@2x.png");
            body.style.backgroundImage = "URL('./icons/Mist.jpg')";
            

        }


        const description = document.getElementById("description");
        description.innerHTML = data.weather[0].description;


        

    })
    .catch((error)=>{
        alert(`${error}`);
    });
});
// console.log(" start");
// let city = "ahmedabad";

    
