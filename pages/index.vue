<template>
  <main>
    <header>
      <TopUm />
      <MenuTeste />
    </header>

		<section id="slider" class="slider-element h-auto" style="background-color: #222;">
			<div class="slider-inner">

				<div class="owl-carousel carousel-widget" data-margin="0" data-items="1" data-pagi="false" data-loop="true" data-animate-in="rollIn" data-speed="450" data-animate-out="rollOut" data-autoplay="5000">

					<a href="#"><img src="~/assets/images/slider/full/1.jpg" alt="Slider"></a>
					<a href="#"><img src="~/assets/images/slider/full/2.jpg" alt="Slider"></a>
					<a href="#"><img src="~/assets/images/slider/full/3.jpg" alt="Slider"></a>
					<a href="#"><img src="~/assets/images/slider/full/4.jpg" alt="Slider"></a>

				</div>
			</div>
		</section>

    <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100" src="~/assets/images/slider/full/1.jpg" alt="First slide">
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="~/assets/images/slider/full/2.jpg" alt="Second slide">
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="~/assets/images/slider/full/3.jpg" alt="Third slide">
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>


  </main>
</template>

<script>
import MenuTeste from '~/components/menus/MenuTeste'
import TopUm from '~/components/topinhos/TopUm'

export default{
  components: {
    MenuTeste,
    TopUm,
  }
}

</script>


