import React from 'react';
import {userService} from "../completeExample/services/UserService";
import {UserList} from "../completeExample/component/UserList";

export default class SetStateComponent extends React.Component {

    constructor() {
        super();
        this.state = {
            users: [],
            counter: 0
        }
    }

    componentWillMount() {
        console.log('before render');
    }

    componentDidMount() {
        /**
         * call user service for http call
         */
        userService.getUsers().then(res => this.setState({users: res.data}));
        console.log('Component Did Mount');
    }

    componentWillUpdate(nextProps, nextState) {
        console.log('componentWillUpdate', nextState, nextProps);
    }

    componentDidUpdate(nextProps, nextState) {
        console.log('componentDidUpdate', nextState, nextProps);
    }

    /**
     * con shouldComponentUpdate, non avviene il rerender del componente al cambiamento di counter
     */

    /*shouldComponentUpdate(nextProps, nextState){
        if(this.state.counter !== nextState.counter)
            return false;
    }*/

    componentDidCatch(errorString, errorInfo) {
        console.log('componentDidCatch', errorString, errorInfo);
    }

    changeState() {
        this.setState({counter: this.state.counter + 1})
    }

    render() {
        return (
            <div>
                <h1>Stateful Component</h1>
                <button onClick={() => this.changeState()}>Change state</button>
                <h3>{this.state.counter}</h3>
                <UserList users={this.state.users}/>
            </div>
        )
    }
}