import {Menu, MenuProps, Modal} from "antd";
import {useNavigate} from "react-router";
import {useState} from "react";
import {useAuth} from "@sofyanardiansyah888/core"
import {InfoCircleOutlined} from "@ant-design/icons"


type MenuItem = Required<MenuProps>['items'][number];
const {confirm} = Modal;

export function Sidebar({items}:{items: MenuItem[]}) {
    const {logout} = useAuth()
    const navigate = useNavigate()
    const [selectedKeys, setSelectedKeys] = useState(['beranda'])
    const onClick: MenuProps['onClick'] = (e) => {
        if (e.key === 'logout') {
            confirm({
                title: 'Kamu yakin ingin keluar ?',
                icon: <InfoCircleOutlined className={"mr-2 text-destructive"} />,
                okText: 'Ya',
                okType: 'danger',
                cancelText: 'Tidak',
                onOk: logout,
            });
            return;
        }
        setSelectedKeys([e.key])
        navigate(`/${e.key}`)
    };

    return (
        <Menu
            onClick={onClick}
            defaultSelectedKeys={['beranda']}
            selectedKeys={selectedKeys}
            defaultOpenKeys={['sub1']}
            mode="inline"
            items={items}
            theme={"dark"}
            className={"min-h-screen !px-1"}
        />
    );
}




