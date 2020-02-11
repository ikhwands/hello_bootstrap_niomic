import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
  Media,
  Alert,
  Badge,
  Button,
  Breadcrumb,
  ButtonGroup,
  ButtonToolbar,
  Card,
  Carousel,
  Dropdown,
  Form,
  InputGroup,
  FormControl,
  Image,
  Figure,
  Jumbotron,
  ListGroup,
  Modal
} from "react-bootstrap";


class App extends Component {
  render() {
    return (
      <Container>
        <Breadcrumb>
          <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
          <Breadcrumb.Item href="/">Info</Breadcrumb.Item>
        </Breadcrumb>

        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/travel1.jpeg"
              alt="Travel 1"
            />
            <Carousel.Caption>
              <h3>Tiket Pesawat Murah</h3>
              <p>Dapatkan Promo Tiker Pesawat Murah</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/travel2.png"
              alt="Travel 1"
            />
            <Carousel.Caption>
              <h3>Tiket Pesawat Murah 2</h3>
              <p>Dapatkan Promo Tiker Pesawat Murah</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/travel3.jpeg"
              alt="Travel 1"
            />
            <Carousel.Caption>
              <h3>Tiket Pesawat Murah 333</h3>
              <p>Dapatkan Promo Tiker Pesawat Murah</p>
            </Carousel.Caption>
          </Carousel.Item>

        </Carousel>

        <br />

        <Jumbotron>
          <h1>Hello Food</h1>
          <p>Selamat Datang Di Situs Makanan Nusantara</p>
          <Button variant="primary">Lebih Lengkap</Button>
        </Jumbotron>


        <Row>
          <Col>
            <Media>
              <img
                width={64}
                height={64}
                className="mr-3"
                src="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/sate.png"
                alt="Gambar Sate"
              />
              <Media.Body>
                <h4>Makanan Sate</h4>
                <p>
                  Sate adalah makan yang dibuat dari daging.
                </p>
              </Media.Body>
            </Media>
          </Col>
          <Col>
            <Media>
              <img
                width={64}
                height={64}
                className="mr-3"
                src="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/sate.png"
                alt="Gambar Sate"
              />
              <Media.Body>
                <h4>Makanan Sate</h4>
                <p>
                  Sate adalah makan yang dibuat dari daging.
                </p>
              </Media.Body>
            </Media>
          </Col>
        </Row>
        <Row>
          <Col>
            <Alert variant="danger">User yang kamu masukan salah</Alert>
          </Col>
          <Col>
            <h5>
              Pesannya adalah <Badge variant="secondary">Benar</Badge>
            </h5>

            <Button variant="primary">
              Profile <Badge variant="light">9</Badge>
            </Button>

          </Col>
          <Col>
            <Button variant="info">Kirim</Button>
            <br />
            <ButtonToolbar aria-label="Toolbar with button groups">
              <ButtonGroup className="mr-2" aria-label="First group">
                <Button>1</Button>
                <Button>2</Button>
                <Button>3</Button>
                <Button>4</Button>
              </ButtonGroup>

              <ButtonGroup className="mr-2" aria-label="Second group">
                <Button>5</Button>
                <Button>6</Button>
                <Button>7</Button>
              </ButtonGroup>

              <ButtonGroup aria-label="Third group">
                <Button>8</Button>
              </ButtonGroup>
            </ButtonToolbar>


          </Col>
        </Row>
        <br />
        <Row>
          <Col>
            <Card style={{ width: '300px' }}>
              <Card.Img
                variant="top"
                src="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/sate.png"
              />

              <Card.Body>
                <Card.Title>Sate</Card.Title>
                <Card.Text>
                  Sate adalah makanan khas indonesia yang mendunia
                </Card.Text>
              </Card.Body>
              <Button variant="primary">Visit Indonesia</Button>
            </Card>

          </Col>
          <Col>
            <Dropdown>
              <Dropdown.Toggle variant="success">
                Pilih Menu
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="/">Sate</Dropdown.Item>
                <Dropdown.Item href="/">Ayam</Dropdown.Item>
                <Dropdown.Item href="/">Ikan</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <br /><br />
            <Form>
              <Form.Group>
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Masukan Nama" />
              </Form.Group>

              <Form.Group>
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Masukan Email" />
                <Form.Text className="text-muted">
                  Kami tidak akan menyalahgunakan email kamu
                </Form.Text>
              </Form.Group>

              <Form.Group>
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Masukan Password" />
              </Form.Group>

              <Form.Group>
                <Form.Check type="checkbox" label="Kami Setuju" />
              </Form.Group>

              <Button variant="primary" type="submit">
                Submit
              </Button>

            </Form>

          </Col>
          <Col>
            <InputGroup class="mb-3">
              <InputGroup.Prepend>
                <InputGroup.Text>@</InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl placeholder="Username" />
            </InputGroup>

            <Image src="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/foodsmall.jpg"
              roundedCircle
            />

            <Figure>
              <Figure.Image
                width={270}
                height={280}
                alt="Nasi Padang"
                src="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/nasipadang.jpg"
              />
              <Figure.Caption>
                Nasi Padang makanan Melegenda asal Indonesia
              </Figure.Caption>
            </Figure>
          </Col>
        </Row>
        <br />
        <Row>
          <Col>
            <ListGroup>
              <ListGroup.Item >Nasi Padang</ListGroup.Item>
              <ListGroup.Item active>Sate Madura</ListGroup.Item>
              <ListGroup.Item>Ayam Geprek</ListGroup.Item>
              <ListGroup.Item>Bebek Panggang</ListGroup.Item>

            </ListGroup>
          </Col>
          <Col>
            <Modal.Dialog >
              <Modal.Header closeButton>
                <Modal.Title>Info</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <p>Simpan Data Pelanggan</p>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary">Close</Button>
                <Button variant="primary">Save Change</Button>
              </Modal.Footer>
            </Modal.Dialog>
          </Col>
          <Col>Kolom3</Col>
        </Row>
      </Container>
    )
  }
}




export default App;
