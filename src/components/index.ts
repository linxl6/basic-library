import HelloWord from './HelloWorld.vue'
function install(Vue:any) {
    Vue.component(HelloWord.name,HelloWord)
}

if (typeof window !== "undefined" && window.Vue) {
    install(window.Vue)
}

export default install