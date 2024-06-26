import React, { Fragment } from 'react'
import './css/section5home.css'
import img1 from '../../asset/images/main-home-slider-img-1.png'
import img2 from '../../asset/images/main-home-slider-img-2.png'
import img3 from '../../asset/images/main-home-separator-img-1.png'
import img4 from '../../asset/images/check.png'
const Section5home = () => {
  return (
    <Fragment>
        <div className='container-sec5-home'>
        <div className='data-sec5-home'>
        <h1>WE LIVE FASHION</h1>
        <img src={img3} alt=''/>
        <h2>Aliquam lorem ante, dapibus in, viverra quis, feugiat a,<br/> tellus. Phasellus viverra nulla ut metus varius laoreet. </h2>
        <div className='data-q-sec5-home'> <img src={img4} alt=''/> <h4>Aenean commodo ligula eget dolor massa? </h4></div>
        <div className='data-q-sec5-home'> <img src={img4} alt=''/> <h4>At vero eos et accusamus et consensus?  </h4></div>
        <div className='data-q-sec5-home'> <img src={img4} alt=''/> <h4>Lorem ipsum dolor sit amet? </h4></div>
        <div className='data-q-sec5-home'> <img src={img4} alt=''/> <h4>Sed ut perspiciatis unde omnis lorem ipsum iste?  </h4></div>
        <div className='data-q-sec5-home'> <img src={img4} alt=''/> <h4>Ut enim ad minima veniam at vero eos quis? </h4></div>
       
        </div>
        <div className='imges-sec5-home' >
            <img src={img2} alt='' className='ig-2'/>
            <img src={img1} alt='' className='ig-1'/> 
        </div>
        </div>
    </Fragment>
  )
}

export default Section5home