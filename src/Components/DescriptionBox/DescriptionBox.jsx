import React from 'react';
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Fugit sunt tempora laborum nihil rerum fuga, unde labore, blanditiis, nam delectus iure 
          ut maxime id corporis et iusto neque cupiditate distinctio. 
          Corporis nemo quia excepturi dignissimos dolore ex ut ullam id natus, 
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo iure enim nulla itaque possimus 
          cumque labore illum tempore id dolorum!
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis veritatis maiores, 
          a sed sapiente quidem odio esse accusantium officia vero ducimus facere dolorum voluptatibus quod.
        </p>
      </div>
    </div>
  )
}

export default DescriptionBox
