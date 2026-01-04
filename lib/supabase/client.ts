//supabaseクライアントの作成
//環境変数からURLとANON_KEYを取得してクライアントを初期化
//戻り値としてSupabaseクライアントを返す
//ビルド時にserver側で実行されるとエラーになるので遅延生成する
import { createBrowserClient } from '@supabase/ssr'

export function createClient() {
  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    //process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  )
}