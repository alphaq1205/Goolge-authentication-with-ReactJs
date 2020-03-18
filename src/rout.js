import React,{Component} from 'react'
import {BrowserRouter as Routes, Route, Switch} from 'react-router-dom'
/* import Home from './component/two'
import Login from './component/one'
import Err from './component/error' 
 */
const Home=React.lazy(()=>import('./component/two'))
const Login=React.lazy(()=>import('./component/one'))
const Err=React.lazy(()=>import('./component/error'))
const loading=(()=>{
    return(
        <>
            <h1>Loading.........</h1>
        </>
    )
})
export default class Routing extends Component{
    render(){
        return(
            <>
            <Routes>
                <React.Suspense fallback={loading()}>
                    <Switch>
                        <Route exact path='/' Component={Login}/> 
                        <Route path='/home' Component={Home}/> 
                        <Route Component={Err}/> 
                    </Switch>
                </React.Suspense>
            </Routes>
            </>
        )
    }
}