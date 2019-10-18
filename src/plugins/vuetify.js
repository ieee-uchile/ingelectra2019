import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

import VueAnalytics from 'vue-analytics'

Vue.use(VueAnalytics, {
  id: 'UA-130123561-1',
  autoTracking: {
   screenview: true
 }
})

export default new Vuetify({
  icons: {
    iconfont: 'mdi',
  },
});
