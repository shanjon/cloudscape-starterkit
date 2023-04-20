import * as React from "react";
import SideNavigation from "@cloudscape-design/components/side-navigation";

export default ({sideNavHeader, sideNavPages}) => {
  const [activeHref, setActiveHref] = React.useState(
    "#/page1"
  );
  return (
    <SideNavigation
      activeHref={activeHref}
      header={sideNavHeader}
      onFollow={event => {
        if (!event.detail.external) {
          event.preventDefault();
          setActiveHref(event.detail.href);
        }
      }}
      items={sideNavPages}
    />
  );
}