<template>
<div class="flex text-white justify-between max-w-[1040px] px-4 mx-auto pt-10">
  <div class="flex gap-2">
    <img class="bg-[#161416] w-10 h-10 p-2 rounded shadow-md" alt="REPP Logo" src="../assets/repp.png">
    <h3 class="text-base bg-[#161416] p-2 px-4 rounded shadow-md cursor-pointer" @click="handleClick2 ">{{ text2 }}</h3>
  </div>

  <div class="">
    <h3 class="text-base bg-[#161416] p-2 px-4 rounded shadow-md cursor-pointer" @click="handleClick">{{text1}}</h3>
  </div>
</div>
</template>

<script>
export default {
  name: 'NavigationBar',
  data() {
    return {
      text1:"Login",
      text2:"My Servers"
    }
  },
  methods: {
    handleClick() {
      this.text1 = "Coming soon!";

      setTimeout(() => {
        this.text1 = "Login";
      }, 1000);
    },
    handleClick2() {
      this.text2 = "Coming soon!";

      setTimeout(() => {
        this.text2 = "My Servers";
      }, 1000);
    },
  }

}
</script>

