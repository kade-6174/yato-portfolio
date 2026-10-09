# 自宅サーバーでの公開

このサイトの表示部分はサーバーAPIやD1を呼ばないため、既存のVinext / Cloudflare Workers構成を残したまま、同じ `app/page.tsx` と `app/globals.css` から静的HTML・CSS・JavaScriptを生成できます。`npm run build:selfhost` の出力は `dist-selfhost/` です。本文は事前描画され、JavaScriptの読み込み前にも表示されます。

## ビルド

Node.js 22.13以降で次を実行します。

```bash
npm ci
npm run build:selfhost
```

## Proxmox LXCでの配信

既存サービスと分離した非特権のDebian LXCにnginxとcloudflaredを設置します。コンテナ内で以下を行います。

1. `nginx` をDebianのAPTからインストールする。
2. `dist-selfhost/` の内容を `/srv/portfolio/releases/<release-id>/` に配置し、`/srv/portfolio/current` をそのディレクトリへ向ける。
3. `selfhost/nginx.conf` を `/etc/nginx/sites-available/default` へ配置する。`nginx -t` の後、nginxを再読み込みする。
4. LAN内からトップページ、CSS、favicon、テーマ切替を確認する。

nginxはコンテナの80番ポートで配信します。ポートをインターネットへ開放する必要はありません。

## Cloudflare Tunnel

Cloudflareの[公式パッケージ手順](https://pkg.cloudflare.com/)に従い、`selfhost/cloudflared.list` と公式署名鍵を登録して `cloudflared` をインストールします。`selfhost/portfolio-tunnel.service` を `/etc/systemd/system/` に配置して `systemctl daemon-reload` を実行します。

Cloudflareでこのサイト専用のリモート管理Tunnelを作成します。Tunnel tokenはコンテナ内の `/etc/cloudflared/portfolio.token` にrootのみ読める権限で保存します。サービスはsystemdの `LoadCredential` を使ってtokenを読み込むため、コマンドライン引数やGitにtokenを載せません。tokenの作成・入力後に `systemctl enable --now portfolio-tunnel.service` を実行します。

Tunnelの公開ホスト名には、まず仮のサブドメインを設定し、サービスURLを `http://localhost:80` にします。仮URLでPC・スマートフォン表示、テーマ切替、外部リンク、コンテナ再起動後の復帰を確認します。

## 本番URLへの切替

1. 現在のCloudflare Workerのカスタムドメイン設定、DNS、関連ルールを控える。
2. 仮URLが正常な状態で、`yato-lab.com` のWorkerカスタムドメインを解除し、Tunnelの公開ホスト名を `yato-lab.com` に設定する。同じホスト名を両方へ同時に割り当てない。
3. 外部回線から `https://yato-lab.com/` の本文、CSS、JavaScript、favicon、リンク、HTTPSを確認する。
4. 問題があれば、Tunnel側の本番ホスト名を解除し、控えたWorkerカスタムドメイン設定を戻す。

切替後もCloudflare Workers側のデプロイは、戻せることが確認できるまで残します。

## 更新・復旧

コードを更新したら再ビルドし、新しいreleaseディレクトリへ配置します。`/srv/portfolio/current` の参照先を切り替え、nginxを再読み込みします。元のreleaseへリンクを戻せばサイト内容を戻せます。サイト内のDBやアップロードデータはありません。復旧にはリポジトリ、Tunnel tokenの再設定、Cloudflare Tunnelの公開ホスト名設定が必要です。tokenはバックアップ文書に平文で残さないでください。
