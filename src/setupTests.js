
import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import {createSerializer} from 'enzyme-to-json';

//Enzyme
Enzyme.configure({ adapter: new Adapter() });
//Enzyme to json
expect.addSnapshotSerializer(createSerializer({mode: 'deep'}));

//El error que marca porque no encuentra enzyme se corrigió al instalar   npm i enzyme