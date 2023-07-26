export default function DisplayData({data}) {

    if(data){
        return(
            <div className="data">
               <h1>{data.Title}</h1> 
               <h2>{data.Year}</h2>
               <img src={data.Poster} />
    
            </div>
        )
    }else{
        return(
            <div>Search for a movie</div>
        )
    }
   
}