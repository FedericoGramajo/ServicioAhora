import React, { useEffect, useReducer } from 'react';
import Product from '../components/Product';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox'
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

function HomeScreen(props) {
    const [{ loading, error, products }, dispatch] = useReducer(logger(reducer), {
        products: [],
        loading: true,
        error: '',
    });
    useEffect(() => {
        const fetchData = async () => {
            dispatch({ type: 'FETCH_REQUEST' })
            try {
                // const { data } = await axios.get('/api/products');
                const result = await axios.get('/api/servicios', {
                    params: {
                        id: props.match.params.id
                    }
                });
                dispatch({ type: 'FETCH_SUCCESS', payload: result });
            } catch (err) {
                dispatch({ type: 'FETCH_FAIL', payload: err.message });
            }
        };
        fetchData();
    }, [])
    return (
        <div>

            <div className="row center">
                {loading ? (
                    <LoadingBox></LoadingBox>
                ) :
                    error ? (
                        <MessageBox variant='danger'>{error}</MessageBox>
                    ) : (
                        products.data.map(product => (
                            <Product key={product._id} product={product}></Product>
                        )))
                }

            </div>

        </div>
    )
}
export default HomeScreen