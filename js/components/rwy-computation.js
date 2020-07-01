Vue.component('rwy-computation', {
    methods: {
        async getMetar(airport) {
            const response = await fetch(`/services/metar.php?ident=${airport.split(' / ')[0]}&decode`);
            const metar = await response.json();

            this.getRunways(airport);
            this.$store.commit('setMetar', metar)
        },
        async getRunways(airport) {
            const response = await fetch(`/services/airport_rwy.php?ident=${airport.split(' / ')[0]}&metric`);
            const runways = await response.json();
            
            const data = [];
            
            runways.forEach((runway) => {
                data.push({
                    value: runway.id,
                    name: runway.id + ' F/L',
                    runway
                });
            });

            this.$store.commit('setRunways', data);
            this.selectedRunway = data[0].runway.id;
        },
        setRunway(value) {
            this.selectedRunway = value;
        },
    },
    data() {
        return {
            selectedRunway: null
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
                                <input-select @value-changed="setRunway" :inputWidth="198" :selectBlue="true" :selectItems="$store.state.runways"/>
                            </div>
                        </div>
                        <runway-info :selectedRunway="selectedRunway"/>

                        </div>
                </div>
                <results></results>
            </div>
    `
})