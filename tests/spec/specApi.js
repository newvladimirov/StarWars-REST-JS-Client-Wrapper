

describe('StarWars API', function(){

	var api = new swApi();

	var checkKeysInObj = function(keys, obj){

		for(var i = 0; i < keys.length; i++){

			expect(obj[keys[i]]).toBeDefined();
		}
	}


	it('Get species', function(done){

		api.getSpecies(1, function(data){


			expect(data.error).toBe(false);
			checkKeysInObj(['count', 'next', 'previous', 'results'], data);

			done();
		});

	});

	it('Get species id = 4', function(done){

		api.getSpecie(4, function(data){

			expect(data.error).toBe(false);
			checkKeysInObj(['name',
				 'classification',
				 'designation',
				 'average_height',
				 'skin_colors',
				 'eye_colors',
				 'average_lifespan',
				 'homeworld',
				 'language',
				 'people',
				 'films'
				 ], data);

			done();
		});
	});


	it('Get vehicles', function(done){

		api.getVehicles(1, function(data){


			expect(data.error).toBe(false);
			checkKeysInObj(['count', 'next', 'previous', 'results'], data);

			done();
		});

	});

	it('Get vehicles id = 4', function(done){

		api.getVehicle(4, function(data){

			expect(data.error).toBe(false);
			checkKeysInObj(['name',
				 'model',
				 'manufacturer',
				 'cost_in_credits',
				 'length',
				 'crew',
				 'passengers',
				 'cargo_capacity',
				 'consumables',
				 'vehicle_class',
				 'pilots',
				 'films'
				 ], data);

			done();
		});
	});




	it('Get films', function(done){

		api.getFilms(1, function(data){


			expect(data.error).toBe(false);
			checkKeysInObj(['count', 'next', 'previous', 'results'], data);

			done();
		});

	});

	it('Get film id = 2', function(done){

		api.getFilm(2, function(data){

			expect(data.error).toBe(false);
			checkKeysInObj(['title',
				 'episode_id',
				 'opening_crawl',
				 'director',
				 'producer',
				 'characters',
				 'planets',
				 'starships',
				 'vehicles',
				 'species'
				 ], data);

			done();
		});
	});




	it('Get starships', function(done){

		api.getStarships(1, function(data){


			expect(data.error).toBe(false);
			checkKeysInObj(['count', 'next', 'previous', 'results'], data);

			done();
		});

	});

	it('Get starship id = 2', function(done){

		api.getStarship(2, function(data){

			expect(data.error).toBe(false);
			checkKeysInObj(['name',
				 'model',
				 'manufacturer',
				 'cost_in_credits',
				 'length',
				 'max_atmosphering_speed',
				 'crew',
				 'passengers',
				 'cargo_capacity',
				 'consumables',
				 'hyperdrive_rating',
				 'MGLT',
				 'starship_class',
				 'pilots',
				 'films'
				 ], data);

			done();
		});
	});



	it('Get planets', function(done){

		api.getPlanets(1, function(data){


			expect(data.error).toBe(false);
			checkKeysInObj(['count', 'next', 'previous', 'results'], data);

			done();
		});

	});

	it('Get planet with id = 2', function(done){

		api.getPlanet(2, function(data){

			expect(data.error).toBe(false);
			checkKeysInObj(['name',
				 'rotation_period',
				 'orbital_period',
				 'diameter',
				 'climate',
				 'gravity',
				 'terrain',
				 'surface_water',
				 'population',
				 'residents',
				 'films'
				 ], data);

			done();
		});
	});



	it('Get People', function(done){

		api.getPeople(1, function(data){

			expect(data.error).toBe(false);
			checkKeysInObj(['count', 'next', 'previous', 'results'], data);

			done();
		});
	});


	it('Person id = 2', function(done){

		api.getPerson(2, function(data){
			
			checkKeysInObj(
						[
							'name', 
							'height', 
							'mass', 
							'hair_color', 
							'skin_color', 
							'eye_color', 
							'birth_year', 
							'gender', 
							'homeworld', 
							'films',
							'species',
							'vehicles',
							'starships'
						], data);

			expect(data.error).toBe(false);

			done();
		});

	});

});