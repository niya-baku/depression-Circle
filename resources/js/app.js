import './bootstrap'
import Vue from 'vue'

import router from './router'
import App from './App.vue'
import store from './store'

new Vue({
    el: '#app',
    router, // ルーティングの定義を読み込む
    components: { App }, // ルートコンポーネントの使用を宣言する
    store,
    template: '<App />' // ルートコンポーネントを描画する
  })