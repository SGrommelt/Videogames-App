import styles from './Cards.module.css';
import { useDispatch, connect } from 'react-redux';
import { React, useEffect, useState, useRef } from 'react';
import { getVideogames } from '../../redux/actions/getVideogames';
import { getGenres } from '../../redux/actions/getGenres';
import Card from './Card';
import Pagination from '../Pagination/Pagination';

function Cards(props) {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getVideogames());
        dispatch(getGenres());
    }, [dispatch]);

    const [currentPageData, setCurrentPageData] = useState(props.allVideogames.slice(0, 15));
    const [currentPage, setCurrentPage] = useState(1);
    const totalCards = props.allVideogames.length;
    const cardsPerPage = 15;


    const onPageChange= (pageNumber)=>{
        setCurrentPage(pageNumber);
    }

    useEffect(()=>{
        const firstIndex = cardsPerPage * (currentPage - 1);
        const lastIndex = firstIndex + cardsPerPage;
        setCurrentPageData(props.allVideogames.slice(firstIndex, lastIndex));   
    },[currentPage]);

    return (
        <div className={styles.background}>
            <Pagination
            totalElements={totalCards}
            currentPage={currentPage}
            pageSize={cardsPerPage}
            onPageChange={onPageChange}
        />

        {
            currentPageData.map(game => {
                return <Card 
                    id={game.id}
                    name = {game.name}
                    genres = {game.genres}
                    image = {game.image}
                />
            })
        }
        {/* <Pagination
            totalElements={totalCards}
            currentPage={currentPage}
            pageSize={cardsPerPage}
            onPageChange={onPageChange}
        /> */}
        </div>
    );
}


const mapStateToProps = (state) => {
    return {
       allVideogames: state.allVideogames
    }
}


export default connect(mapStateToProps, null)(Cards);