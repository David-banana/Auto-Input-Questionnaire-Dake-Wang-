javascript: void (  
    (function () {  
        var hash = {};   
        var a = document.evaluate('//input[(@type="radio") and not(@value="0")]//@name',   
                                    document,   
                                    null,   
                                    XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE,   
                                    null);   
        if (a.snapshotLength){  
            for (var i = 0; i < a.snapshotLength; i++) {  
                if (!(a.snapshotItem(i).value in hash))   
                hash[a.snapshotItem(i).value] = 0;  
                hash[a.snapshotItem(i).value]++;  
            }  
            for (i in hash) {  
                document.evaluate('//input[(@type="radio")  and not(@value="0") and @name="' + i + '"]',   
                                    document,   
                                    null,   
                                    XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE,   
                                    null).snapshotItem(Math.floor(Math.random() * hash[i])).click();  
            }  
        }  
           
    var objs = document.getElementsByTagName("input");   
            objs[2].focus(); 
            age=Math.floor(Math.random()*31 + 19);   
            objs[2].value = age;   
            objs[2].blur();   

    var objs = document.getElementsByTagName("input");   
            objs[21].focus();
            var myArray = new Array();
            Array[0] = "三个月"
            Array[1] = "半年"
            Array[2] = "两年"
            arrayIndex= Math.floor(Math.random()*3);
            objs[21].value = Array[arrayIndex];
            objs[21].blur();
    var choose = document.getElementsByTagName("tr");
        for (var p = 0; p < choose.length; p++) {
        var num = 0
        if(choose[p].cells.length > 1)
        num=Math.floor(Math.random()*5);  
           choose[p].cells[num].click()  
        }
    })());
