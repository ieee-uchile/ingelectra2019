<template>
  <section>
    <v-parallax src="../assets/grid-3230205_1920.jpg" height="100">
      <v-layout
        column
        align-center
        justify-center
        class="white--text"
      >
        <h1 class="black--text display-1 text-center">VENUE</h1>
      </v-layout>
    </v-parallax>
    <v-layout column wrap class="my-12" align-center>

      <v-flex xs12>
        <v-container grid-list-xl>
          <v-layout row wrap align-center>
            <v-flex xs1>        </v-flex>
            <v-flex xs3>
              <v-card flat class="transparent">
                <v-card-text class="text-center">
                  <v-icon x-large color="#099ec8">mdi-map</v-icon>
                </v-card-text>
                <v-card-text >
                  <b>Miércoles 1 - Viernes 3, Abril, 2020</b> <br>
                  &bull; Facultad de Ciencias Físicas y Matemáticas, Universidad de Chile<br>
                  &bull; Beauchef 851, Santiago, Región Metropolitana <br>
                </v-card-text>
              </v-card>
            </v-flex>
            <v-flex xs6>
              <v-card flat class="transparent">
                    <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13315.019804569172!2d-70.6618785!3d-33.4556903!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662c503414a845f%3A0x888a0eaae005a3eb!2sFaculty%20of%20Physical%20and%20Mathematical%20Sciences%20of%20the%20University%20of%20Chile!5e0!3m2!1sen!2scl!4v1570736862452!5m2!1sen!2scl"
                    width="800"
                    height="500"
                    frameborder="0" style="border:0;"
                    allowfullscreen="">
                    </iframe>
              </v-card>
            </v-flex>
            <v-flex xs1>        </v-flex>
          </v-layout>
        </v-container>
      </v-flex>
    </v-layout>

  </section>

</template>
