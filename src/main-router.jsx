import React from 'react';
import { browserHistory, Route, Router } from 'react-router';
import { Provider } from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux';
import PageStart from './routes/start/container-page-start';
import PageEligibility from './routes/eligibility/container-page-eligibility';
import PageReferStudent from './routes/refer-student/container-page-refer-student';
import PageStudentApplication from './routes/application/container-page-application';
import store from './store';
import theme from './theme';

const reduxBrowserHistory = syncHistoryWithStore(browserHistory, store);

export default () => (
  <Provider store={store}>
    <div style={{ ...theme.fillParent }}>
      <Router history={reduxBrowserHistory}>
        <Route path="/" component={PageStart} />
        <Route path="/eligibility" component={PageEligibility} />
        <Route path="/refer-student" component={PageReferStudent} />
        <Route path="/student-application" component={PageStudentApplication} />
      </Router>
    </div>
  </Provider>
);

