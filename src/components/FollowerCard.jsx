import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import { Bar, Pie } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement } from 'chart.js';

// Register ChartJS components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement);

const FollowerCard = ({ follower, onRemove }) => {
  const barChartData = {
    labels: ['Friends', 'Influence', 'Chirpy'],
    datasets: [{
      label: 'Twubric Score',
      data: [follower.twubric.friends, follower.twubric.influence, follower.twubric.chirpiness],
      backgroundColor: [
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)'
      ],
      borderColor: [
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
      ],
      borderWidth: 1
    }]
  };

  const pieChartData = {
    labels: ['Friends', 'Influence', 'Chirpy'],
    datasets: [{
      label: 'Twubric Score Distribution',
      data: [follower.twubric.friends, follower.twubric.influence, follower.twubric.chirpiness],
      backgroundColor: [
        'rgba(75, 192, 192, 0.6)',
        'rgba(153, 102, 255, 0.6)',
        'rgba(255, 159, 64, 0.6)'
      ],
      borderColor: [
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
      ],
      borderWidth: 1
    }]
  };

  return (
    <Card className='mb-4 px-6' style={{ paddingTop:'9px', width:'90%', maxWidth:'100%', backgroundColor: 'rgb(240,240,240)', borderRadius: '5px', border: '1px solid black' }}>
      <Card.Body>
        <Row>
          <Col xs={12} md={4} className="d-flex flex-column align-items-center mb-3 mb-md-0">
            <Card.Img
              variant="top"
              src={follower.image}
              style={{
                width: '150px',
                height: '150px',
                objectFit: 'cover',
                borderRadius: '10px',
                marginBottom: '1rem'
              }}
            />
            <div className="text-center">
              <Card.Title>{follower.fullname}</Card.Title>
              <Card.Subtitle className="text-muted">Twubric Score</Card.Subtitle>
            </div>
          </Col>
          <Col xs={12} md={8}>
            <Row>
              <Col xs={12} md={6} className="d-flex justify-content-center mb-3">
                <Bar
                  data={barChartData}
                  options={{
                    responsive: true,
                    plugins: {
                      legend: { display: false },
                      tooltip: { enabled: true }
                    },
                    scales: {
                      x: { beginAtZero: true }
                    }
                  }}
                />
              </Col>
              <Col xs={12} md={6} className="d-flex justify-content-center mb-3">
                <Pie
                  data={pieChartData}
                  options={{
                    responsive: true,
                    plugins: {
                      legend: { position: 'bottom' },
                      tooltip: { enabled: true }
                    }
                  }}
                />
              </Col>
            </Row>
          </Col>
        </Row>
        <div className='text-center mt-3'>
          <button onClick={() => onRemove(follower.uid)} className="btn btn-danger">Remove</button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default FollowerCard;
