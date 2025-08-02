

const lastModified = document.getElementById("lastModified");


const currentYear = new Date().getFullYear();


const modifiedDate = new Date(document.lastModified);
const formattedDate = modifiedDate.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric"
});


lastModified.innerHTML = `© currentYear • Last Modification:{formattedDate}`;


const temperature = 10; 
const windSpeed = 5; 


function calculateWindChill(temp, speed) {
  return 13.12 + 0.6215 * temp - 11.37 * Math.pow(speed, 0.16) + 0.3965 * temp * Math.pow(speed, 0.16);
}


const windChillElement = document.getElementById("windChill");

if (temperature <= 10 && windSpeed > 4.8) {
    const chill = calculateWindChill(temperature, windSpeed).toFixed(1);
    windChillElement.innerHTML = `<strong>Wind Chill:</strong> ${chill} °C`;
} else {
    windChillElement.innerHTML = `<strong>Wind Chill:</strong> N/A`;
}


