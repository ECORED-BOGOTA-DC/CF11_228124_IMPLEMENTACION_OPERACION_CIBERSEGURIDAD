<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    p.mb-5(data-aos="fade-right") En resumen, en el mejoramiento continuo de las estrategias de ciberseguridad, se abordaron aspectos cruciales, como el análisis detallado de vulnerabilidades, la evaluación de informes de auditoría, la implementación de mejoras constantes, el cumplimiento normativo corporativo y la adopción de buenas prácticas en ciberseguridad. Además, se utilizó la experiencia desde el NIST, Instituto Nacional de Normas y Tecnología, a través de sus publicaciones especializadas para aplicar principios avanzados de seguridad. Este enfoque integral garantiza la adaptación y fortaleza de las estrategias de ciberseguridad frente a las amenazas en constante evolución. A continuación, se presenta un mapa conceptual que resume la información de este proceso.

    .row.justify-content-center(data-aos="zoom-in-up")
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/sintesis.svg", alt="Imagen que muestra el mapa conceptual con síntesis del componente formativo.  En resumen, en el mejoramiento continuo de las estrategias de ciberseguridad, se abordaron aspectos cruciales, como el análisis detallado de vulnerabilidades, la evaluación de informes de auditoría, la implementación de mejoras constantes, el cumplimiento normativo corporativo y la adopción de buenas prácticas en ciberseguridad. ")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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

<style lang="sass"></style>
