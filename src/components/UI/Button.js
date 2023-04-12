import React from 'react';

const Button = ({children,disabled}) => {
    return <button disabled={disabled}>{children}</button>
};

export default Button;