const data = {
    rubros:[
        {
            _id:'1',
            categoria:'Plomeria',
            monto:300,
            image: "../images/plomeria.png"
        },
        {
            _id:'2',
            categoria:'Cerrajeria',
            monto:100,
            image: "../images/cerrajeria.png"
        },
        {
            _id:'3',
            categoria:'Electricista',
            monto:500,
            image: "../images/electricista.png"
        },
        {
            _id:'4',
            categoria:'Electrodomesticos',
            monto:600,
            image: "../images/electro.png"
        }
    ],
    servicios: [
        {
            _id: '1',
            rubro_id:4,
            name: 'Osvaldo',
            image: "../images/defaultMan.png",
            matricula: '1112222',
            rating: 2,
            numReviews: 3,
        },
        {
            _id: '2',
            rubro_id:1,
            name: 'Roberto',
            image: "../images/defaultMan.png",
            matricula: '444444',
            rating: 5,
            numReviews: 3,
        },
        {
            _id: '3',
            rubro_id:4,
            name: 'Daniel',
            image: "../images/defaultMan.png",
            matricula: '1112222',
            rating: 3,
            numReviews: 3,
        },
        {
            _id: '4',
            rubro_id:3,
            name: 'Martin',
            image: "../images/defaultMan.png",
            matricula: '4444444',
            rating: 5,
            numReviews: 3,
        },
        {
            _id: '5',
            rubro_id:3,
            name: 'Lucas',
            image: "../images/defaultMan.png",
            matricula: '77777',
            rating: 1,
            numReviews: 3,
        },
    ],
};
export default data;