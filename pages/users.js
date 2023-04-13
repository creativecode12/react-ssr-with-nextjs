import React, { useEffect } from "react";
import { connect } from 'react-redux'
import ContainerBlock from "../components/ContainerBlock";
import { fetchUserListSSR, fetchUserListRedux } from "../services/users";
import DataViewer from '../components/DataViewer';


const Users = (props) => {

    useEffect(() => {
        // props.fetchData();
    }, [])

    return (
        <ContainerBlock
            title="Manu Arora - Developer, Writer, Creator"
            description="This is a template built specifically for my blog - Creating a developer portfolio that gets you a job."
        >
            <h1>hello users {props?.data}</h1>
            <DataViewer />
        </ContainerBlock>
    );
}

export const getServerSideProps = async () => {
    const userlist = await fetchUserListSSR();
    return {
        props: {
            userlist,
        },
    };
};


const mapStateToProps = (state) => ({
    //data: state.counter
})

const mapDispatchToProps = (dispatch) => ({
    fetchData: () => dispatch(fetchUserListRedux())
})

export default connect(mapStateToProps, mapDispatchToProps)(Users)
