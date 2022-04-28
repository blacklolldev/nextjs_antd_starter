import AdminLayout from "../../Containers/Admin";
import {NextPage} from "next";

const AdminPage = () => {
    return(
        <>
            AdminPage
        </>
    )
}

AdminPage.getLayout = function getLayout(page: NextPage) {
    return (
        <AdminLayout>
            {page}
        </AdminLayout>
    )
}


export default AdminPage
