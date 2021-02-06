<template>
    <div class="navigation" v-if="linksList">
        <ul class="navigation__list">
            <li
                v-for="link in linksList"
                :key="link.id"
                :class="link.isLogo ? 'navigation__link navigation__link_logo' : 'navigation__link'"
            > {{link.title}} 
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "Navigation",
    props:{
        linksList:{
            type: Array,
            required: true,
        }
    }
}
</script>

<style lang="sass" src="@/media/sass/components/modules/Navigation.sass" scoped></style>
