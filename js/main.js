let toggleNavStatus = false;

let toggleNav = function() {
    let getSidebar = document.querySelector(".nav-sidebar");
    let getSidebarUL = document.querySelector(".nav-sidebar ul");
    let getSidebarTitle = document.querySelector(".nav-sidebar span");
    let getSidebarLinks = document.querySelectorAll(".nav-sidebar a");


    if (toggleNavStatus === false) {
        getSidebarUL.style.visibility = "visible";
        getSidebar.style.width = "272px";
        getSidebarTitle.style.opacity = "0.5";

        let arrayLength = getSidebarLinks.length;
        for (let i = 0; i < arrayLength; i++) {
            getSidebarLinks[i].style.opacity = "1";
        }
        
        toggleNavStatus = true;
    }

    else if (toggleNavStatus === true) {
        getSidebar.style.width = "50px";
        getSidebarTitle.style.opacity = "0";

        let arrayLength = getSidebarLinks.length;
        for (let i = 0; i < arrayLength; i++) {
            getSidebarLinks[i].style.opacity = "0";
        }
        
        getSidebarUL.style.visibility = "hidden";


        toggleNavStatus = false;
    }
}

document.getElementById('registration'),addEventListener('submit', function(event) {
    event.preventDefault();

    let errors = {};

    let form = event.target;

    let username = form.querySelector('[name="username"]').value;

    if (username.length < 5) {
        errors.username = 'Min 5 letters';
    }

    let password = form.querySelector('[name="password"]').value;
    let password2 = form.querySelector('[name="password2"]').value;

    if (password.length < 6) {
        errors.password = 'Invalid Password';
    }

    if (password != password2) {
        errors.password = 'Passwords do not match';
    }

    let agree = form.querySelector('[name="agree"]').checked;

    if (!agree) {
        errors.agree = 'You must agree terms and conditions';
    }


    form.querySelectorAll('.error_text').forEach(item => {
        item.textContent = '';
    });

    for (let name in errors) {
        let errorPlaceholer = document.getElementById('error_' + name);

        if (errorPlaceholer) {
            errorPlaceholer.textContent = errors[name];
        }
    }

    if (Object.keys(errors).length === 0) {
        form.submit();
    }

    console.log(errors)
})

