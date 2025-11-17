
function validateForm(){
    const name=document.getElementById('name');
    const email=document.getElementById('email');
    const msg=document.getElementById('msg');
    let valid=true;

    if(name.value.trim()===''){ document.getElementById('errName').innerText='Digite seu nome'; valid=false;}
    else document.getElementById('errName').innerText='';

    const emailReg=/^[^@]+@[^@]+\.[^@]+$/;
    if(!emailReg.test(email.value)){ document.getElementById('errEmail').innerText='Email inválido'; valid=false;}
    else document.getElementById('errEmail').innerText='';

    if(msg.value.trim()===''){ document.getElementById('errMsg').innerText='Mensagem obrigatória'; valid=false;}
    else document.getElementById('errMsg').innerText='';

    return valid;
}

function loadGET(){
    const params=new URLSearchParams(window.location.search);
    let out='';
    params.forEach((v,k)=>{ out+=k+': '+v+'<br>'; });
    document.getElementById('result').innerHTML=out;
}
