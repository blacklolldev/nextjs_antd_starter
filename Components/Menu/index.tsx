import {Menu} from "antd";
import {DesktopOutlined} from "@ant-design/icons";
import Link from 'next/link'

const MenuComponent = () => {
    return (
        <>
            <Menu mode="horizontal" defaultSelectedKeys={['mail']}>
                <Menu.Item key="a" icon={<DesktopOutlined/>}>
                    <Link href="/member">
                        Member Page
                    </Link>
                </Menu.Item>
                <Menu.Item key="b" icon={<DesktopOutlined/>}>
                    <Link href="/admin">
                        Admin Page
                    </Link>
                </Menu.Item>
            </Menu>
        </>

    )
}

export default MenuComponent
