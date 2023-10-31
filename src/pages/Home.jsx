import { Grid } from "@mui/material";
import { Box, Container } from "@mui/system";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import PokemonCard from "../components/PokemonCard";
import GifComponent from "../components/GifComponent";
import { useNavigate } from "react-router-dom";

export const Home = ({ setPokemonData }) => {
  const [pokemons, setPokemons] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    getPokemon();
  }, []);

  const [isLoading, setIsLoading] = useState(true);

  const getPokemon = () => {
    setIsLoading(true); // Defina isLoading como true para mostrar o indicador de carregamento
    var endpoints = [];
    for (var i = 1; i < 700; i++) {
      endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`);
    }
    axios.all(endpoints.map((endpoint) => axios.get(endpoint))).then((res) => {
      setPokemons(res);
      setIsLoading(false); // Defina isLoading como false para ocultar o indicador de carregamento
    });
  };

  const pokemonFilter = (name) => {
    var filteredPokemons = [];
    if (name === "") {
      getPokemon();
    }
    for (var i in pokemons) {
      if (pokemons[i].data.name.includes(name)) {
        filteredPokemons.push(pokemons[i]);
      }
    }
    setPokemons(filteredPokemons);
  };

  const pokemonPickHandler = (pokemonData) => {
    setPokemonData(pokemonData);
    navigate("/profile");
  };

  return (
    <div>
      <Navbar pokemonFilter={pokemonFilter} />
      <Container maxWidth="false">
        {isLoading ? (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              minHeight: "70vh", // Ajuste a altura conforme necessário
              maxWidth: "100%",
            }}
          >
            <GifComponent
              src="https://i.pinimg.com/originals/be/f9/74/bef9749a5d0fd6999aea4bb8f61e3594.gif"
              alt="oi"
            />{" "}
            {/* Indicador de carregamento */}
          </div>
        ) : (
          <Grid container spacing={3}>
            {pokemons.map((pokemon, key) => (
              <Grid item xs={2} key={key}>
                <Box onClick={() => pokemonPickHandler(pokemon.data)}>
                  <PokemonCard
                    name={pokemon.data.name}
                    image={pokemon.data.sprites.front_default}
                    types={pokemon.data.types}
                  />
                </Box>
              </Grid>
            ))}
          </Grid>
        )}
      </Container>
    </div>
  );
};
