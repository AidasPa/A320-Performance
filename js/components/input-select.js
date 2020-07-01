Vue.component('input-select', {
    props: ['selectItems', 'selectBlue', 'label', 'inputWidth'],
    template: `

    <select @change="$emit('value-changed', $event.target.value)" :style="{width:inputWidth + 'px'}" :class="['efb-input', 'efb-select-input', selectBlue ? 'efb-blue' : 'efb-white']">
        <option style="color:black;" v-for="option in selectItems" :key="option.value" :value="option.value">{{ option.name }}</option>
    </select>
    `,
})