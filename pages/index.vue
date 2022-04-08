<template>
  <main>
    <header>
      <TopUm />
      <MenuTeste />
    </header>

    <SliderTeste />

    <div class="container">
      <div class="grid">
        <div class="col-6 componetes">
          <h2>nós o usamos?</h2>
          É um fato conhecido de todos que um leitor se distrairá com o conteúdo de texto legível de uma página quando estiver examinando sua diagramação. 
          A vantagem de usar Lorem Ipsum é que ele tem uma distribuição normal de letras, ao contrário de "Conteúdo aqui, conteúdo aqui", 
          fazendo com que ele tenha uma aparência similar a de um texto legível. Muitos softwares de publicação e editores de páginas na internet agora usam 
          Lorem Ipsum como texto-modelo padrão, e uma rápida busca por 'lorem ipsum' mostra vários websites ainda em sua fase de construção. Várias versões novas 
          surgiram ao longo dos anos, eventualmente por acidente, e às vezes de propósito (injetando humor, e coisas do gênero).
        </div>
        <div class="col-6">
        <img src="~/assets/images/loader-image.gif" width="804" height="717" class="image-home" alt="funcionalidades">
        </div>
      </div>

    </div>
    
    <FlipCards />

    <div class="content-wrap">
      <div class="container clearfix">
        <div class="container">
          <div class="grid">
            <div class="col-6">
            <img src="~/assets/images/restaurant/21.png" width="648" height="717" class="image-home" alt="funcionalidades">
            </div>
            <div class="col-6 componetes">
           <h2>nós o usamos?</h2>
           É um fato conhecido de todos que um leitor se distrairá com o conteúdo de texto legível de uma página quando estiver examinando sua diagramação. 
           A vantagem de usar Lorem Ipsum é que ele tem uma distribuição normal de letras, ao contrário de "Conteúdo aqui, conteúdo aqui", 
           fazendo com que ele tenha uma aparência similar a de um texto legível. Muitos softwares de publicação e editores de páginas na internet agora usam 
           Lorem Ipsum como texto-modelo padrão, e uma rápida busca por 'lorem ipsum' mostra vários websites ainda em sua fase de construção. Várias versões novas 
           surgiram ao longo dos anos, eventualmente por acidente, e às vezes de propósito (injetando humor, e coisas do gênero).
        </div>
        </div>

        </div>
      </div>
    </div>

    <TestemuUm />

    

  </main>
</template>

<script>
import MenuTeste from '~/components/menus/MenuTeste'
import TopUm from '~/components/topinhos/TopUm'
import SliderTeste from '~/components/slider/SliderTeste'
import FlipCards from '~/components/corpo/FlipCards'
import TestemuUm from '~/components/testimunion/testemuUm'

export default{
  components: {
    MenuTeste,
    TopUm,
    SliderTeste,
    FlipCards,
    TestemuUm

  }
}

</script>

<style scoped>
@import "~/assets/css/animate.css";
@import '~/assets/css/bootstrap.css';
@import '~/assets/css/font-icons.css';
@import '~/assets/css/swiper.css';
@import '~/assets/global.css';

.grid {
    display: flex;
    align-items: center;
}

.componetes {
    padding: 0 40px;
}

</style>



