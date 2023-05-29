import React from 'react';
import Card from 'react-bootstrap/Card';

function MergedExample() {
  return (
    <div className="row">
      <div className="col-sm-4">
        <Card>
          <Card.Body>
        <h5 className="rupee-symbol">₹16,58,000</h5>
        <Card.Text>
          <span className="card-title">Last Month Sale</span>
        </Card.Text>
        <div style={{ textAlign: 'right' }}>
          <p style={{ marginBottom: '0' }}>Gold</p>
          <p style={{ marginBottom: '0' }}>Platinum</p>
          <p style={{ marginBottom: '0' }}>Titanium</p>
        </div>
      </Card.Body>
        </Card>
      </div>
      <div className="col-sm-4">
        <Card>
        <Card.Body>
        <h5 className="rupee-symbol">₹20,00,000</h5>
        <Card.Text>
          <span className="card-title">Upcoming Renewals</span>
        </Card.Text>
        <div style={{ textAlign: 'right' }}>
          <p style={{ marginBottom: '0' }}>Gold</p>
          <p style={{ marginBottom: '0' }}>Platinum</p>
          <p style={{ marginBottom: '0' }}>Titanium</p>
        </div>
      </Card.Body>
        </Card>
      </div>
      <div className="col-sm-4">
        <Card>
            <Card.Body>
                <h5 className="card-title">Upcoming Renewal client</h5>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">An item</li>
            <li className="list-group-item">A second item</li>
            <li className="list-group-item">A third item</li>
          </ul>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default MergedExample;
