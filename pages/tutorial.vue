<template>
  <div class="min-h-screen bg-background dark:bg-background-dark">
    <div class="max-w-3xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div class="prose dark:prose-invert max-w-none">
        <h1 class="text-text dark:text-text-dark">使用教程</h1>
        <p class="text-text/80 dark:text-text-dark/80">使用本插件如同使用在线Markdown 工具一样，在左侧编写Markdown内容，右侧则会实时渲染精美排版的内容。本插件还支持粘贴图片自动上传到选定的图床及获取图片URL，自动插入到Markdown 内容。之所以从原始的开源web项目改造成插件形式，宗旨是让用户可以用上公众号素材库，只不过使用之前需要做一点配置，如下介绍：</p>

        <h2 class="text-text dark:text-text-dark">开通公众号开发者</h2>
        <p class="text-text/80 dark:text-text-dark/80">登录公众号后台，访问 设置与开发>基本配置，启用开发者，并走账号登录认证流程获取AppSecret，注意保存AppSecret。</p>
        <img src="~/assets/01-640.webp" />
        <h2 class="text-text dark:text-text-dark">配置IP白名单</h2>
        <p class="text-text/80 dark:text-text-dark/80">这一步配置IP白名单，是为了插件访问公众号openapi接口能够正常访问设置的。通过访问 <a href="https://www.whatismyip.com/" class="text-primary dark:text-primary-dark">https://www.whatismyip.com/</a> 获取本机的公网IP，或者在插件中配置好appID和appSecret后尝试上传图片，并观察网络请求的报错，从报错中就可以得知被拒绝访问的IP地址，亦是我们的公网IP地址。</p>
        <p class="text-text/80 dark:text-text-dark/80">通过 设置与开发>基本配置的IP白名单， 或者 设置与开发 > 安全中心 进行配置</p>
        <img src="~/assets/02-640.webp" />
        <h2 class="text-text dark:text-text-dark">插件中配置账号密钥</h2>
        <p class="text-text/80 dark:text-text-dark/80">右键弹出菜单，选择上传图片</p>
        <img src="~/assets/03-640.png" />
        <h2 class="text-text dark:text-text-dark">素材保存情况</h2>
        <p class="text-text/80 dark:text-text-dark/80">图片内容是保存到微信公众号后台的素材库默认分组的</p>
        <img src="~/assets/04-640.webp" />
        <h2 class="text-text dark:text-text-dark">联系作者</h2>
        <p class="text-text/80 dark:text-text-dark/80">插件作者公众号：哪里不会点哪里</p>
        <img src="~/assets/05-640.png" class="w-48 h-48"/>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: '使用教程'
})
</script>
