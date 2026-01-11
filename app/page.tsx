import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";

// Homeページコンポーネント
export default async function Home() {
  //サインイン済だったらhouseholdsにリダイレクトする
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (user) {
    //サインインしていたら家計簿ページへリダイレクトする
    redirect("/households");
  } else {
    //サインインしていなかったらサインインページへリダイレクトする
    redirect("/signin");
  }
}
