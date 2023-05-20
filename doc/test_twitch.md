# Twitch EventSub のテスト

1. Twitch CLI からイベント起こす
1. ローカルサーバーを立ててコールバックをローカルサーバーの API に返しテスト

## Twitch CLI のインストール

https://dev.twitch.tv/docs/cli/

## 実行

https://dev.twitch.tv/docs/cli/event-command/#triggering-webhook-events

```bash
twitch event trigger subscribe -F https://localhost:8080/eventsub/
```
