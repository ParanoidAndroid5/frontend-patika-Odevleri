let userForm = document.querySelector("#userForm")
userForm.addEventListener('submit',formSubmit)

let alertDom = document.querySelector("#alert")
const alertFunction = (title, message, className="warning") => `
<div class="alert alert-${className} alert-dismissible fade show" role="alert">
  <strong>${title}</strong> ${message}
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
`


function formSubmit(event)
{  
    event.preventDefault();
    const userName = document.querySelector("#username")
    const score = document.querySelector("#score")
    //console.log(userName.value, score.value)
    if(userName.value  && score.value )
    {
        addItemUI(userName.value, score.value);
        userName.value = ""
        score.value =  ""
    }
    else
    {
        console.log("Hata")
        alertDom.innerHTML = alertFunction(
            "Baslik Bilgisi",
            "Eksik Bilgi Girdiniz",
            "success"
        )
    }
   
}
/* 
  <li class="list-group-item d-flex justify-content-between align-items-center">
    A list item
    <span class="badge badge-primary badge-pill">14</span>
  </li> 
> */
let userListDom = document.querySelector("#userList")
function addItemUI(userName,score)
{
    let liDom = document.createElement('li')
    liDom.innerHTML = `${userName} <span class="badge bg-primary rounded-pill">${score}</span>`
    liDom.classList.add('list-group-item', 'd-flex', 'justify-content-between','align-items-center')
    userListDom.appendChild(liDom)
}