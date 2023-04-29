// Column Definitions
export const columnDefinitions = [
    {
      id: "variable",
      header: "Variable name",
      cell: e => e.name,
      sortingField: "name"
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


  // Page Header
export const pageHeader = "Table View"

// Info - leave out for now


// Description
export const pageDescription = "This is the page description"

// Alert
export const alert = "This is the alert"

// Container Header
export const containerHeader = "This is the container header"

// Container content
export const containerDescription = "This is the container description"

// Container description
export const containerContent = "This is the container content"