alert("To show a popup, when clicking any button");

let toastBox = document.getElementById('toastBox');
let sucessmsg = ' <i class="fa-solid fa-circle-check"></i> Sucessfully submited';
let errormsg = '<i class="fa-solid fa-circle-xmark"></i> Please fix the error!';
let invalidmsg = '<i class="fa-solid fa-circle-exclamation"></i>  Invalid input,check again';


function showToast(msg){
    let toast = document.createElement('div');
    toast.classList.add('toast');
    toast.innerHTML = msg;
    toastBox.appendChild(toast);

    if(msg.includes('error')){
        toast.classList.add('error');
    }

    if(msg.includes('Invlaid')){
        toast.classList.add('invlaid');
      
    }

    setTimeout(() => {
        toast.remove();
    }, 5000);
}