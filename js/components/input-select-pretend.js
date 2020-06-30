Vue.component('input-select-pretend', {
    props: ['selectItems', 'color', 'label'],
    template: `
    {{ label }}
    <div class="efb-select-input-wrap" style="padding-right: 0;">
        <input :value="input" @input="inputChanged" :class="['efb-input', 'efb-' + color, 'efb-pretend-select']">
        <div class="efb-dropbox efb-dropbox-pretend">&#11206;</div>
        <div v-if="showSuggestions" class="efb-select-pretend-box">
            <p v-for="option in selectItems" @click="setAirportValue" :key="option.value">{{option.name}}</p>
        </div>
    </div>`
})