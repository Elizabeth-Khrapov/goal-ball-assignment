import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import { useEffect, useMemo, useState } from "react";
import "./App.css";
import React from "react";

export type googleMapsApiKey = String
export type Ball = {
  x: number,
  y:number
}
export type Goal = {
  x: number,
  y:number
}
const API_KEY : string =  process.env.REACT_APP_GOOGLE_API_KEY || ''

export type AppState = {
	ball?: Ball,
	Goal: Goal,
	interval: any,
	isGoal: boolean,
}

export type center = {
  lat: number;
  lng: number;
}
export class App extends React.PureComponent<{}, AppState> {


  // const [isGoal, setGoal] = useState(false)
	state: AppState = {
		ball:  {'x':0, 'y':0},
	  Goal: {'x':0, 'y':0},
	  interval:  Math.floor(Math.random() * 2000),
	  isGoal: false,
	};

   center = useMemo(() => ({ lat: 18.52043, lng: 73.856743 }), []);

  componentDidMount() {
    if(this.state.isGoal)
      clearInterval(this.state.interval);
    this.state.interval = setInterval(()=> this.state.interval);
  }
  componentWillUnmount() {
      clearInterval(this.state.interval);
  }
 /* 1. create render loop to this screen for 2 sec
 2. get new coord for the ball for each 2 sec
 3. place the ball on the map and check the distanction from the goal
 4. if returns true in distantion response create alert GOAL ! and stop the loop
 */

 render(){
  return (
    <div className="App">
        <GoogleMap
          mapContainerClassName="map-container"
          center={this.center}
          zoom={10}
        />
    </div>
  );
}};

export default App;
