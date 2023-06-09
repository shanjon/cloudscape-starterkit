import logo from '../../logo.svg';
import '../../App.css';
import {
  Button,
  AppLayout,
  Header,
  BreadcrumbGroup
 } from "@cloudscape-design/components"
import TopNavigation from "../../components/TopNavigation/TopNav";
import SideNavigation from "../../components/SideNavigation/SideNav";
import ContentLayout from "../../components/ContentLayout";
import {
  tableHeader,
  filterPlaceholder,
  columnDefinitions,
  columnDisplay,
  columnItems,
  buttonLabel,
  buttonOptions,
  breadcrumbGroup
} from "./tableview-config.jsx";
import {
  sideNavHeader,
  sideNavPages
} from "../../components/SideNavigation/sidenav-config";
import { topNavHeader, topNavMenu } from "../../components/TopNavigation/topnav-config"
import Table from "../../components/Table/Table";


// Styles
import "@cloudscape-design/global-styles/index.css"

function TableView() {
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
      content={<Table
          variant="full-page"
          tableHeader={tableHeader}
          filterPlaceholder={filterPlaceholder}
          columnDefinitions={columnDefinitions}
          columnDisplay={columnDisplay}
          columnItems={columnItems}
          buttonLabel={buttonLabel}
          buttonOptions={buttonOptions}
      />}
    />
    </div>
  );
}

export default TableView;
