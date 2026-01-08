"use client";

import React from "react";

type Household = {
  id: number;
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

  React.useEffect(() => {
    fetchHouseholds();
  }, []);
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  return (
    <div>
      <h2>家計簿一覧</h2>
      <ul>
        {households.map((household) => (
          <li key={household.id}>
            {household.household_name} (ID: {household.id})
          </li>
        ))}
      </ul>
      {households.length === 0 && <div>No households found.</div>}
    </div>
  );
}
