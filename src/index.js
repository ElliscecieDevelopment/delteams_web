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

		if (url.pathname === "/style.css") {
			const cssContent = `
				:root {
					font-size: 16px;
				
					--background-color: #ffffff;
					
					--hf-color: #717171;
					--txt-color: #000000;
				
					--title-color: #000;
					--subtitle-color: #5d5d5d;
				
					--txtblock-bg: #dedede;
					--common-header-color: #252525;
				
					--nav-btn-bg: #8a8a8a;
					--nrm-btn-bg: #bababa;
					--rec-btn-bg: #eab12c;
				
					--gcc-col: #cccccc;
				}
				
				@media (prefers-color-scheme: dark) {
					:root {
						font-size: 16px;
					
						--background-color: #0c0c0c;
						
						--hf-color: #1e1e1e;
						--txt-color: #dddddd;
					
						--title-color: #bcbcbc;
						--subtitle-color: #787878;
					
						--txtblock-bg: #141414;
						--common-header-color: #fbfbfb;
					
						--nav-btn-bg: #212121;
						--nrm-btn-bg: #bababa;
						--rec-btn-bg: #796a47;
					
						--gcc-col: #cccccc;
					}
				}
				@media (prefers-color-scheme: light) {
					:root {
						font-size: 16px;
					
						--background-color: #ffffff;
						
						--hf-color: #717171;
						--txt-color: #000000;
					
						--title-color: #000;
						--subtitle-color: #5d5d5d;
					
						--txtblock-bg: #dedede;
						--common-header-color: #252525;
					
						--nav-btn-bg: #8a8a8a;
						--nrm-btn-bg: #bababa;
						--rec-btn-bg: #eab12c;
					
						--gcc-col: #cccccc;
					}
				}
				
				header, footer {
					display: grid;
					grid-template-columns: 1fr auto 1fr;
					align-items: center;
					padding: 1rem 2rem;
					background-color: var(--hf-color);
				}
				nav {
					display: flex;
					justify-content: center;
				
				}
				
				main {
					flex: 1;
				}
				
				#header-left {
					justify-self: start;
				}
				#header-center {
					justify-self: center;
					display: flex;
					gap: 1rem;
				}
				#header-right {
					justify-self: end;
					display: flex;
					gap: 1rem;
				
					display: flex;
					align-items: center;
				}
				
				.unsigned {
					display: flex;
					gap: 10px;
				}
				
				.signed {
					/* display: none; */
					display: none;
					justify-content: center;
					align-items: center;
					flex-direction: row;
					gap: -1rem;
				}
				
				#acc-pfp {
					width: 5cap;
					height: 5cap;
					border-radius: 50%;
					object-fit: cover;
				}
				#acc-usn {
					font-family: "Montserrat", sans-serif;
					font-weight: bold;
					color: var(--txt-color);
					font-size: 1rem;
					margin-top: 0;
				
					margin-bottom: 0;
				}
				
				#settings-btn {
					background: none;
					border: none;
					padding: 0;
					color: var(--subtitle-color);
					text-decoration: underline;
				}
				
				#hide_scrolling_frame {
					scrollbar-width: none;
					scrollbar-color: var(--gcc-col) var(--background-color); /* thumb color | track color */
				}
				#custom_scrolling_frame {
					scrollbar-width: thin;
					scrollbar-color: var(--gcc-col) var(--background-color); /* thumb color | track color */
				}
				
				#edt-logo {
					height: 40px;
					width: auto;
				}
				
				body {
					margin: 0;
					background-color: var(--background-color);
					min-height: 100vh;
					display: flex;
					flex-direction: column;
				}
				
				#heading-banner {
					padding: 30px;
					background: none;
				}
				
				#welcome-title {
					font-family: "League Spartan", sans-serif;
					font-weight: bold;
					color: var(--title-color);
					font-size: 6rcap;
					margin: 35px 0 0.5rem 0px;;
					text-align: center;
					align-self: center;
				}
				
				#welcome-sub {
					font-family: "Montserrat", sans-serif;
					font-weight: semi-bold;
					font-style: italic;
					color: var(--subtitle-color);
					font-size: 1.5cap;
					margin: 10px 0 35px 0px;
					text-align: center;
				}
				
				.default_block {
					padding: 30px;
					background-color: var(--txtblock-bg);
					margin-bottom: 30px;
					border-radius: 20px;
				
					margin-left: 5vw;
					margin-right: 5vw;
				
					/* overflow-x: auto; */
					/* overflow-y: hidden; */
				}
				
				.x-scrolling_frame {
					padding: 30px;
					background-color: var(--txtblock-bg);
					margin-bottom: 30px;
					border-radius: 20px;
				
					overflow-x: auto;
					overflow-y: hidden;
				}
				.x-scrolling_container {
					display: flex;
					gap: 0.5rem;
					width: max-content;
				}
				
				#heading-banner-btns {
					display: flex;
					justify-content: center;
					gap: 20px;
					/* margin-top: 2rem; */
				}
				
				h2, h3, h4, h5, h6 {
					font-family: "Montserrat", sans-serif;
					font-weight: semi-bold;
					font-style: italic;
					color: var(--common-header-color);
				}
				
				h1, .title, .ls-heading, .subtitle {
					font-family: "League Spartan", sans-serif;
					font-weight: bold;
					
					color: var(--title-color);
				}
				
				p, .txt_ordinary {
					font-family: "Montserrat", sans-serif;
					color: var(--txt-color);
				}
				
				.txt_micro {
					font-family: "Montserrat", Arial, Helvetica, sans-serif;
					font-size: 0.75em;
					color: var(--subtitle-color);
				}
				
				.txt_serious {
					font-family: "Montserrat", Arial, Helvetica, sans-serif;
					font-size: 0.8em;
					color: var(--common-header-color);
				}
				
				button {
					cursor: pointer;
					border-radius: 8px;
					border: none;
					font-family: "Montserrat", sans-serif;
				}
				
				.btn_bgless {
					background: none;
					border: none;
					padding: 0;
					margin-right: 15px;
					color: var(--txt-color);
					text-decoration: underline;
					font-weight: bold;
				}
				
				.btn_tag {
					background-color: var(--nav-btn-bg);
					color: var(--txt-color);
					border: none;
					padding: 8px 20px;
					margin-right: 10px;
				}
				
				.hidden-full {
					display: none;
				}
				
				.btn_nil {
					background: none;
					border: none;
					padding: 0;
					margin-right: 10px;
				}
				
				.btn_nav {
					background-color: var(--nav-btn-bg);
					color: white;
					border: none;
					padding: 8px 20px;
					margin: 1px 5px;
				}
				
				.btn_urlstyle {
					background: none;
					border: none;
					padding: 0;
					margin-right: 8px;
					color: #4380da;
					text-decoration: underline;
				}
				
				.btn_accKEY {
					margin-top: 5%;
				
					font-family: "Montserrat", sans-serif;
					font-weight: bold;
				
					border-radius: 10px;
				
					background-color: var(--nav-btn-bg);
					color: white;
					border: none;
					padding: 8px 20px;
				}
				
				.btn_regular {
					background-color: var(--nrm-btn-bg);
					color: 0;
					border: none;
					padding: 10px 20px;
					margin-right: 1px;
				}
				
				.btn_recommended {
					background-color: var(--rec-btn-bg);
					color: white;
					border: none;
					padding: 10px 15px;
					font-weight: bold;
				}
				
				.txtin_ordinary {
					padding: 10px 20px;
					border: 1px solid var(--gcc-col);
					font-family: "Montserrat", sans-serif;
					border-radius: 4px;
					margin-right: 15px;
					background-color: var(--hf-color);
				}
				
				.login_block {
					padding-left: 30px;
					padding-top: 15px;
					padding-bottom: 30px;
					padding-right: 30px;
					background-color: var(--txtblock-bg);
					margin-bottom: 30px;
					border-radius: 20px;
				}
				
				.account_forms {
					display: flex;
					flex-direction: column;
					justify-content: center;
				}
				
				#form_SUBMIT {
					margin-top: 15px;
					background-color: var(--rec-btn-bg);
				}
				
				#rememberMe_LABEL {
					margin-top: 15px;
				}
				
				.checkbox_cont {
					display: flex;
					align-items: center;
					gap: 5px;
				
					margin-top: 15px;
				}
				
				.login_input {
					width: 100%;
					padding: 10px 20px;
					box-sizing: border-box;
				
					margin-top: 15px;
				
					border-radius: 4px;
					
					border: 1px solid var(--gcc-col);
					font-family: "Montserrat", sans-serif;
					background-color: var(--txtblock-bg);
				
					color: var(--txt-color);
				}
				
				#large_pf-contents, #large_cc-contents {
					margin-left: 35px;
					margin-right: 30px;
					margin-bottom: 20px;
				}
				
				#user-button_options {
					display: flex;
					flex-direction: row;
					width: 100%;
					gap: 12px;
				}
				#support-pf_button {
					width: 100%;
				}
				#more-pf_button {
					width: 100%;
				}
				
				#profile-pic, #rank-pic {
					width: 150px;
					height: 150px;
					border-radius: 50%;
					object-fit: cover;
					margin-top: -50px;
				}
				#rank-pic {
				border-radius: 0%;
				}
				#profile-id {
					color: var(--subtitle-color);
				}
				#user-stats_info {
					display: flex;
					width: 100%;
				}
				
				#user-stats_container {
					justify-content: space-between;
				}
				.user-stats_main {
					display: flex;
					flex-direction: column;
					
					align-items: center;
				}
				.user-stats_counts {
					scale: 2;
					margin-bottom: -5%;
				}
				#user-stats_subs {
					color: var(--subtitle-color);
				}
				
				#profile-name {
					margin-bottom: -10px;
				}
				
				.large_pf-hb, .small_pf-hb {
					display: flex;
				}
				
				.large_pf-hb {
					flex-direction: column;
					align-items: left;
				}
				
				.small_pf-hb {
					border-radius: 20px;
				
					justify-content: left;
				
					width: 33%;
				
					background-color: var(--txtblock-bg);
				}
				
				#main_pf-hb {
					border-radius: 20px;
				
					justify-content: center;
				
					background-color: var(--txtblock-bg);
				}
				
				#profile_heading {
					margin-top: 15%;
					margin-bottom: 40px;
					align-content: space-between;
				}
				
				.user_iddds-containers {
					display: flex;
					justify-content: left;
					flex-direction: column;
					width: 100%;
					margin-top: 10px;
					margin-left: 8%;
					margin-right: 8%;
					margin-bottom: 5%;
				}
				
				.unclassified-DISP_FLEX {
					display: flex;
				
					flex-direction: row;
				
					align-items: center;
					align-content: center;
				
					width: 100%;
					margin-right: 2%;
				}
				
				#user_stats-container {
					width: 100%;
				}
				
				#content_scrollframe {
					padding: 0;
					padding-bottom: 9em;
					gap: 0px;
					border-radius: 0;
					margin-bottom: 0px;
				
					scrollbar-width: thin;
					scrollbar-color: var(--gcc-col) var(--background-color); /* thumb color | track color */
				}
				.content_core {
					width: 200px;
					height: 112.5px;
					margin-right: 20px;
				}
				#content_img {
					width: 100%;
					height: 100%;
				}
				#gotocontent_btn-pf {
					width: 100%;
				}
				
				.flat_stats {
					display: flex;
					flex-direction: row;
					margin-top: -5%;
					justify-content: space-around;
				}
				
				.user_stats-sidewats_cont {
					display: flex;
					flex-direction: column;
				}
				
				.progress-bar_container {
					width: 100%;
					height: 20px;
				
					margin-top: -2%;
					margin-bottom: 2ch;
				
					border-radius: 10cap;
					border-color: var(--background-color);
				
					overflow: hidden;
				
					display: flex;
					background-color: var(--hf-color);;
				}
				.progress-bar_fill-imp {
					justify-self: left;
					background-color: var(--rec-btn-bg);
					width: 50%;
					height: 100%;
				}
				.progress-bar_fill-reg {
					justify-self: left;
					background-color: var(--nrm-btn-bg);
					width: 50%;
					height: 100%;
				}
				.bar_numeral {
					margin-top: -3%;
				}
				
				.usr_st_b {
					margin-top: -4%;
				}
				#ldr_cont {
					display: flex;
				}
				
				.update_block {
					display: flex;
					flex-direction: column;
					/* justify-content: space-between; */
					gap: 10px;
					padding: 20px;
					background-color: var(--nav-btn-bg);
					border-radius: 10px;
					width: 20em;
				}
				#dcc_update_list {
					display: flex;
					height: 40em;
					flex-direction: row;
					gap: 10px;
				}
				
				.update_actions {
					display: flex;
					flex-direction: column;
					margin-top: auto;
					gap: 10px;
				}
				.update_time {
					color: var(--subtitle-color);
					font-size: 0.8em;
					margin-top: -0.5ch;
				}
				.update_description {
					color: var(--txt-color);
					margin-top: -1ch;
				}
				.updates_rig {
					margin-bottom: 5rcap;
				}
				
				/* User-Generated Content */
				
				#book-content {
					height: 60rlh;
				}
				
				.bochure_layout {
					display: flex;
					flex-direction: row;
					justify-content: center;
					gap: 4rem;
				}
				
				/* Scaling Modifiers */
				
				@media (max-width: 768px) { /*Mobile view*/
					.btn_mobileonly {
						display: block;
					}
				
					.desktop_only {
						display: none;
					}
					
					#mainNav {
						display: none;
						position: absolute;
						top: 70px;
						right: 20px;
						flex-direction: column;
						background: var(--nav-btn-bg);
						border: 1px solid var(--gcc-col);
					}
				
					#user-stats_info {
						display: flex;
						flex-direction: column;
					}
				
					#user_stats-container {
						margin-top: 3%;
						margin-bottom: -2%;
					}
				
					#profile_heading {
						display: flex;
					
						flex-direction: column;
						justify-content: center;
						align-items: center;
					}
				
					#large_pf-contents {
						margin-left: 24px;
						margin-right: 24px;
						margin-bottom: 30px;
					}
				
					#user-id_info {
						display: flex;
						flex-direction: column;
						margin-top: -10px;
						justify-content: center;
						align-items: center;
					}
				
					.tot-container {
						display: flex;
						flex-direction: column;
						justify-content: space-between;
						width: 100%;
					}
					.tot_block {
						padding: 30px;
						background-color: var(--txtblock-bg);
						margin-bottom: 30px;
						border-radius: 20px;
					}
				
					#user-button_options {
						flex-direction: column;
						
					}
				
					#support-pf_button, #more-pf_button {
						margin-bottom: 4%;
						width: 100%;
					}
				
					.small_pf-hb {
						width: 100%;
						margin-top: 30px;
						margin-left: 0px;
					}
				
					#main_pf-hb {
						width: 100%;
						margin-top: 10%;
					}
				
					#profile-pic, #rank-pic {
						margin-right: 7px;
						align-self: center;
					}
				
					#core, #core_bochure {
						margin-top: 10px;
						margin-left: 30px;
						margin-right: 30px;
					}
				}
				
				@media (min-width: 768px) { /*Desktop and Tablet View*/
					.btn_mobileonly {
						display: none;
					}
				
					#user-stats_container {
						margin-left: 20px;
						margin-right: 20px;
					}
				
					.login_block {
						scale: 1.1;
				
						width: 30%;
				
						margin-left: 15px;
						margin-right: 15px;
					}
				
					.tot-container {
						display: flex;
						flex-direction: row;
						justify-content: space-between;
						width: 100%;
					}
					.tot_block {
						padding: 30px;
						background-color: var(--txtblock-bg);
						margin-bottom: 30px;
						border-radius: 20px;
				
						margin-left: 1vw;
						margin-right: 1vw;
					}
				
					#profile-pic, #rank-pic {
						margin-right: 20px;
					}
				
					#more-pf_button {
						width: 100%;
					}
				
					#hoh_blocks {
						display: flex;
						margin-top: 30px;
						margin-bottom: 20px;
				
						justify-content: center;
						gap: 5%;
					}
				
					#profile_heading {
						display: flex;
						flex-direction: row;
						row-gap: 20px;
						justify-content: space-between;
					}
					.small_pf-hb {
						/*width: 100%;*/
						margin-left: 40px;
					}
				
					#core {
						margin-top: 10px;
						margin-left: 10%;
						margin-right: 10%;
						margin-bottom: 30px;
					}
					#core_bochure {
						margin: 0px 0px 0px 0px;
					}
				}
				
				.vert_line {
					border-left: 1px solid var(--gcc-col);
					margin-left: 3px;
					margin-right: 10px;
				}
				.hori_line {
					border-top: 1px solid var(--gcc-col);
					margin-bottom: 30px;
					margin-top: -10px;
				}
			`;
			return new Response(cssContent, {
				headers: { "content-type": "text/css;charset=UTF-8" },
			});
		}

		const jsContent = `
			// about.js

			var welcomeSubtitle = document.getElementById("welcome-sub");
			
			document.addEventListener('DOMContentLoaded', () => {
				fetch("https://delteams.net/WelcomeQuotes.json")
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
				<link rel="stylesheet" href="https://delteams.net/style.css" type="text/css">
				<link rel="icon" href="https://delteams.net/delteams-svg-optimized.svg">
			</head>
			<header>
				<div id="header-left">
					<button id="homepage-btn" class="btn_nil"><img id="edt-logo" src="https://delteams.net/delteams-svg-optimized.svg" alt="Our logo. Click to access homepage."></button>
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
				<script type="text/javascript" src="/about.js"></script>
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
			
			<!-- <script type="text/javascript" src="../public/root.js"></script> -->
		</html>
		`;

		return new Response(htmlContent, {
			headers: { "content-type": "text/html;charset=UTF-8" },
		});
	},
};
