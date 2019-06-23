import { withAmp } from 'next/amp';
import { Button } from 'liran/button';
// import {Button} from '../button'

const Index = () => (
  <div>
    <p>Hello Next.js</p>
    <Button>ff</Button>
  </div>
);

export default withAmp(Index);
