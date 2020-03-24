<template>
  <section>
    <v-parallax src="../assets/grid-3230205_1920.jpg" height="100">
      <v-layout
        column
        align-center
        justify-center
        class="white--text"
      >
        <h1 class="black--text display-1 text-center">VISITA TÉCNICA (Cancelada por COVID-19)</h1>
      </v-layout>
    </v-parallax>

    <v-layout column wrap class="my-12" align-center>

      <v-flex xs12>
        <v-container grid-list-xl>
          <v-layout row wrap align-center>
            <v-flex xs1>        </v-flex>
            <v-flex xs4>
              <v-card flat class="transparent">
                <v-card-text class="text-center">
                  <v-icon x-large color="#099ec8">mdi-map-marker</v-icon>
                  <v-icon x-large color="#099ec8">mdi-tools</v-icon>
                </v-card-text>
                <v-card-text class="text-justify">
                  Como parte de las actividades se tiene programada una visita técnica (aproximadamente en
                  la tarde del segundo día de la conferencia) a las instalaciones de ABB University Chile.
                  <br>
                  <br>
                  <a href="https://new.abb.com/service/es/training/abb-university/chile"  target="_blank">ABB University</a>
                   ofrece un amplio programa de formación basado en los productos,
                  soluciones y servicios de ABB, para asegurarle que su equipo tenga el conocimiento, las
                  herramientas y la capacidad de atender sus necesidades, y ayudarlo a alcanzar la óptima
                  eficiencia y performance en sus negocios.
                </v-card-text>
              </v-card>
            </v-flex>
            <v-flex xs6>
              <v-card flat class="transparent">
                <youtube :video-id="videoId" player-width="100%" player-height="500"></youtube>
              </v-card>
            </v-flex>
            <v-flex xs1>        </v-flex>
          </v-layout>
        </v-container>
      </v-flex>
    </v-layout>

  </section>

</template>
<script>
export default {
  name: 'Papers',
  data: () => ({
    items: [
      { text: 'Fecha límite (Deadline) 3 de noviembre 2019', icon: 'mdi-clock' },
      { text: 'Notificación a los autores 10 de noviembre', icon: 'mdi-inbox' },
    ],
    item:0,
    videoId:'15UWpIwqkCk'
  }),
};
</script>
