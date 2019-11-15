<template>
  <section>
    <v-parallax src="../assets/grid-3230205_1920.jpg" height="600">
      <v-layout
        column
        align-center
        justify-center
        class="white--text"
      >
        <img src="../assets/Ingelectra_logo.png" alt="Vuetify.js" height="300">
        <h1 class="black--text mb-2 display-1 text-center">AVANZANDO A UN FUTURO SOSTENIBLE</h1>
        <div class="black--text subheading mb-4 text-center">

          <v-list-item-group  v-model="item" color="primary">
            <v-list-item>
              <v-list-item-icon>
                <v-icon x-large color="#099ec8">mdi-update</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>
                  <b>Dada la situación nacional y con el fin de precautelar la seguridad</br>
                    y el bienestar de las/los participantes, la organización de INGELECTRA 2019 </br>
                    considera prudente y necesario posponer el evento. Publicaremos por este medio la nueva fecha. </b> </br>
                  Para mas información comunicarse con <a href="mailto:name@email.com">ramauchile@ieee.org</a>
                 </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </div>

        <v-btn
          class="mt-12"
          color="#099ec8"
          dark
          large
          :href="programa"
          target='_blank'
        >
          Programa
        </v-btn>
      </v-layout>
    </v-parallax>

    <!-- Event Info -->
    <v-layout column wrap class="my-12" align-center>
      <v-flex xs12 sm4 class="my-4">
        <div class="text-center">
          <h2 class="headline">INGELECTRA 2019</h2>
          <span class="subheading">
            <strike>27, 28 Y 29 NOVIEMBRE, SANTIAGO, CHILE</strike>
          </span>
        </div>
      </v-flex>
      <v-flex xs12>
        <v-container grid-list-xl>
          <v-layout row wrap align-center>
            <v-flex xs12 md4>
              <v-card flat class="transparent">
                <v-card-text class="text-center">
                  <v-icon x-large color="#099ec8">mdi-history</v-icon>
                </v-card-text>
                <v-card-title primary-title class="layout justify-center">
                  <div class="headline text-center">Historia</div>
                </v-card-title>
                <v-card-text class="text-justify">
                  INGELECTRA nace el año 1984 en el sur de Chile como un seminario de estudiantes de
                  ingeniería, impulsado por la Universidad Austral de Chile en su primera versión.
                </v-card-text>
              </v-card>
            </v-flex>
            <v-flex xs12 md4>
              <v-card flat class="transparent">
                <v-card-text class="text-center">
                  <v-icon x-large color="#099ec8">mdi-transit-connection-variant</v-icon>
                </v-card-text>
                <v-card-title primary-title class="layout justify-center">
                  <div class="headline">Evolución</div>
                </v-card-title>
                <v-card-text  class="text-justify">
                  En el transcurso de los años, INGELECTRA se ha convertido en una tradición que se lleva a cabo
                  una vez al año, por lo general en Agosto, convocando a los estudiantes de las ingenierías
                  afines al IEEE (Institute of Electrical and Electronic Engineers).
                </v-card-text>
              </v-card>
            </v-flex>
            <v-flex xs12 md4>
              <v-card flat class="transparent">
                <v-card-text class="text-center">
                  <v-icon x-large color="#099ec8">mdi-account-switch</v-icon>
                </v-card-text>
                <v-card-title primary-title class="layout justify-center">
                  <div class="headline text-center">Desafíos</div>
                </v-card-title>
                <v-card-text  class="text-justify">
                  INGELECTRA tiene como desafío potenciar diferentes áreas del conocimiento acordes a
                  las nuevas exigencias del país ante el consenso internacional en el que se inserta Chile a
                  través de tratados con Europa, Norteamérica y Asia, exigen capacidad de innovación y
                  preparación de recursos humanos altamente especializados.
                </v-card-text>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </v-flex>
    </v-layout>
    <!-- Sponsors -->
    <v-parallax src="../assets/the-polygon-1562743.jpg" height="600">
      <v-layout column wrap class="my-12" align-center>
        <v-flex xs12>
          <v-container grid-list-xl>
            <v-layout row wrap align-center>
              <v-flex xs12 md2>
                  <!-- Content  rama.jpg -->
                  <div class="black--text heading mb-4 text-center font-weight-bold ">ORGANIZADORES</div>
                <a href="#">
                  <img src="../assets/rama.png" alt="Organizadores" height="100%" width="100%">
                </a>
              </v-flex>
              <v-flex xs12 md3>
                <!-- Content -->
                <div class="black--text heading text-center font-weight-bold">COLABORADORES</div>
                <a href="#">
                  <img src="../assets/ceie.png" alt="Organizadores" height="20%" width="50%">
                </a>
                <a href="#">
                  <img src="../assets/ET.png" alt="Organizadores" height="20%" width="50%">
                </a>
                <a href="http://ingenieria.uchile.cl/" target="_blank">
                  <img src="../assets/fcfm_die_png.png" alt="FCFM" height="20%" width="100%">
                </a>
                <a href="https://www.ieee.org/" target="_blank">
                  <img src="../assets/ieee.png" alt="IEEE" height="20%" width="100%">
                </a>
              </v-flex>
              <v-flex xs12 md2>
                <!-- Content -->
                <div class="black--text heading text-center font-weight-bold">PLATINUM SPONSORS</div>
                <a href="https://www.isci.cl/" target="_blank">
                  <img src="../assets/ISCI.png" alt="ISCI" height="100%" width="100%">
                </a>
              </v-flex>
              <v-flex xs12 md3>
                <!-- Content -->
                <div class="black--text heading text-center font-weight-bold mb-3">SILVER SPONSORS</div>
                <a href="https://www.nic.cl/" target="_blank">
                  <img src="../assets/Logo_Nic_Chile.png" alt="NIC CHILE" height="20%" width="100%">
                </a>
                <a href="http://prontus.codelco.cl/" target="_blank">
                  <img src="../assets/codelco.png" alt="CODELOCO" height="20%" width="60%">
                </a>
              </v-flex>
              <v-flex xs12 md2>
                <!-- Content -->
                <div class="black--text heading text-center font-weight-bold">BRONZE SPONSORS</div>
                <a href="http://www.uchile.cl/portal/investigacion/centros-y-programas/centros-de-estudio/113400/centro-de-energia" target="_blank">
                  <img src="../assets/enegia.png" alt="ISCI" height="100%" width="100%">
                </a>
                <a href="https://ieeechile.cl/" target="_blank">
                  <img src="../assets/ieeechile.png" alt="ISCI" height="100%" width="100%">
                </a>
                <a href="https://new.abb.com/service/es/training/abb-university/chile" target="_blank">
                  <img src="../assets/abb.png" alt="IEEE" height="20%" width="100%">
                </a>
              </v-flex>
            </v-layout>
          </v-container>
        </v-flex>
      </v-layout>
    </v-parallax>
  </section>
</template>
<script>
export default {
  name: 'Papers',
  data: () => ({
    programa:`${process.env.BASE_URL}IngelectraPrograma.pdf`,
    item:0,
  }),
};
</script>
