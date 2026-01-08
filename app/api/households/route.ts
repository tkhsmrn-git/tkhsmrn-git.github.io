import { createClient } from "@/lib/supabase/server";

//supabaseのhouseholdsテーブルにデータを追加する
export async function POST(request: Request) {
  const supabase = await createClient();
  const { householdName } = await request.json();
    const { data, error } = await supabase
      .from("households")
      .insert([{ household_name: householdName }])
      .select()
      .single();
    if (error) {
        console.log("householdName:", householdName);
      console.error("Error inserting household:", error);
        return new Response(JSON.stringify({ error: error.message }), {
        status: 500,
        headers: { "Content-Type": "application/json" },
      });
    }
    return new Response(JSON.stringify({ household: data }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
}


//householdsテーブルからデータを取得する
export async function GET() {
  const supabase = await createClient();
    const { data, error } = await supabase.from("households").select("*");
    if (error) {
      console.error("Error fetching households:", error);
      return new Response(JSON.stringify({ error: error.message }), {
        status: 500,
        headers: { "Content-Type": "application/json" },
      });
    }
    return new Response(JSON.stringify({ households: data }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
}