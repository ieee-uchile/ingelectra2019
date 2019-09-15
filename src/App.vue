<template>
  <v-app light>
    <Toolbar/>
    <v-content>
      <router-view></router-view>
      <Contacts/>
    </v-content>
  </v-app>
</template>

<script>
import Contacts from './components/Contacts';
import Toolbar from './components/Toolbar';

export default {
  name: 'App',
  components: {
    Contacts,
    Toolbar,
  },
  data: () => ({
  }),
};
</script>
