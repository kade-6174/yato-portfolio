# 自宅サーバーでの公開

このサイトの表示部分はサーバーAPIやD1を呼ばないため、既存のVinext / Cloudflare Workers構成を残したまま、同じ `app/page.tsx` と `app/globals.css` から静的HTML・CSS・JavaScriptを生成できます。`npm run build:selfhost` の出力は `dist-selfhost/` です。本文は事前描画されるので、JavaScriptの読み込み前にも表示されます。

## ローカル確認

Node.js 22.13以降で次を実行します。

```bash
npm ci
npm run build:selfhost
npx vite preview --config vite.selfhost.config.ts --host 127.0.0.1 --port 8088
```

`http://127.0.0.1:8088/` で本文、画像、リンク、ライトモード切替を確認します。

## 自宅サーバーへの設置

既存サービスと切り離したLinux VMまたはLXCにDocker EngineとComposeを用意し、このリポジトリを配置します。コンテナは静的ファイルをCaddyで配信し、`127.0.0.1:8088` だけでローカル確認できます。Cloudflare Tunnelは同じComposeネットワーク内の `http://portfolio:8080` に接続します。

Cloudflareでこのサイト専用のリモート管理Tunnelを作成し、取得したtokenをサーバー上の `.env.tunnel` に保存します。ファイルはGitに追加せず、所有者以外が読めない権限にします。

```bash
printf 'TUNNEL_TOKEN=' > .env.tunnel
chmod 600 .env.tunnel
# エディターでtokenを=の後ろに入力する。端末履歴やチャットに貼らない。
docker compose -f compose.selfhost.yaml build
docker compose -f compose.selfhost.yaml up -d
docker compose -f compose.selfhost.yaml ps
curl -f http://127.0.0.1:8088/
```

Cloudflare Tunnelの公開ホスト名には、まず仮のサブドメインを設定し、サービスURLを `http://portfolio:8080` にします。既存の `yato-lab.com` はこの段階では変更しません。仮URLでPC・スマートフォン表示、テーマ切替、外部リンク、サーバー再起動後の復帰を確認します。

## 本番URLへの切替

1. 現在のCloudflare Workerのカスタムドメイン設定、DNS、関連ルールを控える。
2. 仮URLが正常な状態で、`yato-lab.com` のWorkerカスタムドメインを解除し、Tunnelの公開ホスト名を `yato-lab.com` に設定する。同じホスト名を両方へ同時に割り当てない。
3. 外部回線から `https://yato-lab.com/` の本文、CSS、JavaScript、favicon、リンク、HTTPSを確認する。
4. 問題があれば、Tunnel側の本番ホスト名を解除し、控えたWorkerカスタムドメイン設定を戻す。

切替後もCloudflare Workers側のデプロイは、戻せることが確認できるまで残します。

## 更新・復旧

コードを更新したら、`docker compose -f compose.selfhost.yaml build portfolio` と `docker compose -f compose.selfhost.yaml up -d portfolio` を実行します。`docker compose -f compose.selfhost.yaml ps` で状態を確認します。本文とスタイルはGitHubのソースが原本で、サイト内のDBやアップロードデータはありません。復旧にはリポジトリ、`.env.tunnel` の再設定、Cloudflare Tunnelの公開ホスト名設定が必要です。Tunnel tokenはバックアップ文書に平文で残さないでください。
