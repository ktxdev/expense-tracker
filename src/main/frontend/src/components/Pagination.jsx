import React, { useEffect, useState } from 'react'

const Pagination = ({ pagination: { totalPages, currentPage }, changePage }) => {

    const [pages, setPages] = useState([])

    useEffect(() => {
      setPages(getPages(totalPages))
    }, [])
    
    const getPages = (num) => {
        console.log(num);
        const range = []
        for(let i = 0; i < num; i++) {
            range.push(i + 1)
        }
        return range
    }

    const currentPageStyle = "bg-green-600 hover:bg-green-700 text-white px-2 transition-all duration-200 rounded mx-1"
    const otherPageStyle = "bg-gray-100 hover:bg-gray-200 px-2 transition-all duration-200 rounded mx-1"

    return (
        <div className="py-2 mt-4">
            <button onClick={() => changePage(currentPage - 1)} className="bg-gray-300 px-4 rounded hover:bg-gray-400 transition-all duration-200">Prev</button>
            { pages.map(p => <button onClick={() => changePage(p)} key={p} className={p === (currentPage) ? currentPageStyle : otherPageStyle}>{p}</button>) }
            <button onClick={() => changePage(currentPage + 1)} className="bg-gray-300 px-4 rounded hover:bg-gray-400 transition-all duration-200">Next</button>
        </div>
    )
}

export default Pagination