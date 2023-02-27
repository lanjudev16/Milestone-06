fetch("js/data.json").then(res=>res.json()).then(result=>console.log(result.result[0].name.common));


