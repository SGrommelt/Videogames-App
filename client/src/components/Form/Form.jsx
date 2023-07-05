import React, { useState } from 'react'
import styles from './Form.module.css';
import { validation } from "./validation";
import { postVideogame } from '../../redux/actions/postVideogame';
import { useDispatch, connect } from 'react-redux';

function Form(props) {
    
    const dispatch = useDispatch();
    
    const [inputs, setInputs] = useState({
        name: "",
        image: "",
        description: "",
        platforms: "",
        releaseDate: "",
        rating: 0,
        genres: []
    });

    const [errors, setErrors] = useState({});

    const handleChange = (event) => {
        if (event.target.type === 'checkbox') {
            if (event.target.checked) {
                setInputs({
                    ...inputs,
                    genres: inputs.genres.concat(event.target.value)
                })
                setErrors(validation({
                    ...inputs,
                    genres: inputs.genres.concat(event.target.value)
                }))
            } else {
                setInputs({
                    ...inputs,
                    genres: inputs.genres.filter(genre => genre !== event.target.value)
                })
                setErrors(validation({
                    ...inputs,
                    genres: inputs.genres.filter(genre => genre !== event.target.value)
                }))
            }
        } else {
            const {name, value} = event.target;
            setInputs({
                ...inputs,
                [name]: value
            })
            setErrors(validation({
                ...inputs,
                [name]: value
            }))
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(postVideogame(inputs));
        alert("Game created");
        setInputs({
            name: "",
            image: "",
            description: "",
            platforms: "",
            releaseDate: "",
            rating: 0,
            genres: []
        })
        props.genres.map(genre => {
            const check = document.getElementById(genre.id);
            check.checked = false;
            return 0;
        })
    };
    
    return (
        <div className={styles.formWrapper}>
            <form className ={styles.form} onSubmit={handleSubmit} >   
                <label>Name: </label>
                <input 
                            type="text"
                            name="name"
                            value={inputs.name} 
                            onChange={handleChange}
                            className={styles.input}
                            placeholder="Name..."
                />
                <div className={styles.errorDiv}>
                    <p className={styles.error}>
                        {errors.name ? errors.name : null}
                    </p>
                </div>
                <label>Image URL: </label>
                <input 
                            type="text"
                            name="image"
                            value={inputs.image} 
                            onChange={handleChange}
                            className={styles.input}
                            placeholder="Image URL..."
                />
                <div className={styles.errorDiv}>
                    <p className={styles.error}>
                        {errors.image ? errors.image : null}
                    </p>
                </div>
                <label>Description: </label>
                <textarea 
                            type="text"
                            name="description"
                            value={inputs.description} 
                            onChange={handleChange}
                            className={styles.input}
                            placeholder="Game description..."
                />
                <div className={styles.errorDiv}>
                    <p className={styles.error}>
                        {errors.description ? errors.description : null}
                    </p>
                </div>
                <label>Platforms: </label>
                <textarea 
                            type="text"
                            name="platforms"
                            value={inputs.platforms} 
                            onChange={handleChange}
                            className={styles.input}
                            placeholder="Platforms..."
                />
                <div className={styles.errorDiv}>
                    <p className={styles.error}>
                        {errors.platforms ? errors.platforms : null}
                    </p>
                </div>
                <label>Release date: </label>
                <input 
                            type="date"
                            name="releaseDate"
                            value={inputs.releaseDate} 
                            onChange={handleChange}
                            className={styles.input}
                            placeholder="Release date..."
                />
                <div className={styles.errorDiv}>
                    <p className={styles.error}>
                        {errors.releaseDate ? errors.releaseDate : null}
                    </p>
                </div>
                <label>Rating: </label>
                <input 
                            type="number"
                            name="rating"
                            value={inputs.rating} 
                            onChange={handleChange}
                            className={styles.input}
                            placeholder="Rating..."
                />
                <div className={styles.errorDiv}>
                    <p className={styles.error}>
                        {errors.rating ? errors.rating : null}
                    </p>
                </div>
                <label>Genres: </label>
                <br />
                {props.genres.map( genre => {
                    return (
                        <>
                            <label>{genre.name}: </label>
                            <input 
                            type="checkbox"
                            id={genre.id}
                            name="genres"
                            value={genre.id} 
                            onChange={handleChange}
                            className={styles.input}
                            />
                            <br />
                        </>
                    )
                })}
                <div className={styles.errorDiv}>
                    <p className={styles.error}>
                        {errors.genres ? errors.genres : null}
                    </p>
                </div>
                <button className={styles.button} type="submit" 
                    disabled={Object.keys(errors).length > 0 || 
                        !inputs.name || 
                        !inputs.image ||
                        !inputs.platforms ||
                        !inputs.releaseDate ||
                        inputs.genres.length === 0
                    ? true : false}
                >SUBMIT</button>
            </form>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
       genres: state.genres,
       errors: state.errors,
    }
}

export default connect(mapStateToProps, null)(Form);