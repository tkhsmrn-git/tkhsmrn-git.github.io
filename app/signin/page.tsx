"use client";

import Image from "next/image";
import { Root, List, Trigger, Content } from "@radix-ui/react-tabs";
import SignInForm from "./signinForm";
import SignUpForm from "./signupForm";
import { useState } from "react";

// Homeページコンポーネント
export default function SigninPage() {
  const [activeTab, setActiveTab] = useState("tab1"); // タブの状態管理

  //レンダリング部分
  return (
    <div className="flex items-center justify-center bg-zinc-50 font-sans">
      <main className="flex w-full max-w-3xl flex-col items-center justify-items-start py-4 px-4 bg-white sm:items-start">
        {/* アプリ名と説明*/}
        <div className="flex flex-col items-start text-center sm:items-start sm:text-left">
          <div className="flex flex-row items-center gap-4">
            <Image
              src="/icons/Kakeibo-icon.svg"
              alt="Kakeibo top image"
              width={100}
              height={100}
              priority
            />
            <h1>Kakeibo</h1>
          </div>
          <a className="mb-8 text-md text-start px-4 text-gray-600">
            2人以上と共有できるシンプルな家計簿です。<br></br>
            ご夫婦の家計管理やイベントの収支管理でご利用ください。
          </a>
        </div>

        {/*新規登録またはサインイン*/}
        <Root
          defaultValue={activeTab}
          className="w-full bg-white/95 backdrop-blur-sm p-6 shadow-xl rounded-2xl border border-gray-100"
        >
          <List
            className="mb-8 flex w-full justify-center space-x-2 bg-gray-200 p-1 rounded-lg"
            aria-label="Manage account tabs"
          >
            <Trigger
              className="data-[state=active]:bg-white data-[state=active]:shadow-sm flex-1 rounded-lg px-4 py-2 text-center text-black hover:bg-white hover:shadow-sm"
              value="tab1"
              onClick={() => setActiveTab("tab1")}
            >
              サインイン
            </Trigger>
            <Trigger
              className="data-[state=active]:bg-white data-[state=active]:shadow-sm flex-1 rounded-lg px-4 py-2 text-center text-black hover:bg-white hover:shadow-sm"
              value="tab2"
              onClick={() => setActiveTab("tab2")}
            >
              新規登録
            </Trigger>
          </List>
          <Content value="tab1">
            {/*サインイン*/}
            <SignInForm />
          </Content>
          <Content value="tab2">
            {/*新規登録*/}
            <SignUpForm />
          </Content>
        </Root>
      </main>
    </div>
  );
}
