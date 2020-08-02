# 網速傻傻分不清楚 Mbps? MB/s? 來寫個單位換算器吧

## 網速的概念

在開始實作前，我們要先來了解一下網速的概念。其中，`Mbps` 是用來計算網路頻寬最常見的單位，自從大家升級到 4G 行動網路，甚至即將邁入的 5G，如果你不是使用吃到飽的使用者，勢必會看到「降速」或「限速」這兩個詞，可是你有想過最常見的降速 `20Mbps`、或者限速 `5Mbps` 是什麼意思嗎？

但因為最常接觸到的單位常常是 `MB`，因為這常用在傳輸檔案或儲存空間上。因此有些不太清楚的店員可能會跟你說 `20Mbps` 就是每秒鐘有 `20MB` 的網路傳輸速度，但真的是這樣嗎？錯！**20Mbps 完全不等於每秒鐘有 20MB 的網路傳輸量**。

![imgur](https://i.imgur.com/H9dBJNF.png)

又或者你現在想要追一下最近很紅的韓劇，怕網速太慢影響看劇的興致，於是打開 Netflix 提供的測速網站 [fast.com](https://fast.com/) 想要測一下網速：

![imgur](https://i.imgur.com/87jdVjv.png)

測完發現有 `300Mbps`，可是你有想過，這個 `300Mbps` 是什麼意思嗎？這絕對不是表示每秒鐘有 300MB 的網路頻寬。

`Mbps` 和 `MB/s` 雖然不同，但這兩個單位之間是可以轉換的。那麼多少 `Mbps` 才會等於 `1 MB/s` 呢？

## Mbps 或 MB/s

要做網速單位換算器之前，我們要先來了解 `Mbps` 到底是什麼意思，它又要怎麼轉換成 `MB/s`。

實際上 `Mbps` 中的第一個 `M` 是英文的 million，也就是「百萬」； `小寫 b` 是 `bit` 的意思，中文稱作「**位元**」；後面的 `ps` 則是 per second 的意思，也就是「每秒」。綜合起來，**`Mbps` 指的是「每秒鐘可以傳輸多少百萬位元（Million bits per second）」**。

那 `MB/s` 呢？這裡第一個 `M` 一樣式 million 百萬的意思；但 `B` 則是大寫的 `B` ，**大寫的 B 和小寫的 b 在意思上是完全不同的**，`大寫 B` 是指 `Byte` ，中文稱作「**位元組**」。**一個位元組（Byte）需要由 8 個位元（bit）所組成的**。

所以實際上 **`Mbps` 的值需要「除以 8 」後才會是指每秒鐘可以有多少 MB 的傳輸量**。也就是說至少要到 `8Mbps` 以上，才表示你的網路速度每秒鐘可以傳輸 `1MB` 以上：

![imgur](https://i.imgur.com/4Uglubs.png)

在這個章節中就讓我們來做一個網速單位換算器吧！

![imgur](https://i.imgur.com/YuQvUMP.png)

## 安裝 FontAwesome

```bash
$ npm i --save @fortawesome/fontawesome-svg-core @fortawesome/react- fontawesome @fortawesome/free-regular-svg-icons @fortawesome/free- brands-svg-icons @fortawesome/free-solid-svg-icons
```
