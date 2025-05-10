import { ref, onMounted } from 'vue'

export const useBrowserExtensions = () => {
  const chromeUrl = 'https://chromewebstore.google.com/detail/cckggnbnimdbbpmdinkkgbbncopbloob'
  const edgeUrl = 'https://microsoftedge.microsoft.com/addons/detail/lnfifinboijcjoalhfiaelocbipmfbje'
  const firefoxUrl = 'https://addons.mozilla.org/en-US/firefox/addon/%E5%85%AC%E4%BC%97%E5%8F%B7%E6%96%87%E7%AB%A0%E7%BC%96%E8%BE%91%E5%99%A8/'

  const chromeInstalls = ref(810)
  const edgeInstalls = ref(1000)
  const firefoxInstalls = ref(70)

  // 模拟获取安装数据
  const fetchInstallCounts = async () => {
    try {
      // 这里使用模拟数据，实际项目中应该从后端API获取
      // chromeInstalls.value = 780
      // edgeInstalls.value = 1000
      // firefoxInstalls.value = 70
    } catch (error) {
      console.error('获取插件安装数据失败:', error)
    }
  }

  // 在组件挂载时获取数据
  onMounted(fetchInstallCounts)

  return {
    chromeUrl,
    edgeUrl,
    firefoxUrl,
    chromeInstalls,
    edgeInstalls,
    firefoxInstalls
  }
}
