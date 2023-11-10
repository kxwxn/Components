import React from 'react'
import { Link } from 'react-router-dom'





const Header = () => {
    return (
        <div>
            <Link to='/todolist'>TODO-LIST</Link>
            <Link to='/counter'>COUNTER</Link>
        </div>
    )
}

export default Header