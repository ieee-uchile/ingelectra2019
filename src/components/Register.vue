<template>
  <section>
    <v-parallax src="../assets/grid-3230205_1920.jpg" height="100">
      <v-layout
        column
        align-center
        justify-center
        class="white--text"
      >
        <h1 class="black--text display-1 text-center">REGISTRO</h1>
      </v-layout>
    </v-parallax>
    <!-- Event info -->
    <v-layout column wrap class="my-12" align-center>
      <v-flex xs12>
        <v-simple-table class="md12">
          <thead>
            <tr>
              <th class="text-left">PARTICIPANTE</th>
              <th class="text-left">PRECIO (CLP)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Estudiantes membresía IEEE</td>
              <td>20.000</td>
            </tr>
            <tr>
              <td>Estudiantes</td>
              <td>25.000</td>
            </tr>
            <tr>
              <td>Profesionales con membresía IEEE</td>
              <td>35.000</td>
            </tr>
            <tr>
              <td>Profesionales</td>
              <td>40.000</td>
            </tr>
            <tr>
              <td>Estudiantes UChile</td>
              <td>15.000</td>
            </tr>
            <tr>
              <td>Estudiantes UChile (No incluye almuerzos)</td>
              <td>40.000</td>
            </tr>
          </tbody>
        </v-simple-table>
      </v-flex>
      <div class="black--text mt-3 text-center">Incluye coffees y almuerzos</div>

    </v-layout>

  </section>

</template>
