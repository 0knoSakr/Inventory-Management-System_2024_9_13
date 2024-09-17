import React, { useState, useEffect } from "react";
import axios from "axios";
import api from "../services/api"; // api.jsをインポート
// import { useParams } from 'react-router-dom';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // api.jsを通じてAPIリクエストを送る
    api
      .get("/products")
      .then((response) => setProducts(response.data))
      .catch((error) => console.error("商品情報の取得に失敗しました:", error));

      // products.idを使った処理 (例: APIリクエスト)
      axios.get(`/products/${products.id}`)
        .then(response => {
          // データ処理
        })
        .catch(error => {
          console.error(error);
        });
    }, [products.id]); // products.idを依存配列に追加
        console.log(`products.id`)

  return (
    <div>
      <h2>商品リスト</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - 在庫: {product.stock}
            <button
              onClick={() =>
                (window.location.href = `/products/${products.id}`)
              }
            >
              詳細を見る
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};


// const ProductList = () => {
//   const { productId } = useParams(); // URLパラメータからIDを取得
//   console.log(productId); // IDが正しく取れているか確認

//   useEffect(() => {
//     if (productId) {
//       // 正しいIDが取得できたらAPIリクエスト
//       axios.get(`/products/${productId}`)
//         .then(response => {
//           // 成功処理
//         })
//         .catch(error => {
//           console.error(error);
//         });
//     } else {
//       // IDが取得できない場合のエラーハンドリング
//       console.error("Product ID is undefined");
//     }
//   }, [productId]);

//   return <div>Product Page</div>;
// };

export default ProductList;
