import React from 'react'
import Particles from 'react-particles-js'
import ParticlesConfig from '../config/ParticlesConfig'
import './Particle.css'

function Particle() {
  return (
    <div className="particles">
      <Particles height="100vh" width="100vw" params={ParticlesConfig}/>
    </div>
  );
}

export default Particle
