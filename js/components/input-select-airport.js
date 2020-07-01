Vue.component('input-select-airport', {
    props: ['color'],
    data() {
        return {
            input: '',
            showSuggestions: false,
            selectItems: []
        }
    },
    methods: {
        async fetchAirports(input) {
            const response = await fetch('/services/search_ident.php', {
                method: 'POST',
                body: JSON.stringify({ 
                    query: input
                })
            });

            const json = await response.json();
            json.forEach(airport => {
                this.selectItems.push({
                    value: airport.split(' / ')[0],
                    name: airport
                });
            });
            
        },
        inputChanged(e) {
            const val = e.target.value.toUpperCase();
            if(val.length >= 2) {
                this.showSuggestions = true;
                this.selectItems = [];
                this.fetchAirports(val);
            } else {
                this.showSuggestions = false;
                this.selectItems = [];
            }
            this.input = val;
        },
        setAirportValue(e) {
            this.input = e.target.innerHTML;
            this.showSuggestions = false;
            this.$emit('airportSet', this.input);
        }
    },
    template: `
    <div class="efb-select-input-wrap" style="padding-right: 0;">
        <input :value="input" @input="inputChanged" :class="['efb-input', 'efb-' + color, 'efb-pretend-select']">
        <div class="efb-dropbox efb-dropbox-pretend">&#11206;</div>
        <div v-if="showSuggestions" class="efb-select-pretend-box">
            <p style="cursor:pointer" v-for="option in selectItems" @click="setAirportValue" :key="option.value">{{option.name}}</p>
        </div>
    </div>
    `
})