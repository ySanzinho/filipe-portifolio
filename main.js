//Obtendo o elemento pelo ID
const checkboxTheme = document.getElementById('themeCheck')
const body = document.querySelector('body')
const nav = document.querySelector('nav')
const navBrand = document.getElementById('navbar-brand')
const offcanvas = document.getElementById('offcanvasNavbar')
const socialIcons = document.querySelectorAll('.iconSocial')

//Adicionando um evento de click ao checkbox
checkboxTheme.addEventListener('click', function() {
    if(checkboxTheme.checked) {
        //Remove a classe 
        nav.classList.remove('navbar-light')

        // Adiciona a clase DARK
        nav.classList.add('navbar-dark', 'bg-dark')
        offcanvas.classList.add('text-bg-dark')

        // Coloca o corpo preto
        body.style.backgroundColor = '#212121'
        body.style.color = '#fff'

        //Muda icons social
        socialIcons.forEach(socialIcons => {
            socialIcons.style.color = 'white'
        })

        //Transição
        body.style.transition = 'background-color 0.3s ease-in-out'
        console.log('Mudado para o tema: Escuro')
    } else {
        //Adiconar classes
        nav.classList.add('navbar-light')

        //Remover classes
        nav.classList.remove('navbar-dark', 'bg-dark')
        offcanvas.classList.remove('text-bg-dark')


        // Coloca o corpo branco
        body.style.backgroundColor = '#fff'
        body.style.color = '#000'

        //Muda icons social
        socialIcons.forEach(socialIcons => {
            socialIcons.style.color = '#444f5a'
        })
    
        //Transição
        body.style.transition = 'background-color 0.3s ease-in-out'
        console.log('Mudado para o tema: Claro');
    }
})