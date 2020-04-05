import React, { Component } from 'react'

export default class Payment extends Component {
    render() {
        return (
            <div>
                
                






  <main class="mt-5 pt-4">
    <div class="container wow fadeIn">

      <h2 class="my-5 h2 text-center">Checkout form</h2>

      <div class="row">

        <div class="col-md-8 mb-4">

          <div class="card">

            <form class="card-body">

              <div class="row">

                <div class="col-md-6 mb-2">

                  <div class="md-form ">
                    <input type="text" id="firstName" class="form-control"></input>
                    <label for="firstName" class="">First name</label>
                  </div>

                </div>

                <div class="col-md-6 mb-2">

                  <div class="md-form">
                    <input type="text" id="lastName" class="form-control"></input>
                    <label for="lastName" class="">Last name</label>
                  </div>

                </div>

              </div>

              <div class="md-form input-group pl-0 mb-5">
                <div class="input-group-prepend">
                  <span class="input-group-text" id="basic-addon1">@</span>
                </div>
                <input type="text" class="form-control py-0" placeholder="Username" aria-describedby="basic-addon1"></input>
              </div>

              <div class="md-form mb-5">
                <input type="text" id="email" class="form-control" placeholder="rohit@bot.com"></input>
                <label for="email" class=""> </label>
              </div>

              <div class="md-form mb-5">
                <input type="text" id="address" class="form-control" placeholder="rohit bot street"></input>
                <label for="address" class=""></label>
              </div>

              <div class="md-form mb-5">
                <input type="text" id="address-2" class="form-control" placeholder="Apartment or suite"></input>
                <label for="address-2" class=""> </label>
              </div>

              <div class="row">

                <div class="col-lg-4 col-md-12 mb-4">

                  <label for="country">Country</label>
                  <select class="custom-select d-block w-100" id="country" required>
                    <option value="">Choose...</option>
                    <option>United States</option>
                  </select>
                  <div class="invalid-feedback">
                    Please select a valid country.
                  </div>

                </div>

                <div class="col-lg-4 col-md-6 mb-4">

                  <label for="state">State</label>
                  <select class="custom-select d-block w-100" id="state" required>
                    <option value="">Choose...</option>
                    <option>California</option>
                  </select>
                  <div class="invalid-feedback">
                    Please provide a valid state.
                  </div>

                </div>

                <div class="col-lg-4 col-md-6 mb-4">

                  <label for="zip">Zip</label>
                  <input type="text" class="form-control" id="zip" placeholder="" required></input>
                  <div class="invalid-feedback">
                    Zip code required.
                  </div>

                </div>

              </div>

              <hr />

              <div class="custom-control custom-checkbox">
                <input type="checkbox" class="custom-control-input" id="same-address"></input>
                <label class="custom-control-label" for="same-address">Shipping address is the same as my billing address</label>
              </div>
              <div class="custom-control custom-checkbox">
                <input type="checkbox" class="custom-control-input" id="save-info"></input>
                <label class="custom-control-label" for="save-info">Save this information for next time</label>
              </div>

              <hr/>

              <div class="d-block my-3">
                <div class="custom-control custom-radio">
                  <input id="credit" name="paymentMethod" type="radio" class="custom-control-input" checked required></input>
                  <label class="custom-control-label" for="credit">Credit card</label>
                </div>
                <div class="custom-control custom-radio">
                  <input id="debit" name="paymentMethod" type="radio" class="custom-control-input" required></input>
                  <label class="custom-control-label" for="debit">Debit card</label>
                </div>
                <div class="custom-control custom-radio">
                  <input id="paypal" name="paymentMethod" type="radio" class="custom-control-input" required></input>
                  <label class="custom-control-label" for="paypal">Paypal</label>
                </div>
              </div>
              <div class="row">
                <div class="col-md-6 mb-3">
                  <label for="cc-name">Name on card</label>
                  <input type="text" class="form-control" id="cc-name" placeholder="" required></input>
                  <small class="text-muted">Full name as displayed on card</small>
                  <div class="invalid-feedback">
                    Name on card is required
                  </div>
                </div>
                <div class="col-md-6 mb-3">
                  <label for="cc-number">Credit card number</label>
                  <input type="text" class="form-control" id="cc-number" placeholder="" required></input>
                  <div class="invalid-feedback">
                    Credit card number is required
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-3 mb-3">
                  <label for="cc-expiration">Expiration</label>
                  <input type="text" class="form-control" id="cc-expiration" placeholder="" required></input>
                  <div class="invalid-feedback">
                    Expiration date required
                  </div>
                </div>
                <div class="col-md-3 mb-3">
                  <label for="cc-expiration">CVV</label>
                  <input type="text" class="form-control" id="cc-cvv" placeholder="" required></input>
                  <div class="invalid-feedback">
                    Security code required
                  </div>
                </div>
              </div>
              <hr class="mb-4" />
              <button class="btn btn-primary btn-lg btn-block" type="submit">Continue to checkout</button>

            </form>

          </div>

        </div>

        <div class="col-md-4 mb-4">

          <h4 class="d-flex justify-content-between align-items-center mb-3">
            <span class="text-muted">Your cart</span>
            <span class="badge badge-secondary badge-pill">3</span>
          </h4>

          <ul class="list-group mb-3 z-depth-1">
            <li class="list-group-item d-flex justify-content-between lh-condensed">
              <div>
                <h6 class="my-0">Wheat</h6>
                <small class="text-muted">Brief description</small>
              </div>
              <span class="text-muted">₹12</span>
            </li>
            <li class="list-group-item d-flex justify-content-between lh-condensed">
              <div>
                <h6 class="my-0">Rice</h6>
                <small class="text-muted">Brief description</small>
              </div>
              <span class="text-muted">₹8</span>
            </li>
            <li class="list-group-item d-flex justify-content-between lh-condensed">
              <div>
                <h6 class="my-0">Pulse </h6>
                <small class="text-muted">Brief description</small>
              </div>
              <span class="text-muted">₹5</span>
            </li>
            <li class="list-group-item d-flex justify-content-between bg-light">
              <div class="text-success">
                <h6 class="my-0">Promo code</h6>
                <small>EXAMPLECODE</small>
              </div>
              <span class="text-success">-₹5</span>
            </li>
 
            <li class="list-group-item d-flex justify-content-between">
              <span>Total (USD)</span>
              <strong>₹20</strong>
            </li>
          </ul>

 
        </div>

      </div>

    </div>
  </main>



            </div>
        )
    }
}
