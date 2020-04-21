import React, { Fragment } from 'react';
import './App.css';
import Toggle from './Toggle'
import Modal from './Modal'
import { ArcherContainer, ArcherElement } from 'react-archer';

const boxStyle = { padding: '10px', border: '1px solid black' };
const rootStyle = { display: 'flex', justifyContent: 'center' };
const rowStyle = { marginTop:50, display: 'flex', justifyContent: 'space-between' }


function App() {
  return (
    <div className="App">
      <Modal/>
      <Toggle>
        {({ on, toggle }) => (
          <Fragment>
            <button onClick={toggle}>Show</button>
            {
             on && <Modal on={on} toggle={toggle} />
            }
          </Fragment>

        )}
      </Toggle>
      <ArcherContainer strokeColor='yellow' >
        <div style={rootStyle}>
          <ArcherElement id="root1"
            relations={[{
              targetId: 'element2',
              targetAnchor: 'top',
              sourceAnchor: 'bottom',
            },
            {
              targetId: 'element3',
              targetAnchor: 'top',
              sourceAnchor: 'bottom',
            }
            ]}
          >
          <div style={boxStyle}>Root 1</div>
        </ArcherElement>
        </div>
        <div style={rowStyle}>
          <ArcherElement id='element2'
            relations={[{
              targetId: 'element4',
              targetAnchor: 'top',
              sourceAnchor: 'bottom',
            }]}
          >
            <div style={boxStyle}>Element 2</div>
          </ArcherElement>
          <ArcherElement id='element3'
            relations={[{
              targetId: 'element4',
              targetAnchor: 'right',
              sourceAnchor: 'left',
            },
            {
              targetId: 'element2',
              targetAnchor: 'right',
              sourceAnchor: 'left',
            }
            ]}>
            <div style={boxStyle}>Element 3</div>
          </ArcherElement>
        </div>
        <div style={rowStyle}>
          <ArcherElement id='element4' >
            <div style={boxStyle}>Element 4</div>
          </ArcherElement>
        </div>
      </ArcherContainer>
    </div>
  );
}

export default App;
