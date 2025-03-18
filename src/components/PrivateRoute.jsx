

function PrivateRoute(props){
    const isAuthenticated = true;
    if (isAuthenticated) {
        return props.children;
    }
    return <Navigate to="/login" />;

}

export default PrivateRoute;