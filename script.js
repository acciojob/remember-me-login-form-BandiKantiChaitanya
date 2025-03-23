//your JS code here. If required.
let username=document.getElementById("username")
let password=document.getElementById("password")
let checkbox=document.getElementById("checkbox")
let btn=document.getElementById("submit")
let existing=document.getElementById('existing')

let userObj={}

btn.addEventListener('click',(e)=>{
	e.preventDefault()
	alert(`Logged in as ${username.value}`)
	// alert('hi')
	if (checkbox.checked) {
		userObj={
			'username':username.value,
			'password':password.value
		}
        localStorage.setItem('userObj',JSON.stringify(userObj))
    } else {
        localStorage.clear()
    }
})

function onload() {
	let credentials = localStorage.getItem("userObj"); 
	if (credentials) {
            existing.style.display = "block"; // Show the button if credentials exist
        } else {
            existing.style.display = "none"; // Keep the button hidden if no credentials
        }
}

window.onload=onload;