const Cart = ({ cart }) => {

    if (!cart || cart.length === 0) {
      return <div className="border w-72 p-4 mt-2 rounded-lg shadow-lg">You don't have any orders for now.</div>;
    }
  
    return (
      <div className="border w-72 p-4 mt-2 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">My Orders</h2>
        <ul>
          {cart.map((item, index) => (
            <li key={index} className="mt-2 flex justify-between">
              <span>{item.name}</span>
              <span>{item.price} €</span>
            </li>
          ))}
        </ul>
        <hr className="my-4" />
        <p className="font-semibold text-xl">Total: {cart.reduce((sum, item) => sum + item.price, 0)} €</p>
        <button className="bg-red-500 text-white py-2 rounded hover:bg-red-800 w-2/3 mt-4 text-center">
          Clear Orders
        </button>
        <button className="bg-red-500 text-white py-2 rounded hover:bg-red-800 w-2/3 mt-4 text-center">
          Buy
        </button>
      </div>
    );
  };
  
  export default Cart;
  