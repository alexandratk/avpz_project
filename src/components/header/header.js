import React, { Component } from 'react'
import './header.css'
import logo from '../../img/Attractionteka.png';
import iconmenu from './img/iconmenu.png'
import iconprofile from './img/iconprofile.png'
import header from './img/header.png'
import Search from '../search/search.js'

export default class Header extends Component {
    render() {
        return (
            <header className="header">
                <img src={header} alt="Logo" className="header-background" />
                <img src={logo} alt="Logo" className="header-logo" />
                    <Search flag_search={this.props.flag_search} />
                    <div class="icon-profile">
                        <a href="https://www.youtube.com"><img src={iconprofile} alt="error" /></a>
                    </div>
                    <div class="icon-menu">
                        <a href="https://www.youtube.com"><img src={iconmenu} alt="error"/></a>
                    </div>
                    
            </header>
        )
    }
}