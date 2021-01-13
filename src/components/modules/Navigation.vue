<template>
    <div class="navigation">
        <ul class="navigation__list">
            <li
                v-for="link in links"
                v-bind:key="link.id"
                class="navigation__link"
                v-bind:class="{'navigation__link_logo': link.isLogo}"
            > {{link.title}} 
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "Navigation",
    data() {
        return {
            links: [
                { id: 1, title: "наши точки" },
                { id: 2, title: "френд-пасс" },
                { id: 3, isLogo: true, title: "coffee-point" },
                { id: 4, title: "журнал" },
                { id: 5, title: "наши точки" }
            ]
        }
    }
}
</script>

<style lang="sass" src="@/media/sass/components/modules/Navigation.sass" scoped></style>
