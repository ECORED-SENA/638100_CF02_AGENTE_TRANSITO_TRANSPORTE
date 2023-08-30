<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Procedimiento de la cadena de custodia
    
    .row
      .col-lg-10.col-md-9.mb-4(data-aos="fade-right")
        p Se considera cadena de custodia a todos los procedimientos y los protocolos que se establecen para preservar y mantener la autenticidad de todo aquello que se considera elementos del material probatorio y/o evidencia física dentro de la investigación criminal.
      .col-lg-2.col-md-3.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/temas/t3/img.svg', alt='')
    
    .row.justify-content-center
      .col-lg-4.col-md-6.mb-4
        .tarjeta.h-100.p-4.fondo-hover
          img.mb-3(src='@/assets/curso/temas/t3/ico.svg', alt='' style="width: 90px;")
          p La cadena de custodia la componen los funcionarios y todas las personas que tuvieron relación directa con los elementos en cualquier etapa desde su recolección y durante las etapas que conforman el proceso. 
      .col-lg-4.col-md-6.mb-4
        .tarjeta.h-100.p-4.fondo-hover
          img.mb-3(src='@/assets/curso/temas/t3/ico.svg', alt='' style="width: 90px;")
          p La cadena de custodia inicia con la recolección por parte de la autoridad que desempeña esta actividad en el lugar de los hechos o fuera de este, desde que se tiene conocimiento del hecho punible y finaliza con el juez, que es el destinatario final o los servidores judiciales que someten la prueba a los análisis pertinentes.
      .col-lg-4.col-md-6.mb-4
        .tarjeta.h-100.p-4.fondo-hover
          img.mb-3(src='@/assets/curso/temas/t3/ico.svg', alt='' style="width: 90px;")
          p Las pruebas que se hallan deben ser registradas, fijadas en primer lugar, luego su recolección exige formalismos de identificación, naturaleza, lugar donde fueron encontradas y el funcionario o la persona que las recoge, así como también cualquier cambio que se haya presentado durante su tratamiento.  
    
    p.mb-4(data-aos="fade") El sistema de cadena de custodia es un proceso continuo y documentado aplicado a los EMP y EF por parte de los servidores públicos y particulares, que con ocasión a sus funciones deben garantizar su autenticidad y capacidad demostrativa, mientras que la autoridad competente ordena su disposición final (Fiscalía General de la Nación, 2018, p. 11). 
      

    Separador 
    
    #t_3_1
    .titulo-segundo.color-acento-contenido(data-aos="fade")
      h2 3.1 Elementos materiales de prueba y evidencia física

    .row.justify-content-center
      .col-lg-7.mb-4(data-aos="fade-right")
        .bg-blue.p-4.mb-4
          p.mb-0 Según la Defensoría del Pueblo los elementos materiales probatorios son los productos o instrumentos del delito que pueden ser presentados en el juicio oral. Toda cosa tangible con la que se ha cometido el hecho es resultado de este y que contribuye a obtener información para el esclarecimiento del mismo (Defensoría del Pueblo, 2014).
        p Por su parte, Bedoya (2008) los define como el elemento material probatorio o evidencia física, entonces, será toda cosa u objeto que directa o indirectamente pueda aportar información acerca de uno o varios aspectos estructurales del delito o de la identidad del acusado, es decir, la cosa u objeto que por sí solo tenga la cualidad demostrativa o probatoria de las circunstancias en las que ocurrió un delito (Sierra, 2008). 
      .col-lg-5.col-md-8.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/temas/t3/img2.png', alt='')

    h5.t-gold(data-aos="fade") El Código de Procedimiento Penal Ley 906 de 2004 en su Artículo 275 establece los siguientes elementos materiales probatorios así:  

    .row.fondo-t4.align-items-center.pt-3.mb-4
      .col-lg-12.col-12.px-lg-5.px-4
        .row.justify-content-center.align-items-center

          .col-md-6.col-lg-4.mb-4.mb-md-0.d-lg-flex.d-none(data-aos="fade-right")
            img(src='@/assets/curso/temas/t3/img3.png', alt='')
          .col-md-11.col-lg-8.mb-4.mb-lg-0(data-aos="fade-left")
            .tarjeta.bg-white.box-shadow.p-4
              SlyderA(tipo="b")
                .row.justify-content-center.p-md-4.py-md-3
                  h5.t-gold Huellas
                  .col-md-10.col-lg-6.mb-4.mb-lg-0
                    p Líneas horizontales o diagonales en dirección del impacto, rastros, manchas, residuos, vestigios y similares, dejados por la ejecución de la actividad delictiva.
                  .col-md-10.col-lg-6.mb-4.mb-lg-0
                    img(src='@/assets/curso/temas/t3/slide1.png', alt='')
                .row.justify-content-center.p-md-4.py-md-3
                  h5.t-gold Armas
                  .col-md-10.col-lg-6.mb-4.mb-lg-0
                    p De fuego, instrumentos, objetos y cualquier otro medio utilizado para la ejecución de la actividad delictiva.
                  .col-md-10.col-lg-6.mb-4.mb-lg-0
                    img(src='@/assets/curso/temas/t3/slide2.png', alt='')
                .row.justify-content-center.p-md-4.py-md-3
                  h5.t-gold Dinero
                  .col-md-10.col-lg-6.mb-4.mb-lg-0
                    p Bienes y otros efectos provenientes de la ejecución de la actividad delictiva.
                  .col-md-10.col-lg-6.mb-4.mb-lg-0
                    img(src='@/assets/curso/temas/t3/slide3.png', alt='')
                .row.justify-content-center.p-md-4.py-md-3
                  h5.t-gold Elementos materiales descubiertos
                  .col-md-10.col-lg-6.mb-4.mb-lg-0
                    p Recogidos y asegurados en el desarrollo de la diligencia investigativa de registro y allanamiento, inspección corporal y registro personal.
                  .col-md-10.col-lg-6.mb-4.mb-lg-0
                    img(src='@/assets/curso/temas/t3/slide4.png', alt='')
                .row.justify-content-center.p-md-4.py-md-3
                  h5.t-gold Documentos de toda índole
                  .col-md-10.col-lg-6.mb-4.mb-lg-0
                    p Hallados en la diligencia investigativa de inspección o que han sido entregados voluntariamente por quien los tenía en su poder o que han sido abandonados allí.
                  .col-md-10.col-lg-6.mb-4.mb-lg-0
                    img(src='@/assets/curso/temas/t3/slide5.png', alt='')
                .row.justify-content-center.p-md-4.py-md-3
                  h5.t-gold Elementos materiales obtenidos mediante grabación
                  .col-md-10.col-lg-6.mb-4.mb-lg-0
                    p Filmación, fotografía, video o cualquier otro medio avanzado, utilizados como cámaras de vigilancia en un recinto cerrado o en un espacio público.
                  .col-md-10.col-lg-6.mb-4.mb-lg-0
                    img(src='@/assets/curso/temas/t3/slide6.png', alt='')
                .row.justify-content-center.p-md-4.py-md-3
                  h5.t-gold Mensaje de datos
                  .col-md-10.col-lg-6.mb-4.mb-lg-0
                    p Como el intercambio electrónico de datos, Internet, correo electrónico, telegrama, télex, telefax o similar, regulados por la Ley 527 de 1999 o las normas que la sustituyan, adicionen o reformen.
                  .col-md-10.col-lg-6.mb-4.mb-lg-0
                    img(src='@/assets/curso/temas/t3/slide7.png', alt='')
                .row.justify-content-center.p-md-4.py-md-3
                  h5.t-gold Demás elementos materiales similares 
                  .col-md-10.col-lg-6.mb-4.mb-lg-0
                    p Descubiertos, recogidos y custodiados por el Fiscal General o por el fiscal directamente o por conducto de los servidores de la policía judicial o de peritos del Instituto Nacional de Medicina Legal y Ciencias Forenses o de los laboratorios aceptados oficialmente (Congreso de la República, 2004).
                  .col-md-10.col-lg-6.mb-4.mb-lg-0
                    img(src='@/assets/curso/temas/t3/slide8.png', alt='')


    Separador 
    
    #t_3_2
    .titulo-segundo.color-acento-contenido(data-aos="fade")
      h2 3.2 Requisitos de la cadena de custodia 
    
    .row
      .col-lg-6.col-md-12.mb-4(data-aos="fade-right")
        .bg-yellow2.p-4.mb-4.h-100.d-flex.align-items-center
          .row.align-items-center
            .col-md-2.col-4.mb-3.mb-md-0
              img(src='@/assets/curso/temas/t3/ico2.svg', alt='')
            .col-md-10
              p.mb-0 La cadena de custodia es el conjunto de procedimientos encaminados a asegurar y demostrar la autenticidad de los elementos materiales probatorios y la evidencia física.       
      .col-lg-6.col-md-12.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/temas/t3/img4.png', alt='')


    p.mb-4(data-aos="fade") El manual del sistema de cadena de custodia de la Fiscalía General de Nación estableció  9 requisitos de validez, los cuales se configuran en un modelo de definición necesario para las distintas etapas de los EMP y EF, así:

    figure(data-aos="fade-down")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/DenZUtZg86g" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video. Requisitos de la cadena de custodia 

    
    Separador 
    
    #t_3_3
    .titulo-segundo.color-acento-contenido(data-aos="fade")
      h2 3.3 Formato de primer responsable
    
    p.mb-4(data-aos="fade") El formato de policía judicial FPJ-4 actuación del primer responsable es el mecanismo para documentar las actuaciones de la autoridad encargada de asegurar el lugar de los hechos y preservar los elementos materiales de prueba y evidencia física en la comisión de una conducta punible; para su diligenciamiento el funcionario no requiere formación en policía judicial, pero sí mucha responsabilidad a la hora de documentar y narrar los hechos.

    .row.fondo-t3.align-items-center
      .col-lg-12.col-12.px-lg-5.px-4
        .row.justify-content-center.align-items-center
          
          .row
            .col-lg-6.col-md-12.mb-4.order-2.order-lg-1(data-aos="fade-right")
              .bg-yellow2.p-4.mb-4.h-100.d-flex.align-items-center
                p.mb-0 Descargue el archivo que se propone enseguida; este contiene las indicaciones para el diligenciamiento del formato de Actuación del primer responsable. Preste atención a las partes que lo conforman, sus campos de diligenciamiento y algunos criterios para su uso.
            .col-lg-6.col-md-12.mb-4.order-1.order-lg-2(data-aos="fade-left")
              img(src='@/assets/curso/temas/t3/img5.png', alt='')

          .col-auto(data-aos="fade-down")
            a.anexo.mb-4(:href="obtenerLink('/downloads/Actuacion_del_primer_responsable.pdf')" target="_blank")
              .anexo__icono
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p.mb-0 #[b Anexo.] Actuación del primer responsable

    Separador 
    
    #t_3_4
    .titulo-segundo.color-acento-contenido(data-aos="fade")
      h2 3.4 Formato de registro de la cadena de custodia 
    
    .row.d-lg-flex.d-none
      p.mb-4(data-aos="fade") Es el documento físico donde se registran todas las acciones y los responsables que tienen relación con los elementos materiales de prueba o evidencia física, y el que data de continuidad, relativamente es un documento sencillo en su diligenciamiento. 
      .row
        .col-lg-6.col-md-12.mb-4(data-aos="fade-right")
          .bg-blue.p-4.py-lg-2.mb-4.h-100.d-flex.align-items-center
            p.mb-0 Como se verá a continuación, el formato se compone de dos partes, la primera es donde se registra la persona o las personas que tratan los EMP y EF en caso de ser diferente quien haya, recolecta o embala el elemento material de prueba; la segunda parte es el registro de los traslados de esos EMP y EF con las personas que participan en esos traslados y el motivo de la diligencia: 
        .col-lg-6.col-md-12.mb-4(data-aos="fade-left")
          img(src='@/assets/curso/temas/t3/img6.png', alt='')

    .row.d-block.d-lg-none
      .col-lg-6.col-md-12.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/temas/t3/img6.png', alt='')
      .col-lg-6.col-md-12.mb-4(data-aos="fade-left")
        p.mb-4(data-aos="fade") Es el documento físico donde se registran todas las acciones y los responsables que tienen relación con los elementos materiales de prueba o evidencia física, y el que data de continuidad, relativamente es un documento sencillo en su diligenciamiento. 
        .bg-blue.p-4.py-lg-2.mb-4.h-100.d-flex.align-items-center
          p.mb-0 Como se verá a continuación, el formato se compone de dos partes, la primera es donde se registra la persona o las personas que tratan los EMP y EF en caso de ser diferente quien haya, recolecta o embala el elemento material de prueba; la segunda parte es el registro de los traslados de esos EMP y EF con las personas que participan en esos traslados y el motivo de la diligencia: 
        


    .row.justify-content-center.mb-4
      .col-md-12.col-lg-10.box-shadow.px-0
        figure.mb-0
          img(src='@/assets/curso/temas/t3/fig.png', alt='Imagen del formato de registro de la cadena de custodia con todos sus campos de diligenciamiento entre los que se destacan La documentación del material de prueba y la Descripción de elementos materiales de prueba.')
        .bg-blue2.p-4.text-center.mt-0
          p.mb-0 Esta es la primera parte del formato donde se diligencian los datos del funcionario o los funcionarios y una descripción del EMP y EF.    

    .row.justify-content-center.mb-4
      .col-md-12.col-lg-10.box-shadow.px-0
        figure
          img(src='@/assets/curso/temas/t3/fig2.png', alt='Imagen de la segunda parte del formato de registro de la cadena de custodia con todos sus campos de diligenciamiento.')
        .bg-blue2.p-4.text-center.mt-0
          p.mb-0 La segunda parte de este formato se trata de registrar las personas involucradas en los traslados de los EMP y EF y el propósito de la diligencia.



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

<style lang="sass"></style>
