
import UserList, {Example1, Example2, Example} from '../../users'

import trainRecords from "../trainRecords"

export default {
  path: 'user',
  component: UserList,
  //indexRoute: {component: Example1},
  indexRoute: { onEnter: (nextState, replace) => replace('/user/Example2') },
  childRoutes: [
    {path: 'Example1', component: Example1},
    {path: 'Example2', component: Example2},
    {path: 'trainRecords', component: trainRecords},
    {path: 'Example(/:name)', component: Example},
  ]
}