import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Details = () => {
    const data = useLoaderData()
    console.log(data);
    const find = data.map(news => )
    return (
        <div>
            This is About
        </div>
    );
};

export default Details;