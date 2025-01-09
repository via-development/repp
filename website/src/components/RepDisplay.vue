<template>
<div class="w-full mx-auto mt-36 overflow-visible px-4 max-w-[1040px]">
    <div class="flex flex-col md:flex-row gap-2">
    <div class="w-full md:w-1/3">
        <div class="bg-[#141516] rounded-xl drop-shadow-md">
        <div class="p-5 flex gap-2">
            <img src="../assets/discordlogo.png" alt="Discord Logo as an avatar" class="w-12 h-12 rounded">
            <div>
            <h1 class="text-white text-xl">Wumpus</h1>
            <p class="text-[#6B6B6B]">@wumpus</p>
            </div>
        </div>
        <div class="flex justify-between text-white bg-[#308E33] px-5 pt-2 pb-2 rounded-b-xl">
            <p>+74</p>
            <p>Reputation</p>
        </div>
        </div>

        <div class="mt-2 text-white bg-[#141516] h-64 rounded-xl p-5 drop-shadow-md hidden md:block">
        <h1 class="text-xl">Bio</h1>
        <p class="font-[Gothamb] mt-3">Hello there! I am excited to be a part of this server and am looking forward to making new friends!<br><br>I love anime<br>And cats<br>I want a girl friend</p>
        </div>
    </div>

    <div class="w-full md:w-2/3">
        <div class="w-full bg-[#141516] drop-shadow-md rounded-xl h-20 items-center">
        <div class="flex justify-evenly h-20 items-center text-white">
            <div class="flex gap-2">
            <img class="w-5 h-5" alt="Arrow Green" src="../assets/icons/arrowgreen.png">
            <p>5</p>
            </div>
            <div class="flex gap-2">
            <img class="w-5 h-5 rotate-180" alt="Arrow Red" src="../assets/icons/arrowred.png">
            <p>2</p>
            </div>
            <div class="flex gap-2">
            <img class="invert w-5 h-5" alt="Messages Sent" src="../assets/icons/email.png">
            <p>1.5k</p>
            </div>
            <div class="flex gap-2">
            <img class="w-5 h-5" alt="Total Kicks" src="../assets/repp.png">
            <p>1</p>
            </div>
            <div class="flex gap-2">
            <img class="invert w-5 h-5" alt="Total Timeouts" src="../assets/icons/timeout.png">
            <p>0</p>
            </div>
            <div class="flex gap-2">
            <img class="invert w-5 h-5" alt="Total Warnings" src="../assets/icons/warning.png">
            <p>2</p>
            </div>
        </div>
        </div>

        <div class="flex flex-col lg:flex-row gap-2 mt-2">
        <div class="bg-[#141516] hidden drop-shadow-md w-full rounded-xl p-5 lg:block">
            <h1 class="text-white text-xl">Top Channels</h1>
            <div class="mt-4">
            <ChannelVue ChannelName="General"/>
            <ChannelVue ChannelName="Apps"/>
            <ChannelVue ChannelName="Media"/>
            <ChannelVue ChannelName="Meme-chat"/>
            <ChannelVue ChannelName="Off-topic"/>
            </div>
        </div>
        <div class="bg-[#141516] drop-shadow-md h-full w-full rounded-xl p-5">
            <h1 class="text-white text-xl h-min">Recent Punishments</h1>
            <div class="mt-4">
            <ActionsVue ActionName="Ban"/>
            <ActionsVue ActionName="Warn"/>
            <ActionsVue ActionName="Warn"/>
            <ActionsVue ActionName="Timeout"/>
            </div>
        </div>
        </div>
    </div>
    </div>
</div>
</template>

<script>
    import ChannelVue from '@/components/Channel.vue'
    import ActionsVue from '@/components/Actions.vue'
    export default {
        name: 'DisplayRep',
        components: {
            ChannelVue,ActionsVue
        }
    }
</script>

