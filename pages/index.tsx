import { withAmp } from 'next/amp';
// import { Button } from 'experiment/button';
import {Button} from '../button'

const Index = () => (
  <div>
    <p>Hello Next.js</p>
    <Button>hello</Button>
  </div>
);

export default withAmp(Index);
