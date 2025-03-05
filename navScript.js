fetch('nav.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('navbar-container').innerHTML = data;
        setupActiveLink(); // Navbar load hone ke baad active link apply karo
    });

function setupActiveLink() {
    let navItems = document.querySelectorAll(".list li a, .dropdown-content a"); // Navbar aur dropdown ke sare links
    let currentPage = window.location.pathname; // Jo page open hai uska path

    // ✅ Pehle se stored active link check karo
    let activeLink = localStorage.getItem("activeNav");

    if (activeLink) {
        document.querySelectorAll(".list li, .dropdown").forEach(item => {
            let anchor = item.querySelector("a");
            if (anchor && anchor.getAttribute("href") === activeLink) {
                item.classList.add("active");

                // ✅ Agar ye dropdown ka item hai to parent dropdown ko bhi active karo
                let dropdownParent = item.closest(".dropdown");
                if (dropdownParent) {
                    dropdownParent.classList.add("active");
                }
            }
        });
    }

    // ✅ Current Page ke hisaab se active class lagao
    navItems.forEach(link => {
        if (link.getAttribute("href") === currentPage) {
            link.parentElement.classList.add("active");

            // ✅ Agar ye dropdown ke andar hai to uske parent "dropdown" ko bhi active karo
            let dropdownMain = link.closest(".dropdown");
            if (dropdownMain) {
                dropdownMain.classList.add("active");
            }
        }
    });

    // ✅ Click event listener add karo
    navItems.forEach(item => {
        item.addEventListener("click", function () {
            document.querySelectorAll(".list li, .dropdown, .dropdown-content a").forEach(nav => nav.classList.remove("active"));

            this.parentElement.classList.add("active");

            // ✅ Agar dropdown ke andar hai to parent dropdown ko bhi active karo
            let dropdownParent = this.closest(".dropdown");
            if (dropdownParent) {
                dropdownParent.classList.add("active");
            }

            // ✅ LocalStorage me save karo taaki refresh ke baad bhi active class rahe
            localStorage.setItem("activeNav", this.getAttribute("href"));
        });
    });
}

