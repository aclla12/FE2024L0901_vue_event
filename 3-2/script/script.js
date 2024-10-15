// JavaScript用ファイル
// JavaScript用ファイル
new Vue({
    el: '#app',
    data() {
        return {
            count: 0
        };
    },
    methods: {
       increment() {
            this.coutn++;
       },
       decrement() {
            this.count--;
       }
    }
});