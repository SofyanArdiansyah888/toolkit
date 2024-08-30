import {Modal} from "antd";
import {InfoCircleOutlined} from "@ant-design/icons"

const { confirm } = Modal;
export function deleteAlert({
    data,
    handleSubmit
                     }: {
    data: any,
    handleSubmit: () => void
}){
    confirm({
        title: 'Kamu yakin ingin menghapus data ini ?',
        icon: <InfoCircleOutlined className={"mr-2 text-destructive"} />,
        content: `${data}`,
        okText: 'Ya',
        okType: 'danger',
        cancelText: 'Tidak',
        onOk: handleSubmit,
    });
}
