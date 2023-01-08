import React from 'react';
import { useAQIAPIs } from '../../utils/useAQIAPIs';

import { TOKEN, FEED_AQI_BASE_URL } from '../../utils/AQIConst';
import { Card, ListGroup } from 'react-bootstrap';

const CityAQIDetails = (props) => {
    const [info, error] = useAQIAPIs(
        `${FEED_AQI_BASE_URL}@${props.uid}/?token=${TOKEN}`
    );

    const names = {
        'pm25': "particular matter 2.5(pm 2.5)",
        'pm10': "particular matter 10(pm 10)",
        'o3': "Ozone",
        'no2': "Nitrogen Dioxide",
        'so2': "Sulphur Dioxide",
        'co': "Carbon Monoxide",
        't': "Temperature",
        'w': "Wind",
        'r': "Rain (precipitation)",
        'h': "Relative Humidity",
        'd': "Dew",
        'p': "Atmospheric Pressure"
    }

    const getSpectrum = (iaqi) => {
        let ret = [];
        Object.entries(iaqi).map(function(item) {
            let obj = {};
            let key = names[item[0]] ? names[item[0]] : item[0];
            obj['key'] = key;
            obj['value'] = item[1].v;
            ret.push(obj);
        });
        return ret;
    }

    const colorize = (name, value) => {
        if ([
            'particular matter 2.5(pm 2.5)',
            'particular matter 10(pm 10)',
            'Ozone',
            'Nitrogen Dioxide',
            'Sulphur Dioxide',
            'Carbon Monoxide'
        ].indexOf(name) < 0) {
            return '';
        }
        if (value >= 0 && value <= 50) {
            return 'good';
        }
        else if (value >= 51 && value <= 100) {
            return 'moderate';
        }
        else if (value >= 101 && value <= 150) {
            return 'unhealthy sensitive';
        }
        else if (value >= 151 && value <= 200) {
            return 'unhealthy';
        }
        else if (value >= 201 && value <= 300) {
            return 'very unhealthy';
        }
        else if (value >= 301) {
            return 'hazardous';
        }
    }

    return (
        <React.Fragment>
            {error}
            {
                info.data ?
                    <Card style={{ width: '18rem' }}>
                        <Card.Header>Prominent Pollutant is, <b>{names[info.data.dominentpol]}</b></Card.Header>
                        <ListGroup variant='flush'>
                            {
                                getSpectrum(info.data.iaqi).map((spectrum, i) => (
                                    <ListGroup.Item key={i}>
                                        <span className={`dot ${colorize(spectrum.key, spectrum.value)}`}></span>
                                        <span>{spectrum.key}</span>: <span>{spectrum.value}</span>
                                    </ListGroup.Item>
                                ))
                            }
                        </ListGroup>
                    </Card>
                    : <span>Loading...</span>
            }
        </React.Fragment>
    )
}

export default CityAQIDetails;