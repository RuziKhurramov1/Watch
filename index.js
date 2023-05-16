function timeShover(){
    let timeNow = new Date();


document.querySelector(".hours").textContent = timeNow.getHours();
document.querySelector(".minutes").textContent = timeNow.getMinutes();
document.querySelector(".seconds").textContent = timeNow.getSeconds();

}
timeShover();
setInterval(function(){
  timeShover();
}, 1000);

const car = {
  name: 'bmw',
  color: 'red'
}
const objtoJSON = JSON.stringify(car)
const jsontoOBJ = JSON.parse(objtoJSON)
console.log(objtoJSON);
console.log(jsontoOBJ);


















