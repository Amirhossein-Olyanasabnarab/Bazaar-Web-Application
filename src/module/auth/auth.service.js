const autoBind = require('auto-bind');
const UserModel = require('../user/user.model');
const createError = require('http-errors');
const authMessages = require('./auth.messages');

class AuthService{
    #model;
    constructor(){
        autoBind(this);
        this.#model = UserModel;
    }

    async checkExistByMobile(mobile){
        const user = await this.#model.findOne({mobile});
        if(!user) throw new createError.NotFound(authMessages.notFound);
        return user;
    }
}

module.exports = new AuthService();