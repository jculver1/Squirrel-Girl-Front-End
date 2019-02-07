import React from 'react';

const Card = (props) => {
return (
  <div class="card">
    <img src={props.img} class="card-img-top" alt=''/>
    <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">{props.quote}}</p>
    <a onClick={props.nextQuote} href="#" class="btn btn-primary">Next Quote!</a>
  </div>
</div>
)
}


export default Card