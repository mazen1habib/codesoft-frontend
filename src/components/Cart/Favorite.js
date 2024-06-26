import React, { Fragment, useEffect, useState } from 'react'
import Nav from '../Routes/Nav'
import Footer from '../Components/Footer/Footer'
import Session8home from '../Components/Home/Session8home'
import '../Components/Shop/shop.css'
import { FaHeart } from "react-icons/fa";
import { TbArrowsShuffle } from "react-icons/tb";
import { FaSearchPlus } from "react-icons/fa";
import {  NavLink } from 'react-router-dom'
import {  useSelector } from 'react-redux'
import { useDispatch } from 'react-redux';
import { cartslice } from '../Cart/Cartslice';
import { TiDeleteOutline } from "react-icons/ti";
import star from '../Components/images/rating.png'
import Scrollh from '../Routes/Scrollh'
import '../Components/Looding/looding.css'
const  Favorite = () => {
  const dispatch=useDispatch()
    const product = useSelector((state)=>state.cart.fav)
    console.log(product
      );
    const [looding1 ,setlooding] =useState(false)
    useEffect(()=>{
      setlooding(true)
      setTimeout(()=>{
        setlooding(false)
      },5000)
    } ,[])
  return (
    <Fragment>
    {
 looding1 ? <div className='loader1'><div aria-label="Orange and tan hamster running in a metal wheel" role="img" class="wheel-and-hamster">
	<div class="wheel"></div>
	<div class="hamster">
		<div class="hamster__body">
			<div class="hamster__head">
				<div class="hamster__ear"></div>
				<div class="hamster__eye"></div>
				<div class="hamster__nose"></div>
			</div>
			<div class="hamster__limb hamster__limb--fr"></div>
			<div class="hamster__limb hamster__limb--fl"></div>
			<div class="hamster__limb hamster__limb--br"></div>
			<div class="hamster__limb hamster__limb--bl"></div>
			<div class="hamster__tail"></div>
		</div>
	</div>
	<div class="spoke"></div>
</div> </div> :
    <Fragment>
        <Nav/>
        <section className='shop3'>
        <div className='conshop'>
    {
        product.map((ol,idx)=>(
            <div  className='productshop'>
            <img src={ol.node.featuredImage.url} alt=''/>
            <div className=' condatashop'>
            <div className='dh' style={{display:'flex',justifyContent:'space-between'}}>
           <h1>{ol.node.title || ol.title }</h1>
           <TiDeleteOutline size={30} onClick={()=>{dispatch(cartslice.actions.removearry(idx))}}  style={{marginRight:'20px',marginTop:'10px'}}/>
           </div> 

            <div className='sales'>
            <h3> $ {ol.node.variants.edges[0].node.price.amount} <span>$ 300</span> <h4>60% off</h4> </h3>
            <div className='no'>
            <img src={star} alt=''/>
            <span style={{textDecoration:'none'}}>(25)</span>
            </div> 
            </div>
            <p>{ol.node.description}</p>
            <div className='colorsm'>
            <div className='c1'></div>
            <div className='c2'></div>
            <div className='c3'></div>
            </div>
            <div className='buto'>
            <div className='barshop'>
            <NavLink> <FaSearchPlus  size={25}  style={{backgroundColor:'white'}}/></NavLink>
            <NavLink> <TbArrowsShuffle size={25}  style={{backgroundColor:'white'}}/></NavLink>
            <NavLink> <FaHeart size={25}  style={{backgroundColor:'white'}} /> </NavLink>
            </div>
            </div>
            </div>
            </div> ))
    }
   </div>
        </section>
        <Session8home/> 
        <Footer/>
        <Scrollh/>
    </Fragment>}
    </Fragment>
  )
}
export default Favorite

