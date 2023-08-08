import React from "react";
import "./Weather.css";

export default function Weather(){
    return (
    <div className="Weather">
        <form>
            <div className="row">
                <div className="col-9">
                    <input type="search" 
                    placeholder="Enter your city..." 
                    className="form-control"
                    autoFocus="on" />
                </div>
                <div className="col-3">
                    <input type="submit" 
                    value="Search" 
                    className="btn btn-primary w-100" />
                </div>
            </div>
        </form>
        <h1>Gaborone</h1>
        <ul>
            <li>
                Tuesday 15:00
            </li>
            <li>
                Mostly sunny
            </li>
        </ul>
        <div className="row">
            <div className="col-6">
              <div className="clearfix">
                <img src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png" 
                alt="Partly Cloudy" className="float-left" />
                <div className="float-left">
                 <span className="temperature">25</span>
                 <span className="unit">°C</span>
                </div>
               </div>
            </div>
            <div className="col-6">
                <ul>
                    <li>Precipitation: 0%</li>
                    <li>Humidity: 15%</li>
                    <li>Wind: 11km/h</li>
                </ul>
            </div>
        </div>
    </div>
    );
}