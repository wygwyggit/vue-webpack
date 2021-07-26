<template>
    <div :class="prefixCls">
        <img src="@/assets/images/logo.jpg" alt="">
    </div>
</template>

<script>
    export default {
        name: 'home',
        components: {},
        props: {},
        data() {
            return {
                prefixCls: 'views-home',
            }
        },
        computed: {},
        watch: {},
        created() {},
        mounted() {},
        beforeDestroy() {},
        methods: {

        },
    }
</script>

<style lang="scss" scoped>
    $prefixCls:'views-home';

    .#{$prefixCls} {
        img {
            width: 200px;
        }
    }
</style>