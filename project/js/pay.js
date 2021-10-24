

Dynamsoft.DBR.BarcodeScanner.organizationID = "100731799";
Dynamsoft.DBR.BarcodeReader.productKeys = "t0068NQAAAEa2vhEKG8ZfiSEzbWTHMdB3k8iXEU65DKVd3BncYIPvJPlni465ybIveVFFFdg3qugMursl41wKsk9q1waDWJQ=";    

let pScanner = null;

document.getElementById('button').onclick = async function () {
    try {
        document.getElementById('button').style.display = 'none';

        var element = document.createElement("video");
        element.id = "video"
        element.autoplay = true
        document.getElementById("container").appendChild(element);

        document.body.style.backgroundImage = "url('/images/screens/empty.png')";

        let scanner = await (pScanner = pScanner || Dynamsoft.DBR.BarcodeScanner.createInstance());

        await scanner.setUIElement(document.getElementById('video'));
        scanner.onFrameRead = results => {
            console.log("Barcodes on one frame:");
            for (let result of results) {
                console.log(result.barcodeFormatString + ": " + result.barcodeText);
            }
        };

        scanner.onUnduplicatedRead = (txt, result) => {
            if (txt == 'ethereum:0x4BFDE6Fc70A02da2C6fbCAb715b6f75705be1a4f') {
                window.location = "/loading";
            } else {
                window.location = "/error"
            }
        }

        await scanner.show();
    } catch (ex) {
        alert(ex.message);
        throw ex;
    }
};