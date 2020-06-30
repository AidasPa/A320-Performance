Vue.component('conditions', {
    props: ['metar'],
    data() {
        return {
            rwyConditions: [
                {
                    value: 'dry',
                    name: 'Dry'
                }, {
                    value: 'wet',
                    name: 'Wet'
                }
            ],
            airConds: [
                {
                    value: true,
                    name: 'On (STD)'
                }, {
                    value: false,
                    name: 'Off'
                }
            ],
            thrusts: [
                {
                    value: 'flex',
                    name: 'FLEX (STD)'
                }, {
                    value: 'toga',
                    name: 'TOGA'
                }
            ],
            antiIces: [
                {
                    value: 0,
                    name: 'Off'
                }, {
                    value: 1,
                    name: 'ENG'
                }, {
                    value: 2,
                    name: 'ENG + WING'
                }
            ], 
            configurations: [
                {
                    value: 'opt',
                    name: 'OPT CONF (STD)'
                }, {
                    value: '1',
                    name: '1 CONF'
                }, {
                    value: '1f',
                    name: '1+F CONF'
                }, {
                    value: '2',
                    name: '2 CONF'
                }, {
                    value: '3',
                    name: '3 CONF'
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
                     :value="metar ? metar.winds.dir + '/' + metar.winds.kt : ''"
                     ></condition-field>
                     <condition-field 
                     label="oat"
                     units="°C" 
                     :value="metar ? metar.tempos.oat : ''"
                     after="ISA +11"
                     ></condition-field>
                     <condition-field 
                     label="qnh"
                     units="hPa" 
                     :value="metar ? metar.qnh : ''"
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
                     :selectItems="antiIces"
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
                     :selectItems="configurations"
                     :select="true"
                     after=""
                     ></condition-field>
                     <condition-field 
                     label="air cond"
                     :selectItems="airConds"
                     :select="true"
                     after=""
                     ></condition-field>
                     <condition-field 
                     label="thrust"
                     :selectItems="thrusts"
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