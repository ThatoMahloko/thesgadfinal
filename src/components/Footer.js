import React from 'react'
import '../App.css'
import { FaMapMarkedAlt, FaPhone, FaEnvelopeOpenText } from "react-icons/fa"
import emailjs from 'emailjs-com'

const Footer = () => {
    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm(
            'service_4do5ex8',
            'template_73d6prs',
            e.target, 'user_FBWeDGGAg4iQ3mRXAhcdj'
        ).then(res => {
            console.log(res)
        }).catch(err => console.log(err))
    }

    function handleSubmit() {
        alert('Email has been sent')
    }
    return (
        <div id="contact">
            <div className="footer mt-5  text-center row">
                <div className="col">
                    <ul style={{ "text-align": "left" }}>
                        <li style={{ "color": "white" }} id="iconList"><FaPhone className="myIcon" style={{ "color": "white" }} />062 299 6061</li>
                        <li style={{ "color": "white" }} id="iconList"><FaEnvelopeOpenText className="myIcon" style={{ "color": "white" }} />sgadcere@gmail.com</li>
                        <li style={{ "color": "white" }} id="iconList"><FaMapMarkedAlt className="myIcon" style={{ "color": "white" }} />Address</li>
                    </ul>
                </div>

                <div className="col">
                    <form className="col-lg-8  col-sm-12" onSubmit={sendEmail, handleSubmit}>
                        <div >
                            <div class="form-group mt-2 w-100">
                                <input type="email" name="email" className="form-control w-75" aria-describedby="emailHelp" placeholder="Email"></input>
                            </div>

                            <div class="form-group mt-2">
                                <input type="text" name="subject" class="form-control w-75" aria-describedby="emailHelp" placeholder="Subject"></input>
                            </div>

                            <div class="form-group mt-2">
                                <input type="text" name="userName" class="form-control w-75" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="FirstName LastName"></input>
                            </div>


                            <div class="form-group mt-2">
                                <textarea class="form-control w-75" name="message" id="exampleFormControlTextarea1" rows="3" placeholder="Message"></textarea>
                            </div>

                            <button type="submit" name="submit" class="btn btn-dark mt-2">submit</button>

                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Footer
