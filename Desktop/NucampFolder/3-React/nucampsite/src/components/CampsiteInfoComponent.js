import { Component } from "react";
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';


class CampsiteInfo extends Component {
    renderCampsite(campsite){
        return(
            <div className="col-md-5 m-1">
                <card>
                    <cardImg top src={campsite.img} alt={campsite.name}></cardImg>
                    <cardBody>
                        <CardTitle>{campsite.name}</CardTitle>
                        <CardText>{campsite.description}</CardText>
                    </cardBody>
                </card>
            </div>
        );
    }
    renderComments(comments) {
        if (comments) {
            return(
                <div className="col-md-5 m-1">
                    <h4>Comments</h4>
                    {comments.map(comments => {
                        return(
                            <div>
                                <strong>"{comments.text}"</strong><br/>
                                 <br/> <em><strong>--{comments.author}</strong> on {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comments.date)))}</em><br/><br/>
                            </div>
                        )
                    })}
                </div>
            )
        }
    }
    render(){
        if (this.props.campsite){
            return(
                <div className="container">
                    <div className="row">
                        {this.renderCampsite(this.props.campsite)}
                        {this.renderComments(this.props.campsite.comments)}
                    </div>
                </div>
            );
        } else {
            return (<div></div>);
        }
    };
}
export default CampsiteInfo;