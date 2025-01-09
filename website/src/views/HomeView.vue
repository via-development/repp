<template>
  <div class="backgroundheroclass w-full h-screen bg-cover bg-center overflow-visiable relative">
    <NavigationBar/>
    <div class="mx-auto text-white mt-24 text-center md:w-[600px]">
      <h1 class="text-5xl">Empower Your Members to Define Themselves</h1>
      <p class="font-[Gothamb] text-2xl mt-6 mb-10">REPP gives you a clear overview of each member's impact on your server.</p>

      <a target=”_blank” href="/invite" class="bg-white text-[#7000FF] p-3 px-8 text-xl rounded">Invite REPP</a>
    </div>

    <DisplayRep/>
  </div>

  <div class="max-w-[1040px] px-4 mx-auto mt-[400px]">

    <!-- <h1 class="text-white text-5xl text-center">Features</h1> -->
      <div class="absolute m-0 right-0 z-[-1]">
        <img src="../assets/purpleglow.png" alt="Purple Glow" class="object-cover select-none pointer-events-none">
      </div>
      <div class="mt-[500px] flex content-center">
        <div class=" md:mt-52 text-left">
          <h2 class="text-2xl text-[#B77FFF]">Every Interaction Matters</h2>
          <h1 class="text-white text-3xl mt-4">Repp Generates Member Reputation</h1>
          <p class="text-white font-[Gothamb] text-xl mt-4 md:w-3/5">Repp generates your server members a reputation score based on how they interact with your server:</p>
          <ul class="block mt-3 mb-10 ml-4 text-white font-[Gothamb]">
            <li class="my-6">Message Activity</li>
            <li class="my-6">Moderation Punishments</li>
            <li class="my-6">Public Opinion</li>
          </ul>
          <a target=”_blank” href="/invite" class="bg-white text-[#7000FF] p-3 md:px-8 text-xl rounded hover:bg-none hover:border-2 border-none md:inline-block md:w-auto w-full block text-center">Invite REPP</a>
        </div>
      </div>

      <div class="mt-96 text-left">
        <h2 class="text-2xl text-[#B77FFF]">Rewards</h2>
        <h1 class="text-white text-3xl mt-2">Give Roles Based on Reputation</h1>
        <p class="text-white font-[Gothamb] text-xl mt-4 mb-4 md:w-3/5">Reward your members with a positive reputation and punish members with negative reputation with custom set roles! Whenever a member reaches a score, they will be granted the role automatically.</p>
        <a target=”_blank” href="/invite" class="bg-white text-[#7000FF] p-3 md:px-8 text-xl rounded hover:bg-none hover:border-2 border-none md:inline-block md:w-auto w-full block text-center">Invite REPP</a>
      </div>
      <div class="absolute m-0 left-0 z-[-1]">
        <img src="../assets/blueglow.png" alt="Blue Glow" class="object-cover select-none pointer-events-none">
      </div>

      <div class="mt-96 text-left">
        <h2 class="text-2xl text-[#B77FFF]">Member Scoring</h2>
        <h1 class="text-white text-3xl mt-2">Each Interaction Matters</h1>
        <p class="text-white font-[Gothamb] text-xl mt-4 mb-4 md:w-3/5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <a target=”_blank” href="/invite" class="bg-white text-[#7000FF] p-3 md:px-8 text-xl rounded hover:bg-none hover:border-2 border-none md:inline-block md:w-auto w-full block text-center">Invite REPP</a>
      </div>
      
      

  </div>
  <div class="px-4">
    <div class="cta max-w-[700px] mx-auto mt-80 p-12 text-center rounded-xl">
      <h1 class="text-white text-4xl mb-10">Ready to Get Started?</h1>
      <a target=”_blank” href="/invite" class="bg-white text-[#7000FF] p-3 px-8 text-xl rounded">Invite REPP</a>
    </div>
  </div>
<FooterVue/>

</template>

<script>

import NavigationBar from '@/components/Navigation.vue'
import DisplayRep from '@/components/RepDisplay.vue'
import FooterVue from '@/components/Footer.vue'
export default {
  name: 'HomeView',
  components: {
    NavigationBar,DisplayRep,FooterVue
  }
}
</script>
