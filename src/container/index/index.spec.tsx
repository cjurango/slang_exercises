import test from 'ava'
import React from 'react';
import { shallow } from 'enzyme';
import chai from 'chai';
import chaiEnzyme from 'chai-enzyme';

import ExerciseStore from '../../stores/exerciseStore/exercise.mock'
import Index from './index';

chai.use(chaiEnzyme());
const expect = chai.expect;

const IndexWrapped = (Index as any).wrappedComponent;

test('it should exists', async (t) => {
  const IndexWrapper = shallow(<IndexWrapped exerciseStore={new ExerciseStore()}/>);
  chai.expect(IndexWrapper).to.exist
})

test('it should have an input', async (t) => {
  const IndexWrapper = shallow(<IndexWrapped exerciseStore={new ExerciseStore()}/>);
  expect(IndexWrapper).to.have.descendants('Header')
})