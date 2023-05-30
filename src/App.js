import React from 'react';
import Header from './components/Header';
import SidebarEdit from './Sidebar/SidebarEdit';
import CardComponent from './components/CardComponent';
import LineChart from './components/LineChart';
import ImageSide from './components/ImageSide';
import CustomerTable from './components/CustomerTable';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />

      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3">
            <SidebarEdit />
          </div>

          <div className="col-md-9">
            <div className="row">
              <div className="col-8">
              <h2 className="mr-auto">Dashboard</h2>
              <p className="mr-auto">Good Afternoon, Onkaresh</p>
              </div>
              <div className="col-4">
              <span style={{border: '2px solid black' ,  marginRight: '10px'}}>Report</span>
              <span style={{border: '2px solid black' ,  marginRight: '10px'}}>Export</span>
              </div>


              
            </div>
            <div className="row">
              <CardComponent title="All Customers" number={300} color="#FE6976" />
              <CardComponent title="Free trial" number={35} color="#19A2FB" />
              <CardComponent title="Paid Clients" number={288} color="#74CDFF" />
              <CardComponent title="Active Paid" number={96} color="#83B3C0" />
              {/* <CardComponent title="Dormant" number={42} color="#FF9066" /> */}
            </div>
            <div className='row'>
              <div className="col-md-9"><LineChart /></div>
              <div className="col-md-3"> <ImageSide /></div>
            </div>
            <div className='row'>
              <div className="col-12">
                <CustomerTable />
              </div>
            </div>
            <div className='row'>
              <div className="col-12">
                <Footer />
                <div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
