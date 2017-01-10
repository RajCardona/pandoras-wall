import expect from 'expect';
import reducer from '../../app/reducers/tasks';
import { taskStored } from '../../app/components/NewTask/actions';
import { moveFromTo } from '../../app/components/TasksWall/actions';

const initialState = {
  'toDo': {
    data: {},
    name: 'toDo'
  },
  'inProgress': {
    data: {},
    name: 'inProgress'
  },
  'Done': {
    data: {},
    name: 'Done'
  }
};

describe('tasks reducer', () => {
  it('should add a new toDo', () => {
    const after = {
      'toDo': {
        data: { keyValue: { id: '1', 'title': 'new task', 'description': 'something to do' }},
        name: 'toDo'
      },
      'inProgress': {
        data: {},
        name: 'inProgress'
      },
      'Done': {
        data: {},
        name: 'Done'
      }
    };

    const action = taskStored({ id: '1', title: 'new task', description: 'something to do' }, 'keyValue');

    expect(reducer(initialState, action)).toEqual(after);
  });

  xit('should move a toDo to inProgress', () => {
    const before = {
      'toDo': {
        data: { keyValue: { id: '1', 'title': 'new task', 'description': 'something to do' }},
        name: 'toDo'
      },
      'inProgress': {
        data: {},
        name: 'inProgress'
      },
      'Done': {
        data: {},
        name: 'Done'
      }
    };
    const after = {
      'toDo': {
        data: {},
        name: 'toDo'
      },
      'inProgress': {
        data: { keyValue: { id: '1', 'title': 'new task', 'description': 'something to do' }},
        name: 'inProgress'
      },
      'Done': {
        data: {},
        name: 'Done'
      }
    };
    const action = moveFromTo('1', 'new task', 'something to do', 'toDo', 'inProgress');

    expect(reducer(before, action)).toEqual(after);
  });

  xit('should move an inProgress to Done', () => {
    const before = {
      'toDo': {
        data: {},
        name: 'toDo'
      },
      'inProgress': {
        data: { keyValue: { id: '1', 'title': 'new task', 'description': 'something to do' }},
        name: 'inProgress'
      },
      'Done': {
        data: {},
        name: 'Done'
      }
    };
    const after = {
      'toDo': {
        data: {},
        name: 'toDo'
      },
      'inProgress': {
        data: {},
        name: 'inProgress'
      },
      'Done': {
        data: { keyValue: { id: '1', 'title': 'new task', 'description': 'something to do' }},
        name: 'Done'
      }
    };
    const action = moveFromTo('1', 'new task', 'something to do', 'inProgress', 'Done');

    expect(reducer(before, action)).toEqual(after);
  });
});
