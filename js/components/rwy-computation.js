Vue.component('rwy-computation', {
    methods: {
        async getMetar(airport) {
            const response = await fetch(`/services/metar.php?ident=${airport.split(' / ')[0]}&decode`);
            const metar = await response.json();

            this.getRunways(airport);
            this.$emit('metar-fetched', metar);
        },
        async getRunways(airport) {
            const response = await fetch(`/serivces/metar.php?ideant${airport.split(' / ')[0]}&metric`);
            const runways = await response.json();
            
            
        }
    },
    data() {
        return {
            arptRunways: []
        }
    },
    template: `
    <div class="col-md-8 ml">
                <div class="row">
                    <div class="efb-tab efb-rwy-computation">
                        <div class="efb-header">
                            single rwy computation &#60;F2&#62;
                        </div>
                        <div class="row around-md center-md efb-field-group">
                            <div class="col-md-6">
                                <input-select-airport @airportSet="getMetar" color="orange" />
                            </div>
                            <div class="col-md-6">
                                <input-select-pretend color="blue" :selectItems="airptRunways"/>
                            </div>
                        </div>
                    </div>
                </div>
                <results></results>
            </div>
    `
})