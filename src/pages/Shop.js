import bg from '../assets/landing/landingbg.png';
import '../styles/Shop.css';
import "../component/Navbar";
import Parallax from 'react-rellax';
import React, { useState } from 'react';

import img1 from "../assets/shop/old1.png"
import img2 from "../assets/shop/old2.png"
import img3 from "../assets/shop/old3.png"


function Shop() 
{
    
    return (
        <section id="Shop">
        <div className="Shop_container">
        <div className="circle"></div>
            
            <div className="Shop_logo">
                <div className="Shop_h">
                    
                </div>
                <div className="Shop_mand_container">
                    <div className='Shop_rotating_mandala'>

                    </div>
                </div>
                
            </div>
            <div className="Shop_buttons">

            <p>The Shop section of Gaatha is a treasure 
            trove of authentic <br></br>Indian products that
            have been carefully sourced from local<br></br>
            craftsmen across the country. You will
            find a wide variety of <br></br>items  that showcase
            the rich culture, art, and heritage of India,<br></br>
            from handcrafted textiles and intricately
            designed jewelry <br></br>  to beautifully painted pottery
            and wooden carvings.</p>

            </div>
            <div className="Shop_bg">
            </div>
        </div>
        <div className='meet_locals'>
                
                <div className='meet_content'>
                    <div className='meet_left'> 
                        
                        <div className='meet_cont'>
                            <div className='meet_heading'></div>
                            <p>
                                Meet the artisans behind these gems and explore more about their lives!
                            </p>
                        </div>
                        
                        <div className='gallery'>

                            <section class="carousel" aria-label="Gallery">
                                <ol class="carousel__viewport">
                                    <li id="carousel__slide1"
                                        tabindex="0"
                                        class="carousel__slide">
                                        <div class="carousel__snapper">
                                            <a href="#carousel__slide4"
                                                class="carousel__prev">Go to last slide</a>
                                            <a href="#carousel__slide2"
                                                class="carousel__next">Go to next slide</a>
                                        </div>
                                    </li>
                                    <li id="carousel__slide2"
                                        tabindex="0"
                                        class="carousel__slide">
                                        <div class="carousel__snapper"></div>
                                        <a href="#carousel__slide1"
                                            class="carousel__prev">Go to previous slide</a>
                                        <a href="#carousel__slide3"
                                            class="carousel__next">Go to next slide</a>
                                    </li>
                                    <li id="carousel__slide3"
                                        tabindex="0"
                                        class="carousel__slide">
                                        <div class="carousel__snapper"></div>
                                        <a href="#carousel__slide2"
                                            class="carousel__prev">Go to previous slide</a>
                                        <a href="#carousel__slide4"
                                            class="carousel__next">Go to next slide</a>
                                    </li>
                                    <li id="carousel__slide4"
                                        tabindex="0"
                                        class="carousel__slide">
                                        <div class="carousel__snapper"></div>
                                        <a href="#carousel__slide3"
                                            class="carousel__prev">Go to previous slide</a>
                                        <a href="#carousel__slide1"
                                            class="carousel__next">Go to first slide</a>
                                    </li>
                                </ol>
                                <aside class="carousel__navigation">
                                    <ol class="carousel__navigation-list">
                                        <li class="carousel__navigation-item">
                                            <a href="#carousel__slide1"
                                                class="carousel__navigation-button">Go to slide 1</a>
                                        </li>
                                        <li class="carousel__navigation-item">
                                            <a href="#carousel__slide2"
                                                class="carousel__navigation-button">Go to slide 2</a>
                                        </li>
                                        <li class="carousel__navigation-item">
                                            <a href="#carousel__slide3"
                                                class="carousel__navigation-button">Go to slide 3</a>
                                        </li>
                                        <li class="carousel__navigation-item">
                                            <a href="#carousel__slide4"
                                                class="carousel__navigation-button">Go to slide 4</a>
                                        </li>
                                    </ol>
                                </aside>
                            </section>
                        </div>
                    </div>
                    <div className='meet_right'>
                            <Parallax className="meet--lion" speed={2}></Parallax>

                    </div>
                    
                </div>
                <div className="meet_bg">
                </div>
        </div>

        <div className="buy">
            
       
            
        <div className='dispGaatha'>
                
        </div>
        <div className='disp_underline'>
            <p>

            Madhubani Painting - Fishes <br></br>
            HANDMADE original poster and acrylic colors on handmade paper<br></br>
            Size: 14″ x 14″ inches (Unframed)
            </p>
        </div>
        
            
        <div className="buy_container">
                    <div className='buy_mandala'>

                    </div>
        </div>
        
        <div className='fish'></div>

        

        
            
        <div className="buy_cir">  
        </div>
        

           
        <div className="buy_bg">

        
            
        </div>
        </div>
       
        <div className='paintings'>
        <div className='sale1'>
            <p>
            Madhubani Tapestry<br></br>
            <br></br>
            Price: Rs. 12000<br></br>
            Place of Origin: Aurangabad, Bihar<br></br>
            Product Description: Loren Impsum<br></br>
            </p>

            
            
        </div>
        <div className='saleunder1'></div>
        <div className='sale2'>
            <p>
            Madhubani Tapestry<br></br>
            <br></br>
            Price: Rs. 12000<br></br>
            Place of Origin: Aurangabad, Bihar<br></br>
            Product Description: Loren Impsum<br></br>
            </p>

            
            
        </div>
        <div className='saleunder2'></div>
        

        <div className="buy_container1">
            <div className='buy_mandala1'>

            </div>
        </div>
        
        
        <div className='people'></div>

        <div className="buy_container2">
            <div className='buy_mandala2'>

            </div>
        </div>
        
        
        <div className='gods'></div>

        

        <div className="buy_bg">
        
        </div>
             
            
        </div>
        
        
        
        </section>

    
        
            
        

    
   
   
    )
    
}


export default Shop;
