import { createClient } from "@/lib/supabase/server";

//選択中の家計簿を切り替える
export async function POST(request: Request) {
  const supabase = await createClient();
  const { household_id } = await request.json();
  //user_idを取得
  const user_id = await supabase.auth
    .getUser()
    .then(({ data }) => data.user?.id);
  //データが存在すれば更新、存在しなければ挿入
  const { data, error } = await supabase
    .from("users_setting")
    .upsert(
      { user_id: user_id, selected_household: household_id },
      { onConflict: "user_id" }
    )
    .select()
    .single();
  if (error) {
    console.error("Error upserting user setting:", error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
  return new Response(JSON.stringify({ userSetting: data }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}

//選択中の家計簿の取得
export async function GET() {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("users_setting")
    .select("*")
    .single();
  if (error) {
    console.error("Error fetching user settings:", error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
  return new Response(JSON.stringify({ profile: data }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
