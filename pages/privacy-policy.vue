<template>
  <div class="min-h-screen bg-background dark:bg-background-dark">
    <div class="max-w-3xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div class="prose dark:prose-invert max-w-none">
        <h1 class="text-text dark:text-text-dark">隐私政策</h1>
        <p class="text-text/80 dark:text-text-dark/80">欢迎您使用微信公众号图文创作利器（以下简称“本服务”）。我们深知个人信息的重要性，因此特此制定本隐私协议，旨在说明我们在您使用本服务过程中如何收集、使用、存储及保护您的个人信息。请在使用本服务前仔细阅读以下内容：</p>

        <h2 class="text-text dark:text-text-dark">1. 信息收集 (Information Collection)</h2>
        <ul class="text-text/80 dark:text-text-dark/80">
          <li>必要信息 (Necessary Information)：为了提供服务，我们需要您将图床账号密钥信息录入到本服务，以便接入各类图床图片托管服务。在此过程中，我们将严格按照上传图片功能最少需要的API接口进行请求，您的账号密钥只会保留到本地，不会上传到远程服务。</li>
          <li>图片托管信息 (Image Hosting Information)：当您通过本服务上传图片至官方微信公众号或第三方图片托管平台时，我们会处理图片的上传请求，但图片的具体内容将直接上传至所选平台，我们不会保存或分析图片内容。</li>
        </ul>

        <h2 class="text-text dark:text-text-dark">2. 信息安全 (Information Security)</h2>
        <ul class="text-text/80 dark:text-text-dark/80">
          <li>数据加密 (Data Encryption)：我们根据图床要求的接口安全措施进行处理，包括数据传输加密，确保您的数据安全。</li>
          <li>第三方合作 (Third-party Cooperation)：对于接入的第三方服务（如官方微信公众号图片托管服务），我们遵循其隐私政策与条款，不额外存储或分享您的数据。</li>
        </ul>
        <h2 class="text-text dark:text-text-dark">3. 联系我们 (Contact Us)</h2>
        <p class="text-text/80 dark:text-text-dark/80">如果您对本隐私协议有任何疑问、建议或投诉，请通过[honwhy.wang#gmail.com]与我们联系。</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: '隐私政策'
})
</script>
