let text = document.querySelector("h1")
let text_hour = document.querySelector(".text");
let text_platform = document.querySelector(".text-platform");
let text_screen = document.querySelector(".text-screen");
let text_ram = document.querySelector(".text-ram");
let text_proccecor = document.querySelector(".text-proccecor");
let text_location = document.querySelector(".text-location");
let battery_lvl = document.querySelector(".text-battery");
let text_speed = document.querySelector(".text-speed")
let btn = document.querySelector(".btn");
let map = document.getElementById("map")

function btnClose() {
    window.close()
}

btn.addEventListener("click", ()=> {
    
    text.classList.add("open-text")

    setInterval(()=> {
        
        const date = new Date()
        let hours = date.getHours()
        let minutes =  date.getMinutes()
        let seconds = date.getSeconds()
        
        text_hour.innerHTML = "Soatingiz: " + hours + ":" + minutes + ":" + seconds
        
    }, 1000);
    
    let prosesorPatok = navigator.hardwareConcurrency;
    
    text_platform.innerHTML = `Operatsion tizimingiz: ${window.navigator.userAgentData.platform}`
    text_screen.innerHTML = "Ekraningiz Hajimi: " + window.screen.width + " x " + window.screen.height
    text_ram.innerHTML = `Xotirangiz: ${window.navigator.deviceMemory} GB`
    text_proccecor.innerHTML = `Mantiqiy prosesorlaringiz: ${prosesorPatok}`
    
    console.log(`Operatsion Tizimingiz  ${window.navigator.userAgentData.platform}`);
    console.log("Ekraningiz Hajimi " + window.screen.width + " x " + window.screen.height);
    console.log(`${window.navigator.deviceMemory} GB Xotirangiz`);
    console.log(`${prosesorPatok} Prosesoringizni patoki`);
    
    navigator.getBattery().then(function(battery) {
        const level = battery.level
        const status = level * 100 + "%"
        battery_lvl.innerHTML = `Batareykangizni quvvati: ${status}`
        console.log(`Batareya quvvati ${status}`);
    })
    
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position)=> {
            let lat = position.coords.latitude
            let lon = position.coords.longitude
            
            text_location.innerHTML = `Qayerda turushingiz: ${lat} ${lon}`
            console.log(`${lat} ${lon} Qayerda turushingiz`);
        });
    };

    navigator.geolocation.getCurrentPosition(position => {
        const {latitude, longitude} = position.coords;

        map.innerHTML = '<iframe src="https://maps.google.com/maps?q='+latitude+', '+longitude+'&amp;z=15&amp;output=embed"></iframe>'
    })

    navigator.geolocation.watchPosition((data)=> {
        text_speed.innerHTML = `${data.coords.speed} km/h [ Tezligingiz ]`
    })
});