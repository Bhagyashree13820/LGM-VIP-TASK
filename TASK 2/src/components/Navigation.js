import React from 'react';
import Button from '@material-ui/core/Button';
import './Navbar.css';

const Navigation = ({onButtonSubmit}) => {

            return(
                <nav className='appnavbar'>
                    <h3 className="brandname">LetsGrowMore</h3>
                    <div className='nav-btn'>
                        <Button onClick={onButtonSubmit}>
                            Get Users
                        </Button>
                    </div>
                </nav>
            );
        }


export default Navigation;
