import logo from '../../logo.svg';
import '../../App.css';
import {
  Button,
  AppLayout,
  Container,
  Header,
  ColumnLayout,
  Box,
  StatusIndicator
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
  columnContainerHeader
} from "./detailsview-config.jsx";
import {
  sideNavHeader,
  sideNavPages
} from "../../components/SideNavigation/sidenav-config";
import { topNavHeader, topNavMenu } from "../../components/TopNavigation/topnav-config"
import ColumnContainer from "../../components/Containers/ColumnContainer"

// Styles
import "@cloudscape-design/global-styles/index.css"

function DetailsPage() {
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
        />
        <ColumnContainer
        columnContainerHeader={columnContainerHeader}
      />
      </div>
      }
    />
    </div>
  );
}

export default DetailsPage;
