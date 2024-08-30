import {Outlet} from "react-router";


export default function DashboardLayout({sidebar}:{sidebar: React.ReactNode}) {
    return (
        <div className="hidden md:block">
            <div className="bg-background grid lg:grid-cols-6">
                {/*SIDEBAR*/}
                {sidebar}

                {/*CONTENT*/}
                <div className="col-span-4 lg:col-span-5 ">
                    <div className="min-h-screen py-6 px-10">
                        <Outlet />
                    </div>
                </div>
            </div>
        </div>
    );
}