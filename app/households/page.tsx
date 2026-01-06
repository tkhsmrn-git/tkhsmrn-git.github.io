import { createClient } from "@/lib/supabase/server";

export default async function Households() {
  const supabase = await createClient()

  const {
    data:{user}}=await supabase.auth.getUser()

  return <div>householdsです
    ログイン中アカウントID：{user?.id}
  </div>;
}
