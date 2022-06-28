import React, { useEffect, useReducer } from 'react';
import Product from '../components/Product';
import Rubro from '../components/Rubro';
import LoadingBox from '../components/LoadingBox';
import MessageBox   from '../components/MessageBox'
import axios from 'axios';
import logger from 'use-reducer-logger';

const reducer = (state, action) => {
    switch (action.type) {
        case 'FETCH_REQUEST':
            return { ...state, loading: true };
        case 'FETCH_SUCCESS':
            return { ...state, rubros: action.payload, loading: false };
        case 'FETCH_FAIL':
            return { ...state, loading: false, error: action.payload };
        default:
            return state;

    }
};

function HomeScreen() {
    const [{ loading, error, rubros }, dispatch] = useReducer((reducer), {
        rubros: [],
        loading: true,
        error: '',
    });
    useEffect(() => {
        const fetchData = async () => {
            dispatch({ type: 'FETCH_REQUEST' })
            try {
                const result = await axios.get('/api/rubros');
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
                    rubros.data.map((rubro) => (
                    <Rubro key={rubro._id} rubro={rubro}></Rubro> //aca le tenego que indicar el mismo paratro que se espera en el componente que llamo
                            )))
                }

            </div>

        </div>
    )
}
export default HomeScreen