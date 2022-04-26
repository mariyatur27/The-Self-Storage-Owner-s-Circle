import React from 'react';
// import './button.css';
import { Link } from 'react-router-dom';

// const STYLES = ['btn--primary', 'btn--outline'];
// const SIZES = ['btn--medium', 'btn--large'];

// export const Button = ({children, type, onClick, buttonStyle, buttonSize}) => {
//     const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];

//     const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize: SIZES[0];

//     return (
//     <Link to='/sign-up' className='btn-mobile'>
//         <button>
//             Investor Portal
//         </button>
//     </Link>
//     )
// }
function Button() {
    return (
        <>
        <Link to='/investor-portal' className='btn-mobile'>
            <button>
                Investor Portal
            </button>
        </Link>
        </>
        )
}

export default Button

