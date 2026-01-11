"use client";

import React from "react";

type Household = {
  household_id: string;
  household_name: string;
  created_at: string;
  created_by: string;
};

//APIエンドポイントにGETリクエストを送信して家計簿データを取得
export default function HouseholdsListForm() {
  const [households, setHouseholds] = React.useState<Household[]>([]); // 家計簿データの状態管理
  const [loading, setLoading] = React.useState(false); // ローディング状態の管理
  const [error, setError] = React.useState<string | null>(null); // エラー状態の管理
  // 選択中の家計簿の状態管理
  const [selectedHousehold, setSelectedHousehold] = React.useState<
    string | null
  >(null);

  // 家計簿リストを取得する非同期関数
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

  //ユーザーの選択集の家計簿の取得
  const fetchSelectedHousehold = async () => {
    setLoading(true);
    // APIエンドポイントにGETリクエストを送信
    try {
      const response = await fetch("/api/active_household");
      const data = await response.json();
      if (response.ok) {
        setSelectedHousehold(data.profile.selected_household);
      } else {
        setError(data.error);
      }
    } catch (error) {
      setError("Error fetching selected household:" + error);
    }
    setLoading(false);
  };

  //ユーザーの選択中の家計簿を変更
  const handleHouseholdSelect = async (householdId: string) => {
    setLoading(true);
    setError(null);
    // APIエンドポイントにPOSTリクエストを送信
    try {
      const response = await fetch("/api/active_household", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          household_id: householdId,
        }),
      });
      const data = await response.json();
      if (response.ok) {
        setSelectedHousehold(householdId);
      } else {
        setError(data.error);
      }
    } catch (error) {
      setError("Error selecting household:" + error);
    }
    setLoading(false);
  };

  // コンポーネントの初回レンダリング時に家計簿データを取得
  React.useEffect(() => {
    fetchHouseholds();
    fetchSelectedHousehold();
  }, []);

  //レンダリング部分
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <table className="min-w-full border-collapse border-4 border-gray-200">
        <thead>
          <tr>
            <th>Household Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {households.map((household) => (
            <tr key={household.household_id}>
              <td>{household.household_name}</td>
              <td>
                {selectedHousehold === household.household_id ? (
                  "選択中"
                ) : (
                  <button
                    onClick={() =>
                      handleHouseholdSelect(household.household_id)
                    }
                    className="w-full rounded bg-blue-600 px-4 py-2 font-semibold text-white hover:bg-blue-700"
                  >
                    選択
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {households.length === 0 && <div>No households found.</div>}
    </div>
  );
}
