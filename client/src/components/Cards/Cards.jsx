import styles from './Cards.module.css';
import { useDispatch, connect } from 'react-redux';
import { React, useEffect } from 'react';
import { getVideogames } from '../../redux/actions/getVideogames';
import Card from './Card';


function Cards(props) {
    const dispatch = useDispatch();
    useEffect(() => {dispatch(getVideogames())}, [dispatch]);

    return (
        <div className={styles.background}>
        {
            props.allVideogames.map(game => {
                return <Card 
                    id={game.id}
                    name = {game.name}
                    genres = {game.genres}
                    image = {game.image}
                />
            })
        }
        </div>
    );
}


const mapStateToProps = (state) => {
    return {
       allVideogames: state.allVideogames
    }
}


export default connect(mapStateToProps, null)(Cards);