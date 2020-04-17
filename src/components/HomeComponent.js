import React,{Component} from 'react';
import '../App.css';
import {Card,CardImg,Button} from 'reactstrap';
import {Redirect,Link} from 'react-router-dom';

class Home extends Component{
    constructor(props){
        super(props);
        console.log("props : "+props.onClick);
    }
    // goToDisplayEvents(){
    //     return <Redirect to="/events"/>
    // }

    render(){
        return(
            <div> 
                <div>
                    <div className="home-header">
                        <div className="logo">
                            <img src="/assets/images/aic_logo.png" alt="AIC Logo"/>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-6 xs-3">
                            <Card>
                                <CardImg src="/assets/images/event_space.png" alt="event space image"/>
                            </Card>
                            <div className="text-center">
                                <form action="/events">
                                    <Button onClick="" color="primary">Event Space</Button> 
                                </form>
                                
                            </div>
                        </div>
                        <div className="col-6">
                            <Card>
                                <CardImg src="/assets/images/pod_space.png" alt="podcast space image"/>
                            </Card>
                            <div className="text-center">
                                <form action="/podcasts">
                                    <Button type="submit" onClick="" color="primary">Podcast Space</Button>
                                </form> 
                            </div>
                        </div>
                    </div>                    
                </div>                
            </div>
            

        )
    }
}

export default Home;