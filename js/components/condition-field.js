Vue.component('condition-field', {
    props: ['label', 'units', 'after'],
    template: `
        <div class="row">
            <div class="col-xs-4">
                <span style="text-align:left">{{ label }}</span>
                <span class="efb-blue efb-float-align-right">{{ units }}</span>
            </div>
            <div class="col-xs-6">
                <div class="row">
                    <div class="col"><input class="efb-input"></div>
                    <div class="col">{{ after }}</div>
                </div>
                
                <!-- <span class="efb-float-align-right"></span> -->
            </div>
        </div>
    `
})