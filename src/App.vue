<template>
    <div :class="prefixCls">
        <router-link :to="{name:'home'}">首页</router-link>
        <router-link :to="{name:'about'}">关于</router-link>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: '',
        components: {},
        props: {},
        data() {
            return {
                prefixCls: 'app',
                msg:'hello vue'
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
 $prefixCls:"app";

    .#{$prefixCls} {
        background: #fff;
    }

</style>