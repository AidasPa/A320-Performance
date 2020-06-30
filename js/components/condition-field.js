Vue.component('condition-field', {
    props: ['label', 'units', 'after', 'select', 'tow', 'selectBlue', 'selectItems', 'value'],
    template: `
        <div class="row efb-field-group">
            <div :class="['col-xs-4', tow ? 'efb-tow-field-text' : '']" style="margin-left:10px">
                <span class="efb-field-text">{{ label }}</span>
                <span class="efb-blue efb-float-align-right">{{ units }}</span>
            </div>
            <div class="col-xs-6" style="padding-right: 0;">
                <div v-if="!select" class="row">
                    <input :value="value" :class="['efb-input', tow ? 'efb-tow-input' : '', 'efb-blue' ]">
                    <!-- <div class="col">{{ after }}</div> -->
                </div>
                
                <div v-else class="row" style="padding-right: 0;">
                    <input-select :selectItems="selectItems" :selectBlue="selectBlue"/>
                </div>
            </div>
        </div>
    `
})