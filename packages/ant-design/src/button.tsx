import {Button} from "antd";
import {MouseEventHandler} from "react";
import {SizeType} from "antd/es/config-provider/SizeContext";
import {FileExcelOutlined, FilterOutlined,PlusCircleOutlined} from "@ant-design/icons";

interface IButton {
    handleClick?: MouseEventHandler<HTMLElement> | undefined
    size?: SizeType,
    loading?: boolean,
    title?: string
}

export function TambahButton({
                                 handleClick,
                                 size = "middle"
                             }: IButton) {
    return <Button
        icon={<PlusCircleOutlined/>}
        type={"primary"}
        size={size}
        onClick={handleClick}
    >
        Tambah
    </Button>
}

export function ExcelButton({
                                handleClick,
                                size = "middle",
                                title = ""
                            }: IButton) {
    return <Button
        style={{
            backgroundColor: "#15803d",
            borderColor: "#15803d",
            color: "white"
        }}
        icon={<FileExcelOutlined/>}
        type={"default"}
        size={size}
        onClick={handleClick}
    >
        {title}
    </Button>
}

export function FilterButton({handleClick}: IButton) {
    return <Button
        icon={<FilterOutlined/>}
        onClick={handleClick}>
        Filter
    </Button>
}

export function PrintButton({handleClick}: IButton) {
    return <Button
        icon={<FileExcelOutlined/>}
        onClick={handleClick}
        className={"!bg-green-800 !border-green-800 !text-white"}
    >
        Excel
    </Button>
}

export function SubmitButton({handleClick, loading = false, title = "Submit"}: IButton) {
    return <Button
        // icon={<SaveOutlined/>}
        onClick={handleClick}
        loading={loading}
        type={"primary"}
        htmlType={"submit"}
        // className={"!bg-green-800 !border-green-800 !text-white"}
    >
        {title}
    </Button>
}