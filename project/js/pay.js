

function takeQRcode() {
    
    // var video = document.querySelector("#video");
    // if (navigator.mediaDevices.getUserMedia) {
    //   navigator.mediaDevices.getUserMedia({ video: true })
    //     .then(function (stream) {
    //       video.srcObject = stream;
    //     })
    //     .catch(function (err0r) {
    //       console.log("Something went wrong!");
    //     });
    // }

    let pScanner = null;
    (async () => {
      let scanner = await (pScanner = pScanner || Dynamsoft.DBR.BarcodeScanner.createInstance());
      scanner.onFrameRead = results => {if (results.length > 0) console.log(results)};
      scanner.onUnduplicatedRead = (txt, result) => {alert(txt);};
      await scanner.show();
    })();
    // var scanner = document.querySelector("#video");
    // let scanner = null;
    //     (async ()=>{
    //         scanner = await Dynamsoft.DBR.BarcodeScanner.createInstance();
    //         await scanner.setUIElement(document.getElementById('video'));
    //         scanner.onFrameRead = results => {console.log(results);};
    //         scanner.onUnduplicatedRead = (txt, result) => {alert(txt);};

    //         await scanner.updateVideoSettings({ video: { width: 400, height: 300, facingMode: "environment" } });
    //         await scanner.updateRuntimeSettings("speed"); // speed, balance, coverage
    //         let runtimeSettings = await scanner.getRuntimeSettings(); // get settings for modification
    //         // Specify which symbologies are to enabled
    //         runtimeSettings.barcodeFormatIds = Dynamsoft.DBR.EnumBarcodeFormat.BF_ONED | Dynamsoft.DBR.EnumBarcodeFormat.BF_QR_CODE;
    //         await scanner.updateRuntimeSettings(runtimeSettings);
    //         let scanSettings = await scanner.getScanSettings();
    //         // Disregard duplicated results found in a specified time period
    //         scanSettings.duplicateForgetTime = 20000;
    //         // Set a interval so that the CPU can relax
    //         scanSettings.intervalTime = 300;
    //         await scanner.updateScanSettings(scanSettings);
    //         await scanner.show();

    //         // scanner = await Dynamsoft.DBR.BarcodeScanner.createInstance();
    //         // scanner.onFrameRead = results => {console.log(results);};
    //         // scanner.onUnduplicatedRead = (txt, result) => {alert(txt);};
    //         // document.getElementById('video').appendChild(scanner.getUIElement());
    //         // await scanner.show();
    //     })();
}

// var resultContainer = document.getElementById('qr-reader-results');
// var lastResult, countResults = 0;

// function onScanSuccess(decodedText, decodedResult) {
//     if (decodedText !== lastResult) {
//         ++countResults;
//         lastResult = decodedText;
//         // Handle on success condition with the decoded message.
//         console.log(`Scan result ${decodedText}`, decodedResult);
//     }
// }

// var html5QrcodeScanner = new Html5QrcodeScanner(
//     "qr-reader", { fps: 10, qrbox: 250 });
// html5QrcodeScanner.render(onScanSuccess);

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



