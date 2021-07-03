import { Component } from "react";
import { Card, CardImg,  CardText, CardBody, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';


 function RenderCampsite(campsite){
        return(
            <div className="col-md-5 m-1">
                <card>
                    <cardImg top src={campsite.img} alt={campsite.name}></cardImg>
                    <cardBody>
                        <CardText>{campsite.description}</CardText>
                    </cardBody>
                </card>
            </div>
        )
    
        }
 function RenderComments(comments) {
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
                    <div className="col">
                        <Breadcrumb>
                            <BreadcrumbItem><Link to="/directory">Directory</Link></BreadcrumbItem>
                            <BreadcrumbItem active>{props.campsite.name}</BreadcrumbItem>
                        </Breadcrumb>
                        <h2>{props.campsite.name}</h2>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    <RenderCampsite campsite={props.campsite} />
                    <RenderComments comments={props.comments} />
                </div>
            </div>
            );
        }
        return <div />;
    }


export default CampsiteInfo;