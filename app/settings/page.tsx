import Header from "../Header";
import UserProfileSettingForm from "./UserProfileSettingForm";

//ユーザープロファイル設定ページ
export default async function UserSettings() {
  return (
    <div className="flex items-center justify-center bg-zinc-50 font-sans">
      <div className="flex w-full max-w-3xl flex-col items-center justify-items-start bg-white sm:items-start">
        <Header />
        <main className="flex w-full flex-col items-center justify-items-start py-4 px-4 bg-white sm:items-start">
          <h1>ユーザープロファイル設定ページ</h1>
          <UserProfileSettingForm />
        </main>
      </div>
    </div>
  );
}
