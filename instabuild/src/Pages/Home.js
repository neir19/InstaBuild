import React from "react";
import App from "../containers/App";
import api from "../components/api";
import { Grid, Box } from "@material-ui/core";
class Datos extends React.Component {
  state = {
    data: [],
  };
  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    const response = await api.get("/");

    this.setState({
      data: response.data,
    });
  };
  render() {
    return (
      <Grid container>
        <Grid item xs={12}>
          <Box border={2}>
            <App data={this.state.data} fetchData={this.fetchData} />
          </Box>
        </Grid>
      </Grid>
    );
  }
}
export default Datos;
