import React, { useState } from 'react';
import { Container, Card, Table, Button } from 'react-bootstrap';

const data1 = [
  { name: 'John Doe', phone: '1234567890', joinedOn: '2022-01-01', details: 'yyfhj' },
  { name: 'Jane Smith', phone: '9876543210', joinedOn: '2022-02-15', details: 'cgvhjxwk' },
  { name: 'Mike Johnson', phone: '5555555555', joinedOn: '2022-03-20', details: 'ywguwuw' },
  { name: 'Sike son', phone: '55555556875', joinedOn: '2022-03-20', details: 'ywgupouw' },
  { name: 'Mi John', phone: '5555555598', joinedOn: '2022-03-20', details: 'ymnbvuw' },
  // Add more customer objects here...
];
const data2 = [
  { name: 'John Doe', phone: '1234567890', joinedOn: '2022-01-01', details: 'yyfhj' },
  { name: 'Jane Smith', phone: '9876543210', joinedOn: '2022-02-15', details: 'cgvhjxwk' },
  { name: 'Mike Johnson', phone: '5555555555', joinedOn: '2022-03-20', details: 'ywguwuw' },
  { name: 'Sike son', phone: '55555556875', joinedOn: '2022-03-20', details: 'ywgupouw' },
];

const CustomerTable = ({ customers, showAll, onButtonClick }) => {
  const [expandedRows, setExpandedRows] = useState([]);

  const handleViewAllClick = (index) => {
    if (expandedRows.includes(index)) {
      setExpandedRows(expandedRows.filter((rowIndex) => rowIndex !== index));
    } else {
      setExpandedRows([...expandedRows, index]);
    }
  };

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Name</th>
          <th>Phone</th>
          <th>Joined On</th>
          
        </tr>
      </thead>
      <tbody>
        {customers.map((customer, index) => (
          <React.Fragment key={index}>
            <tr>
              <td>{customer.name}</td>
              <td>{customer.phone}</td>
              <td>{customer.joinedOn}</td>
              <td>
                <Button variant="primary" onClick={() => handleViewAllClick(index)}>
                  {expandedRows.includes(index) ? 'Hide Details' : 'View All'}
                </Button>
              </td>
            </tr>
            {expandedRows.includes(index) && (
              <tr>
                <td colSpan="4">{customer.details}</td>
              </tr>
            )}
          </React.Fragment>
        ))}
      </tbody>
      {!showAll && (
        <tfoot>
          <tr>
            <td colSpan="4">
              <Button variant="primary" onClick={onButtonClick}>
                Show Data
              </Button>
            </td>
          </tr>
        </tfoot>
      )}
    </Table>
  );
};

const App = () => {
    const [showAllData, setShowAllData] = useState(false);
  
    const handleButtonClick = () => {
      setShowAllData(true);
    };
  
    const displayedData1 = showAllData ? data1 : data1.slice(0, 3);
    const displayedData2 = showAllData ? data2 : data2.slice(0, 3);
  
    return (
      <Container style={{ display: 'flex' }}>
        <Card style={{ flex: 1, marginRight: '10px' }}>
          <Card.Body>
            <Card.Title>Latest Customer Onboards</Card.Title>
            <CustomerTable customers={displayedData1} showAll={showAllData} onButtonClick={handleButtonClick} />
          </Card.Body>
        </Card>
        <Card style={{ flex: 1, marginLeft: '10px' }}>
          <Card.Body>
            <Card.Title>All Onboards</Card.Title>
            <CustomerTable customers={displayedData2} showAll={showAllData} onButtonClick={handleButtonClick} />
          </Card.Body>
        </Card>
      </Container>
    );
  };
  
export default App;
