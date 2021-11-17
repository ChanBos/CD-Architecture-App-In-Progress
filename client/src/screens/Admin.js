// Imported React library and hooks.
import React from "react";
// Importing tabs from Ant Design.
import { Tabs } from "antd";
// Imported components from React Bootstrap.
import { Container, Row } from "react-bootstrap";
// Imported components.
import AdminRes from "../components/AdminRes";
import AdminComm from "../components/AdminComm";
import AddRes from "../components/AddRes";
import AddComm from "../components/AddComm";
import Users from "../components/Users";
// Constructing the tab pane froms tabs from Ant Design.
const { TabPane } = Tabs;

/**
 * Created an Admin page that displays all of the following components: Bookings, Rooms, AddRooms, Users.
 * All these components are shown via tabs and a tabpane.
 */

const Admin = () => {
  return (
    <Container>
      {/* <div className="ml-3"> */}
      <Row>
        <header>
          <h1>ADMIN</h1>
          <h6 className="subheading">&#x2f;&#x2f; INFORMATION MANAGER</h6>
        </header>
      </Row>
      <Tabs defaultActiveKey="1">
        <TabPane tab="Projects" key="1">
          <Row>
            <AdminRes />
            <AdminComm />
          </Row>
        </TabPane>
        <TabPane tab="Add Project" key="2">
          <AddRes />
          <AddComm />
        </TabPane>
        <TabPane tab="Users" key="3">
          <Users />
        </TabPane>
      </Tabs>
      {/* </div> */}
    </Container>
  );
};

// Exporting Admin.js to App.js.
export default Admin;
