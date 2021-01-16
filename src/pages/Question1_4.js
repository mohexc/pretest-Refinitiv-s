import React, { useState } from 'react';
import { Row, Col } from 'antd';

const getRandomRGB = () => {
  const r = Math.floor(Math.random() * Math.floor(255));
  const g = Math.floor(Math.random() * Math.floor(255));
  const b = Math.floor(Math.random() * Math.floor(255));
  return `rgb(${r},${g},${b})`;
};

const colors = Array.from(Array(200).keys()).map(element => getRandomRGB())

const Question1_4 = () => {
  const [color, setColor] = useState('white')

  const defineColor = (color) => {
    console.log(color)
    debugger
    setColor(color)
  }

  return (
    <Row justify="center" style={{ height: "100%", }} >
      <Col xs={24} style={{ padding: '1rem' }}>
        <div style={{ backgroundColor: "white", height: "100%", padding: '1rem' }}>
          <h1> Write code to show RGB code that users clicked inside the answer box.</h1>

          <div style={{
            display: ' flex',
            alignContent: 'center',
            justifyContent: 'center',
            border: '3px dotted black',
            maxWidth: '300px',
            padding: '.2em',
            marginBottom: '20px',
            backgroundColor: color
          }}>
            ANSWER
          </div>

          {
            colors.map(color => {
              return (
                <button
                  onClick={() => defineColor(color)}
                  key={color}
                  style={{ backgroundColor: color }}>
                  {color}
                </button>)
            })
          }
        </div>
      </Col>
    </Row>

  );
}

export default Question1_4;