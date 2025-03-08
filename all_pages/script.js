let kolok = document.querySelector(".kolok")
let nalog = document.querySelector(".nalog")
let plus = document.querySelector('.plus')
let header = document.querySelector('.header')
let osn = document.querySelector('.osn')
let end = document.querySelector('.end')

plus.addEventListener('click', function(){
    header.style.display = 'none';
    osn.style.display = 'flex'
})

kolok.addEventListener('click', function(){
    nalog.style.visibility = "visible"
})

nalog.addEventListener('click', function(){
    nalog.style.visibility = "hidden"
})

end.addEventListener('click', function(){
    osn.style.display = 'none'
}) 
