function checkLogin()
{
    var email = document.getElementById("email").value;
    var pass = document.getElementById("pass").value;

    if(email == "admin@gmail.com" && pass== "Admin@123")
    {
        Swal.fire
        ({
            title: "Welcome!!",
            text: "You are logged in successfully!",
            icon: "success"
        });
        window.location = "dashboard.html";
    }
    else
    {
        Swal.fire
        ({
            title: "Oops!!",
            text: "Email or Password are incorrect!",
            icon: "error"
        });
    }
}

function logout()
{
    Swal.fire
    ({
        title: "Success!",
        text: "You are Logged out successfully",
        icon: "success"
      }); 
      window.location='index.html';
}
