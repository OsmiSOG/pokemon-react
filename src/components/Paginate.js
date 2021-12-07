import React from 'react'
import { Pagination } from 'react-bootstrap'

export default function Paginate({pages, currentPage, onCurrentPage}) {

    return (
        <div>
            <Pagination className="justify-content-md-center my-4">
                <Pagination.First disabled={currentPage-1 < 1} onClick={e => onCurrentPage(1)}/>
                <Pagination.Prev disabled={currentPage-1 < 1} onClick={e => onCurrentPage(currentPage-1)}/>

                <Pagination.Item className={currentPage-2 < 1 ? 'd-none':''} onClick={e => onCurrentPage(currentPage-2)}>{currentPage-2}</Pagination.Item>
                <Pagination.Item className={currentPage-1 < 1 ? 'd-none':''} onClick={e => onCurrentPage(currentPage-1)}>{currentPage-1}</Pagination.Item>
                <Pagination.Item active onClick={e => onCurrentPage(currentPage)}>{currentPage}</Pagination.Item>
                <Pagination.Item className={currentPage+1 > pages ? 'd-none':''} onClick={e => onCurrentPage(currentPage+1)}>{currentPage+1}</Pagination.Item>
                <Pagination.Item className={currentPage+2 > pages ? 'd-none':''} onClick={e => onCurrentPage(currentPage+2)}>{currentPage+2}</Pagination.Item>

                <Pagination.Next disabled={currentPage+1 > pages} onClick={e => onCurrentPage(currentPage+1)}/>
                <Pagination.Last disabled={currentPage+1 > pages} onClick={e => onCurrentPage(pages)}/>
            </Pagination>
        </div>
    )
}
