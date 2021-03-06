import { renderComponent, expect } from '../test_helper';
import CommentBox from '../../src/components/comment_box';

describe('CommentBox Test', ()=> {
  let component;

  beforeEach(() => {
    component = renderComponent(CommentBox);
  });

  it('has the correct class', ()=> {
    expect(component).to.have.class('comment-box');
  });

  it('has a textarea', ()=> {
    expect(component.find('textarea')).to.exist;
  });

  it('has a button', ()=> {
    expect(component.find('button')).to.exist;
  });

  //test for textarea
  describe('entering some text', ()=>{
    beforeEach(() => {
      component.find('textarea').simulate('change', 'dummy test comment');
    });

    it('shows that text in the textarea', () => {
      expect(component.find('textarea')).to.have.value('dummy test comment');
    });

    it ('when submitted, clears the input', () => {
      //console.log(component);
      component.simulate('submit');
      expect(component.find('textarea')).to.have.value('');
    });
  });
});
