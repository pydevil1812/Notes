let kolok = document.querySelector(".kolok")
let nalog = document.querySelector(".nalog")


kolok.addEventListener('click', function(){
    nalog.style.visibility = "visible"
})
nalog.addEventListener('click', function(){
    nalog.style.visibility = "hidden"
})


