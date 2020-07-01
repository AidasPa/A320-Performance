Vue.component('runway-info', {
    props: ['selectedRunway'],

    methods: {
        getRunway() {
            return this.$store.state.runways.filter(rwy => rwy.runway.id == this.selectedRunway)[0];
        }
    },
    computed: {
        getTora() {
            return !isNaN(Math.round(this.getRunway()?.runway.tora * 10) / 10) ?
            Math.round(this.getRunway()?.runway.tora * 10) / 10
            : '---';
        },
        getToda() {
            return !isNaN(Math.round(this.getRunway()?.runway.toda * 10) / 10) ?
            Math.round(this.getRunway()?.runway.toda * 10) / 10
            : '---';
        },
        getElevn() {
            return !isNaN(Math.round(this.getRunway()?.runway.elev * 10) / 10) ?
            Math.round(this.getRunway()?.runway.elev * 10) / 10
            : '---';
        },
    },
    template: `
    <span>
        <p>TORA: <span class="efb-green">{{ getTora }}</span> <span class="efb-blue">m</span></p>
        <p>TODA: <span class="efb-green">{{ getToda }}</span> <span class="efb-blue">m</span></p>
        <p>ASDA: <span class="efb-green">---</span> <span class="efb-blue">m</span></p>
        <p>ELEVN: <span class="efb-green">{{ getElevn }}</span> <span class="efb-blue">ft</span></p>         
    </span>
    `
})