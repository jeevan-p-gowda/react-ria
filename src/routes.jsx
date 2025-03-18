import{Routes, Route} from 'react-router-dom';
import ProductList from './containers/ProductList';
import Checkout from './containers/Checkout';
import Demo from './Demo';
import PrivateRoute from './components/PrivateRoute';
import ProductDetails from './containers/ProductDetails';
import ErrorPage from './containers/ErrorPage';

function AppRouter(){
    return (
        <Routes>
            <Route path="/" element={<Demo />}/>
            <Route path="/products" element={<ProductList />}/>
            <Route path="/details/:pid" element={<ProductDetails />}/>
            <Route path="/checkout" 
            element={<PrivateRoute><Checkout /></PrivateRoute>}/>
            <Route path="*" element={<ErrorPage/>}/>
        </Routes>
    )
}

export default AppRouter;