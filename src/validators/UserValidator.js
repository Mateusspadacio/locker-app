import Validator from './Validator';

export default class UserValidator {
    static EMAIL_REGEXP = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    static PASSWORD_MIN_LENGTH = 6;
    static PASSWORD_MAX_LENGTH = 15;

    static login(user = { email, password }) {
        const errors = {};

        if (!this.EMAIL_REGEXP.test(user.email)) {
            errors.email = 'Email inválido';
        }

        if (!user.password 
            || user.password.length < this.PASSWORD_MIN_LENGTH 
            || user.password.length > this.PASSWORD_MAX_LENGTH) {
            errors.password = 'A senha deve ter entre 6 a 15 caracteres';
        }

        return new Validator(errors);
    }
}

