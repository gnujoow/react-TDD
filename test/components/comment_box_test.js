import { renderComponent, expect } from '../test_helper';
import CommentBox from '../../src/components/comment_box';

describe('CommentBox Test', ()=> {
  const component = renderComponent(CommentBox);
  it('has a textarea', ()=> {
    expect(component.find('textarea')).to.exist;
  });

  it('has a button', ()=> {
    expect(component.find('button')).to.exist;
  });

});
