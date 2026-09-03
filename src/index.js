/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `npm run dev` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `npm run deploy` to publish your worker
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */

export default {
	async fetch(request, env, ctx) {
		const url = new URL(request.url);

		const jsContent = `
			// about.js

			var welcomeSubtitle = document.getElementById("welcome-sub");
			
			document.addEventListener('DOMContentLoaded', () => {
				fetch("https://core-assets.delteams.net/dictionaries/WelcomeQuotes.json")
					.then(response => response.json())
					.then(data => {
						var chosenData = false
			
						if (!chosenData) {
							var chosenSubtitle = (data[Math.floor(Math.random() * data.length)])
			
							console.log(chosenSubtitle)
							console.log(welcomeSubtitle.textContent)
			
							welcomeSubtitle.textContent = chosenSubtitle
			
							chosenData = true
							return chosenData;
						} else {
							// pass
						}
					})
					.catch(error => console.error("Error loading welcome quotes:", error));
			});
		`;
		if (url.pathname === "/about.js") {
			return new Response(jsContent, {
				headers: { "content-type": "application/javascript;charset=UTF-8" },
			});
		}

		const htmlContent = `
		<!DOCTYPE html>

		<html lang="en">
			<head>
				<title>Delteams - Welcome</title>
				<link rel="stylesheet" href="https://core-assets.delteams.net/stylesheets/style.css" type="text/css">
				<link rel="icon" href="https://core-assets.delteams.net/media/delteams-svg-optimized.svg">
			</head>
			<header>
				<div id="header-left">
					<button id="homepage-btn" class="btn_nil"><img id="edt-logo" src="https://core-assets.delteams.net/media/delteams-svg-optimized.svg" alt="Our logo. Click to access homepage."></button>
				</div>
				<!-- <div id="header-center">
					<nav id="mainNav">
						<button id="homepage" class="btn_nav">Home</button>
						<button id="about" class="btn_nav">About Us</button>
						<button id="services" class="btn_nav">Services</button>
						<button id="companion" class="btn_nav">Companion</button>
						<button id="community" class="btn_nav">Community</button>
						<input type="text" placeholder="Search Delteams" class="txtin_ordinary hidden-full" id="univ_search">
						<button id="search_toggle" class="btn_nav">Search</button>
					</nav>
				</div>
				<div id="header-right">
					<button id="menuButton" class="btn_nav btn_mobileonly">Show Navigator</button>
					<div class="unsigned">
						<button id="goto_login" class="btn_regular">Login</button>
						<button id="goto_register" class="btn_recommended">Register</button>
					</div>
					<div class="signed">
						<button class="btn_bgless"><img id="acc-pfp" src="/public/media/placeholders/profile-pic-placeholder.png" alt="Your profile picture. Click to access your profile."></button>
						<div id="signed_nas">
							<p id="acc-usn" class="txt_serious">Username</p>
							<button id="settings-btn" class="btn_urlstyle"><u>Settings</u></button>
						</div>
					</div>
				</div> -->
			</header>
			<body>
				<div>
					<div id="heading-banner">
						<h1 id="welcome-title">Welcome...</h1>
						<h3 id="welcome-sub"></h3>
		
						<!-- <div id="heading-banner-btns">
							<button id="goto_register" class="btn_recommended">Get Started</button>
							<button id="learnmore_about" class="btn_regular">Learn More</button>
							<button id="goto_homepage" class="btn_regular">Go to Homepage</button>
						</div> -->
					</div>
					<div class="default_block">
						<h1 class="subtitle">Our Story</h1>
						<p>
							Since 2018, we have been supporting others. Whether that had been creativity, like we do now, writing, forensics, and many more.
							<br><br>
							Throughout the years, Delteams has changed. From a small group focused on undercover and ordinary forensics, to a computer and tech association, all the way to a creators' haven.
							<br><br>
							Elliscecie Delteams is the perfect place today for anyone to receive support, fun, information, or assistance; and creators, technicians, tutors, gamers, and more in one place.
						</p>
					</div>
					<div class="default_block">
						<h1 class="subtitle">Where is everything?</h1>
						<p>
							Unfortunately, our website has just opened up. (August 30th, 2026)
							<br><br>
							We are actively working on making our website more accessible, and we are working on adding more content to it.
							<br><br>
							The majority of the core files on our site do not exist yet, and we are working on adding them as soon as possible.
							<br><br>
							We do however, ask you to remain patient with us, as we are working on making our website the best it can be!
						</p>
					</div>
					<div class="default_block" id="motto-box">
						<h1 class="subtitle">
							Build, design, program, create.
						</h1>
						<h4>Our current motto. By Elliscecie, our CEO and founder.</h4>
					</div>
				</div>
			</body>
			<footer>
				<div id="footer-left">
					<p class="txt_serious">Protected under the Delteams Asset Usage Conditions License MA0226</p>
					<!-- <button id="ROOT_ltac" class="btn_urlstyle"><u>Legal Terms and Conditions</u></button>
					<button id="ROOT_stac" class="btn_urlstyle"><u>Simplified Terms and Conditions</u></button>
					<button id="ROOT_pp" class="btn_urlstyle"><u>Privacy Policy</u></button> -->
				</div>
				<div id="footer-right">
		
				</div>
			</footer>
			
			<script type="text/javascript" src="https://core-assets.delteams.net/scripts/root.js"></script>
			<script type="text/javascript" src="https://core-assets.delteams.net/scripts/about.js"></script>
		</html>
		`;

		return new Response(htmlContent, {
			headers: { "content-type": "text/html;charset=UTF-8" },
		});
	},
};
