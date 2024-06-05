"use client";
import { APIProvider, Map, AdvancedMarker,Pin, InfoWindow }
 from "@vis.gl/react-google-maps";


function InitMap(){
    const position = {lat: 44.986, lng: -93.258};

    return (
        <APIProvider apiKey= "AIzaSyBdke67cVi3xJq-aCT7omvJwExq4ZJpPLI">
            <div className="map">
               <Map mapcontainer zoom ={12} center= {position} ></Map> 
            </div>
        </APIProvider>
    );
}

export default InitMap;