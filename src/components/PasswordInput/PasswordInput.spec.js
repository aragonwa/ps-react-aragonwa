import React from 'react';
import renderer from 'react-test-renderer';
import PasswordInput from './PasswordInput';
import {shallow} from 'enzyme';

test('toggles input type when show/hide password clicked', () => {
  const wrapper = shallow(<PasswordInput 
    htmlId="test"
    name="test"
    value=""
    onChange={()=>{}}
    showVisibilityToggle
  />);
  // Password Input should have a type of password initially
  expect(wrapper.find({type: 'password'})).toHaveLength(1);
  expect(wrapper.find({type: 'text'})).toHaveLength(0);

  wrapper.find('a').simulate('click');
  expect(wrapper.find({type: 'password'})).toHaveLength(0);
  expect(wrapper.find({type: 'text'})).toHaveLength(1);
});

test('shows password quality when enabled and password is entered',()=>{
  const tree = renderer.create(<PasswordInput 
    htmlId="test"
    name="test"
    onChange={()=>{}}
    showQuality
    value="UisIxx#3334"
  />).toJSON();
  expect(tree).toMatchSnapshot(); 
});