import test from 'ava'
import * as React from 'react';
import { shallow } from 'enzyme';
import chai from 'chai'
import chaiEnzyme from 'chai-enzyme'

chai.use(chaiEnzyme())
const expect = chai.expect;

import NameStore from '../../stores/nameStore/name.mock'

import Index from './index';
const IndexWrapped = (Index as any).wrappedComponent; // MOBX wrap our component

test('it should exists', async (t) => {
  const wrapper = shallow(<IndexWrapped nameStore={new NameStore()}/>);
  chai.expect(wrapper).to.exist
})

test('it should have an input', async (t) => {
  const wrapper = shallow(<IndexWrapped nameStore={new NameStore()}/>);
  expect(wrapper).to.have.descendants('input')
})