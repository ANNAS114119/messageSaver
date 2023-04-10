const inpu = document.getElementById('input')
const add = document.getElementById('btn')
const saver = document.querySelector('.content')
const feedback = document.querySelector('.feedback')
const del = document.querySelector('.del')

add.addEventListener('click' ,(e)=>{
    e.preventDefault()
    console.log(inpu.value)

    // saver.textContent = inpu.value

    if(inpu.value === ''){
        feedback.classList.add('show')
        setTimeout(()=>{
            feedback.classList.remove('show')
        },2000)
        // saver.innerHTML = ''
    }
    
    else{
        saver.textContent = inpu.value
        inpu.value = ""
    }
})

del.onclick = () =>{
    saver.innerHTML = ''
}
