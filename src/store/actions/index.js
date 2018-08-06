import * as ContactActions from './contacts';
import * as MemberActions from './members';
import * as ProjectActions from './projects';
import * as TaskActions from './tasks';
import * as NavigationsActions from './navigations';

export const actionCreators = Object.assign({}, ContactActions, MemberActions, ProjectActions, TaskActions, NavigationsActions);
