import React from "react";
import { Fragment, useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import axios from "axios";
import Contact from "./Contact";
const Contacts = () => {
  const [contacts, Setcontacts] = useState([]);
  const [loading, Setloading] = useState(false);
  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    try {
      const response = await axios.get("https://randomuser.me/api/?results=12");
      Setcontacts(response.data.results);
      Setloading(true);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <Fragment>
        <Row>
          {loading &&
            contacts.map((contact, index) => (
              <Col sm={12} md={6} lg={4} key={index}>
                <Contact contact={contact} />
              </Col>
            ))}
        </Row>
      </Fragment>
    </div>
  );
};

export default Contacts;
