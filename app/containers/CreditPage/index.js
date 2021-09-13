/*
 * CreditPage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React, { useEffect, memo } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import styled from 'styled-components';

import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import {
  makeSelectRepos,
  makeSelectLoading,
  makeSelectError,
} from 'containers/App/selectors';
import { loadRepos } from '../App/actions';
import { changeUsername } from './actions';
import { makeSelectUsername } from './selectors';
import reducer from './reducer';
import saga from './saga';

import CustomProgress from '../../components/CustomProgress';

import Row from 'antd/lib/row';
import Col from 'antd/lib/col';
import Typography from 'antd/lib/typography';
import Card from 'antd/lib/card';
import Image from 'antd/lib/image';
import Button from 'antd/lib/button';
import Table from 'antd/lib/table';
import Space from 'antd/lib/space';

const { Text, Title, Link } = Typography; 

const key = 'CreditPage';

export function CreditPage({
  username,
  loading,
  error,
  repos,
  onSubmitForm,
  onChangeUsername,
}) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  useEffect(() => {
    // When initial state username is not null, submit the form to load repos
    if (username && username.trim().length > 0) onSubmitForm();
  }, []);

  const block = {
    borderStyled: "solid",
    borderColor: "#D9D9D9"
  }

  const ButtonContainer = styled.div`
  .ant-btn-text {
    background: #33CC99;
    color: white;
    width: 100%;
  }
`;

  const centering = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }
  
  const creditExpiring = {
    columns: [{
        title: 'Transaction Date',
        dataIndex: 'transactionDate'
      },{
        title: 'Expiry Date',
        dataIndex: 'expiryDate'
      },{
        title: 'Credits',
        dataIndex: 'credits'
      },
    ],
    data: [{
      key: '1',
      transactionDate: 'Apr 3, 2020',
      expiryDate: 'Apr 2, 2021',
      credits: '182'
    },{
      key: '2',
      transactionDate: 'Apr 3, 2020',
      expiryDate: 'Apr 2, 2021',
      credits: '182'
    },{
      key: '3',
      transactionDate: 'Apr 3, 2020',
      expiryDate: 'Apr 2, 2021',
      credits: '182'
    },
    ]
  }

  const progressData = [
    {
      name: 'Rent list',
      value: 31,
      color: 'blue'
    },
    {
      name: 'Purchase',
      value: 27,
      color: 'orange'
    },
    {
      name: 'Email Verification',
      value: 14,
      color: '#6ab04c'
    },
    {
      name: 'Data Services',
      value: 12,
      color: 'purple'
    },
    {
      name: 'Campaign Services',
      value: 5,
      color: 'yellow'
    },
    {
      name: 'Others',
      value: 4,
      color: 'grey'
    }
  ];

  const creditHistory = [
    
  ];

  return (
    <article>
      <Helmet>
        <title>Credit Page</title>
        <meta
          name="description"
          content="A React.js Boilerplate application creditpage"
        />
      </Helmet>
      <div>
        <Row>
          <Col span={12} style={{padding: "24px"}}>
            <Row>
              <Col span={24}>
                <Card>
                  <Row>
                    <Col span={12}>
                      <Text>Current Credit Balance</Text>
                      <Title level={3} style={{margin: 0}}>5,000</Title>
                      <Text type="secondary">Last Purchase on Apr 2, 2021</Text>
                    </Col>
                    <Col span={12}>
                      <div style={{centering}}>
                        <ButtonContainer>
                          <Button type="text" size="large">
                            Add Credits
                          </Button>
                        </ButtonContainer>
                      </div>
                    </Col>
                  </Row>
                </Card>
                <Card style={{marginTop: "24px"}}>
                  <Row>
                    <Col span={24}>
                      <div style={{textAlign: "center"}}><b>Credit expiring soon</b></div>
                      <Table columns={creditExpiring.columns} dataSource={creditExpiring.data} size="small" pagination={false} />
                      <div style={{textAlign: "center", marginTop: "10px"}}><Link>See all</Link></div>
                    </Col>
                  </Row>
                </Card>
              </Col>
            </Row>
          </Col>
          <Col span={12} style={{padding: "24px"}}>
            <Row>
              <Col span={24}>
                <Card>
                  <div style={{textAlign: "center"}}><Title level={4}>How to spend credits</Title></div>
                  <Row>
                    <Col span={12}>
                      <Row>
                        <Col>
                          <Image src={require('../../assets/images/cart.png')} width={40} />
                        </Col>
                        <Col style={{paddingLeft: "8px"}}>
                          <div><Link>Purchase list &gt;</Link></div>
                          <div><b>1 credit</b>/contact</div>
                        </Col>
                      </Row>
                      <Row style={{marginTop: "20px"}}>
                        <Col>
                          <Image src={require('../../assets/images/inbox.png')} width={40} />
                        </Col>
                        <Col style={{paddingLeft: "8px"}}>
                          <div><Link>Email verification &gt;</Link></div>
                          <div><b>0.03 credits</b>/email</div>
                        </Col>
                      </Row>
                      <Row style={{marginTop: "20px"}}>
                        <Col>
                          <Image src={require('../../assets/images/rent.png')} width={40} />
                        </Col>
                        <Col style={{paddingLeft: "8px"}}>
                          <div><Link>Rent list &gt;</Link></div>
                          <div><b>0.5 credits</b>/contact/year</div>
                        </Col>
                      </Row>
                    </Col>
                    <Col span={12}>
                      <Row>
                        <Col>
                          <Image src={require('../../assets/images/cart.png')} width={40} />
                        </Col>
                        <Col style={{paddingLeft: "8px"}}>
                          <div><Link>Campaign services &gt;</Link></div>
                          <div><b>110 credits</b>/hour</div>
                        </Col>
                      </Row>
                      <Row>
                        <div>
                          <small>Get help from a Leadbook Email Specialist to <br />create and set up emails, forms, landing <br/> pages and more.</small>
                        </div>
                      </Row>
                      <Row style={{marginTop: "10px"}}>
                        <Col>
                          <Button><Text type="secondary">Request Campaign Services</Text></Button>
                        </Col>
                      </Row>
                      <Row style={{marginTop: "14px"}}>
                        <Col>
                          <Image src={require('../../assets/images/telegram.png')} width={40} />
                        </Col>
                        <Col style={{paddingLeft: "8px"}}>
                          <div><Link>Data services &gt;</Link></div>
                          <div><b>110 credits</b>/hour</div>
                        </Col>
                      </Row>
                      <Row>
                        <div>
                          <small>For custom data requests like additional <br />data fields. data enrichments, list cleansing,<br/> ABS search, list matching and more.</small>
                        </div>
                      </Row>
                      <Row style={{marginTop: "10px"}}>
                        <Col>
                          <Button><Text type="secondary">Request Campaign Services</Text></Button>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row style={{paddingLeft: "24px"}}>
          <b>Past credit usage</b>
        </Row>
        <Row>
          <Col span={12}>
            <Row style={{padding: "24px"}}>
              <Col span={24}>
                <Row justify="space-between">
                  <Col span={11}>
                    <Card style={{textAlign: "center", paddingBottom: "73px"}}>
                      <div><b>Credit used this month</b></div>
                      <Title level={3} style={{margin: 0}}>320</Title>
                      <Text type="secondary">credits</Text>
                    </Card>
                  </Col>
                  <Col span={11}>
                    <Card style={{textAlign: "center", paddingBottom: "73px"}}>
                      <div><b>Credit used in last 3 months</b></div>
                      <Title level={3} style={{margin: 0}}>1,244</Title>
                      <Text type="secondary">credits</Text>
                    </Card>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
          <Col span={12}>
            <Row style={{padding: "24px"}}>
              <Col span={24}>
                <Card>
                  <div><b>Credit usage by type</b></div>
                  <div style={{textAlign: "center"}}><CustomProgress progressData={progressData}/></div>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row style={{paddingLeft: "24px"}}>
          <b>Credit History</b>
        </Row>

        <Row style={{padding: "24px"}}>
          <Col span={24}>
            <Table columns={creditExpiring.columns} dataSource={creditExpiring.data} size="small" pagination={false} />
          </Col>
        </Row>
              
      </div>
    </article>
  );
}

CreditPage.propTypes = {
};

const mapStateToProps = createStructuredSelector({
});

export function mapDispatchToProps(dispatch) {
  return {
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(CreditPage);
