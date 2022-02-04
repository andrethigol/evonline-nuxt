<template>
    	<header id="header" class="header-size-sm">
			<div class="container">
				<div class="header-row flex-column flex-lg-row justify-content-center justify-content-lg-start">

					<!-- Logo
					============================================= -->
					<div id="logo" class="me-0 me-lg-auto">
						<a href="index.html" class="standard-logo" data-dark-logo="images/logo-dark.png"><img src="" alt="Canvas Logo"></a>
						<a href="index.html" class="retina-logo" data-dark-logo="images/logo-dark@2x.png"><img src="images/logo@2x.png" alt="Canvas Logo"></a>
					</div><!-- #logo end -->

					<div class="header-misc mb-4 mb-lg-0 order-lg-last">

						<ul class="header-extras me-0 me-sm-4">
							<li>
								<i class="i-plain icon-email3 m-0"></i>
								<div class="he-text">
									Drop an Email
									<span>info@canvas.com</span>
								</div>
							</li>
							<li>
								<i class="i-plain icon-call m-0"></i>
								<div class="he-text">
									Get in Touch
									<span>1800-1144-551</span>
								</div>
							</li>
						</ul>

					</div>

				</div>
			</div>

			<div id="header-wrap" class="border-top border-f5">
				<div class="header-row">

					<nav class="navbar navbar-expand-lg navbar-light bg-light w-100">
						<div class="container">
							<a class="navbar-brand" href="#">Navbar</a>
							<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
								<span class="navbar-toggler-icon"></span>
							</button>

							<div class="collapse navbar-collapse" id="navbarSupportedContent">
								<ul class="navbar-nav me-auto">
									<li class="nav-item active">
										<a class="nav-link" href="#">Home <span class="visually-hidden">(current)</span></a>
									</li>
									<li class="nav-item">
										<a class="nav-link" href="#">Link</a>
									</li>
									<li class="nav-item dropdown">
										<a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
											Dropdown
										</a>
										<div class="dropdown-menu" aria-labelledby="navbarDropdown">
											<a class="dropdown-item" href="#">Action</a>
											<a class="dropdown-item" href="#">Another action</a>
											<div class="dropdown-divider"></div>
											<a class="dropdown-item" href="#">Something else here</a>
										</div>
									</li>
									<li class="nav-item">
										<a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
									</li>
								</ul>
								<form class="row gx-3 align-items-center my-2 my-lg-0">
									<div class="col">
										<input class="form-control" type="search" placeholder="Search" aria-label="Search">
									</div>
									<div class="col-auto">
										<button class="btn btn-outline-success col-12" type="submit">Search</button>
									</div>
								</form>
							</div>
						</div>
					</nav>

				</div>
			</div>
			<div class="header-wrap-clone"></div>
		</header><!-- #header end -->
</template>
<script>

</script>

<style>
@import "~/assets/css/animate.css";
@import '~/assets/css/bootstrap.css';
@import '~/assets/css/font-icons.css';
@import '~/assets/css/swiper.css';

#header {
	position: relative;
	background-color: #FFF;
	border-bottom: 1px solid #F5F5F5;
}

body {
	line-height: 1.5;
	color: #555;
	font-family: 'Lato', sans-serif;
}

.header-row {
	position: relative;
	display: -ms-flexbox;
	display: flex;
	-ms-flex-align: center;
	align-items: center;
	-ms-flex-wrap: wrap;
	flex-wrap: wrap;
}

@media (min-width: 992px) {
	.header-row {
		position: initial;
	}
}

/*Logo css*/

#logo {
	position: relative;
	display: -ms-flexbox;
	display: flex;
	align-items: center;
	-ms-flex-align: center;
	margin-right: auto;
	max-height: 100%;
}

#logo a.standard-logo {
	display: -ms-flexbox;
	display: flex;
}

#logo a {
	color: #000;
	font-family: 'Poppins', sans-serif;
	font-size: 36px;
}

a {
	text-decoration: none !important;
	color: #1ABC9C;
}

.header-misc {
	position: initial;
	display: -ms-flexbox;
	display: flex;
	align-items: center;
	margin-left: 15px;
}

.header-extras {
	display: -ms-flexbox;
	display: flex;
	align-items: center;
	margin-bottom: 0;
}

.header-extras li:first-child { margin-left: 0; }

.header-extras li {
	display: -ms-flexbox;
	display: flex;
	margin-left: 1.25rem;
	overflow: hidden;
	list-style: none;
}

body:not(.device-touch) .i-rounded,
body:not(.device-touch) .i-plain,
body:not(.device-touch) .i-circled,
body:not(.device-touch) .i-bordered,
body:not(.device-touch) .social-icon {
	-webkit-transition: all .3s ease;
	-o-transition: all .3s ease;
	transition: all .3s ease;
}

.i-plain {
	width: 36px !important;
	height: 36px !important;
	font-size: 28px;
	line-height: 36px !important;
	color: #444 !important;
	text-shadow: 1px 1px 1px #FFF;
}

.i-rounded,
.i-plain,
.i-circled,
.i-bordered,
.social-icon {
	display: block;
	float: left;
	margin: 4px 11px 7px 0;
	text-align: center !important;
	font-size: 28px;
	color: #FFF;
	text-shadow: 1px 1px 1px rgba(0,0,0,0.3);
	cursor: pointer;
	font-style: normal;
}

.header-extras li .he-text {
	padding-left: 10px;
	font-weight: bold;
	font-size: 0.875rem;
}

.header-extras li .he-text span {
	display: block;
	font-weight: 400;
	color: #1ABC9C;
}

</style>
