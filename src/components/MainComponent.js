import React,{Component} from 'react';
import {Route,Switch,Redirect} from 'react-router-dom';
import Home from './HomeComponent'
import Events from './EventsComponent';



class Main extends Component{

    goToDisplayEvents=()=>{
        return(
            <Route path="/events" component={()=><Events/>}/>
        )
        
    }

    render(){
        return(
            <div>
                <Switch>
                    <Route path="/home" component={()=><Home onClick={this.goToDisplayEvents}/>}/>
                    <Route exact path="/events" component={()=><Events/>}/>
                    <Redirect to="/home"/>
                </Switch>
            </div>
        )
    }
}

export default (Main);