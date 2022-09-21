const toggleMenuNavigation = (displayState) =>{
    let nav = document.getElementsByClassName('nav__list')[0];
    let closeBtn = document.getElementsByClassName('close-icon')[0];
    if(displayState === 'block'){
        nav.classList.add('nav__list--active');
        closeBtn.classList.add('nav__list--active');
        document.getElementsByTagName('body')[0].style.overflowY = 'hidden';
    }else{
        nav.classList.remove('nav__list--active');
        closeBtn.classList.remove('nav__list--active');
        document.getElementsByTagName('body')[0].style.overflowY = 'scroll';
    }
}