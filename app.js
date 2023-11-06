const { createApp } = Vue

const app = createApp({
    data() {
        return {
            angka1: 0,
            angka2: 0,
            hasil: 0
        }
    }
})
app.mount('#app')