<template>
  <div class="my-count">
    <button type="button" class="btn btn-light" @click="obj.goods_count++">
      +
    </button>
    <input type="text" class="form-control inp" v-model="obj.goods_count" />
    <button
      :disabled="obj.goods_count === 1"
      class="btn btn-light"
      @click="obj.goods_count > 1 && obj.goods_count--"
    >
      -
    </button>
  </div>
</template>

<script>
export default {
  name: "WorkspaceJsonMyCount",
  props: {
    obj: {
      type: Object,
    },
  },
  data() {
    return {};
  },

  mounted() {},

  methods: {},
  watch: {
    obj: {
      deep: true,
      handler() {
        if (this.obj.goods_count < 1) {
          this.obj.goods_count = 1;
        }
      },
    },
  },
};
</script>

<style lang="less" scoped>
.my-count {
  display: flex;
  .inp {
    width: 55px;
    text-align: center;
    margin: 0 10px;
  }
  // .btn,.inp{
  //   transform: scale(0.9);
  // }
}
</style>