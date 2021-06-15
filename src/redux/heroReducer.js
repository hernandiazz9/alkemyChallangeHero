import axios from 'axios'
//-----------------state inicial-------------------//
const dataInicial = {
    loading:false,
    heroes:[],
    team:[]
}
//-----------------type-------------------//
const LOADING = 'LOADING'
const HERO_ERROR = 'HERO_ERROR'
const GUARDAR_HEROES = 'GUARDAR_HEROES'
const GUARDAR_HERO_A_TEAM = 'GUARDAR_HERO_A_TEAM'


//-----------------reducer-------------------//
export default function usuarioReducer (state = dataInicial, action){

    switch(action.type){
        case LOADING:
            return {...state, loading:true}
        case GUARDAR_HEROES:
            return {...state, heroes:action.payload}
        case GUARDAR_HERO_A_TEAM:
            return {...state, team: [...state.team, action.payload]}
        
        default: 
            return {...state}
    }

}
//-----------------action-------------------//
export const ObtenerHeroAction = () => async(dispatch) => {
    dispatch({
        type: LOADING
    })
    try {
        const api = 10220411460301249;
        // const res = await axios.get(`http://localhost:3000/data`)
        const res = await axios.get(`https://superheroapi.com/api/10220411460301249/search/batman`)
        console.log(res.data.results, 'hero')

        dispatch({
            //enviar data a store
            type: GUARDAR_HEROES,
            payload: res.data.results
        })
    } catch (error) {
        console.log(error)
        dispatch({
            type: HERO_ERROR,
        })
    }
}
export const addHeroToTeamAction = ( id ) => async( dispatch, getState) => {
    const { heroes } = getState().hero
    const heroSelect = heroes.filter((hero) => hero.id === id);

    console.log(heroSelect);

    dispatch({
        type: GUARDAR_HERO_A_TEAM,
        payload: heroSelect
    })
    
}
