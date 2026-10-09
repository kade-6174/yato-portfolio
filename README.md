# yato portfolio

yatoのプロフィールと制作物をまとめた、個人ポートフォリオサイトです。

## 使用技術

- React / TypeScript
- Vite（自宅サーバー向け静的ビルド）
- Vinext（Cloudflare Workers向けの旧構成）
- nginx / Cloudflare Tunnel（現在の公開）

## ローカル開発

```bash
npm install
npm run dev
```

## 現在の公開方法

`https://yato-lab.com/` は、Proxmox LXC上のnginxからCloudflare Tunnel経由で公開しています。静的ファイルは次のコマンドで生成します。

```bash
npm ci
npm run build:selfhost
```

生成先は `dist-selfhost/` です。設置・更新・復旧の手順は [SELFHOST.md](SELFHOST.md) を参照してください。

## 旧Cloudflare Workers構成

`npm run build` とWorkers関連の設定は、切り戻し用に残しています。現在の `yato-lab.com` はWorkerに割り当てていません。
