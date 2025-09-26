document.addEventListener("DOMContentLoaded", function() {
    // Navbar scroll effect
    window.addEventListener("scroll", function() {
        const navbar = document.getElementById("navbar");
        if (window.scrollY > 50) {
            navbar.classList.remove("transparent");
            navbar.classList.add("solid");
        } else {
            navbar.classList.remove("solid");
            navbar.classList.add("transparent");
        }
    });
    
    const phrases = document.querySelectorAll(".phrase");
    const delays = [1000, 1500, 2000]; // adjust for natural pauses (ms)

    const wait = ms => new Promise(res => setTimeout(res, ms));

    async function reveal() {
      for (let i = 0; i < phrases.length; i++) {
        await wait(50); // small stagger before fade-in
        phrases[i].classList.add("visible");
        await wait(delays[i]);
      }
    }

    reveal();

    const form = document.getElementById('contactForm');
    const result = document.getElementById('result');

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const formData = new FormData(form);
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
        result.innerHTML = "Please wait..."

        fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: json
        })
        .then(async (response) => {
            let json = await response.json();
            if (response.status == 200) {
                result.innerHTML = json.message;
            } else {
                console.log(response);
                result.innerHTML = json.message;
            }
        })
        .catch(error => {
            console.log(error);
            result.innerHTML = "Something went wrong!";
        })
        .then(function() {
            form.reset();
            setTimeout(() => {
                result.style.display = "none";
            }, 3000);
        });
    });
});
