Vue.component('conditions', {
    data() {
        return {rwyConditions: [
            {
                value: 'dry',
                name: 'Dry'
            }, {
                value: 'wet',
                name: 'Wet'
            }
        ]
        }
    },
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
                     ></condition-field>
                     <condition-field 
                     label="oat"
                     units="°C" 
                     after="ISA +11"
                     ></condition-field>
                     <condition-field 
                     label="qnh"
                     units="hPa" 
                     after=""
                     ></condition-field>
                     <condition-field 
                     label="rwy cond"
                     :select-items="rwyConditions"
                     :select="true"
                     :select-blue="true"
                     after=""
                     ></condition-field>
                     <condition-field 
                     label="a-ice"
                     :select="true"
                     :select-blue="true"
                     after=""
                     ></condition-field>
                    </condition-field>
                    <br />
                     <condition-field 
                     label="tow"
                     units="T"
                     after=""
                     :tow="true"
                     ></condition-field>
                     <br />
                     <condition-field 
                     label="conf"
                     units=""
                     :select="true"
                     after=""
                     ></condition-field>
                     <condition-field 
                     label="air cond"
                     units=""
                     :select="true"
                     after=""
                     ></condition-field>
                     <condition-field 
                     label="thrust"
                     units=""
                     :select="true"
                     after=""
                     ></condition-field>
                    </div>
                <div class="efb-tab efb-normal mt">
                    <b style="font-size:20px">NORMAL</b>
                </div>
            </div>
            </div>
    `,

})