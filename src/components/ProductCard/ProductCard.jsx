import React from "react";
import $ from "styled-components";

const $Product = $.div`
    background-color:white;
    box-shadow: var(--shadow);
    width: 224px;
`;
const $Price = $.span`
    font-size: 22px;
    margin-top: 5px;
`;
const $ProductInfo = $.div`
    padding:  20px;
    border-top: 1px solid rgba(51,51,51,.1);
    border-radius: 0px 0px var(--radius) var(--radius);
`;
const $Cuotas = $.span`
    font-size: 13px;
    margin-top: 5px;
    display:block;
`;
const $Shipping = $.span`
    color: #00a650;
    margin-top: 5px;
    font-size: 14px;
    display:block;
`;
const $Img = $.img`
    width: 100%;
`;
const $ImageWrapper = $.div`
  border-radius: var(--radius) var(--radius)  0px 0px ;
`
const ProductCard = () => {
  return (
    <$Product className="product">
      <$ImageWrapper className="product__image">
        <$Img src="https://http2.mlstatic.com/D_Q_NP_834027-MLA45450444551_042021-AB.webp" />
      </$ImageWrapper>
      <$ProductInfo className="product__info">
        <$Price className="product__price">$160.000</$Price>
        <$Cuotas className="product__cuotas">6x $18.300,33 sin interés</$Cuotas>
        <$Shipping className="product__shipping">Envío gratis</$Shipping>
        <p className="product__description">Ps5 Con Lectora Nueva Y Sellada</p>
      </$ProductInfo>
    </$Product>
  );
};

export default ProductCard;