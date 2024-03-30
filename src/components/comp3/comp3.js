import React, { useRef, useState, useEffect } from 'react';
import './comp3.css';
import { Col, Grid, Row, Text } from '@nextui-org/react';

function Comp3() {
    const lorumRef = useRef(null);
    const [lorumWidth, setLorumWidth] = useState(0);

    useEffect(() => {
        if (lorumRef.current) {
            setLorumWidth(lorumRef.current.offsetWidth);
        }
    }, []);

    return (
        <div className="component3">
            <div className="content">
                <div className="header-inline">
                    <h2 ref={lorumRef} style={{ color: 'orange', lineHeight: '1' }}>Lorum</h2>
                    <div style={{ marginLeft: `${lorumWidth}px`, color: 'orange', lineHeight: '1' }}>
                        <h2>Ipsum</h2>
                    </div>
                </div>
                <Grid.Container css={{
                    marginLeft: '100px',
                    marginTop: '48px',
                    width: 'max-content'
                }}>
                    <Col css={{
                        width: '70vw'
                    }}>
                        <Row css={{
                            width: '100%',
                            jc: 'space-between',
                            padding: '12px 12px',
                            borderStyle: 'solid',
                            borderWidth: '1px 0px',
                            borderColor: '#0c0c0c',
                            alignItems: 'center',
                            '&:hover':{
                                cursor: 'pointer'
                            }
                        }}
                        className='comp3-row'>
                            <Text css={{
                                fontSize: '$4xl',
                                fontWeight: '$bold',
                                margin: 14
                            }}>
                                Lorem
                            </Text>
                            <Row css={{
                                width: 'max-content',
                                gap: 12
                            }}>
                                <Text css={{
                                    padding: '8px 16px',
                                    borderStyle: 'solid',
                                    borderColor: '#0c0c0c',
                                    borderWidth: '1px',
                                    borderRadius: '16px'
                                }}>
                                    Lorem
                                </Text>
                                <Text css={{
                                    padding: '8px 16px',
                                    borderStyle: 'solid',
                                    borderColor: '#0c0c0c',
                                    borderWidth: '1px',
                                    borderRadius: '16px'
                                }}>
                                    Lorem
                                </Text>
                                <Text css={{
                                    padding: '8px 16px',
                                    borderStyle: 'solid',
                                    borderColor: '#0c0c0c',
                                    borderWidth: '1px',
                                    borderRadius: '16px'
                                }}>
                                    Lorem
                                </Text>
                            </Row>
                        </Row>
                        <Row css={{
                            width: '100%',
                            jc: 'space-between',
                            padding: '12px 12px',
                            borderStyle: 'solid',
                            borderWidth: '0px 0px',
                            borderColor: '#0c0c0c',
                            alignItems: 'center',
                            '&:hover':{
                                cursor: 'pointer'
                            }
                        }}
                        className='comp3-row'>
                            <Text css={{
                                fontSize: '$4xl',
                                fontWeight: '$bold',
                                margin: 14
                            }}>
                                Ipsum
                            </Text>
                            <Row css={{
                                width: 'max-content',
                                gap: 12
                            }}>
                                <Text css={{
                                    padding: '8px 16px',
                                    borderStyle: 'solid',
                                    borderColor: '#0c0c0c',
                                    borderWidth: '1px',
                                    borderRadius: '16px'
                                }}>
                                    Lorem
                                </Text>
                                <Text css={{
                                    padding: '8px 16px',
                                    borderStyle: 'solid',
                                    borderColor: '#0c0c0c',
                                    borderWidth: '1px',
                                    borderRadius: '16px'
                                }}>
                                    Lorem
                                </Text>
                                <Text css={{
                                    padding: '8px 16px',
                                    borderStyle: 'solid',
                                    borderColor: '#0c0c0c',
                                    borderWidth: '1px',
                                    borderRadius: '16px'
                                }}>
                                    Lorem
                                </Text>
                            </Row>
                        </Row>
                        <Row css={{
                            width: '100%',
                            jc: 'space-between',
                            padding: '12px 12px',
                            borderStyle: 'solid',
                            borderWidth: '1px 0px',
                            borderColor: '#0c0c0c',
                            alignItems: 'center',
                            '&:hover':{
                                cursor: 'pointer'
                            }
                        }}
                        className='comp3-row'>
                            <Text css={{
                                fontSize: '$4xl',
                                fontWeight: '$bold',
                                margin: 14
                            }}>
                                Dimor
                            </Text>
                            <Row css={{
                                width: 'max-content',
                                gap: 12
                            }}>
                                <Text css={{
                                    padding: '8px 16px',
                                    borderStyle: 'solid',
                                    borderColor: '#0c0c0c',
                                    borderWidth: '1px',
                                    borderRadius: '16px'
                                }}>
                                    Lorem
                                </Text>
                                <Text css={{
                                    padding: '8px 16px',
                                    borderStyle: 'solid',
                                    borderColor: '#0c0c0c',
                                    borderWidth: '1px',
                                    borderRadius: '16px'
                                }}>
                                    Lorem
                                </Text>
                            </Row>
                        </Row>
                    </Col>
                </Grid.Container>
            </div>
        </div>
    );
}

export default Comp3;
