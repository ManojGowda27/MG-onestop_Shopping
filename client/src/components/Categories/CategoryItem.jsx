import { Link } from "react-router-dom";
import styled from "styled-components";
import { mobile } from "../../responsive";

const Container = styled.div`
  flex: 1;
  margin: 5px;
  height: 60vh;
  position: relative;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;

  ${mobile({ height: "30vh" })}
`;
const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Title = styled.h1`
  color: white;
  margin-bottom: 20px;
`;
const Button = styled.button`
  border: none;
  padding: 10px;
  opacity: 0.5;
  cursor: pointer;
  font-weight: 500;
`;

export default function CategoryItem({ item }) {
  return (
    <Container>
      <Link to={`/products/${item.cat}`}>
      <Image src={item.img} />
      <Info>
        <Title>{item.title}</Title>
        <Button>Shop Now</Button>
      </Info>
      </Link>
    </Container>
  );
}
