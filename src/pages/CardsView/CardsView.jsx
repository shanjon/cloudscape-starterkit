import logo from '../../logo.svg';
import '../../App.css';
import {
  Button,
  AppLayout,
  Container,
  Header,
  ColumnLayout,
  Box,
  StatusIndicator,
  SpaceBetween,
  Tabs,
  BreadcrumbGroup
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
  breadcrumbGroup,
  cardItems,
  cardDefinition,
  filteringPlaceholder
} from "./cardsview-config.jsx";
import {
  sideNavHeader,
  sideNavPages
} from "../../components/SideNavigation/sidenav-config";
import { topNavHeader, topNavMenu } from "../../components/TopNavigation/topnav-config"
import Cards from "../../components/Cards/Cards"

// Styles
import "@cloudscape-design/global-styles/index.css"

function CardsView() {
  return (
    <div>
    <TopNavigation
      topNavHeader={topNavHeader}
      topNavMenu={topNavMenu}/>
    <AppLayout
      breadcrumbs={<BreadcrumbGroup
        items={breadcrumbGroup} />}
      navigation={<SideNavigation
        sideNavHeader={sideNavHeader}
        sideNavPages={sideNavPages}/>}
      content={
      <div>
      <SpaceBetween size="l">
      <ContentLayout
        pageDescription={pageDescription}
        pageHeader={pageHeader}
        shouldRenderContainer={false}
        />
        <Cards
        containerHeader={containerHeader}
        cardItems={cardItems}
        cardDefinition={cardDefinition}
        filteringPlaceholder={filteringPlaceholder}
      />
      </SpaceBetween>
      </div>
      }
    />
    </div>
  );
}

export default CardsView;
