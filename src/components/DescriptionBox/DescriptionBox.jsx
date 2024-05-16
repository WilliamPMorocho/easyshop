import React from 'react'
import './DescriptionBox.css'


const DescriptionBox = () => {
  
  return (
    <div className='descriptionbox'>
      <div className="descriptionbox-navigator">
        <div className={`descriptionbox-nav-box bpb_dark`}>Description</div>
        <div className={`descriptionbox-nav-box fade bpb_dark`}>Reviews (122)</div>
      </div>
      <div className='descriptionbox-description'>
        <p className={`bpb_dark`}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat iste enim numquam ipsum deserunt molestiae repellat quis quo dignissimos vitae, hic asperiores adipisci. Saepe animi ea facilis voluptas corrupti! Voluptatem!</p>
        <p className={`bpb_dark`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, nam!</p>
      </div>
    </div>
  )
}

export default DescriptionBox
