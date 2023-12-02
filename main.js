//Obtendo o elemento pelo ID
const checkboxTheme = document.getElementById('themeCheck')
const body = document.querySelector('body')
const nav = document.querySelector('nav')
const navBrand = document.getElementById('navbar-brand')
const offcanvas = document.getElementById('offcanvasNavbar')

//Adicionando um evento de click ao checkbox
checkboxTheme.addEventListener('click', function() {
    if(checkboxTheme.checked) {
        //Remove a classe 
        nav.classList.remove('bg-body-tertiary')

        // Adiciona a clase DARK
        nav.classList.add('navbar-dark', 'bg-dark')
        offcanvas.classList.add('text-bg-dark')

        // Coloca o corpo preto
        body.style.backgroundColor = '#212121'
        body.color = '#fff'

        //Transição
        body.style.transition = 'background-color 0.3s ease-in-out'
        console.log('Mudado para o tema: Escuro')
    } else {
        //Adiconar classes
        nav.classList.add('bg-body-tertiary')

        //Remover classes
        nav.classList.remove('navbar-dark', 'bg-dark')
        offcanvas.classList.remove('text-bg-dark')


        // Coloca o corpo branco
        body.style.backgroundColor = '#fff'
    
        //Transição
        body.style.transition = 'background-color 0.3s ease-in-out'
        console.log('Mudado para o tema: Claro');
    }
})