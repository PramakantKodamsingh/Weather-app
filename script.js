let text= document.getElementById("text");
let head=document.getElementsByTagName("h1")
let temp=document.getElementById("img");
let other=document.getElementsByTagName("h5");
let city;

const options = {
	method: 'GET',
	headers: {
		'X-ApI-Key': 'z1BCPy0NVv7mcwjIAP8uag==snB3WebLj4fxHouX'	
	}
};
const getfacts=async (city)=>{  

	const response = await fetch(`https://api.api-ninjas.com/v1/weather?city=${city}`, options);
	const result = await response.json();
	console.log(result);
	head[0].innerHTML=result.temp+"°C";
	temp.lastElementChild.innerHTML=city;
	other[0].innerHTML=result.humidity +"%";
	other[1].innerHTML=result.wind_speed +"km/hr";
} 
let btn=document.getElementById("btn")
btn.addEventListener('click',function(e){
	let city=text.value;
	 console.log(city);
	 getfacts(city)
	 
})

