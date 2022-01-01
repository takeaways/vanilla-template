import './style.css'


document.querySelectorAll('.story-btn').forEach((btnElement)=>{
  btnElement.addEventListener('click', ()=>{
    btnElement.classList.toggle('change');
    btnElement.nextElementSibling?.classList.toggle('change');
  })
})