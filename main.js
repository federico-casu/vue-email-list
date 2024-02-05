const { createApp } = Vue;

createApp({
    data() {
        return {
            rndm_mails: [],
            n: ''
        }
    },
    mounted() {
        // this.mailGenerator(this.n)
    },
    methods: {
        mailGenerator() {
            if (this.rndm_mails.length === 0){
                for (let i = 0; i < this.n; i++) {
                    axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then( (result) => {
                        this.rndm_mails.push(result.data.response)
                    } )            
                }
            } else {
                this.rndm_mails = [];
                this.mailGenerator();
            }
    
            // console.log(this.rndm_mails)
            // console.log(this.n)
        }
    }
}).mount('#app');