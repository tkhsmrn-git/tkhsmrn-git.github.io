"use client";

import React from "react";
import { useState } from "react";

//ユーザープロファイル設定フォーム
export default function UserProfileSettingForm() {
  const [loading, setLoading] = React.useState(false); // ローディング状態の管理
  const [error, setError] = React.useState<string | null>(null); // エラー状態の管理
  const [userName, setUserName] = useState(""); // ユーザー名の状態管理

  //現在のプロファイルを取得
  const fetchUserProfile = async () => {
    setLoading(true);
    // APIエンドポイントにGETリクエストを送信
    try {
      const response = await fetch("/api/users_setting");
      const data = await response.json();
      if (response.ok) {
        setUserName(data.profile.user_name);
      } else {
        setError(data.error);
      }
    } catch (error) {
      setError("Error fetching user profile:" + error);
    }
    setLoading(false);
  };

  // コンポーネントの初回レンダリング時にユーザープロファイルを取得
  React.useEffect(() => {
    fetchUserProfile();
  }, []);

  //ユーザープロファイルの変更
  const handleProfileUpdate = async (newName: string) => {
    setLoading(true);
    setError(null);
    // APIエンドポイントにGETリクエストを送信
    try {
      const response = await fetch("/api/users_setting", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user_name: newName,
        }),
      });
      const data = await response.json();
      if (response.ok) {
        setUserName(data.userSetting.user_name);
      } else {
        setError(data.error);
      }
    } catch (error) {
      setError("Error updating user profile:" + error);
    }
    setLoading(false);
  };

  //レンダリング部分
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h3>ユーザープロファイル設定</h3>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleProfileUpdate(userName);
        }}
      >
        <label className="text-xl font-semibold w-2xl">ユーザーの表示名:</label>
        <div className="flex flex-row gap-4 items-center">
          <input
            type="text"
            placeholder="ユーザー名"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          <button type="submit" className="w-50">
            名前の更新
          </button>
        </div>
      </form>
    </div>
  );
}
