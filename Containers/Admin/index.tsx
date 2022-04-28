import React from 'react'
import {Col, Row} from "antd";
import MenuComponent from "../../Components/Menu";


const AdminLayout = ({children}) => {
    return (
        <>
            <MenuComponent/>
            <h1>Admin Layout</h1>
            <Row>
                <Col span={24}>
                    {children}
                </Col>
            </Row>
        </>
    )
}
export default AdminLayout
