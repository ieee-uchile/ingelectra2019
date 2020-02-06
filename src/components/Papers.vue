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
                  <v-list-item-title v-html="item.text"></v-list-item-title>
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

                    Los trabajos aceptados se someterán  <br>
                    para su publicación en <b>IEEE Xplore</b>

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
                  <b> INGELECTRA XXVIII </b>  es una Conferencia oficial de IEEE. Es organizada por la Rama
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
                  <div class="headline text-center">Formato</div>
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
      { text: '<strike> Fecha límite (Deadline) 3 de noviembre 2019 </strike>', icon: 'mdi-clock' },
      { text: 'Fecha límite (Deadline) 26 de enero 2020', icon: 'mdi-clock' },
      { text: 'Enlance para envío de papers <a href="https://easychair.org/conferences/?conf=ingelectra2019" target="_blank">EasyChair</a>',
      icon: 'mdi-email-send-outline' },
      { text: 'Notificación a los autores 6 de marzo 2020', icon: 'mdi-inbox' },
    ],
    item:0,
  }),
};
</script>
