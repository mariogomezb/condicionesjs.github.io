const imagen = document.querySelector("#imagen");
const sticker1 = document.querySelector("#sticker1");
const sticker2 = document.querySelector("#sticker2");
const sticker3 = document.querySelector("#sticker3");
const boton = document.querySelector("#boton")
const parrafo = document.querySelector("#parrafo");
const digito1 =document.querySelector("#digito1");
const digito2 =document.querySelector("#digito2");
const digito3 =document.querySelector("#digito3");
const parrafo2 = document.querySelector("#parrafo2")
boton2 = document.querySelector("#boton2");


imagen.addEventListener("click",()=>{
    imagen.classList.toggle("borde");
});

boton.addEventListener("click",()=>{
    const resultado= parseInt(sticker1.value)+parseInt(sticker2.value)+parseInt(sticker3.value);

    if(resultado <=10){
        parrafo.textContent=`LLevas: ${resultado} stickers`;
        parrafo.style.color="green";
        parrafo.style.fontSize="30px"
        return
    }

    if(resultado>=11){
        parrafo.textContent="Llevas demasiados stickers";
        parrafo.style.color="red";
        parrafo.style.fontSize="30px";
    }
})

boton2.addEventListener("click",()=>{
    const password = (digito1.value+digito2.value+digito3.value);

    if(password == "911"){
        parrafo2.textContent="password 1 correcta";
        parrafo2.style.color="green";
        parrafo2.style.fontSize="20px";
        return;
    }

    if(password == "714"){
        parrafo2.textContent="password 2 correcta";
        parrafo2.style.color="green";
        parrafo2.style.fontSize="20px";
        return;
    }

    if(password !== "714" || password!== "911"){
        parrafo2.textContent="password incorrecta";
        parrafo2.style.color="red";
        parrafo2.style.fontSize="20px";
        return;
    }
})




