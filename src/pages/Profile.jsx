import React from "react";
import { Box } from "@mui/system";
import Chip from "@mui/material/Chip";
import Navbar from "../components/Navbar";
import PokemonTable from "../components/PokemonTable";
import { Container, Divider, Paper, Typography } from "@mui/material";

export const Profile = ({ pokemonData }) => {
  if (!pokemonData) {
    return null; // or loading indicator, error message, etc.
  }
  const { name, sprites, moves } = pokemonData;

  return (
    <>
      <Navbar hideSearch />
      <Container maxWidth="md">
        <Paper elevation={3}>
          <Box
            display="flex"
            flexDirection="column"
            alingItmns="center"
            p={5}
            textAlign="center"
            sx={{ backgroundColor: "#DCDCDC" }}
            border="solid black"
            boxShadow="4.3px 3.5px 0px 0px black, 0px 0px 2px 2.5px white"
            marginBottom="5%"
          >
            <Typography
              variant="h4"
              style={{
                textTransform: "uppercase",
                fontFamily: "fantasy",
                textDecoration: "underline",
              }}
            >
              {name}
            </Typography>
            <Box
              display="flex"
              alingItens="center"
              width="100%"
              justifyContent="space-evenly"
              flexDirection="row"
            >
              <Box
                component="img"
                src={sprites.front_default}
                width="55%"
                height="100%"
              />
              <Box
                display="flex"
                width="47%"
                height="100%"
                alingItens="center"
                justifyContent="center"
                backgroundColor="#ffff6a"
                marginTop="12%"
              >
                <PokemonTable pokemonData={pokemonData} alingItens="center" />
              </Box>
              <PokemonTable />
            </Box>
            <Box width="100%">
              <Divider>Variações</Divider>
              <Box
                component="img"
                src={sprites.front_female}
                width="30%"
                height="30%"
              />
              <Box
                component="img"
                src={sprites.front_shiny}
                width="30%"
                height="30%"
              />
              <Box
                component="img"
                src={sprites.front_shiny_female}
                width="30%"
                height="30%"
              />
              <Divider>Ataques</Divider>
              <Box textAlign="center" marginTop="16px">
                {moves.map((moveData, key) => (
                  <Chip
                    key={key}
                    label={moveData.move.name}
                    sx={{
                      "&:hover": {
                        transition: "0.7s",
                        backgroundColor: "brown",
                        color: "white",
                        cursor: "pointer",
                      },
                    }}
                  />
                ))}
              </Box>
            </Box>
          </Box>
        </Paper>
      </Container>
    </>
  );
};
