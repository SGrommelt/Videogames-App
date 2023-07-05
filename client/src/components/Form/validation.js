export const validation = (input) => {
    
    const error = {};

    //eslint-disable-next-line
    const nameFormat = /[`@#$%^*+\=\[\]{};\\|<>\/?~]/;
    //eslint-disable-next-line
    const urlExpression = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi;
    const regexURL = new RegExp(urlExpression);

    if(input.name.length > 80) {
        error.name = "Name must be less than 80 characters."
    }
    if(input.name.length === 0) {
        error.name = "Name field can't be empty."
    }
    if (nameFormat.test(input.name)) {
        error.name = "Name contains invalid characters."
    }
    if(input.image && !input.image.match(regexURL)) {
        error.image = "Invalid image URL."
    }
    if(input.image.length === 0) {
        error.image = "Image field can't be empty."
    }
    if(!input.releaseDate) {
        error.releaseDate = "Please provide release date."
    }
    if(input.rating > 5) {
        error.rating = "Max rating value is 5."
    }
    if(input.rating < 0) {
        error.rating = "Rating can't be less than 0."
    }
    if(input.genres.length < 1) {
        error.genres = "Must select at least one genre."
    }
    if(input.genres.length > 10) {
        error.genres = "Can't select more than 10 genres."
    }
    return error;
}