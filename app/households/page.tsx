"use client";

import { createBrowserClient } from "@supabase/ssr";

const supabase = createBrowserClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

const { data: { user } } = await supabase.auth.getUser();

export default function Households() {

  return <div>householdsです
    ログイン中アカウント：
    {user?.id}
  </div>;
}
