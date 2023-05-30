import React from 'react';
import Card from 'react-bootstrap/Card';

function MergedExample({ color }) {
  return (
    <div className="row">
      <div className="col-sm-4">
        <Card style={{ backgroundColor: color,  height: '30vh', width: '20vw', borderRadius: 20, margin: 5 }}>
          <Card.Body className="logo-box">
            <h5 className="rupee-symbol">₹16,58,000</h5>
            <Card.Text>
              <span className="card-title">Last Month Sale</span>
            </Card.Text>
            <div style={{ textAlign: 'right', display:'flex', flexDirection:'column' }}>
              <div style={{display: 'flex', flexDirection:'row', float:'right'}}>
                  <p style={{ marginBottom: 0, marginLeft: '130px', paddingRight: '10px' }}>Gold</p>
              <div style={{width:'40px', height:'20px', backgroundColor:'yellow', textAlign:'center',borderRadius:'5px'}}>4</div>
              </div>
              <div style={{display: 'flex', flexDirection:'row', float:'right'}}>
              <p style={{ marginBottom: 0, marginLeft: '100px', paddingRight: '10px' }}>Platinum</p>
              <div style={{width:'40px', height:'20px', backgroundColor:'grey', textAlign:'center',borderRadius:'5px'}}>10</div>
              </div>
              <div style={{display: 'flex', flexDirection:'row', float:'right'}}>
              <p style={{ marginBottom: 0 ,  marginLeft: '100px', paddingRight: '10px'}}>Titanium</p>
              <div style={{width:'40px', height:'20px', backgroundColor:'blue', textAlign:'center',borderRadius:'5px'}}>17</div>
              </div>
            </div>
          </Card.Body>
        </Card>
          
      </div>
      <div className="col-sm-4">
        <Card style={{backgroundColor: color, height: '30vh', width: '20vw', borderRadius: 20, margin: 5 }}>
          <Card.Body className="logo-box">
            <h5 className="rupee-symbol">₹20,00,000</h5>
            <Card.Text>
              <span className="card-title">Upcoming Renewals</span>
            </Card.Text>
            <div style={{ textAlign: 'right', display:'flex', flexDirection:'column' }}>
              <div style={{display: 'flex', flexDirection:'row', float:'right'}}>
                  <p style={{ marginBottom: 0, marginLeft: '130px', paddingRight: '10px' }}>Gold</p>
              <div style={{width:'40px', height:'20px', backgroundColor:'yellow', textAlign:'center',borderRadius:'5px'}}>4</div>
              </div>
              <div style={{display: 'flex', flexDirection:'row', float:'right'}}>
              <p style={{ marginBottom: 0, marginLeft: '100px', paddingRight: '10px' }}>Platinum</p>
              <div style={{width:'40px', height:'20px', backgroundColor:'grey', textAlign:'center',borderRadius:'5px'}}>10</div>
              </div>
              <div style={{display: 'flex', flexDirection:'row', float:'right'}}>
              <p style={{ marginBottom: 0 ,  marginLeft: '100px', paddingRight: '10px'}}>Titanium</p>
              <div style={{width:'40px', height:'20px', backgroundColor:'blue', textAlign:'center',borderRadius:'5px'}}>17</div>
              </div>
            </div>
          </Card.Body>
        </Card>
      </div>
      <div className="col-sm-4">
        <Card style={{ backgroundColor: color,  height: '30vh', width: '20vw', borderRadius: 20, margin: 5 }}>
          <Card.Body>
            <h5 className="card-title">Upcoming Renewal client</h5>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">Nitin Singhal</li>
              <li className="list-group-item">Balraj</li>
            </ul>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default MergedExample;
