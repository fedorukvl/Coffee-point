<template>
    <div class="newDotsList">
        <h1 class="newDotsList__title">Новые точки</h1>
        <div class="newDotsList__promo-list">
            <div
            v-for="dot in newDotsArray"
            v-bind:key="dot.id"
            class="newDotsList__dot"
            >
                <img 
                v-bind:style="{ 'backgroundImage' : 'url(' + require(`@/media/images/new-dots-promo-images/${dot.dotName}.webp`) + ')'}"
                class="newDotsList__dot-img"
                />
                <h3 class="newDotsList__dot-name">{{dot.dotName}}</h3>
                <p class="newDotsList__dot-city">{{dot.dotCity}}</p>
                <p class="newDotsList__dot-address">{{dot.dotAddress}}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'NewDotsList',
    props: {
        newDotsArray: {
            type: Array,
            required: true,
            default(){
                return []
            } 
        }
    }
}
</script>

<style lang="sass" scoped src="@/media/sass/components/modules/NewDotsList.sass"></style>
