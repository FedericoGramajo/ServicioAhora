import React, { useEffect, useReducer } from 'react';
import { Link } from 'react-router-dom'
import Rating from '../components/Rating'
import axios from 'axios';
import logger from 'use-reducer-logger';

const reducer = (state, action) => {
    switch (action.type) {
        case 'FETCH_REQUEST':
            return { ...state, loading: true };
        case 'FETCH_SUCCESS':
            return { ...state, products: action.payload, loading: false };
        case 'FETCH_FAIL':
            return { ...state, loading: false, error: action.payload };
        default:
            return state;

    }
};


export default function ProductScreen(props) {
    const [{ loading, error, profesional }, dispatch] = useReducer(logger(reducer), {
        profesional: [],
        loading: true,
        error: '',
    });
    useEffect(() => {
        const fetchData = async () => {
            dispatch({ type: 'FETCH_REQUEST' })
            try {
                // const { data } = await axios.get('/api/products');
                const result = await axios.get('/api/profesional/' + props.match.params.id);
                dispatch({ type: 'FETCH_SUCCESS', payload: result });
                console.log('a1')
                console.log(result)
                console.log('a2')
            } catch (err) {
                dispatch({ type: 'FETCH_FAIL', payload: err.message });
            }
        };
        fetchData();
    }, [])
    return (
        <div>
            <div className='row top'>
                <Link to="/">Back to result</Link>
                <div className='col-2'>
                    <img className='large' src={profesional.image} alt={profesional.name}></img>
                </div>
                <div className='col-1'>
                    <ul>
                        <li>
                            <h1>{profesional.name}</h1>
                        </li>
                        <li>
                            <Rating rating={profesional.rating} numReviews={profesional.numReviews}></Rating>
                        </li>
                        <li>
                            Price: $???
                        </li>

                        <li>
                            Description:
                            <p>{profesional.matricula}</p>
                        </li>
                    </ul>
                </div>
                <div className='col-1'>
                    <div className='card card-body'>
                        <ul>
                            <li>
                                <div className='row'>
                                    <div>Price</div>
                                    <div className='price'>$??</div>
                                </div>
                            </li>
                            <li>
                                <div className='row'>
                                    <div>Status</div>

                                    <span className='danger'>Unavailable</span>
                                </div>
                            </li>
                            <li>
                                <button className='primary block'>Add to Cart</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>)
}