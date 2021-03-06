import 'react-toastify/dist/ReactToastify.css';
// import '../lib/spoon-ui.scss';
import './styles.scss';

import React from 'react';
import { connect } from 'react-redux';
import { HashRouter as Router } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

import { IRootState } from './root-reducer';
import AppRoutes from 'app/routes';
import {
  FontDownload,
  TouchApp,
  TextFields,
  ArrowDropDown,
  CheckCircleOutline,
  Dashboard,
  TableChart,
  Home,
  ColorLens
} from '@material-ui/icons';
/* tslint:disable:no-submodule-imports */
import { SideMenu, Header, Footer, ErrorBoundary, Notification, ActionBanner } from 'lib/components';
import { getSideMenuState, setSideMenu, MINI, HIDE_MAX, HIDE_MINI, setMenuItems } from 'lib/reducers/side-menu-state';
import { CurrentRouteAndIcon } from 'lib/reducers/route-position';
import { AccountMenu } from 'lib/components/header/menus';
import { downloadThemeScssFile } from 'lib/components/color-theme-editor/color-theme-editor';
/* tslint:enable:no-submodule-imports */

export interface IAppProps extends StateProps, DispatchProps {}

const menus: CurrentRouteAndIcon[] = [
  // Default menu structure for the UI Kit
  {
    name: 'menus.typography',
    icon: <FontDownload />,
    path: '/typography',
    sideMenu: true
  },
  {
    name: 'menus.buttons',
    header: 'menus.buttons',
    icon: <TouchApp />,
    path: '/buttons',
    sideMenu: true
  },
  {
    name: 'menus.forms',
    header: 'menus.forms',
    icon: <TextFields />,
    path: '/forms',
    sideMenu: true
  },
  {
    name: 'menus.dropdowns',
    header: 'menus.dropdowns',
    icon: <ArrowDropDown />,
    path: '/dropdowns',
    sideMenu: true
  },
  {
    name: 'menus.selection',
    header: 'menus.selection',
    icon: <CheckCircleOutline />,
    path: '/selection',
    sideMenu: true
  },
  {
    name: 'menus.navigation',
    header: 'menus.navigation',
    icon: <Dashboard />,
    path: '/navigation',
    sideMenu: true,
    breadCrumb: [
      {
        name: 'menus.dashboard',
        header: 'menus.dashboard',
        icon: <Home />,
        path: '#/',
        sideMenu: false
      },
      {
        name: 'menus.selection',
        header: 'menus.selection',
        icon: <CheckCircleOutline />,
        path: '#/selection',
        sideMenu: true
      }
    ],
    actions: [
      {
        color: 'primary',
        name: 'navigation-actions.number1'
      },
      {
        color: 'secondary',
        name: 'navigation-actions.number2'
      }
    ]
  },
  {
    name: 'menus.tables',
    header: 'menus.tables',
    icon: <TableChart />,
    path: '/tables',
    sideMenu: true
  },
  {
    name: 'menus.theme',
    header: 'menus.theme',
    icon: <ColorLens />,
    path: '/theme',
    sideMenu: true,
    actions: [
      {
        color: 'primary',
        name: 'navigation-actions.download-scss',
        onClick: _ => downloadThemeScssFile()
      }
    ]
  }
];

export class App extends React.Component<IAppProps> {
  componentDidMount() {
    this.props.getSideMenuState();
    this.props.setMenuItems(menus);
  }

  get mainPanelClassName(): string {
    return (
      'container-fluid view-container ' +
      (this.props.sideMenu in [HIDE_MINI, HIDE_MAX] ? 'view-container-hidden-menu' : '') +
      (this.props.sideMenu !== MINI ? '' : 'view-container-mini-menu')
    );
  }

  render() {
    return (
      <Router>
        <div className="app-container">
          <SideMenu logo="content/images/spoon-ui.svg" />
          <div>
            <ErrorBoundary>
              <Header>
                <Notification />
                <AccountMenu />
              </Header>
            </ErrorBoundary>
            <ToastContainer position={toast.POSITION.TOP_RIGHT} className="toastify-container" toastClassName="toastify-toast" />
            <div className={this.mainPanelClassName} id="app-view-container">
              <ErrorBoundary>
                <ActionBanner />
                <AppRoutes />
              </ErrorBoundary>
              <Footer />
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = ({ sideMenuState, locale }: IRootState) => ({
  currentLocale: locale.currentLocale,
  sideMenu: sideMenuState.current
});

const mapDispatchToProps = { getSideMenuState, setSideMenu, setMenuItems };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
