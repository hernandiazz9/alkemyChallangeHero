import axios from 'axios'
//-----------------state inicial-------------------//
const dataInicial = {
    loading:false,
    heros:[]
}
//-----------------type-------------------//
const LOADING = 'LOADING'
const HERO_ERROR = 'HERO_ERROR'
const GUARDAR_HEROS = 'GUARDAR_HEROS'


//-----------------reducer-------------------//
export default function usuarioReducer (state = dataInicial, action){

    switch(action.type){
        case LOADING:
            return {...state, loading:true}
        case GUARDAR_HEROS:
            return {...state, heros:action.payload}
        
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
        const api = 10220411460301249	;
        const res = await axios.get(`http://localhost:3000/data`)
        // const res = await axios.get(`https://superheroapi.com/api/${api}/search/batman`)
        console.log(res, 'hero')
        dispatch({
            //enviar data a store
            type: GUARDAR_HEROS,
            payload: res.data
        })
    } catch (error) {
        console.log(error)
        dispatch({
            type: HERO_ERROR,
        })
    }
}
