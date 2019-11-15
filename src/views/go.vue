<template>
    <div>
        <button @click="goclick">登陆</button>
    </div>
</template>
<script>
export default {
    methods:{
        goclick(){
            const det = 900*24*60*1000;
            const deta = new Date(+new Date + det)

            document.cookie = `add = true;abb = ${deta.toUTCString(det)}`

        }
    }
}
</script>