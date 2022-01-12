let name = prompt("lütfen isminizi giriniz:")
document.querySelector("#myName").innerHTML = name

function showTime()
{
    let tarih = new Date();
    let saat=tarih.getHours();
    let dakika = tarih.getMinutes();
    let gun=tarih.getDay();
    let gunler = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];
    let suan =gunler[gun]
    
    document.querySelector("#myClock").innerHTML = ` ${suan} ${saat} : ${dakika}`
    // console.log(suan)
   
    
}
showTime();
