import React from 'react'
import classes from './catagory.module.css'

function CatagoryCard({data}) {
  return (
    <div className={classes.catagory}>
          <a href="">
              <span>
                 <h4>{data.title}</h4> 
              </span>
              <img src={data.imgLink} alt="" />
              <p>Show now</p>
          </a>
    </div>
  )
}

export default CatagoryCard
