import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {getCrops, getCrop} from '../../actions/crops';
import { Link } from 'react-router-dom';
import axios from "axios";

class Crops extends React.Component{
    state = {
        crops:null,
        error:false,
        loading:true,
    }

    async componentDidMount(){
        console.log("mounting")
            try{
            const url  = '/api/farmer/get-farmer-crops/'
            const body = {
                role:'farmer'
            }
            // console.log(body)
            const res =await axios.post(url,body)
            const data = await res.data;
            console.log("data ",data)
            this.setState({crops:data.crops,loading:false})
            }
            catch{
                this.setState({error:true, loading:false})
            }
        }
    //     componentDidMount(){
    //         // const {user} = this.props;
    //         // if(user){
    //         const url  = '/api/farmer/get-farmer-crops/'
    //         const body = {
    //             role:'farmer'
    //         }
    //         axios.post(url,body).then(data=>{
    //             console.log(data);
    //             this.setState({crops:data.crops,loading:false})

    //         }).catch(err=>{
    //             this.setState({error:true, loading:false})

    //         })
    //     // }
    // }


    render(){
        const {user} = this.props;

        // console.log("crops ", this.state.crops)
        // const {crop,user}  = this.props;
        const {crops,loading,error} = this.state;
        if(loading)return <div>Loading </div>
        if(error) return <div>Error Occured</div>
        console.log(crops)
        // return <div>Error Occured</div>

        // return <div>hello ... </div>

        // if(user === null) return <div>Please Login</div>
        return  (
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