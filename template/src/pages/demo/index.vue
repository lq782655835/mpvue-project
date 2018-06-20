<template>
    <div class="p-demo">
        <div class="title">项目安装
            <p>1.npm install安装依赖</p>
            <p>2.小程序项目详情设置：勾除ES6转ES5（重要）</p>
        </div>
        <div class="title">vue基础语法
            <p>支持vue双向绑定，简单js计算</p>
        </div>
        this is demo page
        <p>{{field1}}   {{1+1}}{{1+1 ? 'is true' : 'is false'}}</p>
        <div class="title">scss，scss-resource能力
            <p>npm install sass-loader node-sass sass-resources-loader</p>
        </div>
        <div class="title">
            图片路径方式
        </div>
        <img class="u-img" src="/static/img/camera.png"/>
        <img class="u-img" src="../../assets/img/camera.png"/>
        <div class="title">
            Vuex Store
            <p>store绑定到vue原型链，使得各页面共享</p>
        </div>
        {{str}} <button @click="changeStore">修改store</button>
        <div class="title">
            Http
            <p>flyio框架，可增加api层，或者直接绑定到$http</p>
        </div>
        <div v-for="(item, index) in list" :key="item.id">
            <p>id: {{item.id}}</p>
            <p>author_id: {{item.author_id}}</p>
        </div>
        <div class="title">
            wx promise
            <p>npm install minapp-api-promise</p>
        </div>
        <div>
            <p>winWidth: {{sysInfo.windowWidth}}</p>
        </div>
      </div>
</template>

<script>
import {getCNodeAllTab} from '@/utils/api'

export default {
    data () {
      return {
          field1: 'test field',
          list: [],
          sysInfo: {}
      }
    },
    computed: {
        str () {
          return this.$store.state.demo.str || 'undefined'
        }
    },
    async mounted () {
        this.getSysInfo()

        // this.getList() // $http方式
        let res = await getCNodeAllTab() // api方式
        this.list = res.data
    },
    onReachBottom() {
        console.log('searchScrollLower')
    },
    onPullDownRefresh() {
        console.log('PullDownRefresh')
    },
    onPageScroll () {
      console.log('onPageScroll')
    },
    methods: {
        changeStore () {
            this.$store.commit('demo/setStr', 'after state')
        },

        async getList () {
            let res = await this.$http.get('topics', {
                tab: 'all',
                page: 1,
                limit: 5,
            })
            this.list = res.data
        },

        async getSysInfo () {
            this.sysInfo = await this.$wxp.getSystemInfo()
        }
    }
}
</script>

<style lang="scss">
.p-demo {
    margin: 20px;
    font-size: 14px;
    color: $primary;

    .u-img {
        width: 80px;
        height: 50px;
    }

    .title {
        margin: 20px 0;
        color: green;

        p {
            font-size: 14px;
        }
    }
}


</style>


