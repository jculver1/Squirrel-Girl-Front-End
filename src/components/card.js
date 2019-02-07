import React from 'react';

const Card = (props) => {
return (
  <div class="card mb-3">
    <img src={props.img} class="card-img-top" alt=''/>
    <div class="card-body">
    <h5 class="card-title text-center">{props.quote}</h5>
    <a onClick={props.nextQuote} href="#" class="btn btn-danger btn-lg btn-block">Next Quote!</a>
  </div>
</div>
)
}

export default Card