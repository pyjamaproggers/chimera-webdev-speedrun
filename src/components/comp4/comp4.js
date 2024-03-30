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
                    fontSize: '8rem',
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
                    position: 'relative',
                    display: 'inline-block',
                    textAlign: 'center',
                    fontSize: '$3xl',
                    fontWeight: '$bold',
                    backgroundColor: 'white', // Set this to match the container's background
                    lineHeight: '1em', // Adjust line height to control the vertical position of the text
                    padding: '0 300px', // Add horizontal padding to ensure the background extends beyond the text
                    zIndex: 5, // Ensure the text layer is above any potentially conflicting elements
                    "&:before": { // Create a pseudo-element for the border
                        content: '""',
                        position: 'absolute',
                        top: '50%',
                        left: '0',
                        right: '0',
                        borderTop: '1px solid black',
                        zIndex: -5, // Place the border behind the text
                    }
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
                        '&:hover': {
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
                        '&:hover': {
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
                        '&:hover': {
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
