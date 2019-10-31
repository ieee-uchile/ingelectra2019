import VueYouTubeEmbed from 'vue-youtube-embed'
import Vuetify from 'vuetify/lib'
import Vue from 'vue';

Vue.use(VueYouTubeEmbed)
Vue.use(Vuetify)

export default new Vuetify({
  icons: {
    iconfont: 'mdi',
  },
});
