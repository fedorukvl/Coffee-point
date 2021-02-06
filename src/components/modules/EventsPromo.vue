<template>
    <div class="events-list" v-if="eventsList">
        <h1 class="events-list__title">Ивенты</h1>
        <div class="events-list__promo-list">
            <div
            v-for="event in eventsList"
            v-bind:key="event.id"
            class="events-list__event"
            >
                <img 
                v-bind:style="{ 'backgroundImage' : 'url(' + require(`@/media/images/promo-images/${event.name}.webp`) + ')'}"
                class="events-list__event-img"
                />
                <h3 class="events-list__event-title">{{event.title}}</h3>
                <p class="events-list__event-description">{{event.description}}</p>
                 <button class="events-list__button">Перейти</button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'EventsPromo',
    props:{
        eventsList:{
            type: Array,
            required: true,
        },
    }
}
</script>
<style lang="sass" src="@/media/sass/components/modules/EventsPromo.sass" scoped></style>
