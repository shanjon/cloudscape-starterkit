import logo from '../../logo.svg';
import '../../App.css';
import Button from "@cloudscape-design/components/button"
import AppLayout from "@cloudscape-design/components/app-layout";
import TopNavigation from "../../components/TopNavigation/TopNav";
import SideNav from "../../components/SideNavigation/SideNav";
import ContentLayout from "../../components/ContentLayout";
import {
  pageHeader,
  pageDescription,
  alert,
  containerHeader,
  containerDescription,
  containerContent
} from "./homepage-config.jsx";

// Styles
import "@cloudscape-design/global-styles/index.css"

function Homepage() {
  return (
    <div>
    <TopNavigation />
    <AppLayout
      navigation={<SideNav/>}
      content={<ContentLayout
      pageDescription={pageDescription}
      pageHeader={pageHeader}
      alert={alert}
      containerHeader={containerHeader}
      containerDescription={containerDescription}
      containerContent={containerContent}
      />}
    />
    </div>
  );
}

export default Homepage;
