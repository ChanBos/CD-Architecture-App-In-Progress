// Imported React library and hooks.
import React from "react";
// Importing tabs from Ant Design.
import { Tabs } from "antd";
import "antd/dist/antd.css";
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
            <AddRes />
            <AdminComm />
            <AddComm />
          </Row>
        </TabPane>
        <TabPane tab="Users" key="2">
          <Users />
        </TabPane>
      </Tabs>
    </Container>
  );
};

// Exporting Admin.js to App.js.
export default Admin;
