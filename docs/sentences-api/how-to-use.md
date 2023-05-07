---
sidebar_position: 1
description: ""
---

# 如何使用

這篇將會說明目前《言雅 Elegant TW》語錄 API 使用。

## API 說明

在此感謝 [CNTUG Infra Labs](https://docs.cloudnative.tw) 提供機器資源給予架設此服務。

### 後端網址

|   網址   | 速率限制 |
| :------ | :------ |
| `https://v0.elegant.tw` | 每秒最多接受 10 組 requests |

速率限制為同一組 IP 的最高 requests 上限，超過此上限會回傳 `429 Too Many Requests`。

### 路徑、參數

|   路徑   | 說明 |
| :------ | :------ |
| `/` | 所有語錄資料庫中隨機選擇一句（不含「毒雞湯」分類） |
| `/all` | 所有語錄資料庫中隨機選擇一句 |

#### 語錄分類

| 分類數字 | 說明 | 預設顯示 |
| :------ | :------ | :------: |
| 1 | 日本動漫 | ✅ |
| 2 | 遊戲 | ✅ |
| 3 | 歐美卡通 | ✅ |
| 4 | 電影 | ✅ |
| 5 | 影集 | ✅ |
| 6 | 網路 | ✅ |
| 7 | 諺語 | ✅ |
| 8 | 文學 | ✅ |
| 9 | 毒雞湯 | ❌ |