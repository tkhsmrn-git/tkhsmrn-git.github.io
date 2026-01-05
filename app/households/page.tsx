import { createClient } from "@/lib/supabase/server";

export const dynamic = "force-dynamic";

export default async function Households() {
  const supabase = await createClient();
  const {data} = await supabase.auth.getUser()

  return <div>householdsです
    ログイン中アカウント：
    {data?.user?.id}
  </div>;
}
