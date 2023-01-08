import React from 'react';
import CityAQI from './CityAQI';
import NoDataFound from '../NoDataFound';
import { Row, Col } from 'react-bootstrap';

const CityAQIList = (props) => {
  let cityList = [];
  console.log(props.data);
  if (props.data) {
    cityList = props.data;
  }

  return (
    <div className='cityList'>
      <Row className='justify-content-md-center'>
        {
          cityList.length > 0
          ?
          cityList.map((cityInfo, i) => (
            <Col md='auto' key={i}>
              <CityAQI cityInfo={cityInfo} />
            </Col>
          ))
          :
          <NoDataFound />
        }
      </Row>
    </div>
  )
};

export default CityAQIList;