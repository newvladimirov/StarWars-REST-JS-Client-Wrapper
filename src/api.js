

var swApi = function(){
    "use strict"; 
    
    var apiUrl = 'http://swapi.co/api/';
    var emptyFn = function(){};


    var sendAjaxRequest = function(url, callback){
        
        callback = callback || emptyFn;
        var req = new XMLHttpRequest();
            
        req.onreadystatechange = function(event){
            

            if(this.readyState === 4){

                var result = {};
                
                if(this.status === 200){
                    
                    result       = JSON.parse(this.responseText);
                    result.error = false;
                }
                else{
                    
                    result.error    = true;
                    result.status   = this.status;
                    result.text     = this.statusText;
                }
                
                callback(result);
            }
        }

        req.open('get', url, true);
        req.setRequestHeader('Accept', 'application/json');
        req.send();
      
    }
    
 
    var getSingleResource = function(id, method, callback){
        
        if(isNaN(id)){

            throw new Error('Wrong ID');
        }

        sendAjaxRequest(apiUrl + method + '/' + id + '/', callback);
    }


    var getPagedResource = function(page, method, callback){

        if(isNaN(page)){

            throw new Error('Wrong page number');
        }
        sendAjaxRequest(apiUrl + method +'/?page=' + page, callback);
    }

    /**
    API 
    **/

    this.getPeople = function(page, callback){

        getPagedResource(page, 'people', callback);
    }
 
    this.getPerson = function(id, callback){

        getSingleResource(id, 'people', callback);
    }


    this.getPlanets = function(page, callback){

        getPagedResource(page, 'planets', callback);
    }

    this.getPlanet = function(id, callback){

        getSingleResource(id, 'planets', callback);
    }


    this.getStarships = function(page, callback){

        getPagedResource(page, 'starships', callback);
    }

    this.getStarship = function(id, callback){

        getSingleResource(id, 'starships', callback);
    }


    this.getFilms = function(page, callback){

        getPagedResource(page, 'films', callback);
    }

    this.getFilm = function(id, callback){

        getSingleResource(id, 'films', callback);
    }


    this.getVehicles = function(page, callback){

        getPagedResource(page, 'vehicles', callback);
    }

    this.getVehicle = function(id, callback){

        getSingleResource(id, 'vehicles', callback);
    }


    this.getSpecies= function(page, callback){

        getPagedResource(page, 'species', callback);
    }

    this.getSpecie = function(id, callback){

        getSingleResource(id, 'species', callback);
    }

  
};


//swApi();
