# UseReactTable

UseReactTable is a React package that provides fast, flexible, and simple data tables for displaying tabular data. It supports features such as sorting, filtering, and pagination and is built on the power of [React.js](https://reactjs.org/).

## Features

- **Single Component Integration:** Easily integrate a feature-rich data table with just one component.
- **Customizable:** Tailor the appearance and behavior of the table to meet your specific requirements.
- **Pagination, Sorting, Search, Filtering:** Efficiently manage and display data with built-in features.
- **Resizable Columns:** Resize columns to optimize the viewing experience.
- **Selection:** Support row selection for actions like deletion or further processing.
- **Responsive Design:** Ensure a seamless experience across different screen sizes.

## Installation

### Using NPM

To use UseReactTable in your React project, install it via npm:

```bash
npm install usereactable
```
There might be hidden bugs lurking around any corner. I'll try to
tag any releases with breaking changes.

**Note**: Feel free to submit new issues [here](https://github.com/pankajkhuswaha/react-table/issues).

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)

## ## Usage/Examples
The simplest example:

```jsx
import Datatable from "usereactable";

const App = () => {
   const columns = [
    {
      headerName: "Name",
      field: "name",
      width: 140,
    },
    {
      headerName: "Email",
      field: "email",
      width: 200,
    },
  ];

  const data = [
    { name: "John Doe", email: "john@example.com" },
    { name: "Jane Doe", email: "jane@example.com" },
    { name: "Alice Smith", email: "alice@example.com" },
    { name: "Bob Johnson", email: "bob@example.com" },
    { name: "Eva Williams", email: "eva@example.com" },
    { name: "Charlie Brown", email: "charlie@example.com" },
    { name: "Linda Davis", email: "linda@example.com" },
    { name: "Michael Miller", email: "michael@example.com" },
    { name: "Olivia Moore", email: "olivia@example.com" },
    { name: "David Wilson", email: "david@example.com" },
  ];
  return (
    <>
        <Datatable
          cols={cols}
          data={data}
          pagination
          title={"Customer list"}
          actionButtons
        />
    </>
  );
};

export default App;
```

While pretty basic, this example demonstrates a couple things:

- Import Datatable from usereacttable
- Cols in the column that is gone be shown in react table
- data is rows data which is gone be show in table
- pagination keyword enable pagination to your table 
-React DOM attributes such as className will pass-through to the rendered `<table>`

## Screenshots

![App Screenshot](https://i.ibb.co/QHwng4t/ezgif-com-crop-1.gif)

## Props

| Name | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| title | string | yes |null | Heading of the table |
| subTitle | string | yes |null | Sub-Heading of the table |
| cols | array | yes |null | List of cols which gone be see in the table |
| data | array | Yes| [] | array of objects |
| pagination | boolean| no | false | Please view option section |
| actionButton | boolean\| Object | no |false | Displayed action buttons in the table |
| isSearchable | boolean | no | true| Enables / disable the search option in table |