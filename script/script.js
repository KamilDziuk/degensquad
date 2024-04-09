  //  nav bar start
  let btnOpen = document.querySelector('#btnOpen');
  let btnClose = document.querySelector('#btnClose');
  let media = window.matchMedia('(width < 50em)');
  let topNavMenu = document.querySelector('.manuBar__menu');
  let main = document.querySelector('main');
  let body = document.querySelector('body');
  
  function openMobileMenu() {
    btnOpen.setAttribute('aria-expanded', 'true');
    topNavMenu.removeAttribute('inert');
    topNavMenu.removeAttribute('style');
    main.setAttribute('inert', '');
    bodyScrollLockUpgrade.disableBodyScroll(body);
    btnClose.focus();
  }
  
  function closeMobileMenu() {
    btnOpen.setAttribute('aria-expanded', 'false');
    topNavMenu.setAttribute('inert', '');
    main.removeAttribute('inert');
    bodyScrollLockUpgrade.enableBodyScroll(body);
    btnOpen.focus();
  
    setTimeout(() => {
      topNavMenu.style.transition = 'none';
    }, 500);
  }
  
  function setupTopNav(e) {
    if (e.matches) {
      // is mobile
      console.log('is mobile');
      topNavMenu.setAttribute('inert', '');
      topNavMenu.style.transition = 'none';
    } else {
      // is tablet/desktop
      console.log('is desktop');
      closeMobileMenu();
      topNavMenu.removeAttribute('inert');
    }
  }
  
  setupTopNav(media);
  
  btnOpen.addEventListener('click', openMobileMenu);
  btnClose.addEventListener('click', closeMobileMenu);
  
  media.addEventListener('change', function (e) {
    setupTopNav(e);
  });
   //  nav bar end 