<template>
    <div class="newDotsList" v-if="newDots">
        <h1 class="newDotsList__title">Новые точки</h1>
        <div class="newDotsList__promo-list">
            <div
            v-for="dot in newDots"
            v-bind:key="dot.id"
            class="newDotsList__dot"
            >
                <img 
                v-bind:style="{ 'backgroundImage' : 'url(' + require(`@/media/images/new-dots-promo-images/${dot.name}.webp`) + ')'}"
                class="newDotsList__dot-img"
                />
                <h3 class="newDotsList__dot-name">{{dot.name}}</h3>
                <p class="newDotsList__dot-city">{{dot.city}}</p>
                <p class="newDotsList__dot-address">{{dot.address}}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'newDotsList',
    props: {
        newDots: {
            type: Array,
            required: true,
        }
    }
}
</script>

<style lang="sass" scoped src="@/media/sass/components/modules/NewDotsList.sass"></style>
