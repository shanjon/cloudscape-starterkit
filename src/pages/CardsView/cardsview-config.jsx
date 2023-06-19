import {
  Container,
  Header,
  ColumnLayout,
  Box,
  StatusIndicator
} from "@cloudscape-design/components"

// Page Header
export const pageHeader = "This is the details page header"

// Description
export const pageDescription = "This is the details page description"

// Column Container Header
export const columnContainerHeader = "Container Header"

// Column Container Definitions
export const columnContainerDefinitions = [
  {
    id: "variable",
    header: "Variable name",
    cell: e => e.name,
    sortingField: "name",
    isRowHeader: true
  },
  {
    id: "value",
    header: "Text value",
    cell: e => e.alt,
    sortingField: "alt"
  },
  { id: "type", header: "Type", cell: e => e.type },
  {
    id: "description",
    header: "Description",
    cell: e => e.description
  }
];

// Column Container Items
export const columnContainerItems =[
  {
    name: "Item 1",
    description: "This is the first item"
  },
  {
    name: "Item 2",
    description: "This is the second item"
  },
  {
    name: "Item 3",
    description: "This is the third item"
  },
  {
    name: "Item 4",
    description: "This is the fourth item"
  }
]

// Tabs Content
export const tabsContent = [
  {
    label: "First tab label",
    id: "first",
    content: "First tab content area"
  },
  {
    label: "Second tab label",
    id: "second",
    content: "Second tab content area"
  },
  {
    label: "Third tab label",
    id: "third",
    content: "Third tab content area",
    disabled: true
  }
]

export const breadcrumbGroup = [
  { text: "Homepage", href: "/" },
  { text: "Table View", href: "#/tableview" },
  { text: "Details View", href: "#/detailsview"}
]