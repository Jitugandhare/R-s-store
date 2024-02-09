import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'

const AllRoutes = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />

                <Route path="/" element={''} />


                <Route path="/" element={''} />

                <Route path="/" element={''} />

                <Route path="/" element={''} />

                <Route path="/" element={''} />
            </Routes>
        </div>
    )
}

export default AllRoutes