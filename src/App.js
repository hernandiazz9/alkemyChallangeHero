import  {useEffect} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import 'firebase/firestore'
import {useDispatch} from 'react-redux'
import {obtenerUsuarioAction} from './redux/loginReducer'
import Home from './components/Home';
import Login from './components/Login';
import Navbar from './components/Navbar';
import HeroInfo  from './components/hero/HeroInfo';
  
function App() {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(obtenerUsuarioAction())
         // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        <Router>
            <div className="container-fluid">
                <Navbar />
                <Switch >
                    <Route component={Login} path="/login" />
                    <Route component={Home} path="/" exact/>
                    <Route component={HeroInfo} path="/HeroInfo" />
                </Switch>
            </div>
        </Router>

       
        
    );
}  
export default App;

