function getloc(){
if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showpos,showerror);
    }else{
        console.log("not supported");

    }
}
function showpos(position){
    let lat=position.coords.latitude;
    let lon=position.coords.longitude;
    document.getElementById("p1").innerText = "latitude="+lat+"longitude="+lon;
}
function showerror(error){
    console.log(error);
}