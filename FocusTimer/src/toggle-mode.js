let darkMode = true
const buttonToggle = document.getElementById('toggle-mode')

buttonToggle.addEventListener('click', function(event) {
    document.documentElement.classList.toggle('light')

    /* abaixo serve pra acessibilidade! */
    
    const mode = darkMode ? 'light' : 'dark'
    event.currentTarget
        .querySelector('span').textContent = `${mode} mode ativado!`
    
    darkMode = !darkMode
})