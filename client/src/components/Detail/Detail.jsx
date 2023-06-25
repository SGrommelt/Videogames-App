import React, { useEffect }  from 'react';
import styles from './Detail.module.css';
import { useParams } from 'react-router-dom';
import { useDispatch, connect } from 'react-redux';
import { getVideogameById } from '../../redux/actions/getVideogameById';


function Detail(props) {
    const { id } = useParams();
    const dispatch = useDispatch();
    useEffect(() => {dispatch(getVideogameById(id))}, [dispatch, id]);
    console.log(props.videogameDetail.platforms);

    return (
    <div className={styles.background}>
        <h1>Detail</h1>
        <h3>{props.videogameDetail.id}</h3>
        <h1>{props.videogameDetail.name}</h1>
        {/* {props.videogameDetail.platforms.map( element => {
            return (<h3>{element.platform.name}</h3>)
            }
        )} */}
        <h2>{props.videogameDetail.releaseDate}</h2>
        <h2>{props.videogameDetail.rating}</h2>
    </div>
  );
}

const mapStateToProps = (state) => {
    return {
       videogameDetail: state.videogameDetail
    }
}

export default connect(mapStateToProps, null)(Detail);