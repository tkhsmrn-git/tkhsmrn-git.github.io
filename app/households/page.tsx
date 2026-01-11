import HouseholdCreateForm from "./householdCreateForm";
import HouseholdsListForm from "./householdsListForm";
import Header from "../Header";

//家計簿一覧ページ
export default async function Households() {

  return (
    <div className="flex items-center justify-center bg-zinc-50 font-sans">
      <div className="flex w-full max-w-3xl flex-col items-center justify-items-start bg-white sm:items-start">
        <Header/>
        <main className="flex w-full flex-col items-center justify-items-start py-4 px-4 bg-white sm:items-start">
          <div className="my-8 w-full">
            <h3>新しい家計簿を作成</h3>
            <HouseholdCreateForm />
          </div>
          <h3>家計簿の一覧表示</h3>
          <div className="my-8 w-full">
            <HouseholdsListForm />
          </div>
        </main>
      </div>
    </div>
  );
}
