inputbox = document.getElementById("inputbox").value;
regexp = /[A-Za-z]+@[a-z]+.[a-z]+/gi;
function check() {
  if (inputbox === "" || regexp.test(inputbox)) {
    document.getElementById("errormsg").classList.remove("hidden");
  } else {
    console.log("no");
  }
}
