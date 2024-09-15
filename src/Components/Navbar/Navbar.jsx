import React, { useContext } from 'react';
import './Navbar.css'
import { CoinContext } from '../../Context/CoinContext';

const Navbar = () => {

    const {setCurrency} = useContext(CoinContext)

    const currencyHandler = (event)=>{
        switch (event.target.value){
            case "usd": {
                setCurrency({name: "usd", symbol: "$"});
                break;
            }
            case "eur": {
                setCurrency({name: "eur", symbol: "€"});
                break;
            }
            case "inr": {
                setCurrency({name: "inr", symbol: "₹"});
                break;
            }
            case "ngn": {
                setCurrency({name: "ngn", symbol: "₦"});
                break;
            }
            default : {
                setCurrency({name: "usd", symbol: "$"});
                break;
            }
        }
    }

    return (
        <div className='navbar'>
            <img src={'assets/logo.png'} className='logo' />
            <ul>
                <li>Home</li>
                <li>Features</li>
                <li>Pricing</li>
                <li>Blog</li>
            </ul>
            <div className="nav-right">
                <select onChange={currencyHandler}>
                    <option value="usd">USD</option>
                    <option value="eur">EUR</option>
                    <option value="inr">INR</option>
                    <option value="ngn">NGN</option>
                </select>
                <button>Sign Up <img src={'assets/arrow_icon.png'} alt="" /></button>
            </div>
        </div>
    )
}

export default Navbar;
