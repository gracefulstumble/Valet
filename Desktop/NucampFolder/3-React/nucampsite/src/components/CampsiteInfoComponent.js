import { Component } from "react";
import { Card, CardImg,  CardText, CardBody, CardTitle } from 'reactstrap';



 function RenderCampsite(campsite){
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
        )
    
        }
 function renderComments(comments) {
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
            );
        }
    };
function CampsiteInfo(props) {
        if (props.campsite) {
            return (
                <div className="container">
                    <div className="row">
                        <RenderCampsite campsite={props.campsite} />
                        <RenderComments comments={props.campsite.comments} />
                    </div>
                </div>
            );
        }
        return <div />;
    }


export default CampsiteInfo;