これは学習用の家計簿アプリです。
Githubで[公開](https://tkhsmrn-git.github.io/)しています。

## 概要
学習用の家計簿アプリです。まだ表紙もできていません。

## 技術スタック
```
vscode  #コードエディタ
github  #バージョン管理と公開
Next.js #まだよくわかりません
typescript  #言語
redix-ui    #UIの骨組み
tailwind CSS    #UIの装飾
```

## フォルダ構成

```folder
app/layout.tsx  #共通レイアウト
app/page.tsx    #トップページ（アプリロゴと説明とサインイン/新規登録）
app/signinForm.tsx  #サインインフォーム
app/signupForm.tsx  #新規登録フォーム
public  #画像とか
README.md   #仕様と進捗をちゃんと書きます
```

## Gitの使い方
コミット&プッシュ
```
git status
git add .
git commit -m "コメント"
git push
```