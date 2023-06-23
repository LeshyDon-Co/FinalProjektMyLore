import styles from "./membercard.module.css";
// import {Card, Grid, Row, Text, Col} from "@nextui-org/react";

function Membercard() {
  const list = [
    {
      title: "The Big Boss",
      name: "Maddy",
      img: "/images/fruit-1.jpeg",
      text: "gdrhrhrhdrhdrhdrh",
    },
    {
      title: "Die Farbspezialistin",
      name: "Claudi",
      img: "/images/fruit-1.jpeg",
      text: "",
    },
    {
      title: "Das Allroundtalent",
      name: "Lion",
      img: "/images/fruit-1.jpeg",
      text: "",
    },
    {
      title: "Der Kommentator",
      name: "Steven",
      img: "/images/fruit-1.jpeg",
      text: "m mmmmmm mmmmmm mmmmmm mmmmm mmmmm mmmmmm mmmm mmmmm",
    },
  ];
  // gap={1}
  return (
    <div>hallo</div>
    // <Grid.Container justify="space-around" max-width="100vw">
    //   {list.map((item, index) => (
    //     <Grid sm={2} key={index}>
    //       <Card>
    //         <Card.Header className={styles.header}>
    //           <Col>
    //             <Text className={styles.title}>{item.title}</Text>
    //             <Text h3>{item.name}</Text>
    //           </Col>
    //         </Card.Header>
    //         <Card.Body css={{p: 0}}>
    //           <Card.Image
    //             className={styles.image}
    //             src={"https://nextui.org" + item.img}
    //             objectFit="cover"
    //           />
    //         </Card.Body>
    //         <Card.Footer
    //           className={styles.footer}
    //           css={{
    //             justifyItems: "flex-end",
    //             bgBlur: "#B3936AZA",
    //           }}
    //         >
    //           <Row wrap="wrap" justify="space-between" align="center">
    //             <Text className={styles.title}>{item.text}</Text>
    //           </Row>
    //         </Card.Footer>
    //       </Card>
    //     </Grid>
    //   ))}
    // </Grid.Container>
  );
}

export default Membercard;
