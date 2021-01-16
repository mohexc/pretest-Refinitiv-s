import { Row, Col, Table, Input } from 'antd'
import axios from 'axios'
import React, { useState, useEffect } from 'react'

const Question2 = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch()
  }, [])

  const fetch = async () => {
    const { data } = await axios.get('https://api.publicapis.org/categories')
    setData(data)
  }

  const columns = [
    {
      titel: "Category",
      key: "category",
      render: (row) => <span>{row}</span>
    }
  ]

  const capitalizeFirstLetter = (str) => {
    return str[0].toUpperCase() + str.slice(1);
  }

  const handleSearch = async (values) => {
    if (values) {
      const { data } = await axios.get('https://api.publicapis.org/categories')
      const result = data.filter(name => name.startsWith(capitalizeFirstLetter(values)))
      setData(result)
      return
    }
    fetch()
  }

  return (
    <Row justify="center" >
      <Col xs={23} style={{ height: "100%", paddingTop: '1rem', paddingBottom: "1rem" }}>
        <div style={{ backgroundColor: "white", padding: '1rem' }}>
          <Input.Search style={{ width: "50%", margin: '1rem' }} enterButton onSearch={handleSearch} />
          <Table columns={columns} dataSource={data} />
        </div>
      </Col>
    </Row>
  )
}

export default Question2
