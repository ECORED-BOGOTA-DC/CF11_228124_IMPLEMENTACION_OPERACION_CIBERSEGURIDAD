<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 4
      h1 Buenas prácticas en ciberseguridad 
    
    .row
      .col-auto.d-none.d-md-block(style="place-self:center;" data-aos="fade-right")
        figure
          img(src="@/assets/curso/tema4/1.svg")
      .col(style="place-self:center;" data-aos="fade-left")
        p Un sistema de seguridad debe mejorarse de manera continua, y para ello, desde el área de seguridad, existen propuestas que facilitan la implementación de técnicas y tácticas de fortalecimiento de los activos de información.
        p.mb-0 Conozca, ahora, algunas de las buenas prácticas más representativas:
    
    .row.mt-5
      .col-lg-8.mb-4.mb-lg-0(data-aos="fade-right" style="place-self:center;")
        TabsA.color-acento-contenido
          .tarjeta.color-acento-botones.p-4(titulo="Controles CIS v8" style="background-color:#FFF4D9;")
            p.mb-0(style="color:inherit;") Los controles CIS son una propuesta de controles de seguridad específicos y con los cuales se busca endurecer las acciones defensivas y así prevenir incidentes que afecten los activos de información.
          .tarjeta.color-acento-botones.p-4(titulo="En qué se basan <br> los controles CIS v8" style="background-color:#FFF4D9;")
            p.mb-0(style="color:inherit;") Esta propuesta está basada en múltiples marcos de seguridad, lo que permite abordar diferentes puntos de vista y, asimismo, recoger las mejores propuestas de seguridad.
          .tarjeta.color-acento-botones.p-4(titulo="Estructuración <br> de CIS v8" style="background-color:#FFF4D9;")
            p.mb-0(style="color:inherit;") Los controles CIS están estructurados en 18 controles y 153 salvaguardas, distribuidos en 3 grupos de implementación.
          .tarjeta.color-acento-botones.p-4(titulo="CIS <em>Benchmarks</em>" style="background-color:#FFF4D9;")
            p.mb-0(style="color:inherit;") Esta otra iniciativa de recomendaciones específicas para productos de diferentes proveedores y tipos recopila una serie de recomendaciones y pautas para el endurecimiento de sistemas y aplicaciones, y así poder cumplir con un nivel básico de seguridad.
          .tarjeta.color-acento-botones.p-4(titulo="Las más comunes" style="background-color:#FFF4D9;")
            p.mb-0(style="color:inherit;") Entre las guías más comunes, se encuentran: sistemas operativos Linux y Windows, servicios #[em(style="color:inherit;") web], bases de datos, hipervisores, servicios en la nube, dispositivos móviles, dispositivos de red, #[em(style="color:inherit;") software] de escritorio, dispositivos de impresión.
      .col-lg-4(data-aos="fade-left" style="place-self:center;")
        figure.m-auto.col-7.col-md-7.col-lg-12
          img(src="@/assets/curso/tema4/2.png")
    
    .col-xl-10.m-auto.mt-5
      .p-4(data-aos="flip-up" style="background-color:#EEE5FE;border-radius:10px;")
        .row.m-0
          .col-lg-2.col-md-3.mb-4.mb-md-0(style="place-self:center;")
            figure.text-center
              img(src="@/assets/curso/tema4/3.svg" style="display:inline;max-width:80px;" alt="Imagen decorativa")
          .col-lg-7.col-md-6.mb-4.mb-md-0(style="place-self:center;")
            h4 Información CIS
            p.mb-0 Cada día, se unen más colaboradores a esta iniciativa, de la cual se puede obtener mayor información, que usted puede conocer en su portal #[strong Cisecurity.org.]
          .col-lg-3.col-md-3.text-center(style="place-self:center;")
            a.boton.color-acento-botones(href="https://www.cisecurity.org/cis-benchmarks/" target="_blank")
              span Ingresar
              i.fas.fa-link
    
    h4.mt-5.p-3.pe-5.mb-5(data-aos="fade-right" style="background: linear-gradient(90deg, rgb(255, 178, 6) 0%, rgb(255, 255, 255) 100%); max-width: fit-content; border-left: 8px solid rgb(80, 12, 117);") Publicaciones especiales de NIST

    .row.mt-5
      .col-lg-4.mb-4.mb-lg-0(data-aos="fade-right" style="place-self:center;")
        figure.m-auto.col-7.col-md-7.col-lg-12
          img(src="@/assets/curso/tema4/4.png")
      .col-lg-8(data-aos="fade-left" style="place-self:center;")
        p Desde NIST, #[em National Institute of Standards and Technology], se vienen publicando una serie de documentos de apoyo a la gestión de la seguridad, bajo el prefijo SP (#[em Special Publication]), con los cuales se busca aportar desde algunas pautas a la estandarización de acciones que buscan mejorar la seguridad de los activos de información.
        p.mt-4 Entre las publicaciones más importantes, se encuentran aquellas relacionadas con auditorías, control del teletrabajo, control de dispositivos móviles, gestión de inventario de activos, entre otros, y algunos marcos de interoperabilidad.
    
    .col-xl-10.m-auto.mt-5
      .p-4(data-aos="flip-up" style="background-color:#EEE5FE;border-radius:10px;")
        .row.m-0
          .col-lg-2.col-md-3.mb-4.mb-md-0(style="place-self:center;")
            figure.text-center
              img(src="@/assets/curso/tema4/3.svg" style="display:inline;max-width:80px;" alt="Imagen decorativa")
          .col-lg-7.col-md-6.mb-4.mb-md-0(style="place-self:center;")
            h4 Publicaciones de NIST
            p.mb-0 Se sugiere que conozca estas publicaciones desde su sitio web: #[br] #[strong https://csrc.nist.gov/publications/sp ]
          .col-lg-3.col-md-3.text-center(style="place-self:center;")
            a.boton.color-acento-botones(href="https://csrc.nist.gov/publications/sp" target="_blank")
              span Ingresar
              i.fas.fa-link


    
      
</template>

<script>
export default {
  name: 'Tema4',
  components: {},
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
.tabs-a__tab
  background-color: #E8E8E8
</style>
