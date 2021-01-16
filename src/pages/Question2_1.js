import React, { useState } from 'react'
import { Row, Col, InputNumber, Select, Form, Typography } from "antd"

const Question1 = () => {
  const [form] = Form.useForm();
  const [anwser, setAnwser] = useState()

  const isPrime = (num) => {
    for (let i = 2; i < num; i++)
      if (num % i === 0) return false;
    return num > 1;

  }
  const isFibonacci = (num) => {
    return num - 1 + num - 2

  }

  const handleChangeForm = (changedValues, allValues) => {
    if (allValues.numType === "isPriem") {
      const result = isPrime(allValues.num)
      setAnwser(result)
    }
    if (allValues.numType === "isFibonacci") {
      const result = isFibonacci(allValues.num)
      setAnwser(result)
    }
  }

  return (
    <Form form={form} onValuesChange={handleChangeForm} initialValues={{ num: 1, numType: 'isPriem' }} style={{ height: '100%' }}>
      <Row style={{ height: '100%' }}>
        <Col xs={24} lg={6} style={{ padding: '1rem', }}>
          <div style={{ backgroundColor: "white", padding: "1rem", height: '100%', overflowX: 'auto' }}>
            <Form.Item name="num" noStyle>
              <InputNumber style={{ minWidth: '200px', maxWidth: '200px' }} min={1} />
            </Form.Item>
          </div>
        </Col>
        <Col xs={24} lg={12} style={{ padding: '1rem', }}>
          <div style={{ backgroundColor: "white", padding: "1rem", height: '100%', overflowX: 'auto' }}>
            <Form.Item name="numType" noStyle>
              <Select style={{ minWidth: '200px', maxWidth: '200px' }} >
                <Select.Option value='isPriem'>isPrime</Select.Option>
                <Select.Option value='isFibonacci'>isFibonacci</Select.Option>
              </Select>
            </Form.Item>
          </div>
        </Col>
        <Col xs={24} lg={6} style={{ padding: '1rem', }}>
          <div style={{ backgroundColor: "white", padding: "1rem", height: '100%', overflowX: 'auto' }}>
            <strong>Anwser :</strong>
            <Typography.Title level={4}>{anwser === undefined ? null : `${anwser}`}</Typography.Title>
          </div>
        </Col>
      </Row >
    </Form>

  )
}

export default Question1
