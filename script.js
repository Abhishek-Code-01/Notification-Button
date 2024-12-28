alert("To show a popup, when clicking any button");

let toastBox = document.getElementById('toastBox');
let sucessmsg = ' <i class="fa-solid fa-circle-check"></i> Sucessfully submited';
let errormsg = '<i class="fa-solid fa-circle-xmark"></i> Please fix the error!';
let Invalidmsg = '<i class="fa-solid fa-circle-exclamation"></i>  Invalid input,check again';


function showToast(msg){
    let toast = document.createElement('div');
    toast.classList.add('toast');
    toast.innerHTML = msg;
    toastBox.appendChild(toast);

    if(msg.includes('error')){
        toast.classList.add('error');
    }

    if(msg.includes('Invalid')){
        toast.classList.add('Invalid');
      
    }

    setTimeout(() => {
        toast.remove();
    }, 5000);
}