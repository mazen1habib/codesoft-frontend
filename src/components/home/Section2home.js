import React, { Fragment } from 'react'
import img1back from '../../asset/images/main-custom-icon-1.png'
import img2back from '../../asset/images/main-custom-icon-2.png'
import img3back from '../../asset/images/main-custom-icon-3.png'
import img4back from '../../asset/images/main-custom-icon-4.png'
import img5front from '../../asset/images/main-custom-icon-5.png'
import img6front from '../../asset/images/main-custom-icon-6.png'
import img7front from '../../asset/images/main-custom-icon-7.png'
import img8front from '../../asset/images/main-custom-icon-8.png'
import './css/section2home.css'
const Section2home = () => {
  return (
    <Fragment>
        <div className='sec2-home'>
        <div className='data-sec2-home'>
        <div className='img-sec2-home'>
            <img className='imgfront' src={img5front} alt='img1'/>
            <img className='imgback' src={img1back} alt='img1'/>
        </div>
        <h2>IMAGINE AND CREATE</h2>
        <p>At vero eos et accusamus et <br/>iusto odio dignissimos duci</p>
        </div>
        <div className='data-sec2-home'>
        <div className='img-sec2-home'>
            <img className='imgfront' style={{marginLeft:'25px'}} src={img6front} alt='img1'/>
            <img className='imgback' src={img2back} alt='img1'/>
        </div>
        <h2>REMARKABLE STYLE</h2>
        <p>At vero eos et accusamus et <br/>iusto odio dignissimos duci</p>
        </div>
        <div className='data-sec2-home'>
        <div className='img-sec2-home'>
        <img className='imgfront' src={img7front} alt='img1'/>
        <img className='imgback' src={img3back} alt='img1'/>
        </div>
        <h2>SUPREME BLOGGING</h2>
        <p>At vero eos et accusamus et <br/>iusto odio dignissimos duci</p>
        </div>
        <div className='data-sec2-home'>
        <div className='img-sec2-home'>
            <img className='imgfront'  style={{marginLeft:'25px'}} src={img8front} alt='img1'/>
            <img className='imgback' src={img4back} alt='img1'/>
        </div>
        <h2>FRIENDLY SUPPORT</h2>
        <p>At vero eos et accusamus et <br/>iusto odio dignissimos duci</p>
        </div>
        </div>
    </Fragment>
  )
}

export default Section2home