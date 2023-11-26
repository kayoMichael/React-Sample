interface Properties {
  cartItems: string[];
  onClear: () => void;
}

const Cart = ({ cartItems, onClear }: Properties) => {
  return (
    <>
      <div>Cart</div>
      <ul>
        {cartItems.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <button type="button" onClick={onClear} className="btn btn-primary">
        Primary
      </button>
    </>
  );
};

export default Cart;
