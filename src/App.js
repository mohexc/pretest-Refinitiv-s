import React, { useState } from 'react';
import './App.less';
import AppSider from './layouts/AppSider';
import AppFooter from './layouts/AppFooter';
import AppHeader from './layouts/AppHeader'
import { Layout } from 'antd'
import { BrowserRouter, Switch, Route, } from "react-router-dom";
import Question21 from './pages/Question2_1';
import Question22 from './pages/Question2_2';
import Question14 from './pages/Question1_4';

// main
const App = () => {
  const [collapsed, setcollapsed] = useState(false)
  return (
    <BrowserRouter>
      <Layout>
        <AppSider collapsed={collapsed} />
        <Layout style={{ height: '100vh' }}>
          <AppHeader setcollapsed={setcollapsed} collapsed={collapsed} />
          <Layout.Content style={{ height: '100%' }}>

            <Switch>
              <Route exact path="/question2_1"><Question21 /></Route>
              <Route exact path="/question2_2"><Question22 /></Route>
              <Route exact path="/"><Question14 /></Route>
            </Switch>

            <AppFooter />
          </Layout.Content>
        </Layout>
      </Layout>
    </BrowserRouter>
  );
}

export default App;