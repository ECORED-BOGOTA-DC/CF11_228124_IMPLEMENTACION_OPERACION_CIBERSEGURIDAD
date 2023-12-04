<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Normatividad corporativa de seguridad de la información 
    
    .row
      .col-lg-4.mb-4.mb-lg-0(data-aos="fade-right" style="place-self:center;")
        figure.m-auto.col-7.col-md-7.col-lg-12
          img(src="@/assets/curso/tema3/1.png" alt="Imagen decorativa")
      .col-lg-8(data-aos="fade-left" style="place-self:center;")
        p Desde una óptica corporativa, las organizaciones necesitan proceder en conformidad con los requerimientos, cumplimiento normativo y, como si fuera poco, mantenerse al margen de los riesgos a los que se ven enfrentadas día a día. Es por ello que han surgido iniciativas basadas en normas y estándares, que buscan apalancar el cumplimiento de dichas necesidades.
        p.mt-4 El conocimiento amplio de los aspectos que las configuran y su aplicación son puntos clave que ayudan a garantizar la seguridad de la información y mediante los cuales se logra fortalecer el gobierno corporativo y su propuesta de valor frente a otras organizaciones.
    
    .cont_3_1.mt-5.pt-4.pt-lg-5.pb-4.pt-lg-5
      .col-xl-10.m-auto
        .row
          .col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
            figure.col-6.col-md-7.col-lg-12.m-auto
              img(src="@/assets/curso/tema3/2.svg" alt="Imagen decorativa")
          .col-lg-8(data-aos="fade-left")
            .titulo-segundo.titulo_segundo_1
              h3 Normativa de la seguridad de la información
            p Para reforzar su conocimiento sobre las normas que orientan las acciones enfocadas a la seguridad de la información, visite el Anexo_1_NormativaSeguridadInformacion y haga lectura consciente de la teoría allí contenida, fundamental para el avance satisfactorio en este componente. 
            a.boton.color-acento-botones.mt-4(:href="obtenerLink('downloads/Anexo_1_NormativaSeguridadInformacion.pdf')" target="_blank" type="application/pdf")
              span Descargar
              i.fas.fa-file-download

    
  




</template>

<script>
export default {
  name: 'Tema3',
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
.tabs-c.color-primario .tabs-c__tab--active span
  font-weight: bold
.cont_3_1, .cont_3_1 *
  position: relative
.cont_3_1:before
  content: ''
  position: absolute
  height: 100%
  width: 125%
  left: -15%
  top: 0
  background-color: #EEE5FE
.titulo_segundo_1:after
  border-left-color: #3C3FA7 !important
  background-color: #AFC6DE
</style>
