import { createClient } from "@/lib/supabase/server";
import HouseholdCreateForm from "./householdCreateForm";
import HouseholdsListForm from "./householdsListForm";

export default async function Households() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  //supabaseのhouseholdsテーブルにデータを追加する

  return (
    <div className="flex items-center justify-center bg-zinc-50 font-sans">
      <div className="flex w-full max-w-3xl flex-col items-center justify-items-start py-4 px-4 bg-white sm:items-start">
        <header className="flex w-full flex-row items-center justify-between bg-yellow-50">
          <h1 className="my-8 text-3xl font-bold">家計簿一覧</h1>
          <div>ログイン中： {user?.email}</div>
        </header>
        {/*家計簿の追加*/}
        <div className="my-8 w-full">
          <HouseholdCreateForm />
        </div>
        <h3>家計簿の一覧表示</h3>
        <div className="my-8 w-full">
          <HouseholdsListForm />
        </div>
      </div>
    </div>
  );
}
