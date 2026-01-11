"use client";

import { IoMdSettings } from "react-icons/io";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import { useEffect, useState } from "react";
import Image from "next/image";

//ヘッダー
export default function Header() {
  const router = useRouter();
  const [userEmail, setUserEmail] = useState<string | undefined>("");

  //ログイン中のユーザー情報を取得
  useEffect(() => {
    const getUser = async () => {
      const supabase = createClient();
      const {
        data: { user },
      } = await supabase.auth.getUser();
      setUserEmail(user?.email);
    };
    getUser();
  }, []);

  //ログアウト処理
  const handleLogout = async () => {
    const supabase = createClient();
    await supabase.auth.signOut();
    router.push("/");
  };

  //レンダリング部分
  return (
    <header className="flex w-full flex-row items-center justify-between px-4 bg-yellow-50">
      <Image
        src="/icons/Kakeibo-icon.svg"
        alt="Kakeibo top image"
        width={50}
        height={50}
        priority
        onClick={() => router.push("/")}
      />
      <h1 className="my-8 text-3xl font-bold">家計簿一覧</h1>
      <div>ログイン中： {userEmail}</div>
      <DropdownMenu.Root>
        <DropdownMenu.Trigger
          className="Button IconButton flex flex-row items-center px-4 py-2 border bg-gray-200"
          aria-label="Customise options"
        >
          <IoMdSettings size={24} />
          設定
        </DropdownMenu.Trigger>
        <DropdownMenu.Content
          className="DropdownMenuContent p-2 border bg-white shadow-lg "
          sideOffset={5}
        >
          <DropdownMenu.Item
            className="DropdownMenuItem p-2"
            onClick={() => router.push("/settings")}
          >
            ユーザー設定
          </DropdownMenu.Item>
          <DropdownMenu.Separator className="DropdownMenuSeparator h-px my-1 bg-gray-300" />
          <DropdownMenu.Item 
            className="DropdownMenuItem p-2"
            onClick={handleLogout}
          >
            ログアウト
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Root>
    </header>
  );
}
