document.getElementById("loginbox").onclick = function() {
    let p = document.getElementById("passwordInput").value;
    let u = document.getElementById("usernameInput").value;
    if(u === "cuongducminh" && p === "6767") {
        alert("Đăng nhập thành công");
        window.location.href = "mp2.html";
    } else {
        alert("Đăng nhập thất bại");
    }
};