import React from "react"; 
import { Link } from "react-router-dom"; // Import Link from react-router-dom   
import style from "./NavBar.module.css"; // Import CSS file

class Navbar extends React.Component { 
    constructor(props) {
        super(props);
        this.state = { clicked: true };

    
    }

    toggleMenu = () => {
        this.setState({ clicked: !this.state.clicked });
    };

    componentDidMount(){

    // if( window.screen.width >= 768){
    //     this.setState({ clicked:false});
    // }
    }

    render() {

        return (
            <nav className={style.navbarItems}>
                <h1 className={style.logo}>Travel-Dose</h1>
                <div className={style.menuIcon} onClick={this.toggleMenu}>
                    <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
                </div>
                <ul className={this.state.clicked ? style.navUl : style.navUlHide}>
                    <li className={style.navLi}>
                        <Link to="/"><i className="fa-solid fa-house"></i> Home</Link>
                    </li>
                    <li className={style.navLi}>
                        <Link to="/about"><i className="fa-solid fa-book"></i> About</Link>
                    </li>
                    <li className={style.navLi}>
                        <Link to="/contact"><i className="fa-solid fa-headset"></i> Contact</Link>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default Navbar;
