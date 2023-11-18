import React from 'react'
import ServiceCard from './ServiceCard'
import {Col} from 'reactstrap'
import weatherImg from '../assets/images/weather.png'
import guideImg from '../assets/images/guide.png'
import customizationImg from '../assets/images/customization.png'

const ServiceList = () => {

    const serviceData = [
        {
            imgUrl:weatherImg,
            title:"Calculate Weather",
            desc:"weather description"
        },
        {
            imgUrl:guideImg,
            title:"Best tour guide",
            desc:"guide description"
        },
        {
            imgUrl:customizationImg,
            title:"Customization",
            desc:"customizat description"
        },
        

        

    ]

  return (
    <>
      {
        serviceData.map((item, index)=>
          <Col md='6' sm='12' lg='3' className='mb-4'>
            <ServiceCard item={item}/>
          </Col>
          )
      }
    </>
  )
}

export default ServiceList
