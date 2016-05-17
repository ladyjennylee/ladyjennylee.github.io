var bookDirectives=angular.module('bookDirectives',[]) ;
bookDirectives.directive('myModal',function(){
	return{
        scope:{
            control:'=',
            data:'='
            
        },
        restrict:'E',
		templateUrl:'book_add.html',
        replace: true,
        compile:function(elem,attrs){
            var linkFun=function(scope,element,attrs)
       {
            var controlFunc={
                showModal:function(){
                  
                    element.modal('show');
                    scope.data.title="";
                    scope.data.author="";
                    scope.data.discription="";
                    /*scope.data.publish_time="";*/
                    scope.data.genre="";
                },
                hideModal:function(){
                    element.modal('hide');
                }
               
            };
            if(scope.control){
                angular.extend(scope.control,controlFunc);
            }
            else{
                scope.control=controlFunc;
            };
           scope.save=function(){
               var temp={"title":scope.data.title,"author":scope.data.author,"discription":scope.data.discription,"publish_time":scope.data.publish_time,"genre":scope.data.genre};
               scope.data.push(temp);
               element.modal('hide');
           }
        };
            return {pre:linkFun};
                 
                 
     },
    }
})
bookDirectives.directive('editModal',function(){
	return{
        scope:{
            control:'=',
            book:'='
            
            
            
        },
        restrict:'E',
		templateUrl:'book_edit.html',
        replace: true,
        compile:function(elem,attrs){
            var linkFun=function(scope,element,attrs)
       {
            var controlFunc={
                showModal:function(){
                  
                    element.modal('show');
                   
                },
                hideModal:function(){
                    element.modal('hide');
                }
               
            };
            if(scope.control){
                angular.extend(scope.control,controlFunc);
            }
            else{
                scope.control=controlFunc;
            };
           /*scope.save=function(){
               var temp={"title":scope.data.title,"author":scope.data.author,"discription":scope.data.discription};
               scope.data.push(temp);
               element.modal('hide');
           }*/
        };
            return {pre:linkFun};
                 
                 
     },
    }
})
