const mixin = {
    data() {
        return {
            backShow: false,
            topY: 1000
        }
    },
    methods: {
        //回到顶部
        goTop() {
            this.$refs.scroll.backTop(0, 0, 200);
        },
    }
}
export { mixin }