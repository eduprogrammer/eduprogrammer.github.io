class FenixCalculator {

    constructor(numArray) {
        this.numArray = numArray;
    }

    secondDegreeEq() {
    
    let a = this.numArray[0];
    let b = this.numArray[1];
    let c = this.numArray[2];

    if(a == 0) {

        return undefined;

    } else if(b == 0 && c != 0) {
        
        var toRoot = (c > 0) ? -Math.abs(c) : Math.abs(c);

        if(toRoot < 0) {
            
            toRoot  /= a;
            toRoot = Math.abs(toRoot);
            
            return {
                "rootOne" : -Math.sqrt(toRoot) + "i",
                "rootTwo" : Math.sqrt(toRoot) + "i"
            };


        } else {

            return {
                "rootOne" : -Math.sqrt(toRoot),
                "rootTwo" : Math.sqrt(toRoot)
            };
        } 
        
        
     } else if(b != 0 && c != 0) {
            
            var delta = ((b**2) - (4 * a * c));
            var invB = (b > 0) ? -Math.abs(b) : Math.abs(b);

            if(delta < 0) {
                
                var invDelta = Math.abs(delta);
                invDelta = Math.sqrt(invDelta);


                return {
                    "rootOne" : (invB / (2 * a)) + " + " + (invDelta / (2 * a)) + "i",
                    "rootTwo" : (invB / (2 * a)) + " - " + (invDelta / (2 * a)) + "i",
                };

            } else {
                
                var normalRootDelta = Math.sqrt(delta);

                return {
                    "rootOne" : ((invB - normalRootDelta) / (2 * a)),
                    "rootTwo" : ((invB + normalRootDelta) / (2 * a))
                };

            }

        }

}


    statistical() {

        var medRes, sortedArray;

        var sum = 0;
        const count = this.numArray.length;
        
        sortedArray = this.numArray;
        sortedArray.sort(function (a,b) {
            return a - b;
        });        
        
        for(let i of this.numArray) {
            sum += parseFloat(i);
        }

        if(count % 2 == 0) {
            var firstIndex = count / 2;
            firstIndex -= 1;
            var secondIndex = firstIndex + 1;
            medRes = ((sortedArray[firstIndex] + sortedArray[secondIndex]) / 2);

            
        } else {
            var div = count / 2;
            var index = Math.floor(div);
            medRes = sortedArray[index];
        }

        let curMean = sum / count;
        var variance = 0, variance2 = 0, cv = 0, cv2 = 0, kurtosis = 0, kurtosis2 = 0;
        var skewness = 0, skewness2 = 0;

        for(let number of this.numArray) {

            var x = ((number - curMean) ** 2);
            var k = ((number - curMean) ** 4);
            var s = ((number - curMean) ** 3);
            variance += x;
            kurtosis += k;
            skewness += s;
        }

        variance2 = variance;
        variance /= count;
        variance2 /= (count - 1);

        cv = ((Math.sqrt(variance) / curMean) * 100) + "%";
        cv2 = ((Math.sqrt(variance2) / curMean) * 100) + "%";

        skewness2 = skewness;
        skewness /= count;
        skewness /= (variance * Math.sqrt(variance));
        skewness2 /= (count - 1);
        skewness2 /= (variance2 * Math.sqrt(variance2));
        

        kurtosis2 = kurtosis;
        kurtosis /= count;
        kurtosis /= (variance ** 2);
        kurtosis2 /= (count - 1);
        kurtosis2 /= (variance2 ** 2);

        return {
            
            "mean" : sum / count,
            "med" : medRes,
            "variancePop" : variance,
            "stdvPop" : Math.sqrt(variance),
            "varianceSp" : variance2,
            "stdvSp" : Math.sqrt(variance2),
            "cvPop" : cv,
            "cvSp" : cv2,
            "skewnessPop" : skewness,
            "skewnessSp" : skewness2,
            "kurtosisPop" : kurtosis,
            "kurtosisSp" : kurtosis2
        };

    }

    simpleInterest() {
        var c = this.numArray[0];
        var i = this.numArray[1];
        var t = this.numArray[2];

        var j = ((c * i * t) / 100);

        return {
            "juros" : j,
            "montante" : c + j
        }
    }

    compoundInterest() {
        var c = this.numArray[0];
        var i = this.numArray[1];
        var n = this.numArray[2];

        var m = (c * ((1 + (i / 100)) ** n));


        return {
            "juros" : m - c,
            "montante" : m
        }
    }


}

