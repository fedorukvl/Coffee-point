<template>
  <div id="app">
    <navigation :linksList="navigationLinksList"></navigation>
    <v-slider :sliderPromosList="sliderPromosList"></v-slider>
    <new-dots-list :newDots="newDotsList"></new-dots-list>
    <you-tube-chanel-link></you-tube-chanel-link>
    <events-promo :eventsList="eventsPromoList"></events-promo>
  </div>
</template>

<script>
import Navigation from '@/components/modules/Navigation';
import VSlider from '@/components/modules/VSlider';
import NewDotsList from '@/components/modules/NewDotsList'
import YouTubeChanelLink from '@/components/modules/YouTubeChanelLink'
import EventsPromo from '@/components/modules/EventsPromo.vue';

export default {
  name: 'App',
  components: {
    Navigation,
    VSlider,
    NewDotsList,
    YouTubeChanelLink,
    EventsPromo
  },
  data() {
    return {
      newDotsList: [],
      navigationLinksList: [],
      sliderPromosList: [],
      eventsPromoList:[],
    }
  },
  mounted() {                       //Данные со временем будут браться из Vuex
    this.newDotsList = [
      {
        id: 1,
        name: 'Mandarin',
        city: 'Москва',
        address: 'ул. Ленина 5/10'
      },
      {
        id: 2,
        name: 'Villa',
        city: 'Ростов-на-Дону',
        address: 'пл. Кирова 2'
      },
      {
        id: 3,
        name: 'Astor',
        city: 'Москва',
        address: 'ул. 9-я Парковая 10'
      }
    ];
    this.navigationLinksList = [
      { id: 1, title: "наши точки" },
      { id: 2, title: "френд-пасс" },
      { id: 3, isLogo: true, title: "coffee-point" },
      { id: 4, title: "журнал" },
      { id: 5, title: "наши точки" }
    ];
    this.sliderPromosList = [
      {
        id: 1,
        name:"our-coffe-shops",
        title: "Наши кофейни",
        description: "Мы постоянно совершенствуемся и стараемся быть ближе к тебе"
      },
      {
        id: 2,
        name:"magazine",
        title: "Не только кофе",
        description: "С этого месяца у нас стартовал ежемесячный журнал о том, что близко тебе и нам по духу"
      },
      {
        id: 3,
        name:"friend-pass",
        title: "Будь частью нашей культуры",
        description: "Не забудь оформить нашу карту, чтобы получать бонусы при заказах"
      },
      {
        id: 4,
        name:"events",
        title: "Будь в курсе последних событий",
        description: "Следи за нашими мероприятиями и принимай в них участие"
      }
    ];
    this.eventsPromoList = [
      {
        id: 1,
        title: 'Чемпионат Сочи по серфингу',
        name: 'surf-champ',
        description: 'Отпраздновали наше 5-летие',
      },
      {
        id: 2,
        title: 'Coffee-point x ABC',
        name: 'ski-champ',
        description: 'Открыли сезон совместно с спортивным брендом ABC',
      },
    ];
  }
}
</script>

<style lang="sass" src="@/media/sass/App.sass"></style>
