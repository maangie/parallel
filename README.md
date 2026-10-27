# parallel

three.js で 2 本の円柱を平行に並べて表示する、小さな 3D サンプルです。TypeScript と webpack で構成しています。

## シーンの内容

- 緑の床(平面)
- 床の上に立つ 2 本の円柱(平行に配置)
- 環境光と、影を落とす平行光源
- `OrbitControls` によるマウス操作(回転・ズーム・パン)

## 必要な環境

- Node.js(npm が使えること)

## セットアップ

```sh
npm ci
```

## 使い方

| コマンド | 内容 |
|---|---|
| `npm start` | 開発サーバーを起動し、ブラウザで開く(<http://localhost:8080>) |
| `npm run build` | 本番用にビルドし、`dist/` に出力する |

型チェックだけ行う場合は、次のコマンドを使います。

```sh
npx tsc --noEmit
```

## ディレクトリ構成

```
.
├── src/
│   ├── index.html          # HTML テンプレート
│   └── index.ts            # シーンの定義(エントリポイント)
├── tsconfig.json           # TypeScript の設定(strict)
├── webpack.config.cjs      # webpack の設定
└── dist/                   # ビルド成果物(git 管理外)
```

## 使用技術

- [three.js](https://threejs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [webpack](https://webpack.js.org/)(`ts-loader`、`html-webpack-plugin`)

## 補足

- `dist/` は git 管理していません。必要なときは `npm run build` で生成してください。
- `OrbitControls` は動的 import で読み込んでいます。
