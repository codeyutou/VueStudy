<template>
  <div>
  
    <!--selector-->
    <div class="clearfix selector">
      <div class="type-wrap logo">
        <div class="fl key brand">品牌</div>
        <div class="value logos">
          <ul class="logo-list">
            <li v-for="(trades, index) in trademarkList" :key="trades.tmId" @click="breadTrade(trades)">
              {{ trades.tmName }}
            </li>
          </ul>
        </div>
        <div class="ext">
          <a href="javascript:void(0);" class="sui-btn">多选</a>
          <a href="javascript:void(0);">更多</a>
        </div>
      </div>
      <div
        class="type-wrap"
        v-for="(attrs, index) in attrsList"
        :key="attrs.attrId"
      >
        <div class="fl key">{{ attrs.attrName }}</div>
        <div class="fl value">
          <ul class="type-list">
            <li v-for="(attrvalues, index) in attrs.attrValueList" :key="index" @click="breadAttr(attrs,attrvalues)">
              <a>{{ attrvalues }}</a>
            </li>
          </ul>
        </div>
        <div class="fl ext"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SearchInfo",
  props: ["trademarkList", "attrsList"],
  methods:{
    breadTrade(trade){
      this.$emit('breadTrade',trade)
    },
    breadAttr(attrs,attrvalues){
      this.$emit('breadAttr',attrs,attrvalues)
    }
  }
};
</script>

<style>
</style>