
// SignInFormコンポーネント
export default function SignInForm() {
  return (
    <form>
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
    </form>
  );
}
