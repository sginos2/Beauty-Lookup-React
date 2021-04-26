// import { Component } from 'react';
// import { Route } from 'react-router-dom';
// import { AuthContext } from '../index';
// import { Redirect } from 'react-router-dom';

// export default class ProtectedRoute extends Component {
    
//     render() {
//         const state = this.context;
//         const isAuthed = state?.isAuthed;
//         if (!isAuthed) {
//             return <Redirect to='/home'/>
//         }
//         const { children, path } = this.props
//         return (
//             <Route path={path}>
//                 {children}
//             </Route>
//         );
//     }
// }

// ProtectedRoute.contextType = AuthContext;
