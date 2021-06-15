import  {useEffect} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import 'firebase/firestore'
import {useDispatch, useSelector} from 'react-redux'
// importamos la acción
import {obtenerUsuarioAction} from './redux/loginReducer'
import Home from './components/Home';
import Login from './components/Login';
import Navbar from './components/Navbar';
// import CrearCuenta from './components/CrearCuenta';
import HeroInfo  from './components/hero/HeroInfo';
  
function App() {
    const logueado = useSelector(store => store.login.activo)
    console.log(logueado,'logueado');
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(obtenerUsuarioAction())
    }, [])
    // if(!logueado) return props.history.push('/login')
    return (
        <Router>
            <div className="container pl-0 pr-0 ">
                <Navbar />
                <Switch>
                    <Route component={Login} path="/login" />
                    {/* <Route component={CrearCuenta} path="/CrearCuenta" /> */}
                    <Route component={Home} path="/" exact/>
                    <Route component={HeroInfo} path="/HeroInfo" />
                </Switch>
            </div>
        </Router>

       
        
    );
}  
export default App;

