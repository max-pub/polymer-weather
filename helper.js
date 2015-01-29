        function setVal(obj, attr, key, val){
            var dot = document.querySelector(obj);
            var tmp = dot[attr];
            tmp[key] = val;
            dot.setAttribute(attr,JSON.stringify(tmp) );
        }
