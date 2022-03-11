import React from 'react'

function Stat({ stat: { title, value }}) {
    return (
        <div className="bg-white flex-grow p-6 rounded-lg shadow text-center">
            <h4 className="text-lg" >{title}</h4>
            <h2 className="text-3xl">{value}</h2>
        </div>
    )
}

export default Stat