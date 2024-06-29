---
title: "使用教程"
description: "this is meta description"
draft: false
---

使用本插件如同使用在线Markdown 工具一样，在左侧编写Markdown内容，右侧则会实时渲染精美排版的内容。本插件还支持粘贴图片自动上传到选定的图床及获取图片URL，自动插入到Markdown 内容。之所以从原始的开源web项目改造成插件形式，宗旨是让用户可以用上公众号素材库，只不过使用之前需要做一点配置，如下介绍：

#### 开通公众号开发者

登录公众号后台，访问 设置与开发>基本配置，启用开发者，并走账号登录认证流程获取AppSecret，注意保存AppSecret。

<img src='/images/01-640.webp' />

#### 配置IP白名单

这一步配置IP白名单，是为了插件访问公众号openapi接口能够正常访问设置的。通过访问 https://www.whatismyip.com/ 获取本机的公网IP，或者在插件中配置好appID和appSecret后尝试上传图片，并观察网络请求的报错，从报错中就可以得知被拒绝访问的IP地址，亦是我们的公网IP地址。

通过 设置与开发>基本配置的IP白名单， 或者 设置与开发 > 安全中心 进行配置

<img src='/images/02-640.webp' />

打开Network控制台,观察上传图片接口报错的情况，这一步获取的错误提示，获取到的IP地址就是需要配置到IP白名单中的。

#### 插件中配置账号密钥

右键弹出菜单，选择上传图片

<img src='/images/640-1.webp' />
<img src='/images/640-2.webp' />


#### 素材保存情况

图片内容是保存到微信公众号后台的素材库默认分组的，

<img src='/images/640-3.webp' />

#### 联系作者

插件作者公众号：哪里不会点哪里
<img src='/images/qrcode_mp.png' />