Vue.component('condition-field', {
    props: ['label', 'units', 'after', 'field-col'],
    template: `
    <div class="row mt1 ml1 efb-field-group">
                    <template v-if="units">
                        <div  class="col-md-2 efb-field-text">
                            {{ label }}
                        </div>
                        <div  class="col-md-2 efb-blue">
                            {{ units }}
                        </div>
</template>

                        <div v-else class="col-md-5 efb-field-text efb-field-text-full">
                            {{ label }}
                        </div>
                    
                        <div :class="fieldCol">
                            <input class="efb-input efb-blue" type="text" name="" id="">
                        </div>
                        <div>
                           {{ after }}
                        </div>
                    </div>
    `
})