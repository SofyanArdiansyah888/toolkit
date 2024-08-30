import {Button, Form, Upload} from "antd";
import {UploadOutlined} from "@ant-design/icons"


interface IFormUpload {
    name?: string
    label?: string
}

export default function FormUpload({name, label = "Upload"}: IFormUpload) {
    return <Form.Item
        name={name}
        label={label}
        valuePropName="fileList"
        className={"!capitalize"}
    >
        <Upload name="logo" action="/upload.do" listType="picture">
            <Button icon={<UploadOutlined className={"w-3 h-3"}/>}>Pilih Foto</Button>
        </Upload>
    </Form.Item>
}
