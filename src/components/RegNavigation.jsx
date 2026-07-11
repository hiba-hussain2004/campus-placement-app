import React from 'react'
import { Link } from 'react-router-dom'

const RegNavigation = () => {
  return (
    <div>

    <nav class="navbar navbar-expand-lg n1">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">CAMPUS PLACEMENT </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                    
                    <Link class="nav-link active" aria-current="page" to="/">ADD REGISTRATION </Link>
                    <Link class="nav-link" to="/Search">SEARCH REIGSTRATION</Link>
                    
                    <Link class="nav-link" to="/delete">DELETE REGISTRATION</Link>
                    <Link class="nav-link" to="/view">VIEW REGISTRATION</Link>
                    
                </div>
                </div>
            </div>
        </nav>


    </div>
  )
}

export default RegNavigation