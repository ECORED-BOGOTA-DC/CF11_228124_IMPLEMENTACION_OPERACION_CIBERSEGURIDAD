<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Mejora continua
    
    .row
      .col-lg-8.mb-4.mb-lg-0(data-aos="fade-right" style="place-self:center;")
        p La fase de mejora continua parte de la revisión a la evaluación de los indicadores de la estrategia de seguridad, generada por revisiones por parte de los responsables de procesos, la misma organización, auditorías internas o auditorías externas, estableciendo acciones que permitan corregir o mejorar sus capacidades para la gestión de la seguridad de la información.
        p.mt-4 A continuación, se presenta una cita sobre mejora continua:
        .cont_2_1.mt-4
          p.fw-bold.mb-0 #[em “Lo que no se define no se puede medir. Lo que no se mide no se puede mejorar. Lo que no se mejora se degrada siempre”.]
          p.text-end.mb-0 Lord Kelvin
      .col-lg-4(data-aos="fade-left" style="place-self:center;")
        figure.m-auto.col-7.col-md-7.col-lg-12
          img(src="@/assets/curso/tema2/1.png")
    
    p.mt-5(data-aos="fade-right") Partiendo de la premisa de Lord Kelvin, se puede abordar la fase de mejora continua como una #[strong acción permanente de revisión y perfeccionamiento de los procesos de una entidad]. Esta fase debe contar con sus propios responsables, pero involucra a toda la organización y asegurará una buena gestión de la seguridad de la información. A continuación, se presentan algunos elementos que se deben precisar en los procesos de  mejora continua. 

    .tarjeta.tarjeta--azul.p-4.p-lg-5.mt-5(style="background-color:#DCCEE3;border-radius:0px;" data-aos="zoom-in-up")
      SlyderA(tipo="b")
        .row
          .col-lg-6.mb-4.mb-lg-0
            h5 No conformidad
            p.mt-4 Se le conoce como #[strong No conformidad] al hallazgo por la falta o incumplimiento al desarrollo de un proceso y el cual no cumple con las condiciones esperadas de acuerdo con lo establecido en su propia estrategia de seguridad, poniendo en riesgo los pilares de la seguridad de la información.
            p.mt-4 Las no conformidades pueden ser detectadas a partir de auditorías, tanto internas como externas, o mediante procesos de monitoreo o  mediciones de resultados. Cuando se trata de no conformidades detectadas por auditorías externas, las no conformidades se pueden catalogar como menores o mayores.
          .col-lg-6
            figure.m-auto.col
              img(src='@/assets/curso/tema2/2.png')

    




</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>
<style lang="sass">
.cont_2_1, .cont_2_1 *
  position: relative
.cont_2_1:before
  content: ''
  position: absolute
  width: 50%
  right: -5px
  bottom: -10px
  height: 100%
  background-color: #EEE5FE
.slyder-a__btn--sigt, .slyder-a__btn--atrs
  background-color: #E01650
  background-image: url(../assets/curso/arrow_white.svg)
.slyder-a__bullets__item
  background-color: #DD8EB0
  border-color: #DD8EB0
.slyder-a__bullets__item--active
  background-color: #E01650 !important
  border-color: #E01650
</style>
