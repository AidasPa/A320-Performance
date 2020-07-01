const store = new Vuex.Store({
    state: {
      metar: {
          winds: {
              dir: '', 
              kt: ''
          },
          tempos: {
              dew: '', 
              oat: '',
          },
          qnh: ''
      },
      currentAirport: null,
      runways: [],
    },
    mutations: {
      setMetar (state, metar) {
        state.metar = metar;
      },
      setAirport(state, airport) {
          state.airport = airport;
      },
      setRunways(state, runways) {
          state.runways = runways;
      }

    }
  })