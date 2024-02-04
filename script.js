function checkLogin() {
    var userId = document.getElementById('userId').value;
    var password = document.getElementById('password').value;
    var errorMessage = document.getElementById('errorMessage');

   
    if (password === 'manoj' & userId==='manojsingh') {
       
        window.location.href = 'home.html';
    } else {
        errorMessage.innerHTML = 'Invalid password. Please try again.';
    }
}
