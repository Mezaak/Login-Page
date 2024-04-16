
const loginbtn = document.querySelector("#loginbtn");
const username = document.querySelector("#username");
const password = document.querySelector("#password");

loginbtn.addEventListener("click", function () {
  if (username.value == "admin" && password.value == "password") {
    window.location.href = 'welcome.html';
    console.log(`Başarıyla giriş yaptın ${username.value}`);
  } else {
    alert("Hatalı veya eksik bilgiler girdiniz !");
  }
});
