import React, { useEffect, useState } from 'react'
import "./Food.css"
import Navbar from '../../Navbar/Navbar';
import Recipebox from '../../Components/Recipe/Recipebox';
import Data from '../../Data/Recipes.json'
import Grid from '@mui/material/Grid';
import { Box } from '@mui/material';

function Food() {

  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const {search, setSearch} = useState("-");

  useEffect(() => {
    const fetchData = () => {
      setLoading(true);
      try {
          setData(Data);
      } catch (error) {
        console.error(error.message);
      }
      setLoading(false);
    };
    fetchData();
  }, []);
  const handleSubmit = (event) => {
    event.preventDefault();
  };


  return (
    <>
      <div className='food_main'>
        <Navbar/>
        <h1 id='top'>Recipes</h1>
        <Box sx={{ flexGrow: 1 }} className='recipe_cntr' >
          <Grid container justifyContent='center' spacing={{ xs: 2, md: 3 }} columns={{ xs: 12 }}>
            <Grid item xs={12} columns={{xs: 4, sm: 8, md: 12 }}>
              <form onSubmit={handleSubmit}>
                <div className="field1_recipe">
                  <label> Search: </label>
                  <input placeholder="Search here..."onChange={(event) => setSearch(event.target.value)}/>
                  <button type="submit" id="searchBtn" className="searchBtn">Search</button>
                </div>
              </form>
            </Grid>
            {data.map((item) => (
              <Grid key={item.id} item sm='auto' md='auto'>
                <Recipebox recipe={item}/>
              </Grid>
            ))}
          </Grid>
        </Box>
      </div>
    </>
  )
}

export default Food