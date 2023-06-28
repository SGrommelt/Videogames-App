import React, { useEffect }  from 'react';
import styles from './Detail.module.css';
import { useParams } from 'react-router-dom';
import { useDispatch, connect } from 'react-redux';
import { getVideogameById } from '../../redux/actions/getVideogameById';


function Detail(props) {
    const { id } = useParams();
    const dispatch = useDispatch();
    useEffect(() => {dispatch(getVideogameById(id))}, [dispatch, id]);

    return (
    <div className={styles.background}>
        <h1>Detail</h1>
        <h3>{props.videogameDetail.id}</h3>
        <h1>{props.videogameDetail.name}</h1>
        {props.videogameDetail.platforms ? 
            props.videogameDetail.platforms.map( platform => {return (<h3>{platform}</h3>)})
        : null }
        {props.videogameDetail.description ?
            <h3>{props.videogameDetail.description}</h3>
        : null}
        <h2>{props.videogameDetail.releaseDate}</h2>
        <h2>{props.videogameDetail.rating}</h2>
        {props.videogameDetail.genres ? 
            props.videogameDetail.genres.map( genre => {return (<h3>{genre}</h3>)})
        : null}
        <img src={props.videogameDetail.image} alt='' />
        
    </div>
  );
}

const mapStateToProps = (state) => {
    return {
       videogameDetail: state.videogameDetail
    }
}

export default connect(mapStateToProps, null)(Detail);