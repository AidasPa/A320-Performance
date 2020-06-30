Vue.component('conditions', {
    template: `
        <div class="col-md-3-5">
                <div class="efb-tab efb-condition">
                    <div class="efb-header">
                        conditions &#60;F3&#62;
                    </div>
                    
                    <condition-field 
                     label="wind"
                     units="°/kt" 
                     after="L 1"
                     field-col="col-xs-6"
                     ></condition-field>
                     <condition-field 
                     label="oat"
                     units="°C" 
                     after="ISA +11"
                     field-col="col-xs-4"
                     ></condition-field>
                     <condition-field 
                     label="qnh"
                     units="hPa" 
                     after=""
                     field-col="col-xs-7"
                     ></condition-field><condition-field 
                     label="rwy cond"
                     after=""
                     field-col="col-xs-7"
                     ></condition-field>
                    

                </div>
                <div class="efb-tab efb-normal mt">
                    <b style="font-size:20px">NORMAL</b>
                </div>
            </div>
            </div>
    `
})