let httpClients =  () => {
    this.get = function (aURL, aCallback) {
        let anHttpRequest = new XMLHttpRequest();
        anHttpRequest.onreadystatechange = () => {
            if (anHttpRequest.readyState ==4 && anHttpRequest.status == 200)
                aCallback(anHttpRequest.responseText);
        }
        anHttpRequest.open("GET", aURL, true);
        
    }
};