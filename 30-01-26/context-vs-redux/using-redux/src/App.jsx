import { Provider } from "react-redux"
import { store } from "./app/store"
import ProductList from "./components/productList/ProductList";
import Notifications from "./components/notification/Notifications";

const App = () => {
  const products = [
    { id: 1, name: 'Laptop', price: 999 },
    { id: 2, name: 'Phone', price: 599 },
    { id: 3, name: 'Tablet', price: 399 },
  ];
  return (
    <Provider store={store}>
      <ProductList products={products} />
      <Notifications />
    </Provider>
  );
}

export default App
