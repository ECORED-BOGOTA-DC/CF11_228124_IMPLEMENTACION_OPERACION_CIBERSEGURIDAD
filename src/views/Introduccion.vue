<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .cont_intro1.pt-4
      p(data-aos="fade-right") Le damos la bienvenida al estudio de este componente. Para comenzar, revise el siguiente video, que aquí se muestra. #[strong ¡Adelante!]
      figure.mt-4(data-aos="zoom-in" style="position:relative;z-index:2;")
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/pm9bgkdqRBg" title="Mejoramiento continuo de las estrategias de ciberseguridad" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    .cont_intro2.pb-4
      p.mt-5( data-aos="zoom-in-up") Para la elaboración de este componente, se abordaron varios autores conocidos en #[strong mejoramiento continuo de las estrategias de ciberseguridad], de quienes se han citado y referenciado conceptos y ejemplos para los fines educativos de este curso, en el entendido de que el conocimiento es social y, por lo tanto, es para ser usado por quienes necesitan adquirirlo. Se espera que este documento sea útil para todos aquellos, aprendices y lectores en general, que estén interesados en acercarse a asuntos básicos de la #[strong implementación y operación de la ciberseguridad].



    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>
<style lang="sass">
.cont_intro1, .cont_intro1 *
  position: relative
.cont_intro1:before
  position: absolute
  content: ''
  width: 125%
  left: -15%
  height: 50%
  top: 0
  background-color: #DCCEE3
.cont_intro2, .cont_intro2 *
  position: relative
.cont_intro2:before
  position: absolute
  content: ''
  width: 125%
  left: -15%
  height: 230%
  bottom: 0
  background-color: #DCCEE3
</style>
