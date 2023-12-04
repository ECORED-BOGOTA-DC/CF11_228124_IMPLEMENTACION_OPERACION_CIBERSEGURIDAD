<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Análisis e interpretación de resultados
    
    .row
      .col-auto.d-none.d-md-block(style="place-self:center;" data-aos="fade-right")
        figure
          img(src="@/assets/curso/tema1/1.svg" alt="Imagen decorativa")
      .col(style="place-self:center;" data-aos="fade-left")
        p En ciberseguridad, posterior a un proceso de evaluación de la seguridad digital, se debe realizar el #[strong análisis y la interpretación] de resultados de evaluación, bien pueden ser resultados de auditorías, monitoreos o revisiones; esto permite plantear o proponer actividades de mejora, las cuales deben ser revisadas, aceptadas y ejecutadas por las partes responsables de las mismas.
        p.mb-0 A continuación, una clave conceptual para diferenciar y comprender ambas acciones (análisis e interpretación):
    
    TabsC.color-secundario.mt-5
      .py-3.py-md-4(titulo="Análisis")
        .row.col-xl-11.m-auto
          .col-md-6.mb-4.mb-md-0.col-lg-7(style="place-self:center;")
            p Consiste en el proceso de estudiar los resultados obtenidos del proceso de evaluación de la ciberseguridad, buscando determinar qué fallas o debilidades se están presentando y deben ser corregidas o, también, los elementos que al respecto se deben mejorar.
          .col-md-6.col-lg-5(style="place-self:center;")
            figure
              img(src='@/assets/curso/tema1/2.png' alt="Imagen decorativa")
      .py-3.py-md-4(titulo="El análisis de resultados")
        .row.col-xl-11.m-auto
          .col-md-6.mb-4.mb-md-0.col-lg-7(style="place-self:center;")
            p Permite entender el panorama actual de ciberseguridad a través del estudio de los datos e información y tener una visión clara sobre las acciones adecuadas que se deben planificar y realizar para lograr mejorar los procesos de seguridad digital.
          .col-md-6.col-lg-5(style="place-self:center;")
            figure
              img(src='@/assets/curso/tema1/3.png' alt="Imagen decorativa")
      .py-3.py-md-4(titulo="Interpretación")
        .row.col-xl-11.m-auto
          .col-md-6.mb-4.mb-md-0.col-lg-7(style="place-self:center;")
            p La interpretación de resultados de ciberseguridad está enfocada a determinar, a partir de resultados de evaluación de la seguridad digital, si se está cumpliendo con los objetivos y metas propuestos en los indicadores de gestión de la ciberseguridad o indicadores de seguridad digital. Esto permite dar a conocer a la alta gerencia o altos directivos sobre el estado de la ciberseguridad en la organización, a partir de resultados de evaluación.
          .col-md-6.col-lg-5(style="place-self:center;")
            figure
              img(src='@/assets/curso/tema1/4.png' alt="Imagen decorativa")
      .py-3.py-md-4(titulo="Interpretación objetiva")
        .row.col-xl-11.m-auto
          .col-md-6.mb-4.mb-md-0.col-lg-7(style="place-self:center;")
            p Las interpretaciones deben ser objetivas y conformes al contexto de la organización, de tal forma que se pueda dar a conocer, a las partes interesadas, los aspectos fuertes y aspectos por mejorar de la ciberseguridad, por medio de una comunicación clara y asertiva.
          .col-md-6.col-lg-5(style="place-self:center;")
            figure
              img(src='@/assets/curso/tema1/5.png' alt="Imagen decorativa")
    
    Separador

    .titulo-segundo(data-aos="zoom-in-right")
      h2#t_1_1 1.1. Actividades objeto de análisis

    .row
      .col-lg-4.mb-4.mb-lg-0(data-aos="fade-right" style="place-self:center;")
        figure.m-auto.col-7.col-md-7.col-lg-12
          img(src="@/assets/curso/tema1/6.png" alt="Imagen decorativa")
      .col-lg-8(data-aos="fade-left" style="place-self:center;")
        p Los análisis se hacen sobre resultados de evaluación realizados a procedimientos, actividades de proceso de seguridad digital o controles de ciberseguridad, así como a las auditorías de modelos de seguridad o sistemas de gestión de seguridad de la información.
        .cajon.mt-4.color-acento-contenido.p-4(style="background-color:#FFE8B3;")
          p.mb-0 Las actividades objeto de análisis se pueden agrupar en monitoreo de políticas y controles, y en auditorías de seguridad de la información y ciberseguridad. Y, como se mostrará ahora, estos dos grupos tienen sus especificidades y particularidades importantes. #[strong ¡Conózcalos!]
    
    .col-xl-8.m-auto.mt-5
      .p-4.p-xl-5(style="background-color:#F4EDFE;")
        .row
          .col-auto.d-none.d-lg-block.ps-lg-0(data-aos="fade-up")
            figure
              img(src="@/assets/curso/tema1/7.svg" alt="Imagen decorativa")
          .col
            .row(data-aos="zoom-in-up")
              .col-auto(style="place-self:center;")
                figure
                  img(src="@/assets/curso/tema1/8.svg" alt="Imagen decorativa")
              .col(style="place-self:center;")
                h5 Monitoreo de políticas y controles
                p.mb-0 Consiste en las actividades de revisión del cumplimiento de políticas y controles de seguridad digital, donde se obtienen resultados para que, posteriormente, sean analizados y se logren determinar acciones para la mejora continua. 
            .row.mt-5(data-aos="zoom-in-up")
              .col-auto(style="place-self:center;")
                figure
                  img(src="@/assets/curso/tema1/9.svg" alt="Imagen decorativa")
              .col(style="place-self:center;")
                h5 Proceso interno
                p.mb-0 El monitoreo de políticas y controles suele ser un proceso interno que es ejecutado por los equipos de seguridad al interior de las organizaciones, a los cuales les permite estar mejor preparados para procesos de revisión y auditoría tanto internas como externas.
            .row.mt-5(data-aos="zoom-in-up")
              .col-auto(style="place-self:center;")
                figure
                  img(src="@/assets/curso/tema1/10.svg" alt="Imagen decorativa")
              .col(style="place-self:center;")
                h5 Auditorías de seguridad de la información y ciberseguridad
                p.mb-0 Consisten en revisión de aspectos de seguridad y ciberseguridad, con base en estándares o marcos de referencia, principalmente, los de ISO o NIST; tal es el caso de ISO/IEC 27001 o NIST #[em Cybersecurity Framework].
            .row.mt-5(data-aos="zoom-in-up")
              .col-auto(style="place-self:center;")
                figure
                  img(src="@/assets/curso/tema1/11.svg" alt="Imagen decorativa")
              .col(style="place-self:center;")
                h5 Procesos internos o externos
                p.mb-0 Las auditorías pueden darse de manera interna o externa, en la primera se busca el mejoramiento de los procesos internos en busca de la calidad. En las auditorías externas, las revisiones pueden realizarse con el fin de lograr un otorgamiento de calidad que dé un reconocimiento, el cual aumenta la imagen reputacional del proceso o de la organización. 
            .row.mt-5(data-aos="zoom-in-up")
              .col-auto(style="place-self:center;")
                figure
                  img(src="@/assets/curso/tema1/12.svg" alt="Imagen decorativa")
              .col(style="place-self:center;")
                h5 Solicitud de las auditorías
                p.mb-0 Además de ser solicitadas por la misma organización, las auditorías externas pueden presentarse por solicitud de entes regulatorios o de control, y su enfoque es revisar el cumplimiento legal de las organizaciones con las leyes vigentes.
            .row.mt-5(data-aos="zoom-in-up")
              .col-auto(style="place-self:center;")
                figure
                  img(src="@/assets/curso/tema1/13.svg" alt="Imagen decorativa")
              .col(style="place-self:center;")
                h5 Resultados de las auditorías
                p.mb-0 Los resultados de evaluación de auditorías pueden arrojar no conformidades u observaciones de mejora, las cuales son importantes de analizar para la comprensión de las falencias de cumplimiento y los aspectos que se deben mejorar.

    Separador

    .titulo-segundo(data-aos="zoom-in-right")
      h2#t_1_2 1.2. Informe de auditoría

    .row
      .col-lg-8.mb-4.mb-lg-0(data-aos="fade-right" style="place-self:center;")
        p Consiste en un documento de informe donde se describen los aspectos de observaciones de mejora o no conformidades detectadas, según los objetivos y el alcance de un proceso de auditoría. El informe debe ser claro, conciso, constructivo y oportuno; su desarrollo debe ayudar a verificar el cumplimiento de sistemas, procesos, políticas, estándares, regulaciones, entre otros aspectos que se requieran revisar dentro una organización.
        .cajon.mt-4.color-acento-contenido.p-4(style="background-color:#FFE8B3;")
          p.mb-0 El informe de auditoría se convierte en un mecanismo objetivo para comunicar sobre las no conformidades y observaciones de mejora a las gerencias de áreas y alta gerencia dentro de una organización. Dichos informes deben ser precisos y detallados, de tal manera que se pueda informar sobre las fallas encontradas y sus respectivos soportes o evidencias. 
      .col-lg-4(data-aos="fade-left" style="place-self:center;")
        figure.m-auto.col-7.col-md-7.col-lg-12
          img(src="@/assets/curso/tema1/14.png" alt="Imagen decorativa")
    
    p.mt-4(data-aos="fade-right") La estructura base de un informe de auditoría cuenta con las siguientes partes:

    .col-xl-10.m-auto.mt-4
      .p-4.p-lg-5(style="background-color:#F1EBF4;border-radius:7px;" data-aos="zoom-in-up")
        ul.lista-ul.mb-0
          li.d-flex
            i.fas.fa-angle-right
            | Aspectos preliminares: propósito, objetivos, alcance de auditoría, métodos, enfoque.
          li.d-flex
            i.fas.fa-angle-right
            | Características generales: marco regulatorio y las características generales de la organización a evaluar.
          li.d-flex
            i.fas.fa-angle-right
            | Resultados de auditoría: no conformidades y observaciones de mejora encontradas.
          li.mb-0.d-flex
            i.fas.fa-angle-right
            | Disposiciones finales: conclusiones y recomendaciones.

  



      
</template>

<script>
export default {
  name: 'Tema1',
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
.tabs-c.color-secundario .tabs-c__tab--active span
  font-weight: bold
</style>
