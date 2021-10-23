

function takeQRcode() {
    
    var video = document.querySelector("#video");
    if (navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices.getUserMedia({ video: true })
        .then(function (stream) {
          video.srcObject = stream;
        })
        .catch(function (err0r) {
          console.log("Something went wrong!");
        });
    }
}

// paypal.Buttons({
//     style: {
//         layout: 'vertical',
//         color:  'black',
//         shape:  'pill',
//         label:  'checkout',
//         tagline: 'false',
//         size: 'responsive'
//     },
    
//     createOrder:function(data, actions) {
//         return actions.order.create({
//             purchase_units: [{
//               amount: {
//                 value: $('#paypal-price').text()
//               }
//             }]
//           });
//     },

//     onApprove:function(data, actions) {
//         return actions.order.capture().then(function(detail) {
//             console.log(detail);
//         });
//     }
// }).render('#paypal-button');



