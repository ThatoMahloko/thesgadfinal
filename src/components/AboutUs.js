import React from 'react'
import '../App.css'
import { BsCaretRight } from "react-icons/bs";

function AboutUs() {
    return (
        <div className="container">
            <h1 style={{"text-align":"center"}}>About Us </h1>
            <div className="row" id="About">
                <div class="card col-lg-6 col-md-4 col-sm-12" style={{ "background-color":"#30449b"}}>
                    <div class="card-body">
                        <h5 class="card-title" style={{"color":"white"}}>The Shane Griqua Advice and Development Center</h5>
                        <p class="card-text">Was founded in 2013 and registered with NPO directorate nr 144-016, mainly to address issues relating to the needy, the rejected, the marginlalised and to establish a shelter for abused men and boys to address other social illnesses including unemployment etc. The organisation was offficially launched by the Deputy Minister of Justice and Constitutional Development Honorable John Jeffery (MP) in December 2014 mainly to operate as a legal Advice Development center </p>
                    </div>
                </div>
                <div class="card col-lg-6 col-md-4 col-sm-1" style={{ "background-color":"#ee1860"}}>
                    <div class="card-body" >
                        <h5 class="card-title" style={{ "color": "white" }}>We Currently have a project called: "Die Groot"</h5>
                        <h6 class="card-subtitle mb-2 " style={{"color":"black"}}>Where we provide a basket of services to community from where we recently purchased 5 twelve-meter container boxes that would be used for:</h6>
                        <ul>
                            <li class="list"><p class="card-text"><BsCaretRight />Organisational office</p></li>
                            <li class="list"><p class="card-text"><BsCaretRight />A safer space for Support group sessions and community dialogue </p></li>
                            <li class="list"><p class="card-text"><BsCaretRight />A bread Bin / Soup Kitchen that would serve as a food bank to give food to the needy especially chilldren coming from school</p></li>
                            <li class="list"><p class="card-text"><BsCaretRight />Victim Friendly Room for GBV Victims while we counsel them and refer them to the law enforcement agencies </p></li>
                            <li class="list"><p class="card-text"><BsCaretRight />Youth Development Resource Office to assist you with job seeking and other opportunities i.e. CV typing, Mailing and Copying as we don't have such a facility in the areaYouth Development Resource Office to assist you with job seeking and other opportunities i.e. CV typing, Mailing and Copying as we don't have such a facility in the area </p></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default AboutUs
