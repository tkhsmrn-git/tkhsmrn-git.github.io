"use client";

import { useState } from "react";
import { createClient } from "@/lib/supabase/client";

// ユーザー新規登録フォームコンポーネント
export default function SignUpForm() {
  // フォームデータを取得
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  // サインアップ処理
  const handleSignUp = async () => {
    // パスワードと確認用パスワードが一致するか確認
    if (password !== confirmPassword) {
      setError("パスワードが一致しません");
      return;
    }

    // ローディング状態を設定
    setLoading(true);

    // Supabaseを使用してサインアップ処理を実行
    const { error } = await createClient().auth.signUp({
      email,
      password,
    });

    // エラーハンドリング
    if (error) {
      setError(error.message);
    } else {
      setError(null);
      // サインアップ成功フラグを設定
      setSuccess(true);
    }

    // ローディング状態を解除
    setLoading(false);
  };

  // フォームのレンダリング
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSignUp();
      }}
    >
      <div className="mb-4">
        <label
          htmlFor="email"
          className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300"
        >
          メールアドレス
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full rounded border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none dark:bg-gray-800 dark:border-gray-600 dark:text-white"
          required
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="password"
          className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300"
        >
          パスワード
        </label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full rounded border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none dark:bg-gray-800 dark:border-gray-600 dark:text-white"
          required
        />
      </div>
      <div className="mb-6">
        <label
          htmlFor="confirmPassword"
          className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300"
        >
          パスワード確認
        </label>
        <input
          type="password"
          id="confirmPassword"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="w-full rounded border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none dark:bg-gray-800 dark:border-gray-600 dark:text-white"
          required
        />
      </div>
      <button        
        type="submit"
        className="w-full rounded bg-blue-600 px-4 py-2 font-semibold text-white hover:bg-blue-700"
      >
        新規登録
      </button>
      {error && <p className="mt-4 text-red-600">{error}</p>}
      {loading && <p className="mt-4 text-gray-600">処理中...</p>}
      {success && <p className="mt-4 text-green-600">登録が完了しました。確認メールをチェックしてください。</p>}
    </form>
  );
}
