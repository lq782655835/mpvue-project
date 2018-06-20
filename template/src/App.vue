<script>
export default {
  created{{#unless_eq lintConfig "airbnb"}} {{/unless_eq}}() {
    // 调用API从本地缓存中获取数据
    const logs = wx.getStorageSync('logs') || []{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
    logs.unshift(Date.now()){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
    wx.setStorageSync('logs', logs){{#if_eq lintConfig "airbnb"}};{{/if_eq}}

    console.log('app created and cache logs by setStorageSync'){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
  }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
}{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
</script>

<style>
@import '~@/assets/css/global.css';
</style>
