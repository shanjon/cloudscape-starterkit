import * as React from "react";
import ContentLayout from "@cloudscape-design/components/content-layout";
import Container from "@cloudscape-design/components/container";
import Header from "@cloudscape-design/components/header";
import SpaceBetween from "@cloudscape-design/components/space-between";
import Link from "@cloudscape-design/components/link";
import Alert from "@cloudscape-design/components/alert";

export default ({
  pageDescription,
  pageHeader,
  alert,
  containerHeader,
  containerDescription,
  containerContent}) => {
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
      {containerHeader && (
      <Container
        header={
          <Header
            variant="h2"
            description={containerDescription}
          >
            {containerHeader}
          </Header>
        }
      >
        {containerContent}
      </Container>
      )}
    </ContentLayout>
  );
}