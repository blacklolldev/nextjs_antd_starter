import MemberLayout from "../../Containers/Member";
import {NextPage} from "next";

const MemberPage = () => {
    return(
        <>
            MemberPage
        </>
    )
}

MemberPage.getLayout = function getLayout(page: NextPage) {
    return (
        <MemberLayout>
            {page}
        </MemberLayout>
    )
}

export default MemberPage
