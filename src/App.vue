<template>
  <div id="app">
    <navigation></navigation>
    <v-slider></v-slider>
  </div>
</template>

<script>
import Navigation from '@/components/modules/Navigation';
import VSlider from '@/components/modules/VSlider';

export default {
  name: 'App',
  components: {
    Navigation,
    VSlider
  }
}
</script>

<style lang="sass" src="@/media/sass/App.sass"></style>
