<template>
  <div class="my-foot">
    <div class="form-group form-check">
      <input
        type="checkbox"
        class="form-check-input"
        id="footcheckbox"
        v-model="isAll"
      />
      <label class="form-check-label" for="footcheckbox">全选</label>
    </div>
    <!-- 合计 -->
    <div>
      <span>合计：</span>
      <span class="price">{{ AllPrice }}元</span>
    </div>
    <!-- 结算 -->
    <button type="button" class="foot-btn btn btn-primary">
      结算({{ AllCount }})
    </button>
  </div>
</template>

<script>
export default {
  props: {
    list: Array,
  },
  computed: {
    isAll: {
      set(val) {
        this.$emit("changeAll", val);
      },
      get() {
        return this.list.every((item) => item.goods_state === true);
      },
    },
    AllCount() {
      return this.list.reduce((sum, item) => {
        if (item.goods_state === true) {
          sum += item.goods_count;
        }
        return sum;
      }, 0);
    },
    AllPrice() {
      return this.list.reduce((sum, item) => {
        if (item.goods_state === true) {
          sum += item.goods_count * item.goods_price;
        }
        return sum;
      }, 0);
    },
  },
};
</script>

<style lang="less" scoped>
.my-foot {
  display: flex;
  position: fixed;
  z-index: 2;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 50px;
  border: 1px solid #ccc;
  align-items: center;
  justify-content: space-around;
  padding: 0 10px;
  background-color: #fff;
  .price {
    color: red;
    font-weight: 700;
    font-size: 14px;
  }
  .foot-btn {
    width: 100px;
    border-radius: 20px;
  }
}
</style>