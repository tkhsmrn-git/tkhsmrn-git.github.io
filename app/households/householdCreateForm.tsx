"use client"; // クライアントコンポーネントとして動作することを指定

import React from "react";
import { useState } from "react";

// 家計簿作成フォームコンポーネント
export default function HouseholdCreateForm() {
  const [householdName, setHouseholdName] = useState(""); // 家計簿名の状態管理

  // フォームの送信ハンドラー
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // デフォルトのフォーム送信を防止
    try {
      // APIエンドポイントにPOSTリクエストを送信して家計簿を作成
      const response = await fetch("/api/households", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ householdName }),
      });
      // レスポンスをJSONとして解析
      const data = await response.json();
      if (response.ok) {  // レスポンスが正常な場合
        console.log("Household created:", data.household);
      } else {  // エラーが発生した場合
        console.error("Error creating household:", data.error);
      }
    } catch (error) { // ネットワークエラーなどの例外処理
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div>
      <h2>家計簿作成フォーム</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="householdName">家計簿名:</label>
        <input
          type="text"  // 入力タイプをテキストに設定
          id="householdName"  // フォーム要素のID属性
          name="householdName"  // フォームデータの名前属性
          value={householdName} // 入力値を状態にバインド
          onChange={(e) => setHouseholdName(e.target.value)}  // 入力値の変更を状態に反映
          required  // 入力必須属性
        />
        <button type="submit">作成</button>
      </form>
    </div>
  );
}
