import React from 'react';
import GetCurrlocdet from './GetCurrlocdet';

const Home = () => {
  return (
    <div>
      <article>
        <p>
          An air quality index (AQI) is used by government agencies to
          communicate to the public how polluted the air currently is or how
          polluted it is forecast to become. AQI information is obtained by
          averaging readings from an air quality sensor, which can increase due
          to vehicle traffic, forest fires, or anything that can increase air
          pollution. Pollutants tested include ozone, nitrogen dioxide, sulphur
          dioxide, among others.
        </p>
        <p>
          Public health risks increase as the AQI rises, especially affecting
          children, the elderly, and individuals with respiratory or
          cardiovascular issues. During these times, governmental bodies
          generally encourage people to reduce physical activity outdoors, or
          even avoid going out altogether. The use of face masks such as cloth
          masks may also be recommended.
        </p>
        <p>
          Different countries have their own air quality indices, corresponding
          to different national air quality standards. Some of these are the Air
          Quality Health Index (Canada), the Air Pollution Index (Malaysia), and
          the Pollutant Standards Index (Singapore)
        </p>
      </article>
      <GetCurrlocdet />
    </div>
  );
};

export default Home;
