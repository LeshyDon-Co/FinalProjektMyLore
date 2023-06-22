"use client";
//Inspiration: https://codepen.io/drehimself/pen/QNXpyp
import styles from "./charactercard.module.css";
import {Card, Grid, Row, Text, Col} from "@nextui-org/react";

function Charactercard() {
  const list = [
    {
      name: "Maddy",
      img: "/images/fruit-1.jpeg",
      text: "gdrhrhrhdrhdrhdrh",
      attribute1: "attribute1",
      value1: "value1",
      attribute2: "attribute2",
      value2: "value2",
      attribute3: "attribute3",
      value3: "value3",
    },
    {
      name: "Claudi",
      img: "/images/fruit-1.jpeg",
      text: "",
      attribute1: "attribute1",
      value1: "value1",
      attribute2: "attribute2",
      value2: "value2",
      attribute3: "attribute3",
      value3: "value3",
    },
    {
      name: "Lion",
      img: "/images/fruit-1.jpeg",
      text: "",
      attribute1: "attribute1",
      value1: "value1",
      attribute2: "attribute2",
      value2: "value2",
      attribute3: "attribute3",
      value3: "value3",
    },
    {
      name: "Neuer Character",
      img: "",
      text: "",
      attribute1: "",
      value1: "",
      attribute2: "",
      value2: "",
      attribute3: "",
      value3: "",
    },
  ];
  // gap={1}
  return (
    <Grid.Container justify="space-around" max-width="100vw">
      {list.map((item, index) => (
        <Grid sm={2} key={index}>
          <Card isPressable className={styles.card}>
            <Card.Header className={styles.header}>
              <Card.Image
                className={styles.image}
                src={"https://nextui.org" + item.img}
                objectFit="cover"
              />
            </Card.Header>
            <Card.Body css={{p: 0}}>
              <Col>
                <Text className={styles.title}>{item.title}</Text>
                <Text h3>{item.name}</Text>
              </Col>
            </Card.Body>
            <Card.Footer
              className={styles.footer}
              css={{
                justifyItems: "flex-end",
              }}
            >
              <Row justify="space-between" align="center">
                <Col>
                  <Row>
                    <Col>
                      <Text className={styles.title}>{item.attribute1}</Text>
                      <Text className={styles.title}>{item.value1}</Text>
                    </Col>
                  </Row>
                </Col>

                <Col>
                  <Row>
                    <Col>
                      <Text className={styles.title}>{item.attribute2}</Text>
                      <Text className={styles.title}>{item.value2}</Text>
                    </Col>
                  </Row>
                </Col>
                <Col>
                  <Row>
                    <Col>
                      <Text className={styles.title}>{item.attribute3}</Text>
                      <Text className={styles.title}>{item.value3}</Text>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Card.Footer>
          </Card>
        </Grid>
      ))}
    </Grid.Container>
  );
}

export default Charactercard;
