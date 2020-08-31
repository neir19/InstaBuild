import React from "react";
import MaterialTable from "material-table";
import api from "../components/api";
export default function App(props) {
  const [state] = React.useState({
    columns: [
      { title: "Apartament_number", field: "apartment_number" },
      { title: "mt2", field: "mt2" },
      { title: "price_mt2", field: "price_mt2" },
    ],
  });
  return (
    <MaterialTable
      title="InstaBuild"
      columns={state.columns}
      data={props.data}
      options={{
        search: false,
        paging: false,
        headerStyle: {
          backgroundColor: "#01579b",
          color: "#FFF",
        },
        rowStyle: {
          backgroundColor: "#EEE",
        },
        actionsColumnIndex: -1,
        sorting: true,
      }}
      editable={{
        onRowAdd: (newData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              //A la hora de hacer la de hacer las peticiones  post, uptade  y delete  y que automaticamente se
              // vean en la tabla toca hacer un then y dentro pedir nuevamente el get  para  así estar seguros
              //que la petición terminó antes de traer los datos  ya que son procesos asincronos
              api.post("/", newData).then(() => {
                props.fetchData();
              });
              resolve();
            }, 600);
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              api.put(`/${oldData.id}`, newData).then(() => {
                props.fetchData();
              });

              resolve();
            }, 600);
          }),
      }}
      actions={[
        {
          icon: "delete",
          tooltip: "eliminar",
          onClick: (event, rowData) => {
            api.delete(`/${rowData.id}`).then(() => {
              props.fetchData();
            });
          },
        },
      ]}
    />
  );
}
