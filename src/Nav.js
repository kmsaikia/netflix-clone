import React from "react";
import "./Nav.css";

function Nav(){


    return (
        <div className="nav">
            <img
                className="nav__logo"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1198px-Netflix_2015_logo.svg.png?20190206123158"
                alt="Netflix-logo"
                />

                <img
                    className="nav__avatar"
                    src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png?20201013161117"
                    alt="Avatar-Logo"
                    />
        
        </div>
    )
}

export default Nav;