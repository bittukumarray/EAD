import React, { Component } from "react";
import { MDBRow, MDBCol, MDBCard, MDBCardBody, MDBMask, MDBIcon, MDBView, MDBBtn } from "mdbreact";
import { connect } from "react-redux";
import axios from "axios";



class CatalogPage extends Component {

    state = {
        "data": "",
        "searchv": "",
        "filterv": "anydata"
    }
    async componentDidMount() {
        const data = await axios.get(`/api/filter/all`)
        this.setState({ data: data.data });
    }

    onChangeSearchHandler = async (e) => {
        this.setState({searchv:e.target.value});
        let pathv;
        if(e.target.value.length===0){
            this.AllDataFilter();
        }
        else if (this.state.filterv !== "all" && e.target.value.length>0) {
            pathv = this.state.filterv + "/" + e.target.value;
        }
        else {
            pathv = this.state.filterv;
        }
        if (e.target.value.length > 0) {
            try {
                console.log(pathv);
                const data = await axios.get(`/api/filter/${pathv}`)
                this.setState({ data: data.data });
            }
            catch(err){
               console.log(err); 
            }
        }
    }

    onChangeSelectHandler = (e) => {
        console.log(e.target.value);
        this.setState({ filterv: e.target.value, searchv: "" });
        this.AllDataFilter();

    }

    AllDataFilter = async () => {
        const data = await axios.get(`/api/filter/all`)
        this.setState({ data: data.data });
    }


    render() {
        console.log(this.state.data);
        return (
            <MDBCard className="my-5 px-5 pb-5">
                <MDBCardBody className="text-left">
                    <h2 style={{ color: 'green' }} className="h1-responsive font-weight-bold text-center my-5">
                        Latest Posts</h2>
                    <div class="input-group mb-3">
                        <div class="input-group-prepend">
                            <select onChange={this.onChangeSelectHandler} class="btn btn-md btn-outline-primary m-0 px-3 py-2 z-depth-0 waves-effect">
                                <option value="anydata">Filter By</option>
                                <option value="all">All Posts</option>
                                <option value="name">Crops Name</option>
                                <option value="city">City Name</option>
                            </select>
                        </div>
                        <input onChange={this.onChangeSearchHandler} value={this.state.searchv} disabled={this.state.filterv==="all"} type="text" placeholder="Enter city name" class="form-control" placeholder="" aria-label="Example text with button addon"
                            aria-describedby="button-addon1"></input>
                    </div>
                    <section class="pt-5 mt-3 pb-3">
<div class="row">
{this.state.data?
this.state.data.map((element)=>{

  {/* <!--Grid column--> */}
  return <div key={element._id} class="col-md-3">

    {/* <!--Card group--> */}
    <div class="card-group">

      {/* <!--Card--> */}
      <div class="card card-personal mb-4">

        {/* <!--Card image--> */}
        <div class="view">
          <img class="card-img-top" src={element.img} alt="Card image cap"></img>
          <a href="#!">
            <div class="mask rgba-white-slight"></div>
          </a>
        </div>
        {/* <!--Card image--> */}

        {/* <!--Card content--> */}
        <div class="card-body">
          {/* <!--Title--> */}
          <a>
<h4 class="card-title">{element.name}</h4>
          </a>
<a class="card-meta">{element.details}</a>

          {/* <!--Text--> */}
          <hr></hr>
<a class="card-meta"><span><i class="fas fa-user"></i>{element.farmer_name}</span></a>
<p class="card-meta float-right">{element.city}</p>
<p class="card-text float-right">{element.date}</p>
        </div>
        {/* <!--Card content--> */}

      </div>
      </div>
      </div>
      
})

:null}
</div>
      </section>                    


        


                </MDBCardBody>
            </MDBCard>
        )
    }
}


export default connect(null, null)(CatalogPage);
