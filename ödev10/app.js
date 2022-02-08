//elementleri secmek icin
let taskDOM = document.querySelector("#task")
let btnDOM  = document.querySelector("#liveToastBtn") 
let ulDOM   = document.querySelector("#list") 
let ullength = document.querySelector("li")



//buton icin eventListener 
//btnDOM.addEventListener("click",itemAdd)

// ekle yapan fonksiyon
function itemAdd(){
    let liDOM = document.createElement('li') // yeni li yarat
    ulDOM.appendChild(liDOM) // bunları ulnin sonuna ekle
    liDOM.innerHTML = taskDOM.value 
    taskDOM.value = ""
  
}
// silme işlemini yapan fonksiyon
function itemDelete(){

}

// yapılan işi işaretleyen fonksiyon 
function itemMarked(){
   
 }

