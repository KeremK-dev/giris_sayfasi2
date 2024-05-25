let kayit_giris= document.getElementById("kayit_giris")
let inp_alan = document.getElementById("inp_alan")
let giris = document.getElementById("giris")
let kayit = document.getElementById("kayit")

kayit.style.display = "flex"
giris.style.display = "none"

kayit_giris.style.left = "50%"
inp_alan.style.left = "0%"

let kaydir = document.getElementById("kaydir")
kaydir.textContent = "giriş"


let h1 = document.getElementById("h1")
h1.textContent = `Hey hoşgeldin daha önce hesap açtıysan girişe tıkla`

kaydir.onclick=()=>{
    if(kayit_giris.style.left=="50%"){
        kayit_giris.style.left = "0%"
        inp_alan.style.left = "50%"        
        kaydir.textContent = "kayıt ol"
        h1.textContent = `Hey selam eğer bi hesabın yoksa kayıt olmanı öneririm`
        
        giris.style.display = "flex"
        kayit.style.display ="none"
    }else{        
        kayit_giris.style.left = "50%"
        inp_alan.style.left = "0%"        
        kaydir.textContent = "giriş"
        
        giris.style.display = "none"
        kayit.style.display ="flex"
        
        h1.textContent = `Hey hoşgeldin daha önce hesap açtıysan girişe tıkla`
    }
}