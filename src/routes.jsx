import{Routes, Route} from 'react-router-dom';
import ProductList from './containers/ProductList';
import Checkout from './containers/Checkout';
import Demo from './Demo';
import PrivateRoute from './components/PrivateRoute';

function AppRouter(){
    return (
        <Routes>
            <Route path="/" element={<Demo />}/>
            <Route path="/products" element={<ProductList />}/>
            <Route path="/checkout" element={<Checkout />}
    />
        </Routes>
    )
}

export default AppRouter;