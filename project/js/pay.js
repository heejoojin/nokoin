
Dynamsoft.DBR.BarcodeScanner.organizationID = "100731799";
Dynamsoft.DBR.BarcodeReader.productKeys = "t0068NQAAAEa2vhEKG8ZfiSEzbWTHMdB3k8iXEU65DKVd3BncYIPvJPlni465ybIveVFFFdg3qugMursl41wKsk9q1waDWJQ=";
let pScanner = null;
document.getElementById('button').onclick = async function () {
    try {
        let scanner = await (pScanner = pScanner || Dynamsoft.DBR.BarcodeScanner.createInstance());
        /* 
         * onFrameRead is triggered once each frame is read. 
         * There can be one or multiple barcodes on each frame.
         */
        await scanner.setUIElement(document.getElementById('video'));
        scanner.onFrameRead = results => {
            console.log("Barcodes on one frame:");
            for (let result of results) {
                console.log(result.barcodeFormatString + ": " + result.barcodeText);
            }
        };

        /* 
         * onUnduplicatdRead is triggered once a new barcode is found. 
         * The amount of time that the library 'remembers' the found barcode is defined by duplicateForgetTime 
         * in the ScanSettings interface of the BarcodeScanner class. By default that is set to 3000 ms (or 3 secs) 
         */
        scanner.onUnduplicatedRead = (txt, result) => {
            alert(txt);
            console.log("Unique Code Found: " + result);
        }
        await scanner.show();
    } catch (ex) {
        alert(ex.message);
        throw ex;
    }
};

// function takeQRcode() {
    
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
    // 

    
    

    // let scanner = null;
    // (async () => {
    //   let scanner = await Dynamsoft.DBR.BarcodeScanner.createInstance();
    //   await scanner.setUIElement(document.getElementById('video'));
    //   // await scanner.setResolution(400, 300);
    //   scanner.onFrameRead = results => {if (results.length > 0) console.log(results)};
    //   // txt = user id
    //   scanner.onUnduplicatedRead = (txt, result) => {alert(txt);};
    //   await scanner.show();
    // })();
// }