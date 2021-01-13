<template>
    <svg 
        v-bind:src="`@/media/images/svg-icons/${name}.svg`"
        v-bind:title="`${title}`"
    ></svg>
</template>

<script>
export default {
    name: 'VIcon',
    props:{
        name:{
            type: String,
            required: true
        },
        title:{
            type: String,
            default: none
        }
    }
}
</script>
