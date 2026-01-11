"use client";

import { IoMdSettings } from "react-icons/io";
import { IoMdMenu } from "react-icons/io";
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
    <header className="flex w-full flex-row items-center justify-between">
      <DropdownMenu.Root>
        <DropdownMenu.Trigger className="Button IconButton flex flex-col items-center px-4 py-2">
          <IoMdMenu size={30} />
          <a className="text-xs text-nowrap"> メニュー</a>
        </DropdownMenu.Trigger>
        <DropdownMenu.Content
          className="DropdownMenuContent p-2 border bg-white shadow-lg "
          sideOffset={5}
        >
          <DropdownMenu.Item
            className="DropdownMenuItem p-2"
            onClick={() => router.push("/households")}
          >
            家計簿一覧
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Root>
      <div className="flex w-full flex-row items-center">
        <Image
          src="/icons/Kakeibo-icon.svg"
          alt="Kakeibo top image"
          width={50}
          height={50}
          priority
          onClick={() => router.push("/")}
        />
        <div className="text-xl font-bold">共有家計簿</div>
      </div>
      <DropdownMenu.Root>
        <DropdownMenu.Trigger className="Button IconButton flex flex-col items-center px-4 py-2">
          <IoMdSettings size={30} />
          <a className="text-xs text-nowrap"> 設定</a>
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
