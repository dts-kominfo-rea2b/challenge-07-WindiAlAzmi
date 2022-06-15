const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme

const jmlhData = (data, indexData) => {

    return new Promise((resolve, reject) => {
      if(data === null || data === "" ){
        reject("data not found!")
      }else {
        let result = 0;
         for(let i = 0; i < data.length; i++){
           if(indexData === data[i]['hasil']){
             result++;
           }
         }
         resolve(result);
      }
    })
}
const promiseOutput = async(indexData) => {
          
       
      const theaterIXX = await promiseTheaterIXX()
        .then((dataHasil) => jmlhData(dataHasil, indexData));


      const theaterVGC = await promiseTheaterVGC()
        .then((dataHasil) => jmlhData(dataHasil, indexData));


      const final =  theaterVGC + theaterIXX;
      return final;
    
}

module.exports = {
  promiseOutput,
};
