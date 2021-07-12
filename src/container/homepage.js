/* eslint-disable no-undef */
import React, { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router";
import { Link } from "react-router-dom";
// import { useHistory } from "react-router-dom";
import { Pagination, Sort, Search } from "../redux/homePageRedux"
import { getApiBlogsById } from "../services/Api"

const HomePage = () => {

  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.data)
  const history = useHistory()
  const [idPage, setIdPage] = useState(1);
  const [page, setPage] = useState([1, 2, 3])

  const handleChange = (e) => {
    const value = e.target.value;
    setTimeout(() => {
      dispatch(Search(value));
    }, 1500);
  }

  const SortData = (type) => {
    let a = ""
    data && data.map((item, index) => {
      a = parseInt(item.id)
    })
    if (type === "asc") {
      dispatch(Sort(a, "asc"))
    } else {
      dispatch(Sort(a, "desc"))
    }
  }

  const handleClick = (id, index) => {
    setIdPage(id)
    dispatch(Pagination(id));
  }

  const PreviousPage = () => {
    if (idPage > 1)
      setIdPage(idPage - 1);
  }

  const NextPage = () => {
    if (idPage <= 6)
      setIdPage(idPage + 1);

  }

  const DetailData = (id) => {
    // history.push(`/detail/${id}`)

  }

  useEffect(() => {
    let last_element = page[page.length - 1];
    if (idPage === last_element) {
      page.push(last_element + 1);
      page.shift();
    }
    if (idPage > 1) {
      if (idPage === page[0]) {
        page.unshift(idPage - 1);
        page.pop();
      }
    }
    dispatch(Pagination(idPage))

  }, [idPage])


  return (
    <>

      <div className="btn-sort container">
        <Button style={{ backgroundColor: 'red', borderColor: 'red', marginRight: '15px' }} onClick={() => SortData("asc")}>Ascending</Button>
        <Button onClick={() => SortData("desc")}>Descending</Button>
      </div>
      <ul className="list-unstyled container">
        <input
          className="input-search"
          type="text"
          placeholder="search"
          onChange={handleChange}
        />
        {data && data.length > 0 && data.map((item, index) => (
          <li onClick={() => DetailData(item.id)}>
            <a className="media" href={`/detail/${item.id}`}>
              <img src={item.image} className="mr-3" alt="..." />
              <div className="media-body">
                <div className="media-body__container">
                  <h5 className="mt-0 mb-1">{item.title}</h5>
                  {item.content}
                </div>
              </div>
            </a>
          </li>
        ))}
      </ul>
      <nav aria-label="..." className="container">
        <ul className="pagination">
          <li className="page-item ">
            <a className="page-link" onClick={PreviousPage}>Previous</a>
          </li>
          {page && page.map((p, index) => (
            <li
              className="page-item"
            >
              <a className="page-link" style={p === idPage ? { color: "red" } : {}} onClick={() => handleClick(p, index)} >{p}</a>
            </li>
          ))}

          <li className="page-item">
            <a className="page-link" onClick={NextPage} >Next</a>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default HomePage;