import axios from 'axios';

class UserService {
    constructor(){
        this.baseUrl='https://jsonplaceholder.typicode.com/';
    }

    /**
     * fake http call to retrieve users
     * @returns {AxiosPromise<object>}
     */
    getUsers = () =>{
        return axios.get(`${this.baseUrl}users`)
    }
}

export const userService = new UserService();