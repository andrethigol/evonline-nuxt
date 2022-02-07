<template>
    		<div id="top-bar">
			<div class="container clearfix">

				<div class="row justify-content-between">
					<div class="col-12 col-md-auto">

						<!-- Top Links
						============================================= -->
						<div class="top-links on-click">
							<ul class="top-links-container">
								<li class="top-links-item"><a href="index.html">Home</a>
									
									<ul class="top-links-sub-menu">
										<li class="top-links-item"><a href="about.html">About</a></li>
										<li class="top-links-item"><a href="faqs.html">FAQs</a></li>
										<li class="top-links-item"><a href="contact.html">Contact</a></li>
										<li class="top-links-item"><a href="sitemap.html">Sitemap</a></li>
									</ul>
								</li>
								<li class="top-links-item"><a href="faqs.html">FAQs</a></li>
								<li class="top-links-item"><a href="contact.html">Contact</a></li>
								<li class="top-links-item"><a href="login-register.html">Login</a>
									<div class="top-links-section">
										<form id="top-login" autocomplete="off">
											<div class="form-group">
												<label>Username</label>
												<input type="email" class="form-control" placeholder="Email address">
											</div>
											<div class="form-group">
												<label>Password</label>
												<input type="password" class="form-control" placeholder="Password" required="">
											</div>
											<div class="form-group form-check">
												<input class="form-check-input" type="checkbox" value="" id="top-login-checkbox">
												<label class="form-check-label" for="top-login-checkbox">Remember Me</label>
											</div>
											<button class="btn btn-danger w-100" type="submit">Sign in</button>
										</form>
									</div>
								</li>
							</ul>
						</div><!-- .top-links end -->

					</div>

					<div class="col-12 col-md-auto">

						<!-- Top Social
						============================================= -->
						<ul id="top-social">
							<li><a href="#" class="si-facebook"><span class="ts-icon"><i class="icon-facebook"></i></span><span class="ts-text">Facebook</span></a></li>
							<li><a href="#" class="si-twitter"><span class="ts-icon"><i class="icon-twitter"></i></span><span class="ts-text">Twitter</span></a></li>
							<li class="d-none d-sm-flex"><a href="#" class="si-dribbble"><span class="ts-icon"><i class="icon-dribbble"></i></span><span class="ts-text">Dribbble</span></a></li>
							<li><a href="#" class="si-github"><span class="ts-icon"><i class="icon-github-circled"></i></span><span class="ts-text">Github</span></a></li>
							<li class="d-none d-sm-flex"><a href="#" class="si-pinterest"><span class="ts-icon"><i class="icon-pinterest"></i></span><span class="ts-text">Pinterest</span></a></li>
							<li><a href="#" class="si-instagram"><span class="ts-icon"><i class="icon-instagram2"></i></span><span class="ts-text">Instagram</span></a></li>
							<li><a href="tel:+1.11.85412542" class="si-call"><span class="ts-icon"><i class="icon-call"></i></span><span class="ts-text">+1.11.85412542</span></a></li>
							<li><a href="mailto:info@canvas.com" class="si-email3"><span class="ts-icon"><i class="icon-email3"></i></span><span class="ts-text">info@canvas.com</span></a></li>
						</ul><!-- #top-social end -->

					</div>

				</div>

			</div>
		</div><!-- #top-bar end -->
</template>
<script>
export default {
    
}
</script>

<style >
@import "~/assets/css/animate.css";
@import '~/assets/css/bootstrap.css';
@import '~/assets/css/font-icons.css';
@import '~/assets/css/swiper.css';
@import '~/assets/global.css';


/*classe top-bar lado esquerdo */
#top-bar {
    position: relative;
    border-bottom: 1px solid #EEE;
    font-size: 13px;
}

body {
    line-height: 1.5;
    color: #555;
    font-family: 'Lato', sans-serif;
}

::selection {
	background: #1ABC9C;
	color: #FFF;
	text-shadow: none;
}


[class*="col-"]:not([class*="sticky-"]):not([class*="position-"]) {
	position: relative;
}

.top-links {
	position: relative;
	-ms-flex: 0 0 auto;
	flex: 0 0 auto;
	-ms-flex-positive: 0;
	flex-grow: 0;
	border-bottom: 1px solid #EEE;
}

.top-links-item > a {
	display: block;
	padding: 12px;
	font-size: 0.75rem;
	line-height: 20px;
	font-weight: 700;
	text-transform: uppercase;
	color: #666;
}



.top-links-container {
	display: -ms-flexbox;
	display: flex;
	-ms-flex-wrap: wrap;
	flex-wrap: wrap;
	-ms-flex-align: center;
	align-items: center;
	-ms-flex-pack: center;
	justify-content: center;
	list-style: none;
	margin-bottom: 0;
}
.top-links-sub-menu .top-links-item {border-left: 0 !important;}

.top-links-item {
	position: relative;
	border-left: 1px solid #EEE;
}

.top-links.on-click .top-links-sub-menu,
.top-links.on-click .top-links-section {
	display: none;
}

.top-links:not(.on-click) .top-links-item:hover > .top-links-sub-menu,
.top-links:not(.on-click) .top-links-item:hover > .top-links-section,
.top-links.on-click .top-links-sub-menu,
.top-links.on-click .top-links-section {
	opacity: 1;
	visibility: visible;
	margin-top: 0;
	pointer-events: auto;
	z-index: 499;
}

.top-links-sub-menu,
.top-links-section {
	position: absolute;
	visibility: hidden;
	pointer-events: none;
	opacity: 0;
	list-style: none;
	z-index: -1;
	line-height: 1.5;
	background: #FFF;
	border: 0;
	top: 100%;
	left: -1px;
	width: 140px;
	margin-top: 10px;
	border: 1px solid #EEE;
	border-top-color: #1ABC9C;
	box-shadow: 0px 13px 42px 11px rgba(0, 0, 0, 0.05);
	transition: opacity .25s ease, margin .2s ease;
}


form { margin-bottom: 30px; }

dl, dt, dd, ol, ul, li {
	margin: 0;
	padding: 0;
}

.top-links-item > a > i:first-child { margin-right: 3px; }

.top-links-item > a > i.icon-angle-down {margin: 0 0 0 5px !important;}

.top-links-item > a > i {vertical-align: top;}

@media (min-width: 768px){
.top-links {
    border-bottom: 0;
}
}

/*Topo lado esquerdo */
#top-social {
	display: -ms-flexbox;
	display: flex;
	justify-content: center;
	margin: 0;
}

#top-social a {
	display: -ms-flexbox;
	display: flex;
	width: auto;
	overflow: hidden;
	font-weight: bold;
	color: #666;
}

a {
	text-decoration: none !important;
	color: #1ABC9C;
}

#top-social li {
	position: relative;
	list-style: none;
}

#top-social li .ts-icon {
	width: 40px;
	text-align: center;
	font-size: 0.875rem;
}

#top-social li .ts-icon,
#top-social li .ts-text {
	display: block;
	-ms-flex-preferred-size: 0;
	flex-basis: 0;
	-ms-flex-positive: 1;
	flex-grow: 1;
	height: 44px;
	line-height: 44px;
}

#top-social li .ts-text {
	max-width: 0;
	white-space: nowrap;
	-webkit-transition: all .2s ease;
	transition: all .2s ease;
}

#top-social li { border-left: 1px solid #EEE; }

</style>