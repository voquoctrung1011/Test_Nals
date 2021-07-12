import React, { useEffect, useState } from "react"
import { useHistory, useParams } from "react-router"
import { getApiBlogsById } from "../services/Api"
import Button from 'react-bootstrap/Button';

const DetailPage = () => {

  const history = useHistory();
  const [item, setItem] = useState()
  const { id } = useParams();

  useEffect(() => {
    getApiBlogsById(id)
      .then((res) => {
        if (res && res.status === 200) {
          setItem(res.data)
        }
      })
      .catch(err => {
        alert(err)
      })
  }, [])

  return (
    <div className="detail-page">
      <div className="detail-page container">
        {item && (
          <>
            <img src={item.image} />
            <h1>{item.title}</h1>
            <p>{item.content}</p>
          </>
        )}
        <Button style={{ marginTop: '20px' }} ><a className="btn-back" href={`/`}>Back to homepage</a></Button>
      </div>
    </div>
  )
}

export default DetailPage;