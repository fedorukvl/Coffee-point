<template>
  <div id="app">
    <navigation></navigation>
    <v-slider></v-slider>
    <new-dots-list v-bind:newDotsArray="newDotsArray"></new-dots-list>
    <you-tube-chanel-link></you-tube-chanel-link>
  </div>
</template>

<script>
import Navigation from '@/components/modules/Navigation';
import VSlider from '@/components/modules/VSlider';
import NewDotsList from '@/components/modules/NewDotsList'
import YouTubeChanelLink from '@/components/modules/YouTubeChanelLink'

export default {
  name: 'App',
  components: {
    Navigation,
    VSlider,
    NewDotsList,
    YouTubeChanelLink
  },
  data() {
    return {
      newDotsArray: []
    }
  },
  mounted() {
    return this.newDotsArray = [
      {
        dotId: 1,
        dotName: 'Mandarin',
        dotCity: 'Москва',
        dotAddress: 'ул. Ленина 5/10'
      },
      {
        dotId: 2,
        dotName: 'Villa',
        dotCity: 'Ростов-на-Дону',
        dotAddress: 'пл. Кирова 2'
      },
      {
        dotId: 3,
        dotName: 'Astor',
        dotCity: 'Москва',
        dotAddress: 'ул. 9-я Парковая 10'
      }
      ]
  }
}
</script>

<style lang="sass" src="@/media/sass/App.sass"></style>
