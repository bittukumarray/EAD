import React from "react";

const ProfilePage = () => {
  return (
    <div>
      <div class="container py-2">
        <div class="row my-2">
          <div class="col-lg-4">
            <h2 class="text-center font-weight-light">User Profile</h2>
          </div>
          <div class="col-lg-8"></div>
          <div class="col-lg-8 order-lg-1 personal-info">
            <form role="form">
              <div class="form-group row">
                <label class="col-lg-3 col-form-label form-control-label">
                  First name
                </label>
                <div class="col-lg-9">
                  <input
                    class="form-control"
                    type="text"
                    placeholder="Enter Name"
                  ></input>
                </div>
              </div>
              <div class="form-group row">
                <label class="col-lg-3 col-form-label form-control-label">
                  Last name
                </label>
                <div class="col-lg-9">
                  <input
                    class="form-control"
                    type="text"
                    placeholder="Enter Last Name"
                  ></input>
                </div>
              </div>
              <div class="form-group row">
                <label class="col-lg-3 col-form-label form-control-label">
                  Email
                </label>
                <div class="col-lg-9">
                  <input
                    class="form-control"
                    type="email"
                    placeholder="ex. er@gmail.com"
                  ></input>
                </div>
              </div>
              <div class="form-group row">
                <label class="col-lg-3 col-form-label form-control-label">
                  Address
                </label>
                <div class="col-lg-9">
                  <input
                    class="form-control"
                    type="text"
                    placeholder="Street"
                  ></input>
                </div>
              </div>
              <div class="form-group row">
                <label class="col-lg-3 col-form-label form-control-label"></label>
                <div class="col-lg-6">
                  <input
                    class="form-control"
                    type="text"
                    placeholder="City"
                  ></input>
                </div>
                <div class="col-lg-3">
                  <input
                    class="form-control"
                    type="text"
                    placeholder="State"
                  ></input>
                </div>
              </div>
              <div class="form-group row">
                <label class="col-lg-3 col-form-label form-control-label">
                  Username
                </label>
                <div class="col-lg-9">
                  <input
                    class="form-control"
                    type="text"
                    placeholder="ex. kisn754"
                  ></input>
                </div>
              </div>

              <div class="form-group row">
                <div class="col-lg-9 ml-auto text-right">
                  <input
                    type="reset"
                    class="btn btn-danger"
                    value="Cancel"
                  ></input>
                  <input
                    type="button"
                    class="btn btn-primary"
                    value="Save Changes"
                  />
                </div>
              </div>
            </form>
          </div>

          <div class="col-lg-4 order-lg-0 text-center">
            <img
              src="https://img.etimg.com/thumb/width-640,height-480,imgsize-120883,resizemode-1,msid-65900138/small-and-marginal-farmers-are-to-see-better-days-with-a-free-of-cost-farmer-to-farmer-rental-program-through-this-revolutionary-app-by-tafes-jfarm-services.jpg"
              class="mx-auto img-fluid rounded-circle"
              alt="image has to be here"
            />
            <h6 class="my-4">Upload a new photo</h6>
            <div class="input-group px-xl-4">
              <form>
                <div style={{ textAlign: "left" }} class="custom-file">
                  <input
                    type="file"
                    class="custom-file-input"
                    id="customFile"
                  ></input>
                  <label class="custom-file-label" for="customFile">
                    Choose file
                  </label>
                </div>
              </form>
              <div class="input-group-append">
                <button style={{ float: "right" }} class="btn btn-secondary">
                  <i class="fa fa-upload"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
