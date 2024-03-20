import "./StudentAccounts.css";
import fakeData from "../SAMPLE_DATA.json";

function StudentAccounts() {
  const data = React.useMemo(() => fakeData, []);
  const columns = React.useMemo(
    () => [
      {
        Header: "Last Name",
        accessor: "last_name",
      },
      {
        Header: "First Name",
        accessor: "first_name",
      },
      {
        Header: "M.I.",
        accessor: "middle_name",
      },
      {
        Header: "Student ID",
        accessor: "student_id",
      },
      {
        Header: "Password",
        accessor: "password",
      },
      {
        Header: "Email Address",
        accessor: "email_address",
      },
      {
        Header: "Contact #",
        accessor: "contact_#",
      },
      {
        Header: "...",
        accessor: "...",
      },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  return (
    <div className="App">
      <div className="container">
        <table {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps()}>
                    {column.render("Header")}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => (
                    <td {...cell.getCellProps()}> {cell.render("Cell")} </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default StudentAccounts;
