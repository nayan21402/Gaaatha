import React from 'react';
import bg from '../assets/landing/landingbg.png';
import '../styles/Tales.css';
import Flickity from 'react-flickity-component'


const flickityOptions = {
  initialIndex: 2
}
function Tales() {
  return (
    <section id='Tales'>
      <div className='ullu'></div>
      <div className='first_story'></div>
      <div className='second_story'></div>
      <div className='third_story'></div>
      <div className="Tales_container">
        <div className="Tales_circle_top">



        </div>


        <div className="Tales_logo">
          <div className="logo_Tales">
          </div>
          <div className="Tales_mand_container">
            <div className='Tales_rotating_mandala'>

            </div>
          </div>

        </div>
        <div className="comm_desc">
          <p id="cd">A digital archive of folktales, ancient lores, and legends that have been passed down through generations. The tales reflect the rich cultural heritage of India and cover a wide range of themes, including mythology, religion, history, and social customs. The website features stories of gods and goddesses, heroic feats of warriors, magical creatures, and fables with moral lessons.</p>

        </div>
        <div className="Tales_bg">

        </div>
      </div>

      <div>

      </div>

      <div className="experience_container">
        {/* <div className="Tales_circle_bottom"></div> */}

        <div className="Tales_bg">
        </div>
      </div>


      <div className="Tales_container2">
        <div className='Tales_text'> <h1>The tale of Bhramrakshas</h1>
          <p>Once upon a time, there lived a lazy man Debarka. His wife was always disappointed in him as he never fulfilled his duties of a husband or a care taker. She was fed up of carrying the household on her own.
            forced by his wife, he finally left for work with his bag of barber tools. However, his lazy nature soon subjected him to fall asleep under a tree. But what was this? A scary looking giant brahmarakshas stood there, claiming to eat him up for his lunch!
            But the man was no simpleton! He made up a story to fool the rakshasa to get away. He told him that the prince is too ill and he can get well only if someone captured and sacrified a 101 rakshasas. Debarka had captured a 100 and this one would be 101st Brahmarakshas by capturing his soul into his mirror!
            The rakshasa begged the smart man to leave him alone in fear! So they negotiated a deal where he would be his servant. The rakshasa completed all menial tasks. But, he should be occupied 24x7 or he would create chaos!
            debarka grew tired and his creativity could not create any more tasks to be done. so he asked the rakshas to straighten a strand of curly hair. Alas! the rakshas did all he could but failed. Unable to accomplish his master’s task he ran away! And thus Debarka saved the day with his wit and quick thinking!</p>
            </div>
          <div class="carousel-cell">
            <iframe src="https://drive.google.com/file/d/1Cq6FF0tLPJXJImy6z0DR-J3gy_WDe4Nn/preview" width="640" height="480" allow="autoplay"></iframe>
          </div>
          <div class="carousel-cell">
            <iframe src="https://drive.google.com/file/d/16BfRtKVEMiwmdTi8zCrpF4cAOpJ2WZas/preview" width="640" height="480" allow="autoplay"></iframe>
          </div>
          <div class="carousel-cell">
            <iframe src="https://drive.google.com/file/d/164PDbuck88UFH_4xBFRw2c3KG5tBC-bq/preview" width="640" height="480" allow="autoplay"></iframe>
          </div>
          <div class="carousel-cell">
            <iframe src="https://drive.google.com/file/d/1GG8S_fwaY7R2bJ6BEpiJkf5c5XysWUHt/preview" width="640" height="480" allow="autoplay"></iframe>
          </div>
          <div class="carousel-cell">
            <iframe src="https://drive.google.com/file/d/1SJauoKBU_i_0ET-zZrTy_mXKnTFbRQp1/preview" width="640" height="480" allow="autoplay"></iframe>
          </div>
        <div className="Tales_bg">

        </div>
      </div>

    </section>

  )
}

export default Tales;