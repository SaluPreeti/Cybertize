import React from 'react';
import Header from './components/Header';
import SidebarEdit from './Sidebar/SidebarEdit';
import CardComponent from './components/CardComponent';
import LineChart from './components/LineChart';
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
              <div className="col-12">
                <h1>Dashboard</h1>
              </div>
            </div>

            <div className="row">
              <div className="col-md-4">
                <CardComponent title="All Customers" number={300} color="#FE6976" />
              </div>

              <div className="col-md-4">
                <CardComponent title="Free trial" number={35} color="#19A2FB" />
              </div>

              <div className="col-md-4">
                <CardComponent title="Paid Clients" number={288} color="#74CDFF" />
              </div>

              <div className="col-md-6 col-lg-4">
                <CardComponent title="Active Paid" number={96} color="#83B3C0" />
              </div>

              <div className="col-md-6 col-lg-4">
                <CardComponent title="Dormant" number={42} color="#FF9066" />
              </div>
            </div>
            <div className='row'>
              <div className="col-md-12"><LineChart /></div>
            </div>
            <div className='row'>
              <div className="col-12">
                <CustomerTable />
          </div>
            </div>
            <div className='row'>
            <div className="col-12">
            <Footer />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
