<template>
    		<section id="content">
			<div class="content-wrap">
				<div class="container clearfix">

					<div class="row grid-container" data-layout="masonry" style="overflow: visible">
						<div class="col-lg-4 mb-4">
							<div class="flip-card text-center">
								<div class="flip-card-front dark flip-um" style="background: url('/assets/images/pessoa.jpg') !important;">
									<div class="flip-card-inner">
										<div class="card bg-transparent border-0 text-center">
											<div class="card-body">
												<i class="icon-line2-camera h1"></i>
												<h3 class="card-title">Special title treatment</h3>
												<p class="card-text fw-normal">With supporting text below as a natural lead-in to additional content.</p>
											</div>
										</div>
									</div>
								</div>
								<div class="flip-card-back bg-danger no-after">
									<div class="flip-card-inner">
										<p class="mb-2 text-white">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias cum repellat velit.</p>
										<button type="button" class="btn btn-outline-light mt-2">Botão um</button>
									</div>
								</div>
							</div>
						</div>

						<div class="col-lg-4 mb-4">
							<div class="flip-card text-center top-to-bottom">
								<div class="flip-card-front dark" style="background-image: url('~/assets/images/dev.jpg');">
									<div class="flip-card-inner">
										<div class="card bg-transparent border-0 text-center">
											<div class="card-body">
												<h3 class="card-title">Special title treatment</h3>
												<p class="card-text fw-normal">With supporting text below as a natural lead-in to additional content.</p>
											</div>
										</div>
									</div>
								</div>
								<div class="flip-card-back" style="background-image: url('~/assets/images/futebol.jpg');">
									<div class="flip-card-inner">
										<p class="mb-2 text-white">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias cum repellat velit.</p>
										<button type="button" class="btn btn-outline-light mt-2">Botão dois</button>
									</div>
								</div>
							</div>
						</div>

						<div class="col-lg-4 mb-4">
							<div class="flip-card text-center">
								<div class="flip-card-front dark" data-height-xl="505" style="background-image: url('~/assets/images/dev.jpg');">
									<div class="flip-card-inner">
										<div class="card bg-transparent border-0 text-center">
											<div class="card-body">
												<i class="icon-line2-briefcase h1"></i>
												<h3 class="card-title">Special title treatment</h3>
												<p class="card-text fw-normal">With supporting text below as a natural lead-in to additional content.</p>
											</div>
										</div>
									</div>
								</div>
								<div class="flip-card-back" data-height-xl="505" style="background-image: url('demos/ecommerce/images/catagories/2.jpg');">
									<div class="flip-card-inner">
										<p class="mb-2 text-white">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias cum repellat velit.</p>
										<button type="button" class="btn btn-outline-light mt-2">Botão tres</button>
									</div>
								</div>
							</div>
						</div>

						<div class="col-lg-4 mb-4">
							<div class="flip-card text-center top-to-bottom">
								<div class="flip-card-front bg-info dark" data-height-xl="200">
									<div class="flip-card-inner">
										<div class="card bg-transparent border-0 text-center">
											<div class="card-body">
												<i class="icon-line2-check h1"></i>
												<h3 class="card-title">Special title treatment</h3>
											</div>
										</div>
									</div>
								</div>
								<div class="flip-card-back" data-height-xl="200" style="background-image: url('demos/ecommerce/images/catagories/3.jpg');">
									<div class="flip-card-inner">
										<p class="mb-2 text-white">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias cum repellat velit.</p>
										<button type="button" class="btn btn-outline-light mt-2">Botão quatro</button>
									</div>
								</div>
							</div>
						</div>

						<div class="col-lg-4 mb-4">
							<div class="flip-card top-to-bottom">
								<div class="flip-card-front dark" data-height-xl="200" style="background-image: url('');">
									<div class="flip-card-inner">
										<div class="card bg-transparent border-0">
											<div class="card-body">
												<h3 class="card-title mb-0">Beautiful Nature</h3>
												<span class="fst-italic">New Zealand</span>
											</div>
										</div>
									</div>
								</div>
								<div class="flip-card-back" data-height-xl="200" style="background-image: url('');">
									<div class="flip-card-inner">
										<p class="mb-2 text-white">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias cum repellat velit.</p>
										<button type="button" class="btn btn-outline-light mt-2">Botão cinco</button>
									</div>
								</div>
							</div>
						</div>

                        <div class="col-lg-4 mb-4">
							<div class="flip-card top-to-bottom">
								<div class="flip-card-front dark" data-height-xl="200" style="background-image: url('');">
									<div class="flip-card-inner">
										<div class="card bg-transparent border-0">
											<div class="card-body">
												<h3 class="card-title mb-0">Beautiful Nature</h3>
												<span class="fst-italic">New Zealand</span>
											</div>
										</div>
									</div>
								</div>
								<div class="flip-card-back" data-height-xl="200" style="background-image: url('');">
									<div class="flip-card-inner">
										<p class="mb-2 text-white">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias cum repellat velit.</p>
										<button type="button" class="btn btn-outline-light mt-2">Botão seis</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section><!-- #content end -->
</template>

<script>
export default {

}
</script>

<style scoped>
@import "~/assets/css/animate.css";
@import '~/assets/css/bootstrap.css';
@import '~/assets/css/font-icons.css';
@import '~/assets/css/swiper.css';
@import '~/assets/global.css';

.flip-um {
    background: url('~/assets/images/pessoa.jpg') !important;
}

h1, h2, h3, h4, h5, h6 {
    color: #fff;
    font-weight: 600;
    line-height: 1.5;
    margin: 0 0 30px 0;
    font-family: 'Poppins', sans-serif;
}
</style>