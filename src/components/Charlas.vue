<template>
  <section>
    <v-parallax src="../assets/grid-3230205_1920.jpg" height="100">
      <v-layout
        column
        align-center
        justify-center
        class="white--text"
      >
        <h1 class="black--text display-1 text-center">CHARLAS MAGISTRALES</h1>
      </v-layout>
    </v-parallax>
    <v-layout column wrap>
      <v-row class="fill-height">
        <v-col>
          <v-sheet height="64">
            <v-toolbar flat color="white">
              <v-btn fab text small color="grey darken-2">
                <v-icon small>mdi-chevron-left</v-icon>
              </v-btn>
              <v-toolbar-title v-html="title"></v-toolbar-title>
            </v-toolbar>
          </v-sheet>
          <v-sheet height="600">
            <v-calendar
              ref="calendar"
              v-model="focus"
              color="primary"
              :events="events"
              :event-color="getEventColor"
              :type="type"
              @click:event="showEvent"
              @click:more="viewDay"
              @click:date="viewDay"
            ></v-calendar>
            <v-menu
              v-model="selectedOpen"
              :close-on-content-click="false"
              :activator="selectedElement"
              offset-x
            >
              <v-card
                color="grey lighten-4"
                max-width="450"
                flat
              >
              <v-img class="black--text align-end" width="100%" height=200
              :src="selectedEvent.url"
                >
                <v-card-title >{{selectedEvent.speaker}}</v-card-title>
              </v-img>
              <v-card-text class="text-justify">
                <span justify-text v-html="selectedEvent.title"></span>
                <br><br>
                <h3>Información</h3>
                <br>
                  <span  v-html="selectedEvent.bio"></span>
              </v-card-text >
                <v-card-actions>
                  <v-btn
                    text
                    color="secondary"
                    @click="selectedOpen = false"
                  >
                    Cerrar
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-menu>
          </v-sheet>
        </v-col>
      </v-row>
      <v-flex xs12 align="start">
        <v-container grid-list-xl>
          <v-layout row wrap align-start>
            <v-flex xs12 md4> </v-flex>
            <v-flex xs12 md4>
              <v-card flat class="transparent">
                <v-card-text class="text-center">
                  <v-icon x-large color="#099ec8">mdi-puzzle</v-icon>
                </v-card-text>
                <v-card-title primary-title class="layout justify-center">
                  <div class="headline text-center"> Extensiones para el uso de Cisco Webex</div>
                </v-card-title>
                <v-card-text>
                  <br>
                  Webex Chrome: <a href="https://chrome.google.com/webstore/detail/cisco-webex-extension/jlhmfgmfgeifomenelglieieghnjghma?hl=es" target="_blank">
                    https://chrome.google.com/webstore/detail/cisco-webex-extension/jlhmfgmfgeifomenelglieieghnjghma?hl=es
                  </a>
                  <br> <br> Webex Android:
                  <a href="https://play.google.com/store/apps/details?id=com.cisco.webex.meetings&hl=es_CL" target="_blank">
                    https://play.google.com/store/apps/details?id=com.cisco.webex.meetings&hl=es_CL
                  </a>
                  <br> <br>  Webex iOS: <a href="https://apps.apple.com/es/app/cisco-webex-meetings/id298844386">
                    https://apps.apple.com/es/app/cisco-webex-meetings/id298844386
                  </a>
                </v-card-text>
              </v-card>
            </v-flex>
            <v-flex xs12 md4> </v-flex>

          </v-layout>
        </v-container>
      </v-flex>
    </v-layout>
  </section>
</template>

<script>

import speakers from '../assets/speakers/info.json';

export default {
  name: 'Charlas',
  data: () => ({
    focus: "2020-04-01",
    type: '4day',

    start: "2020-04-01",
    end: "2020-04-04",
    selectedEvent: {},
    selectedElement: null,
    selectedOpen: false,
    events: speakers,
    colors: ['blue', 'indigo', 'deep-purple', 'cyan', 'green', 'orange', 'grey darken-1'],
    names: ['Meeting', 'Holiday', 'PTO', 'Travel', 'Event', 'Birthday', 'Conference', 'Party'],
  }),
  computed: {
    title () {
      return 'April 1st 2020 - April 4th'
    },
    monthFormatter () {
      return this.$refs.calendar.getFormatter({
        timeZone: 'UTC', month: 'long',
      })
    },
  },
  mounted () {
    this.$refs.calendar.checkChange()
    this.$refs.calendar.scrollToTime('8:00')
  },
  methods: {
    viewDay () {
      this.focus = "2020-04-01"
      this.type = '4day'
    },
    getEventColor (event) {
      return event.color
    },
    showEvent ({ nativeEvent, event }) {
      const open = () => {
        this.selectedEvent = event
        this.selectedElement = nativeEvent.target
        setTimeout(() => this.selectedOpen = true, 10)
      }
      if (this.selectedOpen) {
        this.selectedOpen = false
        setTimeout(open, 10)
      } else {
        open()
      }
      nativeEvent.stopPropagation()
    },
    formatDate (a, withTime) {
      return withTime
        ? `${a.getFullYear()}-${a.getMonth() + 1}-${a.getDate()} ${a.getHours()}:${a.getMinutes()}`
        : `${a.getFullYear()}-${a.getMonth() + 1}-${a.getDate()}`
    },
  },
};
</script>

<style >
.my-event {
overflow: hidden;
text-overflow: ellipsis;
white-space: nowrap;
border-radius: 2px;
background-color: #1867c0;
color: #ffffff;
border: 1px solid #1867c0;
font-size: 12px;
padding: 3px;
cursor: pointer;
margin-bottom: 1px;
left: 4px;
margin-right: 8px;
position: relative;
}

.my-event.with-time {
position: absolute;
right: 4px;
margin-right: 0px;
}
</style>
