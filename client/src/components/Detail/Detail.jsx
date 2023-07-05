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
        <img className={styles.image} src={props.videogameDetail.image} alt='' />
        <h3 className={styles.id}>{props.videogameDetail.id}</h3>
        <div className={styles.infoContainer} >
            <div className={styles.genreContainer}>
                {props.videogameDetail.genres ? 
                    props.videogameDetail.genres.map( genre => {return (<h3 className={styles.genre}>{genre}</h3>)})
                : null}
            </div>
            <div className={styles.nameContainer}>
                <h1 className={styles.name}>{props.videogameDetail.name}</h1>
            </div>
        </div>
        <div className={styles.platformContainer} >
            <h3 className={styles.platformsLabel} >AVAILABLE ON: </h3>
            {props.videogameDetail.platforms ? 
                props.videogameDetail.platforms.map( platform => {return (<h3 className={styles.platform} >{platform}</h3>)})
            : null }
        </div>
        <div className={styles.additionalInfo}>
            {props.videogameDetail.description ?
                <h3>{props.videogameDetail.description}</h3>
            : null}
            <h2> <span className={styles.title}>Rating: </span>{props.videogameDetail.rating}</h2>
            <h2> <span className={styles.title}>Release date: </span>{props.videogameDetail.releaseDate}</h2>
        </div>
    </div>
  );
}

const mapStateToProps = (state) => {
    return {
       videogameDetail: state.videogameDetail
    }
}

export default connect(mapStateToProps, null)(Detail);