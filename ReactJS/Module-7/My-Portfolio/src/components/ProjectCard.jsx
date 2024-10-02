import React from "react";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";

function ProjectCard(props)
{
    return(
        <>
            <div className="col-md-6">
                <Card className="h-100 shadow">
                    <Card.Img variant="top" src={props.projectImage} className="w-100 h-100 img-fluid"></Card.Img>
                    <Card.Body className="p-5">
                        <Card.Title className="fw-bold text-uppercase mb-4 fs-3">{props.projectName}</Card.Title>
                        <Card.Text>{props.projectDesc}</Card.Text>
                        <Button className="shadow text-capitalize" variant="outline-primary">View Project</Button>
                    </Card.Body>
                </Card>
            </div>
        </>
    )
}
export default ProjectCard