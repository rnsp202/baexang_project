const sub = document.querySelectorAll('.sub')
const gnb = document.querySelectorAll('.gnb > li')
const sub_bg = document.querySelector('.sub_bg')
const nav = document.querySelector('nav')
console.log(sub)
console.log(sub_bg)
console.log(gnb)
console.log(nav)
for(let i of sub){
    i.style.height = '0';
    i.style.overflow = 'hidden';
    i.style.transition = 'height 0.3s'
}
nav.addEventListener('mouseover',()=>{
    sub_bg.style.height = '180px'
    for(let i of sub){
        i.style.height = '180px'
    }
})
nav.addEventListener('mouseout',()=>{
    sub_bg.style.height = '0'
    for(let i of sub){
        i.style.height = '0'
    }
})