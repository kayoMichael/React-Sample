interface Properties {
  cartItemsCount: number;
}
const NavBar = ({ cartItemsCount }: Properties) => {
  return <div>NavBar: {cartItemsCount}</div>;
};

export default NavBar;
