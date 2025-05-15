import { Card, Col, Row } from "react-bootstrap";
import './Genesis.css';

function Genesis() {
  return (
    <div>
      <h2 className="text-center mb-4">Постање</h2>

      <Row xs={1} sm={2} md={3} lg={4} className="g-4">
        <Col>
          <Card className="mb-3">
            <Card.Header>1. Мојсијева 1:1</Card.Header>
            <Card.Body>
              <blockquote>"У почетку Бог створи небо и земљу."</blockquote>
            </Card.Body>
            <Card.Footer>- Постање</Card.Footer>
          </Card>
        </Col>

        <Col>
          <Card className="mb-3">
            <Card.Header>1. Мојсијева 1:3</Card.Header>
            <Card.Body>
              <blockquote>"И рече Бог: Нека буде светлост. И би светлост."</blockquote>
            </Card.Body>
            <Card.Footer>-Постање</Card.Footer>
          </Card>
        </Col>

        <Col>
          <Card className="mb-3">
            <Card.Header>1. Мојсијева 1:27</Card.Header>
            <Card.Body>
              <blockquote>
                "И створи Бог човека по обличју своме,по обличју Божијему створи га;мушко и женско створи их."
              </blockquote>
            </Card.Body>
            <Card.Footer>- Постање</Card.Footer>
          </Card>
        </Col>

        <Col>
          <Card className="mb-3">
            <Card.Header>1. Мојсијева2:2</Card.Header>
            <Card.Body>
              <blockquote>
                "И сврши Бог до седмог дана дела своја,која чини ипочину у седми дан од свијех дела својих која учини"
              </blockquote>
            </Card.Body>
            <Card.Footer>-Постање</Card.Footer>
          </Card>
        </Col>

   

        <Col>
          <Card className="mb-3">
            <Card.Header>1. MМојсијева 1:24</Card.Header>
            <Card.Body>
              <blockquote>"Потом рече Бог: Нека земља пусти из себе  душе живе по врстима његовијем, стоку и ситне животиње и звери земаљске према врстама њиховијем.И би тако"</blockquote>
            </Card.Body>
            <Card.Footer>- Постање</Card.Footer>
          </Card>
        </Col>

        <Col>
          <Card className="mb-3">
            <Card.Header>1. Мојсијева 2:7</Card.Header>
            <Card.Body>
              <blockquote>"И створи Господ Бог човека од праха земаљског и дуну му у нос дух животни и поста човек душа жива."</blockquote>
            </Card.Body>
            <Card.Footer>- Постање</Card.Footer>
          </Card>
        </Col>

        {/* Dodatni citati */}
        <Col>
          <Card className="mb-3">
            <Card.Header>1.Мојсијева2:8</Card.Header>
            <Card.Body>
              <blockquote>"И насади Господ Бог врт у Едему на истоку: и ондје намести човека којега створи."</blockquote>
            </Card.Body>
            <Card.Footer>-Постање</Card.Footer>
          </Card>
        </Col>

        <Col>
          <Card className="mb-3">
            <Card.Header>1. Мојсијева 2:22</Card.Header>
            <Card.Body>
              <blockquote>"И Господ Бог створи жену од  Адамовог ребра, које узе Адаму, и доведе је к Адаму."</blockquote>
            </Card.Body>
            <Card.Footer>- Постање</Card.Footer>
          </Card>
        </Col>

        <Col>
          <Card className="mb-3">
            <Card.Header>1. Мојсијева 3:11</Card.Header>
            <Card.Body>
              <blockquote>"А Бог рече:Ко ти каза да си го? Да ниси јео са оног дрвета што сам ти забранио да не једеш са њега."</blockquote>
            </Card.Body>
            <Card.Footer>- Постање</Card.Footer>
          </Card>
        </Col>

        <Col>
          <Card className="mb-3">
            <Card.Header>1. Мојсијева 3:24</Card.Header>
            <Card.Body>
              <blockquote>"И изгнав човека, постави пред вртом Едемским херувима са пламеним мачем, који се вијаше тамо и амо да чува пут ка дрвету живота"</blockquote>
            </Card.Body>
            <Card.Footer>- Постање</Card.Footer>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default Genesis;
