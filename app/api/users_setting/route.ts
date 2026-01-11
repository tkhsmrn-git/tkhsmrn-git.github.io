import { createClient } from "@/lib/supabase/server";

//supabaseのusers_settingテーブルにデータを追加・更新する
export async function POST(request: Request) {
  const supabase = await createClient();
  const { user_name } = await request.json();
  //user_idを取得
  const user_id = await supabase.auth
    .getUser()
    .then(({ data }) => data.user?.id);
  //データが存在すれば更新、存在しなければ挿入
  const { data, error } = await supabase
    .from("users_setting")
    .upsert(
      { user_id: user_id, user_name: user_name },
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

//users_settingテーブルからデータを取得する
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
