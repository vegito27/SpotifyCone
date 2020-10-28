

export const initialState={
	user:null,
	playlists:[],
	playing:false,
	item:null,
    token:'BQCv4rzxiBmrN_bHz1sZdEifH5Y3jj_vLapKFiVgM95d7Lppe59LRLLWy4RPSz-5XKBBNgd0-IKp05ay9VSzHqm3Cgs_MG2iJ9jAHXDyLS2NLJ5H1ghd9iG6wktIOZfUkHJsGD2YgirphHTAewBhvwrKD8Xx34fH-LUzBds8QzqvVBEMedh5'
  };

const reducer=(state,action)=>{

	console.log(action)

	switch(action.type){

		case "SET_USER":
		return {
			...state,
			user:action.user
		};

		case "SET_TOKEN":
		return {
			...state,
			token:action.token
		};

		case "SET_PLAYLISTS":
		return{
			...state,
			playlists:action.playlists
		}

		case "SET_DISCOVER_WEEKLY":
		return{
			...state,
			discover_weekly:action.discover_weekly 
		}

		default:
		    return state;
	}

}

export default reducer;

