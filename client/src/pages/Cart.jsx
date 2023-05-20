import { Add, Remove } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import Announcements from "../components/Announcement/Announcements";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import { mobile } from "../responsive";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 20px;
  ${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
  text-align: center;
  font-size: 40px;
  margin: 20px;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;

const TopTexts = styled.div`
  ${mobile({ display: "none" })}
`;

const TopText = styled.span`
text-decoration: underline;
cursor-pointer;
margin: 0px 10px;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;

const Information = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

const Image = styled.img`
  width: 200px;
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProductName = styled.span``;

const ProductId = styled.span``;

const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;

const ProductSize = styled.span``;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  ${mobile({ paddingLeft: "160px" })}
`;

const ProductQuantity = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
`;

const Quantity = styled.span`
  margin: 10px;
  font-size: 15px;
  ${mobile({ margin: "10px 15px" })}
`;

const Price = styled.span`
  font-size: 25px;
  font-weight: 300;
  ${mobile({ marginBottom: "20px" })}
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
  margin-left: 10px;
  background-color: lightgray;
`;
const hr = styled.hr`
  background-color: gray;
  height: 1px;
  border: none;
`;

const SummaryTitle = styled.h1`
  text-align: center;
  text-decoration: underline;
`;

const Item = styled.div`
  margin: 30px 0px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const ItemText = styled.span``;

const ItemPrice = styled.span``;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: lightgray;
  color: black;
  font-weight: 600;
  font-size: 20px;
  cursor: pointer;

  &:hover {
    background-color: black;
    color: white;
  }
`;

const Cart = () => {
  return (
    <Container>
      <Navbar />
      <Announcements />
      <Wrapper>
        <Title>Shopping Bag</Title>
        <Top>
          <TopButton>Continue Shopping</TopButton>
          <TopTexts>
            <TopText>Your Shopping Bag (2)</TopText>
            <TopText>Your Wishlist (0)</TopText>
          </TopTexts>
          <TopButton type="filled">Checkout Now</TopButton>
        </Top>
        <Bottom>
          <Information>
            <Product>
              <ProductDetail>
                <Image src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A" />
                <Details>
                  <ProductName>
                    <b>Product:</b> MG Running Shoe
                  </ProductName>
                  <ProductId>
                    <b>ID:</b>0123456789
                  </ProductId>
                  <ProductColor color="black" />
                  <ProductSize>
                    <b>Size : </b>10.5
                  </ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductQuantity>
                  <Remove />
                  <Quantity>1</Quantity>
                  <Add />
                </ProductQuantity>
                <Price>$ 60</Price>
              </PriceDetail>
            </Product>

            <hr />

            <Product>
              <ProductDetail>
                <Image src="https://i.pinimg.com/originals/2d/af/f8/2daff8e0823e51dd752704a47d5b795c.png" />
                <Details>
                  <ProductName>
                    <b>Product:</b> MG T-SHIRT
                  </ProductName>
                  <ProductId>
                    <b>ID:</b>1234567890
                  </ProductId>
                  <ProductColor color="gray" />
                  <ProductSize>
                    <b>Size : </b>L
                  </ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductQuantity>
                  <Remove />
                  <Quantity>1</Quantity>
                  <Add />
                </ProductQuantity>
                <Price>$ 20</Price>
              </PriceDetail>
            </Product>
          </Information>
          <Summary>
            <SummaryTitle>Order Summary</SummaryTitle>
            <Item>
              <ItemText>SubTotal</ItemText>
              <ItemPrice>$ 80</ItemPrice>
            </Item>
            <Item>
              <ItemText>Shipping</ItemText>
              <ItemPrice>$ 10</ItemPrice>
            </Item>
            <Item>
              <ItemText>Discount</ItemText>
              <ItemPrice>- $ 10</ItemPrice>
            </Item>
            <hr />
            <Item type="total">
              <ItemText>Total</ItemText>
              <ItemPrice>$ 80</ItemPrice>
            </Item>
            <Button>Checkout Now</Button>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;
