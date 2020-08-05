import React, { Component } from 'react'
import { observer } from 'mobx-react'
import UserStore from "../userStore"
import LoginForm from "./LoginForm"
import SubmitButton from "./SubmitButton"
import Navbar from "./Navbar"
import '../Login.css'

class Login extends React.Component {

    async componentDidMount() {
        try {
            let res = await fetch('/isLoggedIn', {
                method: 'post',
                headers: {
                    'Accept': 'application/json',
                    'content-Type': 'application/json'
                }
            });
            let result = await res.json();
            if (result && result.success) {
                UserStore.loading = false;
                UserStore.isLoggedIn = true;
                UserStore.username = result.username;
            }
            else {
                UserStore.loading = false;
                UserStore.isLoggedIn = false;
            }
        }
        catch(e) {
            UserStore.loading = false;
            UserStore.isLoggedIn = false;
        }
    }

    async doLogout() {
        try {
            let res = await fetch('/logout', {
                method: 'post',
                headers: {
                    'Accept': 'application/json',
                    'content-Type': 'application/json'
                }
            });
            let result = await res.json();
            if (result && result.success) {
                UserStore.isLoggedIn = false;
                UserStore.username = '';
            }
        }
        catch(e) {
            console.log(e)
        }
    }

    render() {
        if (UserStore.loading) {
            return (
                <div className='app'>
                    <div className='container'>
                        loading, please wait...
                    </div>
            </div>
            );
        }
        else {
            if (UserStore.isLoggedIn) {
                return (
                    <div className='app'>
                        <Navbar/>
                        <div className='container'>
                            Welcome {UserStore.username}
                            <SubmitButton
                                text={'log out'}
                                disabled={false}
                                onClick={ () => this.doLogout() }
                            />
                        </div>
                </div>
                );
            }
            return (
                <div className='app'>
                    <Navbar/>
                    <div className='container'>
                        <SubmitButton
                            text={'log out'}
                            disabled={false}
                            onClick={ () => this.doLogout() }
                        />
                        <LoginForm/>
                    </div>
                </div>
            )
        }
        
    }
}

export default observer(Login)