import React from "react";
import { Button, Card } from "react-bootstrap";
const Contact = ({ contact }) => {
  return (
    <>
      <Card className="my-3 p-5 rounded h-90">
        <Card.Img
          style={{ objectFit: "contain" }}
          varient="top"
          src={contact.picture.large}
        />
        <Card.Title className="text-primary mt-2">
          {`${contact.name.first + " " + contact.name.last}`}
        </Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Address</Card.Subtitle>
        <Card.Text>
          <div>
            <strong>Street : </strong>
            {contact.location.street.number +
              "," +
              contact.location.street.name}
          </div>
        </Card.Text>
        <Card.Text>
          <div>
            <strong>City : </strong>
            {contact.location.city}
          </div>
        </Card.Text>
        <Card.Text>
          <div>
            <strong>State : </strong>
            {contact.location.state}
          </div>
        </Card.Text>
        <Card.Text>
          <div>
            <strong>Country : </strong>
            {contact.location.country}
          </div>
        </Card.Text>
        {/* Phone and email */}
        <Card.Subtitle className="mb-2 text-muted">Phone :</Card.Subtitle>
        <Card.Text>{contact.phone}</Card.Text>
        <Card.Subtitle className="mb-2 text-muted">Email :</Card.Subtitle>
        <Card.Text>{contact.email}</Card.Text>
        {/* Contact Button */}
        <a href={`mailto: ${contact.email}`}>
          <Button className="w-100" varient=" primary">
            Contact
          </Button>
        </a>
      </Card>
    </>
  );
};

export default Contact;
