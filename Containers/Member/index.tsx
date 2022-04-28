import React from 'react'
import {Col, Row} from "antd";
import MenuComponent from "../../Components/Menu";

const MemberLayout = ({children}) => {
    return (
        <>
            <MenuComponent/>
            <h1>Member Layout</h1>
            <Row>
                <Col span={24}>
                    {children}
                </Col>
            </Row>
        </>
    )
}
export default MemberLayout
