<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    
    p El accidente de tránsito es un evento que a cualquier persona le puede suceder, generalmente involuntario y generado al menos por un vehículo en movimiento, que causa daños a personas y/o bienes y afecta la circulación de los vehículos que se movilizan por la vía. 
    .row 
      .col-md-2.mb-4
        img(src="@/assets/curso/temas/img.svg", alt="")
      .col-md-10.mb-4
        p Se debe llamar inmediatamente a las autoridades que pueden ayudar, primero a la línea de emergencias (123), si es el caso, a la Policía de carreteras (#767) y a la aseguradora; describir detalladamente qué pasó en el accidente de tránsito e indicar la ubicación exacta donde sucedió, así la asistencia llegará al lugar del siniestro y se ajustará a lo que requieren las personas involucradas en este. Se debe aplicar los procedimientos del primer responsable de acuerdo con el manual del sistema de la cadena de custodia, recolectar evidencias y asegurar la escena.


    .row.justify-content-center
      .col-lg-12.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="Esquema general de este componente formativo, que enuncia las temáticas desarrolladas en el mismo y destaca aspectos clave estudiados: Tema central: Procedimientos del primer responsable en los accidentes de tránsito. Temas integradores: Tratamiento en el lugar de los hechos en los accidentes de tránsito: vincula atención a víctimas, recolección de información, entrevistas y testigos. Actuaciones del primer responsable: relacionado con la protección del lugar de los hechos. Procedimiento de la cadena de custodia: vincula elementos materiales de prueba, requisitos de la cadena de custodia, formato del primer responsable y formatos de registro de la cadena de custodia. Términos y definiciones: implica la terminología y conceptos clave del componente. Equipos y plataformas tecnológicas para el tránsito y el transporte: hace referencia a los mismos y su importancia en los procedimientos de primer responsable en accidentes de tránsito.")
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
