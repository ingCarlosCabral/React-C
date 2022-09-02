import { useForm } from "../../hooks/useForm";
import { HeroCard } from "../components";
import { useNavigate,useLocation } from 'react-router-dom';
import queryString from 'query-string';
import { getHeroByName } from "../helpers";
import { heroes } from "../data/heroes";

export const SearchPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { q = '' } = queryString.parse(location.search);

  const hero = getHeroByName(q);

  const showSearch = (q.length === 0)
  const showError = (q.length > 0) && hero.length === 0

  const { SearchText, onInputChange } = useForm({
    SearchText: q
  });


  const onSearchSubmit = (event) =>{
    event.preventDefault();

    //if(SearchText.trim().length <= 1) return;

    navigate(`?q=${SearchText.toLowerCase()}`)
  }

  return (
    <>
      <h1>SearchPage</h1>
      <hr />
      <div className="row">
        <div className="col-5">
          <h4>Search</h4>
          <hr />
          <form onSubmit={ onSearchSubmit }>
            <input
              type="text"
              placeholder="Search hero"
              className="form-control"
              name="SearchText"
              autoComplete="off"
              value={SearchText}
              onChange={onInputChange}
            ></input>
            <button className="btn btn-outline-primary mt-2">Search</button>
          </form>
        </div>
        <div className="col-7">
          <h4>Result</h4>
          <hr />
       
          <div className="alert alert-primary animate__animated animate__fadeIn" style={{display: showSearch ? '': 'none'}}> Search hero</div>
          <div className="alert alert-danger animate__animated animate__fadeIn" style={{display: showError ? '': 'none'}}> There`s no result <b>{q}</b></div>
          {
            hero.map(hero => (
              <HeroCard key={hero.id}{...hero}/>
            ))
          }
         
        </div>
      </div>
    </>
  );
};
