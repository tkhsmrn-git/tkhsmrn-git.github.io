"use client";

import React from "react";

type Household = {
  household_id: number;
  household_name: string;
  created_at: string;
  created_by: string;
};

//APIエンドポイントにGETリクエストを送信して家計簿データを取得
export default function HouseholdsListForm() {
  const [households, setHouseholds] = React.useState<Household[]>([]); // 家計簿データの状態管理
  const [loading, setLoading] = React.useState(false); // ローディング状態の管理
  const [error, setError] = React.useState<string | null>(null); // エラー状態の管理

  // 家計簿データを取得する非同期関数
  const fetchHouseholds = async () => {
    setLoading(true);
    // APIエンドポイントにGETリクエストを送信
    try {
      const response = await fetch("/api/households");
      const data = await response.json();
      if (response.ok) {
        setHouseholds(data.households);
      } else {
        setError(data.error);
      }
    } catch (error) {
      setError("Error fetching households:" + error);
    }
    setLoading(false);
  };

  // コンポーネントの初回レンダリング時に家計簿データを取得
  React.useEffect(() => {
    fetchHouseholds();
  }, []);

  //レンダリング部分
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  
  return (
    <div>
      <h2>家計簿一覧</h2>
      <ul>
        {households.map((household) => (
          <li key={household.household_id}>
            {household.household_name} (ID: {household.household_id})
          </li>
        ))}
      </ul>

      <table className="min-w-full border-collapse border-4 border-gray-200">
        <thead>
          <tr>
            <th>ID</th>
            <th>Household Name</th>
            <th>Created At</th>
            <th>Created By</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {households.map((household) => (
            <tr key={household.household_id}>
              <td>{household.household_id}</td>
              <td>{household.household_name}</td>
              <td>{household.created_at}</td>
              <td>{household.created_by}</td>
              <td><button className="w-full rounded bg-blue-600 px-4 py-2 font-semibold text-white hover:bg-blue-700">選択</button></td>
            </tr>
          ))}
        </tbody>
      </table>

      {households.length === 0 && <div>No households found.</div>}
    </div>
  );
}
