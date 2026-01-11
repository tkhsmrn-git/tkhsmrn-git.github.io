これは学習用の家計簿アプリです。
Vercelで[公開](https://tkhsmrn-git-github-io.vercel.app/)しています。

## 概要
学習用の家計簿アプリです。まだ表紙もできていません。

## 技術スタック
```
vscode  #コードエディタ
github  #バージョン管理
Next.js #まだよくわかりません
typescript  #言語
redix-ui    #UIの骨組み
tailwind CSS    #UIの装飾
spabase #DB
Vercel  #公開
```

## フォルダ構成

```folder
app/api
app/api/active_household/route.ts    #選択中の家計簿の切り替えと取得
app/api/households/route.ts    #家計簿の追加、一覧取得
app/api/users_setting/route.ts  #ユーザープロファイルの更新

app/households
app/households/householdCreateForm.tsx #家計簿の追加フォーム
app/households/householdsListForm.tsx #家計簿の一覧フォーム
app/households/page.tsx #ユーザーが所属する家計簿の一覧を出す予定【作成中】

app/settings
app/settings/page.tsx   #設定ページ
app/settings/UserProfileSettingForm.tsx #ユーザー名の更新

app/globals.css #共通CSS
app/Header.tsx  #ヘッダー
app/layout.tsx  #共通レイアウト
app/page.tsx    #トップページ（アプリロゴと説明とサインイン/新規登録）
app/signinForm.tsx  #サインインフォーム、supabaseにサインイン
app/signupForm.tsx  #新規登録フォーム、supabaseにユーザー登録

lib/supabase/client.ts  #spabaseのクライアント（クライアントとはサーバーではなくブラウザで実行されること）
lib/supabase/server.ts  #spabaseのサーバー側接続セット
public  #画像とか
.env.local  #supabaseのURLとanonキー
README.md   #仕様と進捗をちゃんと書きます
```

## Supabase
#### 基本情報
プロジェクト名：Kakeibo


#### ユーザー
メールとパスワードを入力し、受け取ったメールリンクからアクセスするとアカウントが作成される。

#### テーブル

- Users
デフォルトのAuthentication
    | Name | 説明 | Format | Nullable |
    | ---- | ---- | ---- | ---- |
    | UID | ユーザーID | uuid | × |
    | Email | メールアドレス | text | × |

- households
家計簿オブジェクト。ユーザーは複数の家計簿を持てる。
    | Name | 説明 | Format | Nullable |
    | ---- | ---- | ---- | ---- |
    | household_id | 家計簿ID | uuid | × |
    | created_at | 作成日時 | timestamptz | × |
    | created_by | 作成者 | uuid(auth.uid()) | ○ |
    | household_name | 家計簿名 | text | × |

- users_setting
ユーザープロファイル。
    | Name | 説明 | Format | Nullable |
    | ---- | ---- | ---- | ---- |
    | user_id | ユーザーID | uuid(auth.uid()) | × |
    | created_at | 作成日時 | timestamptz | × |
    | user_name | ユーザー名 | text | ○ |
    | selected_household | 選択中の家計簿 | uuid(household_id) | ○ |

## Gitの使い方
コミット&プッシュ
```
git status
git add .
git commit -m "コメント"
git push
```