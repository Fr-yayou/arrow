import React, { Component } from 'react'
import Portal from './Portal'
import styled from 'styled-components'

export default class Modal extends Component {
    render() {
   const {toggle,on} = this.props     
        return (
            <Portal>
                {on &&
                <ModuleWrapper>
                    <button onClick={toggle}>close</button>
                </ModuleWrapper>
                }

            </Portal>
        )
    }
}

const ModuleWrapper = styled.div`
position:absolute;
top:0;
left:0;
width:100%;
height:100%;
background-color:teal;

`
