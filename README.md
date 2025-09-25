<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Portfolio</title>
    <link rel="stylesheet" href="styles.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">
    <script src="script.js" defer></script>
</head>
<body>
    <nav id="navbar" class="transparent">
        <!--<img src="logo.png" alt="Logo" id="logo"> for when I make a logo -->
        <div id="logo">
            <h2>LW</h2>
        </div>

        <a href="#IntroSection">Home</a>
        <a href="#PortfolioSection">Portfolio</a>
        <a href="#ContactSection">Contact Me</a>
    </nav>
    <header>
        <section id="IntroSection">
            <div class="intro-text-container">
                <h1 id="title">
                    <span class="phrase">Hi,</span>
                    <span class="phrase">I'm Lorenzo Weed,</span>
                    <span class="phrase">a Fullstack Web Engineer</span>
                </h1>

                <a class="btn phrase" href="#PortfolioSection">Portfolio</a>
            </div>

            <img src="profile-icon.png" alt="Profile Picture" id="profilePic" onerror="this.src='placeholder.png';">
        </section>
    </header>
    <main>
        <section id="PortfolioSection">
            <h2 class="underline">Portfolio</h2>
            <p>Welcome to my portfolio section. Here you will find my school projects</p>

            <div id="portfolioGrid">
                <article class="project">
                    <img src="project1.jpg" alt="Project 1" onerror="this.src='placeholder.png';">

                    <h3>Project Title 1</h3>
                    <p>Description of Project 1.</p>
                </article>

                <article class="project">
                    <img src="project1.jpg" alt="Project 2" onerror="this.src='placeholder.png';">

                    <h3>Project Title 2</h3>
                    <p>Description of Project 2.</p>
                </article>

                <article class="project">
                    <img src="project1.jpg" alt="Project 3" onerror="this.src='placeholder.png';">

                    <h3>Project Title 3</h3>
                    <p>Description of Project 3.</p>
                </article>

                <article class="project">
                    <img src="project1.jpg" alt="Project 4" onerror="this.src='placeholder.png';">

                    <h3>Project Title 4</h3>
                    <p>Description of Project 3.</p>
                </article>

                <article class="project">
                    <img src="project1.jpg" alt="Project 5" onerror="this.src='placeholder.png';">

                    <h3>Project Title 5</h3>
                    <p>Description of Project 3.</p>
                </article>
            </div>
        </section>

        <!-- Contact Section -->
        <section id="ContactSection">
            <h2 class="underline">Contact Me</h2>
            <!-- Web3Forms for the win lol-->
            <form id="contactForm" action="https://api.web3forms.com/submit" method="POST">
                <input type="hidden" name="access_key" value="ce4d3f49-5748-439b-a6e8-263f71a2d012">
                <input type="hidden" name="subject" value="New Submission from Web3Forms">
                <input type="checkbox" name="botcheck" id="" style="display: none;">

                <label for="name">Name:</label>
                <input type="text" id="name" name="name" autocomplete="name" required>

                <label for="email">Email:</label>
                <input type="email" id="email" name="email" autocomplete="email" required>

                <label for="message">Message:</label>
                <textarea id="message" name="message" required></textarea>

                <button class="btn" type="submit">Send</button>

                <div id="result"></div>
            </form>
        </section>
    </main>
    <footer>
        <p>&copy; 2025 Lorenzo Weed, All Rights Reserved</p>
    </footer>
</body>
</html>
