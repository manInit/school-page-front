var xhr = new XMLHttpRequest();

var base = 'http://localhost:8080'
export function get_req(url){
    try{
        xhr.open( "GET", base+url, false); // false for synchronous request
        xhr.send();
    }catch{
        return [{}]
    }

    return xhr.response === ''? [{}] : JSON.parse(xhr.response)
}

export function post_req(url, data){
    xhr.open("POST", base+url)
    xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    xhr.send(data);
}

export function del_req(url, data){
    xhr.open("DELETE", base+url)
    xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    // xhr.onload = () => {
    //     if (xhr.status !== 200) console.log(`Ошибка ${xhr.status}: ${xhr.statusText}`)
    // }
    xhr.send(data);
}

export function put_req(url, data){
    xhr.open("PUT", base+url)
    xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    xhr.send(data);
}

// xhr.onload = function() {
//     if (xhr.status !== 200) { // анализируем HTTP-статус ответа, если статус не 200, то произошла ошибка
//       alert(`Ошибка ${xhr.status}: ${xhr.statusText}`); // Например, 404: Not Found
//     } else { // если всё прошло гладко, выводим результат
//       alert(`Готово, получили ${xhr.response.length} байт`); // response -- это ответ сервера
//     }
//   };

//   xhr.onprogress = function(event) {
//     if (event.lengthComputable) {
//       alert(`Получено ${event.loaded} из ${event.total} байт`);
//     } else {
//       alert(`Получено ${event.loaded} байт`); // если в ответе нет заголовка Content-Length
//     }
  
//   };
  
//   xhr.onerror = function() {
//     alert("Запрос не удался");
//   };

// const https = require('http');

// const options = {
//   hostname: 'localhost',
//   port: 8080,
//   path: '/api/competition',
//   method: 'GET',
// };

// const req = https.request(options, res => {
//   console.log(`statusCode: ${res.statusCode}`);

//   res.on('data', d => {
//     process.stdout.write(d);
//   });
// });

// req.on('error', error => {
//   console.error(error);
// });

// req.end();