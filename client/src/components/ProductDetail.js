import React, { useState, useEffect } from 'react';
import api from '../services/api';
import { useParams } from "react-router-dom";


const ProductDetail = () => {
  const [product, setProduct] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await api.get(`/products/${id}`);
        setProduct(response.date);
      } catch (error) {
        console.error("商品情報の取得に失敗しました", error);
      }
    };
    fetchProduct();
  }, [id]);

  if (!product) {
    return <div>Lording...</div>
  }

  return (
    <div>
      <h1>商品詳細</h1>
      <p>商品名:{ product.name }</p>
      <p>SKU:{ product.sku }</p>
      <p>在庫数:{ product.stock }</p>
      <p>説明:{ product.explanation }</p>
      <p>価格:{ product.price }</p>
    </div>
  )
};

export default ProductDetail;
