import { connect } from "react-redux";
import Sample from "../components/Sample";
import { getPost, getUsers } from '../modules/sample';

const { useEffect } = React;
const SampleContainer = ({
    getPost,
    getUsers,
    post,
    users,
    loadingPost,
    loadingUsers
}) => {
    //클래스 컴포넌트였다면 componentDidMount
    useEffect(() => {
        getPost(1);
        getUsers(1);
    },[getPost,getUsers]);;
    return (
        <Sample 
        post={post}
        users={users}
        loadingPost={loadingPost}
        loadingUsers={loadingUsers}
        />
    )
}