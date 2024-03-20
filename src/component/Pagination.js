


function Pagination(){
    return(
        <>

            <nav aria-label="Page navigation example" style={{marginBottom:'50px'}}>
                <ul className="pagination justify-content-center">
                    <li className="page-item disabled">
                        <a className="page-link" href="#" tabindex="-1"><i className="fa-solid fa-chevron-left"></i>Prev</a>
                    </li>
                    <li className="page-item"><a className="page-link" href="#">1</a></li>
                    <li className="page-item"><a className="page-link" href="#">2</a></li>
                    <li className="page-item"><a className="page-link" href="#">3</a></li>
                    <li className="page-item">
                        <a className="page-link" href="#">Next <i className="fa-solid fa-chevron-right"></i></a>
                    </li>
                </ul>
            </nav>

        </>
    )
}

export default Pagination;