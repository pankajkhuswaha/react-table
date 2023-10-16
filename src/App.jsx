import Jhevbutton from './components/Buttons/JhevButton';
import Datatable from './components/DataTable/Datable';

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
  const data1 =[]

  return (
    <div
      style={{
        display: "flex",
        gap: "10px",
        flexDirection: "column",
        padding: "10px",
      }}
    >
      <Datatable data={data} cols={columns} pagination/>
      <Jhevbutton label={"add to cart"} />
    </div>
  );
}

export default App;
