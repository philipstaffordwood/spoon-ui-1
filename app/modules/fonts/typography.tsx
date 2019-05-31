import './typography.scss';

import React from 'react';
import { connect } from 'react-redux';
import { Row, Col, Alert, Card } from 'reactstrap';

export default class Typography extends React.Component {
  render() {
    return (
      <Card>
        <Row>
          <Col md="4">
            <h1>Headline 1</h1>
            <p>
              Pippin was roused by Gandalf. Candles were lit in their chamber, for only a dim twilight came through the windows; the air was
              heavy as with approaching thunder. ‘What is the time?’ said Pippin yawning. ‘Past the second hour,’ said Gandalf. ‘Time to get
              up and make yourself presentable. You are summoned to the Lord of the City to learn your new duties.’ ‘And will he provide
              breakfast?’
            </p>
            <p>
              ‘No! I have provided it: all that you will get till noon. Food is now doled out by order.’Pippin looked ruefully at the small
              loaf and (he thought) very inadequate pat of butter which was set out for him, beside a cup of thin milk. ‘Why did you bring
              me here?’ he said.
            </p>
            <p>
              ‘You know quite well,’ said Gandalf. ‘To keep you out of mischief; and if you do not like being here, you can remember that
              you brought it on yourself.’ Pippin said no more. Before long he was walking with Gandalf once more down the cold corridor to
              the door of the Tower Hall. There Denethor sat in a grey gloom, like an old patient spider, Pippin thought: he did not seem to
              have moved since the day before. He beckoned Gandalf to a seat, but Pippin was left for a while standing unheeded. Presently
              the old man turned to him: ‘Well, Master Peregrin, I hope that you used yesterday to your profit, and to your liking? Though I
              fear that the board is barer in this city than you could wish.’ Pippin had an uncomfortable feeling that most of what he had
              said or done was somehow known to the Lord of the City, and much was guessed of what he thought as well. He did not answer.
            </p>
            <p>
              ‘What would you do in my service?’ ‘I thought, sir, that you would tell me my duties.’ ‘I will, when I learn what you are fit
              for,’ said Denethor. ‘But that I shall learn soonest, maybe, if I keep you beside me. The esquire of my chamber has begged
              leave to go to the out-garrison, so you shall take his place for a while. You shall wait on me, bear errands, and talk to me,
              if war and council leave me any leisure. Can you sing?’ ‘Yes,’ said Pippin. ‘Well, yes, well enough for my own people. But we
              have no songs fit for great halls and evil times, lord. We seldom sing of anything more terrible than wind or rain. And most
              of my songs are about things that make us laugh; or about food and drink, of course.’
            </p>
          </Col>
          <Col md="4">
            <h2>Headline 2</h2>

            <p>
              ‘And why should such songs be unfit for my halls, or for such hours as these? We who have lived long under the Shadow may
              surely listen to echoes from a land untroubled by it? Then we may feel that our vigil was not fruitless, though it may have
              been thankless.’
            </p>
            <p>
              Pippin’s heart sank. He did not relish the idea of singing any song of the Shire to the Lord of Minas Tirith, certainly not
              the comic ones that he knew best; they were too, well, rustic for such an occasion. He was however spared the ordeal for the
              present. He was not commanded to sing. Denethor turned to Gandalf, asking questions about the Rohirrim and their policies, and
              the position of Éomer, the king’s nephew. Pippin marvelled at the amount that the Lord seemed to know about a people that
              lived far away, though it must, he thought, be many years since Denethor himself had ridden abroad.
            </p>
          </Col>
          <Col md="4">
            <h3>Headline 3</h3>
            <p>
              Presently Denethor waved to Pippin and dismissed him again for a while. ‘Go to the armouries of the Citadel,’ he said, ‘and
              get you there the livery and gear of the Tower. It will be ready. It was commanded yesterday. Return when you are clad!’ It
              was as he said; and Pippin soon found himself arrayed in strange garments, all of black and silver. He had a small hauberk,
              its rings forged of steel, maybe, yet black as jet; and a high-crowned helm with small raven-wings on either side, set with a
              silver star in the centre of the circlet. Above the mail was a short surcoat of black, but broidered on the breast in silver
              with the token of the Tree. His old clothes were folded and put away, but he was permitted to keep the grey cloak of Lórien,
              though not to wear it when on duty. He looked now, had he known it, verily Ernil i Pheriannath, the Prince of the Halflings,
              that folk had called him; but he felt uncomfortable. And the gloom began to weigh on his spirits.
            </p>
            <p>
              It was dark and dim all day. From the sunless dawn until evening the heavy shadow had deepened, and all hearts in the City
              were oppressed. Far above a great cloud streamed slowly westward from the Black Land, devouring light, borne upon a wind of
              war; but below the air was still and breathless, as if all the Vale of Anduin waited for the onset of a ruinous storm. About
              the eleventh hour, released at last for a while from service. Pippin came out and went in search of food and drink to cheer
              his heavy heart and make his task of waiting more supportable. In the messes he met Beregond again, who had just come from an
              errand over the Pelennor out to the Guard-towers upon the Causeway. Together they strolled out to the walls; for Pippin felt
              imprisoned indoors, and stifled even in the lofty citadel. Now they sat side by side again in the embrasure looking eastward,
              where they had eaten and talked the day before.
            </p>
          </Col>
          <Col md="4">
            <p>This is normal paragraph style</p>
          </Col>
          <Col md="4">
            <footer>Footer text</footer>
          </Col>
          <Col md="4">
            <p>
              <a href="/#/typography">Hyperlink text</a>
            </p>
          </Col>
        </Row>
      </Card>
    );
  }
}
