import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import '../App.css'

const Jakov = () => {
  return (
    <div className="container">
      <h2>Јаков</h2>
      
      <Row xs={1} sm={2} md={3} lg={4} className="g-4"> {/* Dodajemo g-4 za razmak između kartica */}
        <Col>
          <Card>
            <Card.Header>Постање 32:28</Card.Header>
            <Card.Body>
              <blockquote>
                " Тада му рече: *Отселе се нећеш звати Јаков, него Израиљ; јер си се † јуначки борио и с Богом и с људима, и одолио си.'"
              </blockquote>
            </Card.Body>
            <Card.Footer>- Свето Писмо</Card.Footer>
          </Card>
        </Col>

        <Col>
          <Card>
            <Card.Header>Постање 25:23</Card.Header>
            <Card.Body>
              <blockquote>
                "А Господ јој рече: Два су племена у утроби твојој, и два ће народа изаћи из тебе; и један ће народ бити јачи од другога народа, и *већи ће служити мањему. '"
              </blockquote>
            </Card.Body>
            <Card.Footer>- Свето Писмо</Card.Footer>
          </Card>
        </Col>

        <Col>
          <Card>
            <Card.Header>Постање 27:19</Card.Header>
            <Card.Body>
              <blockquote>
                "'И Јаков рече оцу својему: Ја, Исав твој првенац; учинио сам како си ми рекао; дигни се, посади се да једеш лова мојега, па да ме благослови душа твоја.'"
              </blockquote>
            </Card.Body>
            <Card.Footer>- Свето Писмо</Card.Footer>
          </Card>
        </Col>

        <Col>
          <Card>
            <Card.Header>Постање 28:12</Card.Header>
            <Card.Body>
              <blockquote>
                "И усни, а то љестве стајаху на земљи, а врхом тицаху у небо, и гле, *анђели Божји по њима се пењаху и слажаху;."
              </blockquote>
            </Card.Body>
            <Card.Footer>-Свето Писмо</Card.Footer>
          </Card>
        </Col>

        <Col>
          <Card>
            <Card.Header>Постање 28:15</Card.Header>
            <Card.Body>
              <blockquote>
                "И ево, ја сам с тобом, и чуваћу те куда год пођеш, и довешћу те натраг у ову земљу, јер те нећу оставити докле год не учиним што ти рекох."
              </blockquote>
            </Card.Body>
            <Card.Footer>- Свето Писмо</Card.Footer>
          </Card>
        </Col>

        <Col>
          <Card>
            <Card.Header>Постање 29:18</Card.Header>
            <Card.Body>
              <blockquote>
                " И Јакову омиље Рахиља, те рече: Служићу ти седам година за Рахиљу, млађу кћер твоју.'"
              </blockquote>
            </Card.Body>
            <Card.Footer>- Свето Писмо</Card.Footer>
          </Card>
        </Col>

   

        <Col>
          <Card>
            <Card.Header>Постање 32:9</Card.Header>
            <Card.Body>
              <blockquote>
                " И рече Јаков: Боже оца мојега Аврама и Боже оца мојега Исака, Господе, *који си ми казао: Врати се у земљу своју и у род свој, и ја ћу ти бити добротвор!'"
              </blockquote>
            </Card.Body>
            <Card.Footer>- Свето Писмо</Card.Footer>
          </Card>
        </Col>

        <Col>
          <Card>
            <Card.Header>Постање 32:12</Card.Header>
            <Card.Body>
              <blockquote>
                " А *ти си казао: Заиста, ја ћу ти бити добротвор, и учинићу сјеме твоје да буде као пијеска морскога, који се не може избројити од множине.'"
              </blockquote>
            </Card.Body>
            <Card.Footer>- Свето Писмо</Card.Footer>
          </Card>
        </Col>

        <Col>
          <Card>
            <Card.Header>Постање 32:24</Card.Header>
            <Card.Body>
              <blockquote>
                "И кад видје да га не може савладати, удари га по зглавку у стегну, те се Јакову ишчаши стегно из зглавка, кад се човјек рваше с њим."
              </blockquote>
            </Card.Body>
            <Card.Footer>- Свето Писмо</Card.Footer>
          </Card>
        </Col>

        <Col>
          <Card>
            <Card.Header>Постање 35:10</Card.Header>
            <Card.Body>
              <blockquote>
                " И рече му Бог: Име ти је Јаков; *али се одсад нећеш звати Јаков, него ће ти име бити Израиљ. И надједе му име Израиљ."
              </blockquote>
            </Card.Body>
            <Card.Footer>- Свето Писмо</Card.Footer>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default Jakov;
