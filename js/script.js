function navbar () {
    const nav = document.querySelector(".navigation-fixed-header-content")
    const displayMain = document.getElementById("main") 
    const displayFigureMain = document.getElementById("item1-img")
    const displayLogo = document.querySelector(".logo-fixed")
    
    if (nav.style.display == '' || nav.style.display == 'none') {
        nav.style.display = 'block'
        displayMain.style.display = 'none'
        displayFigureMain.style.display = 'none'
        displayLogo.style.display = 'block'
    } else {
        nav.style.display = 'none'
        displayMain.style.display = 'block'
        displayFigureMain.style.display = 'block'
        displayLogo.style.display = 'none'
    }
}

