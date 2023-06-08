import * as React from "react";
import ContentLayout from "@cloudscape-design/components/content-layout";
import Header from "@cloudscape-design/components/header";
import SpaceBetween from "@cloudscape-design/components/space-between";
import Link from "@cloudscape-design/components/link";
import Alert from "@cloudscape-design/components/alert";
import Container from "./Containers/Container";

export default ({
  pageDescription,
  pageHeader,
  alert}) => {
  return (
    <ContentLayout
      header={
        <SpaceBetween size="m">
          <Header
            variant="h1"
            description={pageDescription}
          >
            {pageHeader}
          </Header>

          {alert && <Alert header={alert} />}
        </SpaceBetween>
      }
    >
    </ContentLayout>
  );
}