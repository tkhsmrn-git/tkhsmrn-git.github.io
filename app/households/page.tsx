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

    <div className="bg-white rounded-lg shadow p-4">
        <div>
          <h1>householdsです ログイン中アカウントID：{user?.id}</h1>
          <div>Email: {user?.email}</div>
          {/*家計簿の追加*/}
          <HouseholdCreateForm />
          <h1>家計簿の一覧表示</h1>
          <HouseholdsListForm />
        </div>
    </div>
    



  );
}
