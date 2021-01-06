
//封装时间格式话
  function gsh(newdate){

      let year=newdate.getFullYear()
      let month=newdate.getMonth()+1
      let ri=newdate.getDate()
      let hours=newdate.getHours()
      let minutes=newdate.getMinutes()
      let seconds=newdate.getSeconds()
     let result=`${year}年${month}月${ri}日${hours}时${minutes}分${seconds}秒`
     return result

  }
//   console.log(gsh())

  module.exports={
       a:gsh
  }