import React, { useContext } from 'react'
import './ServiceDisplay.css'
import { StoreContext } from '../../context/StoreContext'
import Serviceitem from '../Serviceitem/Serviceitem'

const ServiceDisplay = ({category}) => {
    const {service_list} = useContext(StoreContext)


  return (
    <div className='service-display' id='service-display'>
        <h2>OUR SERVICE</h2>
        <div className="service-display-list">
            {service_list.map((item,index)=>{
                if (category==='All' || category===item.category) {
                    return <Serviceitem key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image} />
                }
                

            })}
        </div>

      
    </div>
  )
}

export default ServiceDisplay
