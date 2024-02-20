import { ReactNode, createContext, useEffect, useState } from "react";
import { Product } from "../declarations/general";

export const ContextApp = createContext<{
  products: Array<Product>;
  cartItems: Array<Product>;
  showCart: boolean;
  handleAddToCart: (product: Product) => void;
  handleShowCart: () => void;
  handleRemoveFromCart: (idProduct: Product["id"]) => void;
}>({
  products: [],
  cartItems: [],
  showCart: false,
  handleAddToCart: (product) => {},
  handleShowCart: () => {},
  handleRemoveFromCart: (idProduct: Product["id"]) => {},
});

interface Props {
  children: ReactNode;
}

export const ContextAppProvider = ({ children }: Props) => {
  const [products, setProducts] = useState<Array<Product>>([]);
  const [cartItems, setCartItems] = useState<Array<Product>>([]);
  const [showCart, setShowCart] = useState<boolean>(false);

  const handleAddToCart = (product: Product) => {
    const existingItem = cartItems.find((item) => item.id === product.id);
    if (existingItem) {
      const updatedCartItems = cartItems.map((item) =>
        item.id === product.id ? { ...item, qty: item.qty + 1 } : item
      );
      setCartItems(updatedCartItems);
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };

  const handleShowCart = () => {
    setShowCart(!showCart);
  };

  const handleRemoveFromCart = (idProduct: Product["id"]) => {
    const newCartItems = cartItems.filter((item) => item.id !== idProduct);
    setCartItems(newCartItems);
  };

  const getProducts = async () => {
    const response = await fetch("https://mockend.up.railway.app/api/products");
    const data = await response.json();
    setProducts(data);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <ContextApp.Provider
      value={{
        handleAddToCart,
        handleShowCart,
        handleRemoveFromCart,
        products,
        cartItems,
        showCart,
      }}
    >
      {children}
    </ContextApp.Provider>
  );
};
