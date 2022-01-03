
const load = document.getElementById('load');
const msg= document.getElementById('msg');
msg.style.display='none';
  setTimeout(hideElement, 10000) ;//milliseconds until timeout//
  function hideElement() {
    load.style.display = 'none';
    msg.style.display='inline'

  }
