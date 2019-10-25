<template>
<van-popup v-model="startTimeshow" position="bottom" :overlay="true">
      <!-- <van-datetime-picker
        @change="Change"
        @confirm="confirm"
        v-model="currentDate"
        type="date"
      /> -->
    </van-popup>
</template>

<script>
// export default {
//   name: 'Time',
//   data() {
//     return {
//       startTimeshow: true,
//       currentDate: new Date()
//     }
//   },
//   methods: {
//     Change () {
//       var date = this.currentDate
//       var seperator1 = "-"
//       var seperator2 = ":"
//       var month = date.getMonth() + 1
//       var strDate = date.getDate()
//       if (month >= 1 && month <= 9) {
//         month = "0" + month
//       }
//       if (strDate >= 0 && strDate <= 9) {
//         strDate = "0" + strDate
//       }
//       // console.log(this.currentdate)
//       this.currentdate =
//         date.getFullYear() +
//         seperator1 +
//         month +
//         seperator1 +
//         strDate +
//         " " +
//         "00" +
//         seperator2 +
//         "00" +
//         seperator2 +
//         "00"
//         // getValues()
//         console.log(this.currentdate)
//     },
//     confirm (value) {
//       var date = value;
//             var m = date.getMonth() + 1;
//             var d = date.getDate();
//             if (m >= 1 && m <= 9) {
//                 m = "0" + m;
//             }
//             if (d >= 0 && d <= 9) {
//                 d = "0" + d;
//             }
//             var timer = date.getFullYear() + "-" + m + "-" + d
//             console.log(timer)
//     }
//   }
// }
</script>

<style>

</style>
