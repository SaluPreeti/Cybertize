import React from 'react';
import { Card } from 'react-bootstrap';
import "../App.css";

const CardComponent = ({ title, number, color }) => {
    return (
        <div className="col-md-3">
          <Card style={{ backgroundColor: color, color: 'white', height: 109, width: 202, borderRadius: 20, margin: 5 }}>
              <Card.Body className='logo-box'>
                  <Card.Title
                      style={{
                          fontStyle: 'normal',
                          fontWeight: 500,
                          fontSize: '16px',
                          lineHeight: '20px',
                          color: '#FFFFFF',
                          marginTop: '16px',
                          marginLeft: '48px',
                      }}
                  >{title}</Card.Title>
                  <Card.Title
                      style={{
                          fontStyle: 'normal',
                          fontWeight: 700,
                          fontSize: '24px',
                          lineHeight: '29px',
                          color: '#FFFFFF',
                          marginLeft: '48px',
                      }}
                  >{number}</Card.Title>
              </Card.Body>
          </Card>
        </div>
    );
};

export default CardComponent;
