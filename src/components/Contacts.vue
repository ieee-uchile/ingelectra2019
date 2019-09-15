<template >
  <section>
    <v-container grid-list-xl>
      <v-layout row wrap justify-center class="my-12">
        <v-flex xs12 sm4>
          <v-card flat class="transparent">
            <v-card-title primary-title class="layout justify-center">
              <div class="headline">Rama IEEE Universidad de Chile</div>
            </v-card-title>
            <v-card-text>
              Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare.
              Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
              Nullam in aliquet odio. Aliquam eu est vitae tellus bibendum tincidunt. Suspendisse potenti.
            </v-card-text>
          </v-card>
        </v-flex>
        <v-flex xs12 sm4 offset-sm1>
          <v-card flat class="transparent">
            <v-card-title primary-title class="layout justify-center">
              <div class="headline">Contáctenos</div>
            </v-card-title>
            <v-card-text>
              Si desea mas información sobre el evento no dude en contactarnos.
            </v-card-text>
            <v-list class="transparent">
              <v-list-item>
                <v-list-item-action>
                  <v-icon  color="#099ec8">mdi-phone</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                  <v-list-item-title>00-000-00000</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-action>
                  <v-icon  color="#099ec8">mdi-map-marker</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                  <v-list-item-title>Santiago, CH</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-action>
                  <v-icon  color="#099ec8">mdi-email</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                  <v-list-item-title>ramauchile@ieee.org</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </section>

</template>
