import React,{Component} from 'react';
import {Route,Switch,Redirect} from 'react-router-dom';
import Home from './HomeComponent'
import Events from './EventsComponent';
import Podcasts from './PodcastsComponent';


class Main extends Component{


    render(){
        return(
            <div>
                <Switch>
                    <Route path="/home" component={()=><Home/>}/>
                    <Route exact path="/events" component={()=><Events/>}/>
                    <Route exact path="/podcasts" component={()=><Podcasts/>}/>
                    <Redirect to="/home"/>
                </Switch>
            </div>
        )
    }
}

export default (Main);