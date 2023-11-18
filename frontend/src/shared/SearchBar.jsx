import React, {useRef} from 'react'
import './Search-Bar.css'
import {Col, Form, FormGroup} from 'reactstrap'
import { BASE_URL } from '../utils/config'
import { useNavigate } from 'react-router-dom'

const SearchBar = () => {

    const locationRef = useRef('');
    const distanceRef = useRef(0);
    const maxGroupSizeRef = useRef(0);
    const navigate = useNavigate();

    const searchHandler = async () => {
        const location = locationRef.current.value;
        const distance = distanceRef.current.value;
        const maxGroupSize = maxGroupSizeRef.current.value;
        if(location==="" || distance==="" || maxGroupSize===""){
            return alert("Please fill all fields...!")
        }

        const res = await fetch(`${BASE_URL}/tour/search/getTourBySearch?city=${location}&distance=${distance}&maxGroupSize=${maxGroupSize}`);
        if(!res.ok){
            return alert("Something went wrong")
        }
        const result = await res.json();
        console.log("25 result ::>> ",result)
        navigate(`/tours/search?city=${location}&distance=${distance}&maxGroupSize=${maxGroupSize}`,
        {state : result.tour});
    }

  return (
    <Col lg='12'>
      <div className="search__bar">
        <Form className='d-flex align-items-center gap-4'>
            <FormGroup className='d-flex gap-3 form__group form__group-fast'>
                <span><i class='ri-map-pin-line'></i></span>
                <div>
                    <h6>Location</h6>
                    <input type="text" placeholder='where are you going ?' ref={locationRef}/>
                </div>
            </FormGroup>
            <FormGroup className='d-flex gap-3 form__group form__group-fast'>
                <span><i class='ri-map-pin-time-line'></i></span>
                <div>
                    <h6>Distance</h6>
                    <input type="Number" placeholder='Distance k/m' ref={distanceRef}/>
                </div>
            </FormGroup>
            <FormGroup className='d-flex gap-3 form__group form__group-fast'>
                <span><i class='ri-group-line'></i></span>
                <div>
                    <h6>Max People</h6>
                    <input type="Number" placeholder='0' ref={maxGroupSizeRef}/>
                </div>
            </FormGroup>
            <span className='search__icon' type="submit" onClick={searchHandler}><i class='ri-search-line'></i></span>
        </Form>
      </div>
    </Col>
  )
}

export default SearchBar
