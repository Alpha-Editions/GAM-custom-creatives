const animateCSS = document.createElement('link');
animateCSS.rel = 'stylesheet';
animateCSS.href = 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css';

const animateExpand = document.createElement('style');
animateExpand.innerText = '@-webkit-keyframes expand{from{transform:scale(1)}to{transform:scale(' + Math.ceil(Math.hypot(window.innerWidth, window.innerHeight)) + ')}}@keyframes expand{from{transform:scale(1)}to{transform:scale(' + Math.ceil(Math.hypot(window.innerWidth, window.innerHeight)) + ')}}.animate__expand{-webkit-animation-name:expand;animation-name:expand}';

const customCSS = document.createElement('style');
customCSS.innerText = '.animate__animated{opacity:0;}';

const overlay = document.createElement('div');
overlay.style.display = 'flex';
overlay.style.justifyContent = 'center';
overlay.style.alignItems = 'center';
overlay.style.position = 'fixed';
overlay.style.top = '0';
overlay.style.left = '0';
overlay.style.width = window.parent.innerWidth + 'px';
overlay.style.height = window.parent.innerHeight + 'px';
overlay.style.zIndex = '99999';
overlay.id = 'overlay';

const prestitial = document.createElement('div');
prestitial.classList.add('animate__animated');
prestitial.style.backgroundColor = '#000000';
prestitial.style.width = '1px';
prestitial.style.height = '1px';
prestitial.style.borderRadius = '50%';

const closeButton = document.createElement('button');
closeButton.style.width = '40px';
closeButton.style.height = '40px';
closeButton.style.border = '2px solid #000000';
closeButton.style.borderRadius = '50%';
closeButton.style.background = "transparent url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23000'%3e%3cpath d='M.293.293a1 1 0 0 1 1.414 0L8 6.586 14.293.293a1 1 0 1 1 1.414 1.414L9.414 8l6.293 6.293a1 1 0 0 1-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 0 1-1.414-1.414L6.586 8 .293 1.707a1 1 0 0 1 0-1.414z'/%3e%3c/svg%3e\") center/1em auto no-repeat";
closeButton.style.position = 'absolute';
closeButton.style.top = '1rem';
closeButton.style.right = '1rem';
closeButton.onclick = function() {overlay.remove()};

const head = document.querySelector('head');
head.appendChild(animateCSS);
head.appendChild(animateExpand);
head.appendChild(customCSS);
overlay.appendChild(prestitial);
window.document.body.appendChild(overlay);

prestitial.classList.add('animate__expand');

setTimeout(function() {overlay.remove()}, 15000);