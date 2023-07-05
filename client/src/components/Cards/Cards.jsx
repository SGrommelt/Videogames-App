import styles from './Cards.module.css';
import { useDispatch, connect } from 'react-redux';
import { React } from 'react';
import Card from './Card';
import Pagination from '../Pagination/Pagination';
import { setCurrentPage } from '../../redux/actions/setCurrentPage';

function Cards(props) {
    const dispatch = useDispatch();
    
    const cardsPerPage = 15;
    const totalCards = props.allVideogames.length;

    const firstIndex = cardsPerPage * (props.currentPage - 1);
    const lastIndex = firstIndex + cardsPerPage;

    let currentPageData = props.allVideogames.slice(firstIndex, lastIndex);

    const onPageChange= (pageNumber)=>{
        dispatch(setCurrentPage(pageNumber));
    }

    return (
        <div className={styles.background}>
            <Pagination
            totalElements={totalCards}
            currentPage={props.currentPage}
            pageSize={cardsPerPage}
            onPageChange={onPageChange}
            />
            <div className={styles.cardsContainer}>
                <img className={styles.backgroundImg} src={require("../../img/VideogamesFG.png")} alt="" />
                <div className={styles.videoDiv}>
                    <video className={styles.video} loop autoPlay muted>
                        <source src={require("../../img/mainVideo.mp4")} type="video/mp4"></source>
                    </video>
                </div>
                <img className={styles.backgroundImgg} src={require("../../img/VideogamesFRAME.png")} alt="" />
                <div className={styles.cards}>
                    {
                        currentPageData.length > 0 ? ( currentPageData.map(game => (
                            <Card 
                                id={game.id}
                                name = {game.name}
                                genres = {game.genres}
                                image = {game.image}
                            />
                        )))
                    : null }
                </div> 
            </div>
        </div>
    );
}


const mapStateToProps = (state) => {
    return {
       allVideogames: state.allVideogames,
       currentPage: state.currentPage
    }
}


export default connect(mapStateToProps, null)(Cards);