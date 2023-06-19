import logo from '../../logo.svg';
import '../../App.css';
import {
  Button,
  AppLayout
} from "@cloudscape-design/components"
import TopNavigation from "../../components/TopNavigation/TopNav";
import SideNavigation from "../../components/SideNavigation/SideNav";
import ContentLayout from "../../components/ContentLayout";
import {
  pageHeader,
  pageDescription,
  alert,
  containerHeader,
  containerDescription,
  containerContent,
  testContent
} from "./anotherone-config.jsx";
import {
  sideNavHeader,
  sideNavPages
} from "../../components/SideNavigation/sidenav-config";
import { topNavHeader, topNavMenu } from "../../components/TopNavigation/topnav-config"
import Container from "../../components/Containers/Container";

// Styles
import "@cloudscape-design/global-styles/index.css"

function AnotherOne() {
  return (
    <div>
    <TopNavigation
      topNavHeader={topNavHeader}
      topNavMenu={topNavMenu}/>
    <AppLayout
      navigation={<SideNavigation
        sideNavHeader={sideNavHeader}
        sideNavPages={sideNavPages}/>}
      content={
        <div>
        <ContentLayout
          pageDescription={pageDescription}
          pageHeader={pageHeader}
          alert={alert}
          containerHeader={containerHeader}
          containerDescription={containerDescription}
          containerContent={containerContent}
        />
        </div>
      }
    />
    </div>
  );
}

export default AnotherOne;