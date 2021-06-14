import  {useEffect} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
// import firebase from './firebase'
import 'firebase/firestore'

// hooks react redux
import {useDispatch, useSelector} from 'react-redux'

// importamos la acción
import {obtenerUsuarioAction} from './redux/loginReducer'
import Home from './components/Home';
import Login from './components/Login';
import Navbar from './components/Navbar';
import CrearCuenta from './components/CrearCuenta';
  
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
                    <Route component={Login} path="/login" exact/>
                    <Route component={CrearCuenta} path="/CrearCuenta" exact/>
                    <Route component={Home} path="/" exact/>
                </Switch>
            </div>
        </Router>

       
        
    );
}  
export default App;

