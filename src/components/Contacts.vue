<template >
  <section>
    <v-container grid-list-xl>
      <v-layout row wrap justify-center class="my-12">
        <v-flex xs12 sm5>
          <v-card flat class="transparent">
            <v-card-title primary-title class="layout justify-center">
              <div class="headline">Rama Estudiantil IEEE Universidad de Chile</div>
            </v-card-title>
            <v-card-text  class="text-justify">
              Somos una comunidad oficialmente constituida ante el Institute of Electrical and Electronics Engineers (IEEE),
              conformado por estudiantes de diferentes áreas académicas de pregrado y postgrado del Departamento de Ingeniería
              Eléctrica de la Facultad de Ciencias Físicas y Matemáticas de la Universidad de Chile, nuestros objetivos principales
              son la permanente actualización profesional, la investigación, el desarrollo e implementación de nuevas tecnologías.
            </v-card-text>
          </v-card>
        </v-flex>
        <v-flex xs12 sm4 offset-sm1>
          <v-card flat class="transparent">
            <v-card-title primary-title class="layout justify-center">
              <div class="headline">Contáctenos</div>
            </v-card-title>
            <v-card-text>
              Si desea más información sobre el evento no dude en contactarnos.
            </v-card-text>
            <v-list class="transparent">

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
