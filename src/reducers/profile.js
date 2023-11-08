export default (profiles = [], action) => {
    switch (action.type) {
        case "FETCH_ALL":
        return action.payload;
        case "UPDATE":
        return profiles.map((profile) => 
        profile._id === action.payload._id ? action.payload : profile
        );
        case "CREATE":
            return [...profiles, action.payload];

        
    
        default:
            return profiles;
    }
}