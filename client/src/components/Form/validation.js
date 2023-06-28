export const validation = (input) => {
    
    const error = {};

    //eslint-disable-next-line
    const nameFormat = /[`@#$%^*+\=\[\]{};\\|<>\/?~]/;
    //eslint-disable-next-line
    const urlExpression = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi;
    const regexURL = new RegExp(urlExpression);

    if(input.name.length > 80) {
        error.name = "Name must be less than 80 characters"
    }
    if (nameFormat.test(input.name)) {
        error.name = "Name contains invalid characters."
    }
    if(input.image && !input.image.match(regexURL)) {
        error.image = "Invalid image URL."
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
    return error;
}

export const validateSubmit = (input, errors) => {
    if(Object.keys(errors).length > 0) return "SUBMISSION FAILED: Please fix all errors.";
    if(
        !input.name || 
        !input.image ||
        !input.platforms ||
        !input.releaseDate ||
        input.genres.length === 0
    ) return "SUBMISSION FAILED: Please complete all required fields.";
    return true;
}