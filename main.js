const { createApp } = Vue;

createApp({
    data() {
        return {
            rndm_mails: []
        }
    },
    mounted() {
        for (let i = 0; i < 10; i++) {
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then( (result) => {
                this.rndm_mails.push(result.data.response)
            } )            
        }

        console.log(this.rndm_mails)
    },
    methods: {
        
    }
}).mount('#app');