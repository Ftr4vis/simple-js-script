function noselect() {
  return false;
}

function funcBlock() {
  document.ondragstart = noselect;
  document.onselectstart = noselect;
  document.oncontextmenu = noselect;
  window.addEventListener("keydown", function(e) {
    if ((e.keyCode == 83 &&  e.ctrlKey) || e.keyCode == 123 || e.keyCode == 44) {
      e.preventDefault(); 
    }
  }, false);
  return;
}

let hashPassword = 240111417;
let inputPassword = prompt("Введите пароль для отключения блокирующего скрипта");
let hashInput = 0;
if (inputPassword != null) {
  for (i = 0; i < inputPassword.length; i++) {
    hashInput += inputPassword.charCodeAt(i) * Math.pow(129, i);
  }
}

if (hashInput != hashPassword) {
  funcBlock();
}
