import React from 'react'
import './ContactUs.css';

export default function Cardcontact() {
  return (
    <div>
        <br />
    <div class="row row-cols-1 row-cols-md-3 g-4 text-center">
  <div class="col">
    <div class="card h-100">
      <img src="./assets/Contact3.jpg" class="card-img-top rounded-circle ho" alt="..."/>
      <div class="card-body">
      
        <h5 class="card-title">Easy and Fast Payments</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
      <div class="card-footer">
              {/* <small class="text-muted">Last updated 3 mins ago</small> */}
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src="./assets/Contact2.jpg" class="card-img-top rounded-circle ho" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Payments on your fingertips</h5>
        <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
      </div>
      <div class="card-footer">
        {/* <small class="text-muted">Last updated 3 mins ago</small> */}
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src="./assets/Contact3.jpg" class="card-img-top rounded-circle ho" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Protect Yourself from Scam</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
      </div>
      <div class="card-footer">
        {/* <small class="text-muted">Last updated 3 mins ago</small> */}
      </div>
    </div>
  </div>
</div>
</div>
  )
}
