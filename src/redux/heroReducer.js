import axios from 'axios'
//-----------------state inicial-------------------//
const dataInicial = {
    loading:false,
    heroes:[],
    team:[],
    error:''
}
//-----------------type-------------------//
const LOADING = 'LOADING'
const HERO_ERROR = 'HERO_ERROR'
const GUARDAR_HEROES = 'GUARDAR_HEROES'
const GUARDAR_HERO_A_TEAM = 'GUARDAR_HERO_A_TEAM'
const HERO_NAME_ERROR = 'HERO_NAME_ERROR'


//-----------------reducer-------------------//
export default function usuarioReducer (state = dataInicial, action){

    switch(action.type){
        case LOADING:
            return {...state, loading:true, error:''}
        case GUARDAR_HEROES:
            return {...state, heroes:action.payload, loading:false}
        case GUARDAR_HERO_A_TEAM:
            return {...state, team: [...state.team, action.payload]}
        case HERO_NAME_ERROR:
            return {...state, error: action.payload }
        
        default: 
            return {...state}
    }

}
//-----------------action-------------------//
export const searchHeroAction = (value) => async(dispatch) => {
    dispatch({
        type: LOADING
    })
    try {
        const {heroName} = value
        const res = await axios.get(`https://superheroapi.com/api/10220411460301249/search/${heroName}`).catch(e=>console.log(e))
        dispatch({
            //enviar data de hero a store
            type: GUARDAR_HEROES,
            payload: res.data.results
        })
        console.log(res.data);
        if(res.data.error){
            dispatch({
                type: HERO_NAME_ERROR,
                payload: res.data.error
            })
        }
    } catch (error) {
        console.log(error.response)
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
