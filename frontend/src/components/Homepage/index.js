import React from "react";
import { LoginForm, SignupForm } from "../SessionForms";
import './Homepage.css'
import HomeSearchForm from "./HomeSearchForm";



function Homepage(  ) {
    
    return (
        <div className="homepage-bg">
            <div className="text-container">
                <h2 id="outside">
                    Find yourself outside.
                </h2>
                <div className="inner-text-container">
                    <div className="small-headline-box">
                        <div id="disco-top">
                            <h3 className="discover-parks-text">
                                Discover and book tent camping, RV 
                            </h3>  
                        </div>
                        <div id="disco-bottom">
                            <h3 className="discover-parks-text">
                                parks, cabins, treehouses, and glamping.
                            </h3>  
                        </div>
                    </div>
                </div>
            </div>
            <div className="under-text-container">
                <div className="hp-image"></div>
                <div className="search-box"> 
                <HomeSearchForm/>
                </div>
            </div>
        </div>
    )
}

export default Homepage;