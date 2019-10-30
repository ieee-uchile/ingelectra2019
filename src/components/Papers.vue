<template>
  <section>
    <v-parallax src="../assets/grid-3230205_1920.jpg" height="100">
      <v-layout
        column
        align-center
        justify-center
        class="white--text"
      >
        <h1 class="black--text display-1 text-center"> CALL FOR PAPERS</h1>
      </v-layout>
    </v-parallax>
    <v-layout column wrap class="my-12" align-center>
      <v-flex xs12 sm4 class="my-4">
        <div class="text-center">
          <span class="subheading">
            <v-list-item-group v-model="itemlist" color="primary">
              <v-list-item
                v-for="(item, i) in items"
                :key="i"
              >
                <v-list-item-icon>
                  <v-icon v-text="item.icon"  x-large color="#099ec8"></v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title v-text="item.text"></v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
            <v-list-item-group  v-model="item" color="primary">
              <v-list-item>
                <v-list-item-icon>
                  <v-icon x-large color="#099ec8">mdi-bulletin-board</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title>
                     Los papers aceptados y presentados en <br>
                     <b>INGELECTRA2019</b> que cumplan los <br>
                     estándares de publicación se indexarán en la<br>
                     <b>base de datos IEEEXplore</b>
                   </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
          </span>
        </div>
      </v-flex>
      <v-flex xs12>
        <v-container grid-list-xl>
          <v-layout row wrap align-center>
            <v-flex xs12 md2>

            </v-flex>
            <v-flex xs12 md3>
              <v-card flat class="transparent">
                <v-card-text class="text-center">
                  <v-icon x-large color="#099ec8">mdi-information-outline</v-icon>
                </v-card-text>
                <v-card-title primary-title class="layout justify-center">
                  <div class="headline">Sobre el evento</div>
                </v-card-title>
                <v-card-text class="text-justify">
                  <b> INGELECTRA 2019 </b>  es una Conferencia oficial de IEEE. Es organizada por la Rama
                  Estudiantil IEEE de la Universidad de Chile, Facultad de Ciencias Físicas y
                  Matemáticas de la Universidad de Chile, IEEE Chile Sección Centro, IEEE
                  Conference Record: <b>48985</b>
                </v-card-text>
              </v-card>
            </v-flex>
            <v-flex xs12 md3>
              <v-card flat class="transparent">
                <v-card-text class="text-center">
                  <v-icon x-large color="#099ec8">mdi-format-list-checks</v-icon>
                </v-card-text>
                <v-card-title primary-title class="layout justify-center">
                  <div class="headline">Temáticas principales</div>
                </v-card-title>
                <v-card-text  >
                  &bull; Communication, Networking and Broadcast Technologies <br>
                  &bull; Power Energy and Industry Applications <br>
                  &bull; Robotics and Control Systems <br>
                  &bull; Artificial Intelligence <br>
                  &bull; Biomedical Engineering <br>
                </v-card-text>
              </v-card>
            </v-flex>
            <v-flex xs12 md3>
              <v-card flat class="transparent">
                <v-card-text class="text-center">
                  <v-icon x-large color="#099ec8">mdi-format-page-break</v-icon>
                </v-card-text>
                <v-card-title primary-title class="layout justify-center">
                  <div class="headline text-center">Formato de los documentos</div>
                </v-card-title>
                <v-card-text  >
                  &bull; Los papers pueden ser escritos en inglés o español <br>
                  &bull; El abstract debe estar en inglés <br>
                  &bull; El formato del paper son max. 6 páginas <br>
                  &bull; IEEE Paper template <a href="https://www.ieee.org/conferences/publishing/templates.html" target="_blank">descarga en este enlace</a> <br>
                </v-card-text>
              </v-card>
            </v-flex>
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
  }),
};
</script>
