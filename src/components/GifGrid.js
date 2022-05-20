import { GifGridItem } from './GifGridItem';
import { useFetchGifs } from "../hooks/useFetchGifs"
import PropTypes from 'prop-types';

export const GifGrid = ({ category }) => {

    const { data, loading } = useFetchGifs(category);

    return (
        <>
            <h3 className='animate__animated animate__fadeIn'>{category}</h3>

            { loading && 'Cargando....'}

            <div className='card-grid'>
                {
                    data.map(img => (
                        <GifGridItem
                            key={img.id}
                            {...img}
                        />
                    ))
                }
            </div>
        </>
    )
}

GifGrid.protoType = {
    category: PropTypes.string.isRequired
}