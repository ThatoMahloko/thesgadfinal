import React from 'react'
import '../App.css'
function Navbar() {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light  right">
                <a class="navbar-brand" href="#" style={{"font-size":"50px","color":"white"}}><strong>SGADC</strong></a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item active">
                            <a style={{ "color": "white" }} class="nav-link" href="#Jumb"><strong>Home</strong></a>
                        </li>
                        <li class="nav-item">
                            <a style={{ "color": "white" }} class="nav-link" href="#About"><strong>About</strong></a>
                        </li>
                        <li class="nav-item">
                            <a style={{ "color": "white" }} class="nav-link" href="#prog"><strong>Programmes</strong></a>
                        </li>
                        <li class="nav-item">
                            <a style={{ "color": "white" }} class="nav-link" href="#vid"><strong>Trailer</strong></a>
                        </li>
                        <li class="nav-item">
                            <a style={{ "color": "white" }} class="nav-link" href="https://drive.google.com/file/d/1DuDJDmbXC_FCSJKp9d17GC-TgdAou_Td/view?usp=sharing"><strong>Full Documentary</strong></a>
                        </li>
                        <li class="nav-item">
                            <a style={{ "color": "white" }} class="nav-link" href="#contact"><strong>Contact Us</strong></a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
