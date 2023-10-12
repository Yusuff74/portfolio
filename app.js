// const controls = document.querySelectorAll('.control')
// const sections = document.querySelectorAll('.section')

// for (let i = 0; i < controls.length; i++) {
//   controls[i].addEventListener('click', function() {
//     const targetId = this.getAttribute('data-id')
//     const targetSection = document.getElementById(targetId)
//     for (let j = 0; j < sections.length; j++) {
//       sections[j].classList.remove('active')
//     }
//     targetSection.classList.add('active')
//     for (let j = 0; j < controls.length; j++) {
//       controls[j].classList.remove('active-btn')
//     }
//     this.classList.add('active-btn')
//   })
// }


const controls = document.querySelectorAll('.control')
const sections = document.querySelectorAll('.section')
console.log(controls,sections)


for (control of controls){
  control.addEventListener('click', function(){
    const targetId = this.getAttribute('data-id')
    const targetSection = document.getElementById(targetId)
    console.log(targetId, targetSection)

    for (section of sections){
      section.classList.remove('active')
    }
    targetSection.classList.add('active')
    for (control of controls){
      control.classList.remove('active-btn')
    }
    this.classList.add('active-btn')
  })
}