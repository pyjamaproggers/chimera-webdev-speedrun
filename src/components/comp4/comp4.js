import React from 'react';
import './comp4.css';
import { Col, Grid, Text, Row } from '@nextui-org/react';

function Comp4() {
    return (
        // <div className="component4">
        //   <p>Lorem ipsum dolor sit</p>
        //   <h1 className="extremely-large">LoremIpsum</h1>
        //   <p className="with-line">Lorem</p>
        //   <div className="with-arrows">
        //     <span>Lorem</span> <span className="arrow">{'->'}</span> 
        //     <span>Ipsum</span> <span className="arrow">{'->'}</span> 
        //     <span>Dolor</span> <span className="arrow">{'->'}</span> 
        //   </div>
        // </div>
        <Grid.Container css={{
            jc: 'center',
            width: '100vw',
            height: '100vh',
            alignItems: 'center'
        }}>
            <Col css={{
                width: 'max-content'
            }}>
                <Text css={{
                    fontSize: '$lg',
                    fontWeight: '$bold'
                }}>
                    Lorem Ipsum Dolor Sit.
                </Text>

                <Text css={{
                    fontSize: '$8xl',
                    fontWeight: '$bold',
                    lineHeight: '1',
                    fontStyle: 'italic',
                    margin: '48px',
                    // color: '#ff8f00'
                }}>
                    <span className='comp4-maintext' >
                        Lorem
                    </span>
                    <span style={{
                        color: '#ff8f00'
                    }}>
                        Ipsum
                        </span>
                        
                </Text>

                <Text css={{
                    borderStyle: 'solid',
                    borderWidth: '1px 0px 0px 0px',
                    borderColor: 'black',
                    textAlign: 'center',
                    fontSize: '$3xl',
                    fontWeight: '$bold'
                }}>
                    Lorem
                </Text>

                <Row css={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 48
                }}>
                    <Text css={{
                        fontSize: '$xl',
                        fontWeight: '$semibold',
                        '&:hover':{
                            cursor: 'pointer',
                            textDecoration: 'underline',
                            textDecorationColor: 'orange'
                        }
                    }}
                    >
                        Lorem →
                    </Text>

                    <Text css={{
                        fontSize: '$xl',
                        fontWeight: '$semibold',
                        '&:hover':{
                            cursor: 'pointer',
                            textDecoration: 'underline',
                            textDecorationColor: 'orange'
                        }
                    }}>
                        Ipsum →
                    </Text>

                    <Text css={{
                        fontSize: '$xl',
                        fontWeight: '$semibold',
                        '&:hover':{
                            cursor: 'pointer',
                            textDecoration: 'underline',
                            textDecorationColor: 'orange'
                        }
                    }}>
                        Dolor →
                    </Text>
                </Row>
            </Col>
        </Grid.Container>
    );
}

export default Comp4;
