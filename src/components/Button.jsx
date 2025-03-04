import styled from 'styled-components';
import { useCart } from '../context/CartContext';
const Button = ({children ,selectedSize,quantity,product,onClose}) => {
  const { addToCart } = useCart(); // Get cart context
  const handleAddToCart = () => {
    if (!selectedSize) {
      alert("Please select a size!");
      return;
    }

    addToCart(product, selectedSize, quantity); // Add to cart
    onClose(); // Close the modal
  };

  return (
    <StyledWrapper>
      <button onClick={handleAddToCart} className="comic-button">{children}</button>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .comic-button {
    display: flex;
    margin-top: 1rem;
    justify-content: center;
    align-items: center;
    padding: 10px 20px;
    font-size: 24px;
    font-weight: bold;
    text-align: center;
    text-decoration: none;
    color: #fff;
    background-color: #ff5252;
    border: 2px solid #000;
    border-radius: 10px;
    box-shadow: 5px 5px 0px #000;
    transition: all 0.3s ease;
    cursor: pointer;
  }

  .comic-button:hover {
    background-color: #fff;
    color: #ff5252;
    border: 2px solid #ff5252;
    box-shadow: 5px 5px 0px #ff5252;
  }
    .comic-button span{
    margin-left: 10px;}

  .comic-button:active {
    background-color: #fcf414;
    box-shadow: none;
    transform: translateY(4px);
  }`;

export default Button;
