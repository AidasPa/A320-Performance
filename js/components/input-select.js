Vue.component('input-select', {
    props: ['selectItems', 'selectBlue', 'label'],
    template: `
    
    <select :class="['efb-input', 'efb-select-input', selectBlue ? 'efb-blue' : 'efb-white']">
        <option style="color:black;" v-for="option in selectItems" :key="option.value" :value="option.value">{{ option.name }}</option>
    </select>
    `,
})