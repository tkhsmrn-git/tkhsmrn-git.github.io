"use client";

import Image from "next/image";
import { Root, List, Trigger, Content } from "@radix-ui/react-tabs";
import SignInForm from "./signinForm";
import SignUpForm from "./signupForm";
import { useState } from "react";

// Homeページコンポーネント
export default function Home() {

const [activeTab, setActiveTab] = useState("tab1");

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-items-start py-16 px-16 bg-white dark:bg-black sm:items-start">
        
        {/* アプリ名と説明*/}
        <div className="mb-16 flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <div className="flex flex-row items-center gap-4">
            <Image
              src="/icons/Kakeibo-icon.svg"
              alt="Kakeibo top image"
              width={100}
              height={100}
              priority
            />
            <h1 className="text-4xl font-bold tracking-tight text-black dark:text-white sm:text-5xl">
              Kakeibo
            </h1>
          </div>
          <a className="mb-16 max-w-xl text-lg text-gray-600 dark:text-gray-400">
            2人以上と共有できるシンプルな家計簿です。<br></br>
            ご夫婦の家計管理やイベントの収支管理でご利用ください。
          </a>
        </div>

        {/*新規登録またはサインイン*/}
        <Root defaultValue={activeTab} className="w-full  bg-white p-8 shadow-md rounded-md dark:bg-gray-900">
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
