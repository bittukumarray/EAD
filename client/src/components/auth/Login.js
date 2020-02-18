import React,{Fragment} from 'react'
import {
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBInput,
    MDBBtn,
    MDBIcon,
    MDBCard,
    MDBCardBody,
    MDBModal,
    MDBModalBody,
    MDBModalFooter
  } from 'mdbreact';

//   import DocsLink from '../components/docsLink';
// import SectionContainer from '.../components/sectionContainer';
import SectionContainer from '../../components/sectionContainer'
 const Login = () => {
    return (
        <Fragment>
                  <SectionContainer header='Sign in' noBorder>
          <MDBRow className='d-flex flex-row justify-content-center row'>
            <MDBCol md='6' >
              <SectionContainer>
                <form>
                  <p className='h5 text-center mb-4'>Sign in</p>
                  <div className='grey-text'>
                    <MDBInput
                      label='Type your email'
                      icon='envelope'
                      group
                      type='email'
                      validate
                      error='wrong'
                      success='right'
                    />
                    <MDBInput
                      label='Type your password'
                      icon='lock'
                      group
                      type='password'
                      validate
                    />
                  </div>
                  <div className='text-center'>
                    <MDBBtn>Login</MDBBtn>
                  </div>
                </form>
              </SectionContainer>
            </MDBCol>
         
          </MDBRow>
        </SectionContainer>

        </Fragment>
    )
}

export default Login;