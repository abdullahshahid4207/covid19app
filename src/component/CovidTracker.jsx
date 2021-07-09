import React from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import getData from '../store/action';
import Cards from './Cards';

const CovidTracker = () => {
    const apiData = useSelector(state => state)
    // console.log(state)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getData())
    }, [])
    // console.log('data==>', apiData.data)




    return (
        <div>
            <h1 style={{ textAlign: 'center', color: 'red' }}><img width='170' height='95' src="https://cdn-a.william-reed.com/var/wrbm_gb_food_pharma/storage/images/publications/food-beverage-nutrition/foodnavigator-asia.com/headlines/markets/covid-19-s-crop-crisis-pandemic-poses-major-risk-to-asia-s-food-supply-and-trade-expert/10911691-1-eng-GB/COVID-19-s-crop-crisis-Pandemic-poses-major-risk-to-Asia-s-food-supply-and-trade-expert.jpg" alt="" /></h1>
            <div className='container' style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Country</th>
                            <th>Positive</th>
                            <th>Total Test Result</th>
                            <th>Hospitalized Currently</th>
                            <th>Deaths</th>
                        </tr>
                    </thead>
                    <tbody>

                        {apiData.data.map((v) => {
                            return (
                                <tr>
                                    <th>{v.state}</th>
                                    <td>{v.positive}</td>
                                    <td>{v.totalTestResults}</td>
                                    <td>{v.hospitalizedCurrently}</td>
                                    <td>{v.death}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
                {/* {apiData.data.map((v) => <Cards name={`Positive Cases = ${v.positive}`} />)}
                <Cards name={`Positive Cases = `} />
                <Cards name={`Total Test Result = `} />
                <Cards name={`Total Recover = `} />
                <Cards name={`Hospitalized Currently = `} />
                <Cards name={`Deaths = `} /> */}
            </div>
            {/* <button onClick={update}>update</button> */}
        </div>
    );
};

export default CovidTracker;