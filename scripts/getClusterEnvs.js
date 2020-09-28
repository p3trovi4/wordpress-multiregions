function getList(envName, items) {
    var result = [],
        index = 0,
        itemData,
        targetEnvNamePrefix;

    function dataExtractor(envName) {
        var envNameSeparator = "-",
            index,
            tmp;

        tmp = envName.split(envNameSeparator);
        index = tmp.pop();

        return {
            envName: envName, 
            envNamePrefix: tmp.join(envNameSeparator),
            index: parseInt(index, 10)
        };

    }

    function filter(data) {
        return data.envNamePrefix === targetEnvNamePrefix && 
                typeof data.index === "number" && !isNaN(data.index);
    }
   
    targetEnvNamePrefix = dataExtractor(envName).envNamePrefix; 

    for(var i=0, item; item = items[i]; i++) {
        itemData = dataExtractor(item);

        if (itemData && filter(itemData)) {
            result.push(itemData.envName);
            index = Math.max(index, itemData.index);
        }        
    }

    return {
        items       : result,
        nextIndex   : index + 1
    };
}

var resp = jelastic.environment.control.GetEnvs(appid, session);

if (resp.result != 0) return resp;

var data = getList(envName, resp.infos);

return data;
