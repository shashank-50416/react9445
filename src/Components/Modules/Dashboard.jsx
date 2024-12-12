import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Sidenav from './Sidenav';
import { Camera } from '@mui/icons-material';
import { Cameradata } from '../Data/Cameradata';

function Dashboard() {
  const dispaly = Cameradata.slice(0,4)
  return (
    <div>
      <Row noGutters> {/* Added noGutters to prevent unwanted margin between columns */}
        <Col sm={2} className="sidebar-col"> {/* Sidebar with fixed width */}
          <Sidenav />
        </Col>
        <Col sm={10} className="main-content"> {/* Main content area */}
        {
            dispaly.map((e) => (
              <div >
                <img src={e.Image} alt={e.name} style={{ width: '200px' }} />
                <p>{e.name}</p>
                <p>{e.brand}</p>
              
              </div>
            ))
          }
        </Col>
      </Row>
    </div>
  );
}

export default Dashboard;
