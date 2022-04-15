import React from 'react';
import PropTypes from 'prop-types';
import { GifGridItem } from './GifGridItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrid = ({ category }) => {

    const { data: images, loading } = useFetchGifs(category);

    return (
        <>
            <h3 className='capitalize animate__animated animate__fadeIn'>{category}</h3>
            {loading && <p className='animate__animated animate__flash'>Loading...</p>}
            <div>
                <div className="card-grid">
                    {
                        images.map(img => <GifGridItem key={img.id} {...img} />)
                    }
                </div>
            </div>

        </>
    );
};

GifGrid.propTypes = {
    category: PropTypes.string.isRequired,
};
