# yato portfolio

yatoのプロフィールと制作物をまとめた、個人ポートフォリオサイトです。

## 使用技術

- React / Vinext
- TypeScript
- Cloudflare Workers

## ローカル開発

```bash
npm install
npm run dev
```

## 本番ビルド

```bash
npm run build
```

## Cloudflareへの公開

Cloudflare WorkersのGit連携またはWranglerを使って公開できます。Cloudflare側では、ビルドコマンドに `npm run build` を設定してください。

独自ドメインを設定する場合は、CloudflareのWorker設定から `yato-lab.com` のルートまたは任意のサブドメインをルーティングしてください。

## 自宅サーバーでの公開

`npm run build:selfhost` で静的サイトを生成できます。Proxmox LXC、nginx、Cloudflare Tunnelで公開する手順は [SELFHOST.md](SELFHOST.md) を参照してください。
