import React from 'react'

const Toolbar = ({ children, className:classes }) => {
    return (
        <div className={`h-[72px] mx-[48px] mt-[32px] ${classes}`}>{children}</div>
    )
}

export default Toolbar