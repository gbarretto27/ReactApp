import React, { Component } from 'react';

import {Card, CardImg, CardImgOverlay, CardText, CardBody,
  CardTitle} from 'reactstrap';

class DishDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
        selectedDish: null
    }
  }

  onDishSelect(dish) {
    this.setState({selectedDish: dish});
  }

  renderDish(dish) {
      if (dish != null)
          return(
              <div className="col-12 col-md-5 m-1">
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                      <CardTitle>{dish.name}</CardTitle>
                      <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
              </div>
          );
      else
          return(
              <div></div>
          );
  }

  renderComments(dish) {

      if (dish != null) {
          const comm = dish.comments.map(comment => {
            return (
              <li key={comment.id}>
                <p>{comment.comment}</p>
                <p>-- {comment.author},
                &nbsp;
                {new Intl.DateTimeFormat('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: '2-digit'
                    }).format(new Date(Date.parse(comment.date)))}
                </p>
              </li>
            )
          })
          return(
            <div className="col-12 col-md-5 m-1">
              <h4>Comments</h4>
              <ul className='list-unstyled'>
                {comm}
              </ul>
            </div>
          );
      }
      else
          return(
              <div></div>
          );
  }
  render () {
    const dish = this.props.dish;
    const dishSelected = this.renderDish(dish);
    const commentSelected = this.renderComments(dish);
    return (
      <div className="container">
        <div className="row">
          {dishSelected}
          {commentSelected}
        </div>
      </div>
    );
  }

}



export default DishDetail;
