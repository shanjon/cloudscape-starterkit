import logo from '../../logo.svg';
import '../../App.css';
import Button from "@cloudscape-design/components/button"
import AppLayout from "@cloudscape-design/components/app-layout";
import TopNavigation from "../../components/TopNavigation/TopNav";
import SideNavigation from "../../components/SideNavigation/SideNav";
import ContentLayout from "../../components/ContentLayout";
import {
  pageHeader,
  pageDescription,
  alert,
  containerHeader,
  containerDescription,
  containerContent
} from "./detailsview-config.jsx";
import {
  sideNavHeader,
  sideNavPages
} from "../../components/SideNavigation/sidenav-config";
import { topNavHeader, topNavMenu } from "../../components/TopNavigation/topnav-config"
import Table from "../../components/Table/Table";



// Styles
import "@cloudscape-design/global-styles/index.css"

function DetailsView() {
  return (
    <div>
    <TopNavigation
      topNavHeader={topNavHeader}
      topNavMenu={topNavMenu}/>
    <AppLayout
      navigation={<SideNavigation
        sideNavHeader={sideNavHeader}
        sideNavPages={sideNavPages}/>}
      content={<ContentLayout
        pageDescription={pageDescription}
        pageHeader={pageHeader}
        containerHeader={containerHeader}
        containerDescription={containerDescription}
        containerContent={<Table />}
      />}
    />
    </div>
  );
}

export default DetailsView;
