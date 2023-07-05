import styles from './Cards.module.css';
import { useDispatch, connect } from 'react-redux';
import { React } from 'react';
import Card from './Card';
import Pagination from '../Pagination/Pagination';
import { setCurrentPage } from '../../redux/actions/setCurrentPage';

function Cards(props) {
    const dispatch = useDispatch();
    // const [currentPage, setCurrentPage] = useState(1);
    const cardsPerPage = 15;
    const totalCards = props.allVideogames.length;

    const firstIndex = cardsPerPage * (props.currentPage - 1);
    const lastIndex = firstIndex + cardsPerPage;

    let currentPageData = props.allVideogames.slice(firstIndex, lastIndex);

    const onPageChange= (pageNumber)=>{
        // setCurrentPage(pageNumber);
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
       allVideogames: state.allVideogames,
       currentPage: state.currentPage
    }
}


export default connect(mapStateToProps, null)(Cards);