<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .fondo-intro.mb-5.p-4
      .row.align-items-center
        .col-md-5.mb-4.mb-md-0(data-aos="fade-right")
          img.px-md-4(src='@/assets/curso/temas/intro/img.svg', alt='')
        .col-md-6.mb-4.mb-md-0(data-aos="fade-left")
           p.mb-0 El presente componente pretende aproximar a los aprendices a los procedimientos que debe seguir el primer responsable en los accidentes de tránsito, sus actuaciones antes, durante y después, así como las implicaciones legales de sus actuaciones u omisiones en esta importante labor. Por tanto, aplicar los procedimientos de primer responsable de acuerdo con el manual del sistema de la cadena de custodia y asegurar la escena del lugar de los hechos con base en el protocolo de la Policía Judicial se debe realizar de la siguiente forma:


    figure(data-aos="fade-down")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video. 




</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
