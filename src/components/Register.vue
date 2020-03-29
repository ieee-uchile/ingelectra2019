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
        <div class="black--text mt-3 text-center mb-4"> <v-icon  color="#099ec8">mdi-file-document-box-plus</v-icon>
        <router-link to="/charlas">Registro a charlas magistrales</router-link>


      </div>
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
              <td>0</td>
            </tr>
            <tr>
              <td>Estudiantes</td>
              <td>0</td>
            </tr>
            <tr>
              <td>Profesionales con membresía IEEE</td>
              <td>0</td>
            </tr>
            <tr>
              <td>Profesionales</td>
              <td>0</td>
            </tr>
            <tr>
              <td>Estudiantes UChile</td>
              <td>0</td>
            </tr>
            <tr>
              <td>Estudiantes UChile (No incluye almuerzos)</td>
              <td>0</td>
            </tr>
            <tr>
              <td>Autores (los autores pueden asociar máximo 1 paper a su registro)   <strong>*</strong> </td>
              <td>45.000</td>
            </tr>
          </tbody>
        </v-simple-table>
      </v-flex>
      <div class="black--text mt-3 text-center">
       <strike>   Incluye coffees y almuerzos.</strike>  <i> <br> <br>
         <strike>Los estudiantes y profesionales miembros de IEEE</strike>
        <br>  <strike>tienen descuentos de inscripción de acuerdo a la tabla que antecede.</strike>
        <br>
               ¿No eres miembro de IEEE? <a href=" https://www.ieee.org/membership/join/index.html?WT.mc_id=hc_join" target="_blank">Únete aquí</a></i></div>



    </v-layout>
    <v-flex xs12>
      <v-container grid-list-xl>
        <v-layout row wrap align-center>
          <v-flex xs2>
          </v-flex>
          <v-flex xs4>
            <v-card flat class="transparent">
              <v-card-title primary-title class="layout justify-center">
                <div class="headline"><v-icon x-large color="#099ec8">mdi-calendar-range</v-icon>
                  Fechas</div>
              </v-card-title>
              <v-card-text  >
                &bull; Fecha límite para pago de registro de autores  <strong> 22 de marzo, 2020</strong> <br>
                 <br>
                <i>Cualquier registro luego de las fechas límite tienen un cargo de <strong>15%</strong> adicional al precio regular en cada categoría </i>   <br>
                <br>
               <i><strong>*</strong> En caso de que necesite asociar más de un paper a su registro, por favor contáctenos a nuestro correo </i>
              </v-card-text>
            </v-card>
          </v-flex>
          <v-flex xs12 md4>
            <v-card flat class="transparent">
              <v-card-title primary-title class="layout justify-center">
                <div class="headline"><v-icon x-large color="#099ec8">mdi-credit-card-outline</v-icon>
                  Método de pago nacional (CLP)</div>
              </v-card-title>
              <v-card-text  >
                Envíe su comprobante a <a href="mailto:ramauchile@ieee.org">ramauchile@ieee.org</a>  indicando sus datos o modificando sus respuestas a través del link de
                confirmación que le debe llegar a su correo una vez finalizado el registro.
                <br>
                <br>
                <b>DATOS DE LA CUENTA CORRIENTE</b>  <br>  <hr>
                <b>NOMBRE</b>: INST DE ING ELECT Y ELECT DE CH  <br>
                <b>RUT</b>:     70.690.400-K  <br>
                <b>BANCO</b>: BANCO ESTADO  <br>
                <b>CC</b>: N°  000-0-012312-9  <br>
                <b>EMAIL</b>: macortes@ieee.org  <br>
                <b>ASUNTO</b>:  INSCRIPCIÓN INGELECTRA XXVIII <br>
              </v-card-text>
            </v-card>
          </v-flex>
          <v-flex xs2>
          </v-flex>
        </v-layout>
      </v-container>
    </v-flex>

  </section>

</template>

<script>
export default {
  name: 'Register',
  data: () => ({
    items: [  ],
    item:0,
  }),
};
</script>
