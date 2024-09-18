import React, { useState, useEffect } from 'react';
import api from '../services/api';
import { useParams } from "react-router-dom";


const ProductDetail = () => {
  const [product, setProduct] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await api.get(`http://localhost:5000/api/products/${id}`);
        setProduct(response.data);
      } catch (error) {
        console.error("商品情報の取得に失敗しました", error);
      }
    };
    fetchProduct();
  }, [id]);
  console.log(product)

  if (!product) {
    return <div>Lording...</div>
  }

  return (
    <div>
      <h1>商品詳細</h1>
      <p>商品名:{ product[0].name }</p>
      <p>SKU:{ product[0].sku }</p>
      <p>在庫数:{ product[0].stock }</p>
      <p>説明:{ product[0].explanation }</p>
      <p>価格:{ product[0].price }</p>
    </div>
  )
};

export default ProductDetail;
