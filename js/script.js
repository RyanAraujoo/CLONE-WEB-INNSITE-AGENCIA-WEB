function navbar () {
    const nav = document.querySelector(".navigation-navbar-fixed.header-content ul")
    const displayMain = document.getElementById("main") 
    
    if (nav.style.display == '' || nav.style.display == 'none') {
        nav.style.display = 'block'
        displayMain.style.display = 'none'
    } else {
        nav.style.display = 'none'
        displayMain.style.display = 'block'
    }
}

