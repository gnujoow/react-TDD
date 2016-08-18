import { expect } from '../test_helper';
import commentReducer from '../../src/reducers/comments';
import { SAVE_COMMENT } from '../../src/actions/types';

describe('Comments Reducers', () => {
  it('handle action with unknown type', ()=>{
    expect(commentReducer(undefined, {})).to.eql([]);
  });

  it('handle action of type SAVE_COMMENT', ()=>{
    const action = { type: SAVE_COMMENT, payload: 'new comment'};
    expect(commentReducer([], action)).to.eql(['new comment']);
  });
});
