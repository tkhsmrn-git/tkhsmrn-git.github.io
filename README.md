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
app/
app/api/    #API
app/households/page.tsx #ユーザーが所属する家計簿の一覧を出す予定【作成中】
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
Project URL：https://ljuluoqhlwgwvmsohuon.supabase.co
Publishable API Key：sb_publishable__uOvwdI5ObV9g-F26eAouQ_um62yTTk

#### ユーザー
メールとパスワードを入力し、受け取ったメールリンクからアクセスするとアカウントが作成される。

#### テーブル


## Gitの使い方
コミット&プッシュ
```
git status
git add .
git commit -m "コメント"
git push
```