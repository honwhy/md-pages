<template>
  <div class="min-h-screen bg-background dark:bg-background-dark">
    <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div class="text-center">
        <h1 class="text-4xl font-bold bg-gradient-to-r from-[#4ade80] via-[#07c160] to-[#4ade80] bg-clip-text text-transparent">
          微信公众号图文创作利器
        </h1>
        <p class="mt-4 text-lg text-text/80 dark:text-text-dark/80">
          一站式解决微信公众号图文排版难题
        </p>
      </div>

      <div class="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <div class="bg-background dark:bg-[#242424] p-6 rounded-lg shadow">
          <div class="text-primary">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 class="mt-4 text-xl font-bold text-text dark:text-text-dark">轻松排版</h3>
          <p class="mt-2 text-text/80 dark:text-text-dark/80">
            提供丰富的排版样式，轻松打造精美图文
          </p>
        </div>

        <div class="bg-background dark:bg-[#242424] p-6 rounded-lg shadow">
          <div class="text-primary">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
          </div>
          <h3 class="mt-4 text-xl font-bold text-text dark:text-text-dark">实时预览</h3>
          <p class="mt-2 text-text/80 dark:text-text-dark/80">
            所见即所得，实时查看最终效果
          </p>
        </div>

        <div class="bg-background dark:bg-[#242424] p-6 rounded-lg shadow">
          <div class="text-primary">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
          </div>
          <h3 class="mt-4 text-xl font-bold text-text dark:text-text-dark">一键复制</h3>
          <p class="mt-2 text-text/80 dark:text-text-dark/80">
            快速生成代码，一键复制到微信公众号
          </p>
        </div>
      </div>

      <div class="mt-12 text-center space-y-6">
        <div class="flex justify-center space-x-8">
          <div class="flex flex-col items-center">
            <a :href="chromeUrl" target="_blank" rel="noopener noreferrer" class="text-text dark:text-text-dark hover:text-primary dark:hover:text-primary">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 md:h-12 md:w-12" viewBox="0 0 16 16"><path fill="currentColor" fill-rule="evenodd" d="M16 8a8 8 0 0 1-7.022 7.94l1.902-7.098a3 3 0 0 0 .05-1.492A3 3 0 0 0 10.237 6h5.511A8 8 0 0 1 16 8M0 8a8 8 0 0 0 7.927 8l1.426-5.321a3 3 0 0 1-.723.255a3 3 0 0 1-1.743-.147a3 3 0 0 1-1.043-.7L.633 4.876A8 8 0 0 0 0 8m5.004-.167L1.108 3.936A8.003 8.003 0 0 1 15.418 5H8.066a3 3 0 0 0-1.252.243a2.99 2.99 0 0 0-1.81 2.59M8 10a2 2 0 1 0 0-4a2 2 0 0 0 0 4"/></svg>
            </a>
            <span class="mt-2 text-sm font-medium text-text/80 dark:text-text-dark/80">{{ chromeInstalls }}+ 安装</span>
          </div>
          <div class="flex flex-col items-center">
            <a :href="edgeUrl" target="_blank" rel="noopener noreferrer" class="text-text dark:text-text-dark hover:text-primary dark:hover:text-primary">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 md:h-12 md:w-12" viewBox="0 0 16 16"><g fill="currentColor"><path d="M9.482 9.341c-.069.062-.17.153-.17.309c0 .162.107.325.3.456c.877.613 2.521.54 2.592.538h.002c.667 0 1.32-.18 1.894-.519A3.84 3.84 0 0 0 16 6.819c.018-1.316-.44-2.218-.666-2.664l-.04-.08C13.963 1.487 11.106 0 8 0A8 8 0 0 0 .473 5.29C1.488 4.048 3.183 3.262 5 3.262c2.83 0 5.01 1.885 5.01 4.797h-.004v.002c0 .338-.168.832-.487 1.244l.006-.006z"/><path d="M.01 7.753a8.14 8.14 0 0 0 .753 3.641a8 8 0 0 0 6.495 4.564a5 5 0 0 1-.785-.377h-.01l-.12-.075a5.5 5.5 0 0 1-1.56-1.463A5.543 5.543 0 0 1 6.81 5.8l.01-.004l.025-.012c.208-.098.62-.292 1.167-.285q.194.001.384.033a4 4 0 0 0-.993-.698l-.01-.005C6.348 4.282 5.199 4.263 5 4.263c-2.44 0-4.824 1.634-4.99 3.49m10.263 7.912q.133-.04.265-.084q-.153.047-.307.086z"/><path d="M10.228 15.667a5 5 0 0 0 .303-.086l.082-.025a8.02 8.02 0 0 0 4.162-3.3a.25.25 0 0 0-.331-.35q-.322.168-.663.294a6.4 6.4 0 0 1-2.243.4c-2.957 0-5.532-2.031-5.532-4.644q.003-.203.046-.399a4.54 4.54 0 0 0-.46 5.898l.003.005c.315.441.707.821 1.158 1.121h.003l.144.09c.877.55 1.721 1.078 3.328.996"/></g></svg>
            </a>
            <span class="mt-2 text-sm font-medium text-text/80 dark:text-text-dark/80">{{ edgeInstalls }}+ 安装</span>
          </div>
          <div class="flex flex-col items-center">
            <a :href="firefoxUrl" target="_blank" rel="noopener noreferrer" class="text-text dark:text-text-dark hover:text-primary dark:hover:text-primary">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 md:h-12 md:w-12" viewBox="0 0 16 16"><path fill="currentColor" d="M13.384 3.408c.535.276 1.22 1.152 1.556 1.963a8 8 0 0 1 .503 3.897l-.009.077l-.026.224A7.758 7.758 0 0 1 .006 8.257v-.04q.025-.545.114-1.082c.01-.074.075-.42.09-.489l.01-.051a6.6 6.6 0 0 1 1.041-2.35q.327-.465.725-.87q.35-.358.758-.65a1.5 1.5 0 0 1 .26-.137c-.018.268-.04 1.553.268 1.943h.003a5.7 5.7 0 0 1 1.868-1.443a3.6 3.6 0 0 0 .021 1.896q.105.07.2.152c.107.09.226.207.454.433l.068.066l.009.009a2 2 0 0 0 .213.18c.383.287.943.563 1.306.741c.201.1.342.168.359.193l.004.008c-.012.193-.695.858-.933.858c-2.206 0-2.564 1.335-2.564 1.335c.087.997.714 1.839 1.517 2.357a4 4 0 0 0 .439.241q.114.05.228.094c.325.115.665.18 1.01.194c3.043.143 4.155-2.804 3.129-4.745v-.001a3 3 0 0 0-.731-.9a3 3 0 0 0-.571-.37l-.003-.002a2.68 2.68 0 0 1 1.87.454a3.92 3.92 0 0 0-3.396-1.983q-.116.001-.23.01l-.042.003V4.31h-.002a4 4 0 0 0-.8.14a7 7 0 0 0-.333-.314a2 2 0 0 0-.2-.152a4 4 0 0 1-.088-.383a5 5 0 0 1 1.352-.289l.05-.003c.052-.004.125-.01.205-.012C7.996 2.212 8.733.843 10.17.002l-.003.005l.003-.001l.002-.002h.002l.002-.002h.015a.02.02 0 0 1 .012.007a2.4 2.4 0 0 0 .206.48q.09.153.183.297c.49.774 1.023 1.379 1.543 1.968c.771.874 1.512 1.715 2.036 3.02l-.001-.013a8 8 0 0 0-.786-2.353"/></svg>
            </a>
            <span class="mt-2 text-sm font-medium text-text/80 dark:text-text-dark/80">{{ firefoxInstalls }}+ 安装</span>
          </div>
        </div>
        <ClientOnly>
          <BrowserInstallLink />
        </ClientOnly>
      </div>

      <!-- 新增功能介绍 -->
      <div class="mt-20 space-y-20">
        <!-- Markdown支持 -->
        <div class="flex flex-col md:flex-row items-center gap-8">
          <div class="w-full md:w-1/2">
              <a href="https://doocs-md.pages.dev/" target="_blank" rel="noopener noreferrer">
              <img src="~/assets/markdown.png" alt="Markdown支持" class="rounded-lg shadow-lg">
            </a>
            </div>
          <div class="w-full md:w-1/2">
            <h2 class="text-3xl font-bold text-text dark:text-text-dark">Markdown支持</h2>
            <p class="mt-4 text-lg text-text/80 dark:text-text-dark/80">
              使用知名项目<a class="btn-primary inline-block px-4 py-2 text-sm btn-small" href="https://github.com/doocs/md">doocs/md</a>精心打造的Markdown编辑器
            </p>
            <p class="mt-4 text-lg text-text/80 dark:text-text-dark/80">
              原生支持Markdown语法，让写作更高效。支持代码高亮、表格、数学公式、流程图等丰富格式
            </p>
          </div>
        </div>

        <!-- 浏览器插件 -->
        <div class="flex flex-col md:flex-row-reverse items-center gap-8">
          <div class="w-full md:w-1/2">
            <img src="~/assets/extension.png" alt="浏览器插件" class="rounded-lg shadow-lg">
          </div>
          <div class="w-full md:w-1/2">
            <h2 class="text-3xl font-bold text-text dark:text-text-dark">浏览器插件</h2>
            <p class="mt-4 text-lg text-text/80 dark:text-text-dark/80">
              提供Chrome/Edge/Firefox浏览器插件，随时随地保存文章内容，快速生成微信公众号图文
            </p>
          </div>
        </div>

        <!-- 微信公众号图床 -->
        <div class="flex flex-col md:flex-row items-center gap-8">
          <div class="w-full md:w-1/2">
            <a href="/tutorial" rel="noopener noreferrer">
              <img src="~/assets/image-host.png" alt="微信公众号图床" class="rounded-lg shadow-lg">
            </a>
          </div>
          <div class="w-full md:w-1/2">
            <h2 class="text-3xl font-bold text-text dark:text-text-dark">微信公众号图床</h2>
            <p class="mt-4 text-lg text-text/80 dark:text-text-dark/80">
              内置支持主流图片托管平台，粘贴即可上传并在Markdown中展示
            </p>
            <p class="mt-4 text-lg text-text/80 dark:text-text-dark/80">
              集成官方微信公众号图片托管服务免费存储图片，无需额外付费
            </p>
          </div>
        </div>
      </div>
    </div>
    <footer class="py-8 text-center text-sm text-text/60 dark:text-text-dark/60">
      <p>© {{ currentYear }} 微信公众号图文创作工具. All rights reserved.</p>
      <p>骄傲地使用wxt/Nuxt框架
        <a size="2xs" style="margin-left: 4px;" class="btn-primary btn-small" @click="isOpen = true">打赏作者</a>
        <a size="2xs" style="margin-left: 4px;" class="btn-primary btn-small" @click="isOpen2 = true">作者公众号</a>
      </p>
    </footer>
  </div>
  <UModal v-model="isOpen" class="fixed inset-0 flex items-center justify-center">
    <div class="p-8 bg-white rounded-lg shadow-md max-w-screen-md h-96 ">
      <div class="flex items-center gap-2">
      <div class="w-1/2 h-64 overflow-hidden flex items-center">
        <img class="w-full h-auto" src="~/assets/wechat-code.jpg" alt="微信捐赠">
      </div>
      <div class="w-1/2 h-64 overflow-hidden flex items-center">
        <img class="w-full h-auto" src="~/assets/alipay-code.jpg" alt="支付宝捐赠">
      </div>
    </div>
    <div class="text-center text-sm text-text dark:text-text-dark">感谢您的支持！</div>
    </div>
  </UModal>
  <UModal v-model="isOpen2" class="fixed inset-0 flex items-center justify-center">
    <div class="p-8 bg-white rounded-lg shadow-md max-w-screen-md h-96 flex items-center justify-center">
      <div class="w-1/2 h-64 overflow-hidden">
        <img class="w-full h-auto" src="~/assets/05-640.png" alt="公众号二维码">
      </div>
    </div>
  </UModal>
</template>

<style scoped>
.btn-primary {
  @apply inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary/90 transition-colors duration-200;
}
/* 新添加的样式 */
.btn-small {
  padding: 2px 5px;
  font-size: 12px;
  cursor: pointer;
}
</style>

<script setup lang="ts">
import BrowserInstallLink from '~/components/BrowserInstallLink.vue'
import { useBrowserExtensions } from '~/composables/useBrowserExtensions'

const { chromeUrl, edgeUrl, firefoxUrl, chromeInstalls, edgeInstalls, firefoxInstalls } = useBrowserExtensions()

useHead({
  title: '首页'
})

const currentYear = new Date().getFullYear()
const isOpen = ref(false)
const isOpen2 = ref(false)
</script>
