import {
  ContentLayout,
  Container,
  Header,
  SpaceBetween,
  Link,
  Button,
  Alert
} from "@cloudscape-design/components";

export default ({
  pageDescription,
  pageHeader,
  alert,
  containerHeader,
  containerDescription,
  containerContent
}) => {
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
    </ContentLayout>
  );
}