<template>
  <div class="slider-container" v-if="sliderPromosList">
    <Slider
      animation="normal"
      v-bind:speed=3000
      v-bind:interval=6000
      v-bind:indicators=false
      v-model="sliderValue"
    >
      <SliderItem
        v-for="promo in promos"
        v-bind:key="promo.id"
        v-on:click="changeIndex(1);"
        v-bind:class="`slider-container__promotion_${promo.name}`"
      >
        <div class="slider-container__information"> 
          <h1 class="slider-container__title">{{promo.title}}</h1>
          <p class="slider-container__description">{{promo.description}}</p>
          <button class="slider-container__button">Узнать больше</button>
        </div>
      </SliderItem>
    </Slider>
  </div>
</template>

<script>
import { Slider, SliderItem } from "vue-easy-slider";

export default {
  name: "VSlider",

  components: {
    Slider,
    SliderItem
  },

  props:{
    sliderPromosList:{
      type: Array,
      required: true,
    },
  },

  data() {
    return {
      promos: [],
      sliderValue: null
    };
  },

  methods: {
    changeIndex(index) {
      this.sliderValue = index;
    }
  },

  mounted() {
    setTimeout(
      () =>
        (this.promos = this.sliderPromosList),
      1000
    );
  }
};

</script>

<style lang="sass" src="@/media/sass/components/modules/VSlider.sass" scoped></style>
