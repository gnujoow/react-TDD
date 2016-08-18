import { renderComponent, expect } from '../test_helper';
import App from '../../src/components/app';

// Use describe to groups together similar tests
// 'App' is just string
describe('App', () =>{
  let component;

  beforeEach(()=>{
    component = renderComponent(App);
  });
  //Use 'it' to test a single attribute of a target
  it('shows the correct test', () => {
    // Use 'expect' to make an 'assertion' about a target
    expect(component).to.contain('React simple starter');
  });

  it('shows a comment box', () => {
    expect(component.find('.comment-box')).to.exist
  });

})
