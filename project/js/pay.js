
Dynamsoft.DBR.BarcodeScanner.organizationID = "100731799";
Dynamsoft.DBR.BarcodeReader.productKeys = "t0068NQAAAEa2vhEKG8ZfiSEzbWTHMdB3k8iXEU65DKVd3BncYIPvJPlni465ybIveVFFFdg3qugMursl41wKsk9q1waDWJQ=";    

let pScanner = null;
document.getElementById('cryto-button').onclick = async function () {
    try {
        document.getElementById('cryto-button').style.display = 'none';
        console.log('click');

        var element = document.createElement("video");
        element.id = "video"
        element.autoplay = true
        document.getElementById("container").appendChild(element);

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
            window.location = "/loading";
            // alert(txt);
        }

        await scanner.show();
    } catch (ex) {
        alert(ex.message);
        throw ex;
    }
};