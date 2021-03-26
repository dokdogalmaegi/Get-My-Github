import { Button } from '@material-ui/core';
import * as React from 'react';
import { Component } from 'react';

export interface TestProps {
    
}
 
export interface TestState {
    
}
 
class Test extends React.Component<TestProps, TestState> {
    render() { 
        return ( 
            <Button type='submit' variant="contained" style={{float : 'right', marginTop : '10px'}}>Search</Button>
        );
    }
}
 
export default Test;