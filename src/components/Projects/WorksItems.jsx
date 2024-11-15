import React from 'react';

function WorksItems({ item }) {
  return (
    <div className="works_card" key={item.id} data-Aos='zoom-in'>

      <img src={item.image} alt="" className='work_img' />
      <h3 className="work_title">{item.title}</h3>
      {/* <a href="#" className="work_button">
        Demo <i className="bx bx-right-arrow-alt work_button-icon"></i>
      </a> */}
      <a class="btn github-button " href={item.code} rel="noopener noreferrer" target='_blank'>GitHub</a><a className='btn  view-button' rel="noopener noreferrer" target='_blank' href={item.link}>view</a>
    
    </div>
  );
} 

export default WorksItems;
