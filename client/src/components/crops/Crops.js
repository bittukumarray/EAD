import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {getCrops, getCrop} from '../../actions/crops';
import { Link } from 'react-router-dom';

class Crops extends React.Component{
    state = {

    }
    componentDidMount(){
        this.props.getCrops();
    }

    render(){
        const {crop,user}  = this.props;
        const {crops, loading}= crop;
        if(user === null) return <div>Please Login</div>
        return loading || crop=== null || user === null ? (
                    <div>loading</div>
                  ) : (
                    <Fragment>
            
                        <div class="row mt-5 ">
                            <div class="col-md-3 ">
                            </div>
                            <div class="col-md-5">
                                <br></br>
                                <div style={{textAlign:"center"}}><h1 style={{color:"#3CB371",fontWeight:"bold"}}>Crops</h1></div>
                            </div>
                             <div class="col-md-4 ">
                            </div>
                        </div>
                        <div className='crops'>
                        {crops.map(crop => (
                                <div >
                                    {/* <div>{crop.quantiy}</div> */}
                                            <div class="row mt-3">
                                                <div  class="col-md-2">
                                                </div>
            
                                                <div  class="col-md-8">  
                                                    <div class="card h-55 border-primary">
                                                        <div class="card-body">
                                                            <div class="row">
                                                                <div  class="col-md-3-sm-3">
                                                                    <div class="profile-info-name"> Crop Name : </div>
                                                                    <div  class="profile-info-value">
                                                                        <span>{crop.name}</span>
                                                                    </div>
                                                                </div>
                                                                <div class="col-md-3">
                                                                    <div class="profile-info-name">  Price : </div>
                                                                    <div class="profile-info-value">
                                                                        <span>{crop.price}</span>
                                                                    </div>
                                                             
                                                                </div>

                                                                <div  style={{textAlign:"center"}} class="col-md-5-sm-3">
                                                                    <Link to={`/farmer-crop/${crop._id}`} className='btn btn-outline-secondary'>
                                                                        Click For More details
                                                                    </Link>
                                                                </div>
            
            
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
            
                                                <div  class="col-md-2">
                                                </div>
                                            </div>
                                        {/* <div>{crop.name}</div>
                                        <div>{crop.price}</div> */}
                                </div>
                            ))}
                        </div>
                    </Fragment>
                )

    }
}

Crops.propTypes = {
getCrops: PropTypes.func.isRequired,
crop: PropTypes.object.isRequired

};


const mapStateToProps = state => ({
crop: state.crop,
user : state.auth.user,
});
export default connect(mapStateToProps,{getCrops}) (Crops);