//your JS code here. If required.
let username=document.getElementById("username")
let password=document.getElementById("password")
let checkbox=document.getElementById("checkbox")
let btn=document.getElementById("submit")
let existing=document.getElementById('existing')

// let userObj={}

btn.addEventListener('click',(e)=>{
	e.preventDefault()
	alert(`Logged in as ${username.value}`)
	// alert('hi')
	if (checkbox.checked) {
		localStorage.setItem('username', username.value);
        localStorage.setItem('password', password.value);
        // localStorage.setItem('userObj',JSON.stringify(userObj))
    } else {
		localStorage.removeItem('username');
        localStorage.removeItem('password');
        // localStorage.clear()
    }
})

window.onload = function() {
    // let credentials = localStorage.getItem("userObj");
	let username = localStorage.getItem("username");
    if (username) {
        existing.style.display = "block"; // Show the button if credentials exist
    } else {
        existing.style.display = "none"; // Hide the button if no credentials
    }
};