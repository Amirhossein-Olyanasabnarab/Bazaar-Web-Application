const autoBind = require('auto-bind');
const UserModel = require('../user/user.model');
const createHttpError = require('http-errors');
const authMessages = require('./auth.messages');
const {randomInt} = require('crypto');
class AuthService{
    #model;
    constructor(){
        autoBind(this);
        this.#model = UserModel;
    }

    async sendOtp(mobile){
        const user = await this.checkExistByMobile(mobile);
        const now = new Date().now();

        const otp = {
            code: randomInt(10000,99999),
            expireIn: now + (1000 * 60 * 2) // 2 minutes
        }

        if(!user){
           return await this.#model.create({mobile,otp});
        }
    
        if(user.otp.expireIn > now) throw new createHttpError.BadRequest(authMessages.otpNotExpired);
        
        user.otp = otp;
        await user.save();
        return user;
    }

    async checkExistByMobile(mobile){
        const user = await this.#model.findOne({mobile});
        if(!user) throw new createHttpError.NotFound(authMessages.notFound);
        return user;
    }
}

module.exports = new AuthService();