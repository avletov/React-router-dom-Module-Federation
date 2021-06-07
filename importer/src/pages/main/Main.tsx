import React, { Suspense } from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import { Layout } from '../Layout';
import { ErrorBoundary } from '../../ErrorBoundary';
import { Header, List, Nav, Item } from './styles';

// @ts-ignore
const Application_1 = React.lazy(() => import("app1/Letter_app_1"));
// @ts-ignore
const Application_2 = React.lazy(() => import("app2/Application_2"));

export const Main: React.FC = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" render={() => (
                    <>
                        <Header>React-router-dom + Module Federation</Header>
                        <Nav>
                            <List>
                                <Item><Link to='/'>Home Page</Link></Item>
                                <Item><Link to='/app1'>Application_1 Letter</Link></Item>
                                <Item><Link to='/app2'>Application_2 ToDo</Link></Item>
                            </List>
                        </Nav>
                    </>
                )}></Route>
                <Route path="/app1" render={() => (
                    <Layout>
                        <Suspense fallback="Loading...">
                            <ErrorBoundary>
                                <Application_1 />
                            </ErrorBoundary>
                        </Suspense>
                    </Layout>
                )}></Route>
                <Route path="/app2" render={() => (
                    <Layout>
                        <Suspense fallback="Loading...">
                            <ErrorBoundary>
                                <Application_2 />
                            </ErrorBoundary>
                        </Suspense>
                    </Layout>
                )}></Route>
            </Switch>
        </BrowserRouter>
    );
}
