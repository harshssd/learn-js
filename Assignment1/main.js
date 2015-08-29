var Model = function(initialValues) {
    this.data = initialValues;
}

Model.prototype.put = function(key, value) {
    if(key in this.data) {
     	this.data[key] === value || this.data['change']();        
    }else{
        this.data['add']();   
    }
    this.data[key] = value;
}

Model.prototype.get = function(key) {
 	 return this.data[key];  
}

Model.prototype.on = function(event, callback) {
 	 this.data[event] = callback;  
}


// ---------Testing the Model ----------

var myModel = new Model({'z':3});

myModel.on('add', function(){
 	alert("added");   
});
myModel.on('change', function(){
 	alert("changed");   
});

// Test the Model
myModel.put('a', 1);  // added
alert(myModel.get('a'));  // 1
myModel.put('b', 2);   // added
myModel.put('a', 1);   // 
myModel.put('a', 4);   // changed