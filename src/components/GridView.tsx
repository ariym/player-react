// PASTED FROM: https://www.npmjs.com/package/react-mosaic-component

import { Mosaic } from 'react-mosaic-component';

import 'react-mosaic-component/react-mosaic-component.css';
import '@blueprintjs/core/lib/css/blueprint.css';
import '@blueprintjs/icons/lib/css/blueprint-icons.css';

const styles = {
  page: {
    height: '100%',
    width: '100%',
    margin: 0,
  }
}

const ELEMENT_MAP: { [viewId: string]: JSX.Element } = {
  a: <div>Left Window</div>,
  b: <div>Top Right Window</div>,
  c: <div>Bottom Right Window</div>,
};

export const app = (
  <div style={styles.page}>
    <Mosaic<string>
      renderTile={(id) => ELEMENT_MAP[id]}
      initialValue={{
        direction: 'row',
        first: 'a',
        second: {
          direction: 'column',
          first: 'b',
          second: 'c',
        },
        splitPercentage: 40,
      }}
    />
  </div>
);