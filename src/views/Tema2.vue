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
        .row
          .col-lg-6.mb-4.mb-lg-0
            h5 No conformidades menores
            p.mt-4 Se trata de aquellas objeciones identificadas en la estrategia de seguridad, pero que no comprometen la integridad de la misma o del activo de información, y pueden ser abordadas con alguna acción correctiva en un tiempo estimado y, además, serán evaluadas en la próxima auditoría.
          .col-lg-6
            figure.m-auto.col
              img(src='@/assets/curso/tema2/3.png')
        .row
          .col-lg-6.mb-4.mb-lg-0
            h5 No conformidades mayores
            p.mt-4 Son aquellas que sí ponen en riesgo, en principio, el funcionamiento de la estrategia de seguridad, y por ende afectan los pilares de la seguridad de la información, para los cuales también se deben establecer acciones correctivas con tiempo establecido, y se recomienda que sean revisadas antes de la siguiente auditoría.
            p.mt-4 Al identificar cualquier tipo de #[strong No Conformidad], la organización puede, entre otras acciones, optar por:
            ul.lista-ul.mb-0.mt-4
              li.d-flex
                i.lista-ul__vineta
                | Controlar las inconsistencias y corregir las fallas.
              li.d-flex
                i.lista-ul__vineta
                | Asumir las consecuencias.
              li.d-flex
                i.lista-ul__vineta
                | Evaluar las causas que generaron la No Conformidad, para eliminarla.
              li.d-flex
                i.lista-ul__vineta
                | Implementar acciones correctivas para subsanar las causas.
              li.d-flex
                i.lista-ul__vineta
                | Evaluar la eficacia de los controles y acciones implementadas.
              li.d-flex
                i.lista-ul__vineta
                | Evaluar la estrategia de seguridad para actualizarla, en caso de ser necesario.
          .col-lg-6
            figure.m-auto.col
              img(src='@/assets/curso/tema2/4.png')
        .row
          .col-lg-6.mb-4.mb-lg-0
            h5 Acciones correctivas
            p.mt-4 Estas acciones permiten corregir o eliminar la causa que puede generar una #[strong no conformidad]. Las acciones correctivas deben proponerse a partir de la identificación y deben ser evaluadas y aprobadas por la dirección y por el auditor que realizó la identificación de la no conformidad.
          .col-lg-6
            figure.m-auto.col
              img(src='@/assets/curso/tema2/5.png')
    
    .row.mt-5
      .col-lg-4.mb-4.mb-lg-0(data-aos="fade-right" style="place-self:center;")
        figure.m-auto.col-7.col-md-7.col-lg-12
          img(src="@/assets/curso/tema2/6.png")
      .col-lg-8(data-aos="fade-left" style="place-self:center;")
        .cajon.color-acento-contenido.p-4(style="background-color:#FFE8B3;")
          p.mb-0 En síntesis y en palabras más puntuales, la mejora continua es el proceso mediante el cual, de manera sistemática, se mejoran los procesos y procedimientos relacionados con la estrategia de seguridad. Esto, a partir de la evaluación de los controles, políticas y documentos que permiten garantizar la seguridad de la información.
        p.mt-4 El proceso se debe de realizar permanentemente y de forma cíclica, permitiendo llevar un registro de las mejoras realizadas a la estrategia. Este concepto de mejora continua lo adoptan la mayoría de las normas de la familia ISO, lo cual facilita su implementación y el desarrollo de las acciones relacionadas. Ver Figura 1.
    
    .col-xl-7.m-auto.mt-5
      .titulo-sexto.color-acento-contenido(data-aos="zoom-in-down")
        h5 Figura 1.
        span Implementación de la estrategia de seguridad
      figure.mt-4(data-aos="zoom-in-up")
        img(src="@/assets/curso/tema2/7.svg")

    




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
